import React from 'react';
import { Todo, TodoStatus } from '../../types/todo';
import { TodoCard } from '../features/todo/TodoCard/TodoCard';

interface TodoListProps {
    todos: Todo[];
    onStatusChange: (id: string, status: TodoStatus) => void;
    onEdit: (todo: Todo) => void;
    onDelete: (id: string) => void;
}

export const TodoList: React.FC<TodoListProps> = ({
    todos,
    onStatusChange,
    onEdit,
    onDelete
}) => {
    return (
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {todos.map((todo) => (
                <TodoCard
                    key={todo.id}
                    todo={todo}
                    onStatusChange={onStatusChange}
                    onEdit={onEdit}
                    onDelete={onDelete}
                />
            ))}
        </div>
    );
};
