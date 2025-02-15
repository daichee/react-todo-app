import { useState } from "react";
import "./App.css";
import { Todo, TodoStatus } from "./types/todo";
import { TodoList } from "./components/features/todo/TodoList/TodoList";
import { TodoForm } from "./components/features/todo/TodoForm/TodoForm";
import { Modal } from "./components/common/Modal/Modal";
import { FilterSection } from "./components/features/filter/FilterSection/FilterSection";
import { Header } from "./components/layout/Header/Header";
import { useTodos } from "./hooks/useTodos";
import { v4 as uuidv4 } from "uuid";

const App: React.FC = () => {
    const {
        todos,
        filterConfig,
        sortConfig,
        setFilterConfig,
        setSortConfig,
        addTodo,
        updateTodo,
        deleteTodo,
        updateTodoStatus
    } = useTodos();

    const [isFormOpen, setIsFormOpen] = useState(false);
    const [editingTodo, setEditingTodo] = useState<Todo | null>(null);

    const handleAdd = (todo: Todo) => {
        addTodo({ ...todo, id: uuidv4() });
        setIsFormOpen(false);
    };

    const handleEdit = (updatedTodo: Todo) => {
        updateTodo(updatedTodo);
        setEditingTodo(null);
        setIsFormOpen(false);
    };

    const handleStartEdit = (todo: Todo) => {
        setEditingTodo(todo);
        setIsFormOpen(true);
    };

    const handleCancelEdit = () => {
        setEditingTodo(null);
        setIsFormOpen(false);
    };

    return (
        <div className="min-h-screen bg-gray-100">
            <Header onNewTodo={() => setIsFormOpen(true)} />

            <main className="container mx-auto px-4 py-8">
                <FilterSection
                    filterConfig={filterConfig}
                    sortConfig={sortConfig}
                    onFilterChange={setFilterConfig}
                    onSortChange={setSortConfig}
                />

                <TodoList
                    todos={todos}
                    onStatusChange={updateTodoStatus}
                    onEdit={handleStartEdit}
                    onDelete={deleteTodo}
                />

                <Modal
                    isOpen={isFormOpen}
                    onClose={handleCancelEdit}
                    title={editingTodo ? "Todoを編集" : "新規Todo"}
                >
                    <TodoForm
                        onSubmit={editingTodo ? handleEdit : handleAdd}
                        onCancel={handleCancelEdit}
                        initialData={editingTodo}
                    />
                </Modal>
            </main>
        </div>
    );
};

export default App;