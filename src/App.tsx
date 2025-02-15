import { Todo, TodoStatus } from './types/todo';
import { TodoItem } from './components/TodoItem/TodoItem';
import { TodoForm } from './components/TodoForm/TodoForm';
import { TodoFilter } from './components/TodoFilter/TodoFilter';
import { TodoSort } from './components/TodoSort/TodoSort';
import { SortConfig } from './types/sort';
import { initialTodos } from './data/initialTodos';
import { useLocalStorage } from './hooks/useLocalStorage';
import { v4 as uuidv4 } from 'uuid';

type FilterStatus = TodoStatus | 'ALL';

function App() {
    // ローカルストレージを使用してTodoリストを管理
    const [todos, setTodos] = useLocalStorage<Todo[]>('todos', initialTodos);
    const [editingTodo, setEditingTodo] = useLocalStorage<Todo | null>('editingTodo', null);
    const [filterStatus, setFilterStatus] = useLocalStorage<FilterStatus>('filterStatus', 'ALL');
    const [sortConfig, setSortConfig] = useLocalStorage<SortConfig>('sortConfig', {
        field: 'dueDate',
        order: 'asc'
    });

    // フィルタリングとソートを適用したTodoリストを取得
    const getFilteredAndSortedTodos = () => {
        // まずフィルタリング
        const filtered = todos.filter(todo => 
            filterStatus === 'ALL' ? true : todo.status === filterStatus
        );

        // 次にソート
        return filtered.sort((a, b) => {
            const aValue = a[sortConfig.field];
            const bValue = b[sortConfig.field];
            
            if (aValue < bValue) return sortConfig.order === 'asc' ? -1 : 1;
            if (aValue > bValue) return sortConfig.order === 'asc' ? 1 : -1;
            return 0;
        });
    };

    // ステータス変更のハンドラー
    const handleStatusChange = (id: string, status: TodoStatus) => {
        setTodos(prev => prev.map(todo => 
            todo.id === id ? { ...todo, status } : todo
        ));
    };

    // 編集モード開始
    const handleStartEdit = (todo: Todo) => {
        setEditingTodo(todo);
    };

    // 編集キャンセル
    const handleCancelEdit = () => {
        setEditingTodo(null);
    };

    // 編集完了
    const handleEdit = (editedTodo: Todo) => {
        setTodos(prev => prev.map(todo =>
            todo.id === editedTodo.id ? editedTodo : todo
        ));
        setEditingTodo(null);
    };

    // 削除のハンドラー
    const handleDelete = (id: string) => {
        setTodos(prev => prev.filter(todo => todo.id !== id));
    };

    // 新規追加のハンドラー
    const handleAdd = (newTodo: Todo) => {
        setTodos(prev => [...prev, newTodo]);
    };

    const filteredAndSortedTodos = getFilteredAndSortedTodos();

    return (
        <div className="min-h-screen bg-gray-100 py-8">
            <div className="container mx-auto px-4 max-w-3xl">
                <h1 className="text-3xl font-bold text-gray-900 mb-8">Todoリスト</h1>
                
                {/* フィルターとソート */}
                <div className="mb-6 space-y-4">
                    <TodoFilter
                        currentFilter={filterStatus}
                        onFilterChange={setFilterStatus}
                    />
                    <TodoSort
                        sortConfig={sortConfig}
                        onSortChange={setSortConfig}
                    />
                </div>

                {/* 編集フォームまたは新規作成フォーム */}
                <TodoForm
                    onSubmit={editingTodo ? handleEdit : handleAdd}
                    initialTodo={editingTodo}
                    onCancel={editingTodo ? handleCancelEdit : undefined}
                />

                {/* Todoリスト */}
                <div className="grid gap-4">
                    {filteredAndSortedTodos.map(todo => (
                        <TodoItem
                            key={todo.id}
                            todo={todo}
                            onStatusChange={handleStatusChange}
                            onEdit={handleStartEdit}
                            onDelete={handleDelete}
                        />
                    ))}
                    {filteredAndSortedTodos.length === 0 && (
                        <p className="text-gray-500 text-center py-4">
                            表示するTodoがありません
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default App;