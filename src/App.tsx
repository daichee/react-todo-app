import React, { useState } from 'react';
import { Todo, TodoStatus, FilterConfig, DueDateFilter } from './types/todo';
import { TodoItem } from './components/TodoItem/TodoItem';
import { TodoForm } from './components/TodoForm/TodoForm';
import { Modal } from './components/Modal/Modal';
import { FilterSection } from './components/FilterSection/FilterSection';
import { SortConfig } from './types/sort';
import { useLocalStorage } from './hooks/useLocalStorage';
import { initialTodos } from './data/initialTodos';
import { v4 as uuidv4 } from 'uuid';

type FilterStatus = TodoStatus | 'ALL';

const App: React.FC = () => {
    const [todos, setTodos] = useLocalStorage<Todo[]>('todos', initialTodos);
    const [filterConfig, setFilterConfig] = useState<FilterConfig>({
        status: 'ALL',
        dueDate: 'ALL'
    });
    const [sortConfig, setSortConfig] = useState<SortConfig>({
        field: 'dueDate',
        order: 'asc'
    });
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [editingTodo, setEditingTodo] = useState<Todo | null>(null);

    // フィルタリングとソートを行う関数
    const getFilteredAndSortedTodos = () => {
        let filtered = todos.filter(todo => {
            // ステータスフィルター
            if (filterConfig.status !== 'ALL' && todo.status !== filterConfig.status) {
                return false;
            }

            // 期限フィルター
            const today = new Date();
            today.setHours(0, 0, 0, 0);
            const dueDate = new Date(todo.dueDate);
            dueDate.setHours(0, 0, 0, 0);

            switch (filterConfig.dueDate) {
                case 'OVERDUE':
                    if (dueDate >= today) return false;
                    break;
                case 'TODAY':
                    if (dueDate.getTime() !== today.getTime()) return false;
                    break;
                case 'THIS_WEEK':
                    const weekEnd = new Date(today);
                    weekEnd.setDate(today.getDate() + (6 - today.getDay()));
                    if (dueDate > weekEnd || dueDate < today) return false;
                    break;
            }

            return true;
        });

        // ソート
        filtered.sort((a, b) => {
            const aValue = sortConfig.field === 'dueDate' ? a.dueDate : a.createdAt;
            const bValue = sortConfig.field === 'dueDate' ? b.dueDate : b.createdAt;
            
            if (sortConfig.order === 'asc') {
                return new Date(aValue).getTime() - new Date(bValue).getTime();
            } else {
                return new Date(bValue).getTime() - new Date(aValue).getTime();
            }
        });

        return filtered;
    };

    const handleAdd = (todo: Todo) => {
        setTodos([...todos, todo]);
        setIsFormOpen(false);
    };

    const handleEdit = (updatedTodo: Todo) => {
        setTodos(todos.map(todo => todo.id === updatedTodo.id ? updatedTodo : todo));
        setEditingTodo(null);
        setIsFormOpen(false);
    };

    const handleStatusChange = (todoId: string, newStatus: TodoStatus) => {
        setTodos(todos.map(todo =>
            todo.id === todoId ? { ...todo, status: newStatus } : todo
        ));
    };

    const handleStartEdit = (todo: Todo) => {
        setEditingTodo(todo);
        setIsFormOpen(true);
    };

    const handleDelete = (todoId: string) => {
        setTodos(todos.filter(todo => todo.id !== todoId));
    };

    const handleCancelEdit = () => {
        setEditingTodo(null);
        setIsFormOpen(false);
    };

    return (
        <div className="min-h-screen bg-gray-100">
            {/* ヘッダー */}
            <header className="bg-white shadow-sm">
                <div className="container mx-auto px-6 py-4">
                    {/* タイトル行 */}
                    <h1 className="text-2xl font-bold text-gray-900 mb-3">Todoリスト</h1>
                    
                    {/* 説明文と新規登録ボタンの行 */}
                    <div className="grid grid-cols-3 gap-4">
                        <p className="text-sm text-gray-600 col-span-2">
                            シンプルで使いやすいタスク管理ツール。タスクの追加、編集、ステータス管理を直感的に行えます。
                        </p>
                        <div className="flex justify-end">
                            <button
                                onClick={() => setIsFormOpen(true)}
                                className="bg-blue-500 text-white px-3 py-1.5 text-sm rounded-md hover:bg-blue-600 transition-colors duration-200"
                            >
                                新規登録
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            {/* メインコンテンツ */}
            <main className="container mx-auto px-4 py-8">
                {/* フィルターセクション */}
                <FilterSection
                    filterConfig={filterConfig}
                    sortConfig={sortConfig}
                    onFilterChange={setFilterConfig}
                    onSortChange={setSortConfig}
                />

                {/* Todoリスト */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {/* 未着手 */}
                    <div>
                        <h2 className="text-lg font-semibold mb-4">未着手</h2>
                        <div className="space-y-4">
                            {getFilteredAndSortedTodos()
                                .filter(todo => todo.status === 'NOT_STARTED')
                                .map(todo => (
                                    <TodoItem
                                        key={todo.id}
                                        todo={todo}
                                        onStatusChange={handleStatusChange}
                                        onEdit={handleStartEdit}
                                        onDelete={handleDelete}
                                    />
                                ))}
                        </div>
                    </div>

                    {/* 進行中 */}
                    <div>
                        <h2 className="text-lg font-semibold mb-4">進行中</h2>
                        <div className="space-y-4">
                            {getFilteredAndSortedTodos()
                                .filter(todo => todo.status === 'IN_PROGRESS')
                                .map(todo => (
                                    <TodoItem
                                        key={todo.id}
                                        todo={todo}
                                        onStatusChange={handleStatusChange}
                                        onEdit={handleStartEdit}
                                        onDelete={handleDelete}
                                    />
                                ))}
                        </div>
                    </div>

                    {/* 完了 */}
                    <div>
                        <h2 className="text-lg font-semibold mb-4">完了</h2>
                        <div className="space-y-4">
                            {getFilteredAndSortedTodos()
                                .filter(todo => todo.status === 'COMPLETED')
                                .map(todo => (
                                    <TodoItem
                                        key={todo.id}
                                        todo={todo}
                                        onStatusChange={handleStatusChange}
                                        onEdit={handleStartEdit}
                                        onDelete={handleDelete}
                                    />
                                ))}
                        </div>
                    </div>
                </div>

                {/* モーダルフォーム */}
                <Modal
                    isOpen={isFormOpen}
                    onClose={handleCancelEdit}
                    title={editingTodo ? "Todoを編集" : "新規Todo"}
                >
                    <TodoForm
                        onSubmit={editingTodo ? handleEdit : handleAdd}
                        initialTodo={editingTodo}
                        onCancel={handleCancelEdit}
                    />
                </Modal>
            </main>
        </div>
    );
};

export default App;