import React from 'react';
import { Todo, TodoStatus } from '../../../../../types/todo';
import { TODO_STATUSES } from '../../../../../constants/todoConstants';

interface TodoHeaderProps {
    todo: Todo;
    onStatusChange: (id: string, status: TodoStatus) => void;
}

export const TodoHeader: React.FC<TodoHeaderProps> = ({ todo, onStatusChange }) => {
    return (
        <div className="flex flex-col gap-2">
            <h3 className="text-xl font-bold text-white line-clamp-1">
                {todo.title}
            </h3>
            <select
                value={todo.status}
                onChange={(e) => onStatusChange(todo.id, e.target.value as TodoStatus)}
                className="text-sm px-3 py-1.5 rounded bg-white/10 text-white border border-white/20 focus:ring-2 focus:ring-white/30 focus:border-white/30 w-full"
            >
                {Object.entries(TODO_STATUSES).map(([value, label]) => (
                    <option key={value} value={value} className="text-gray-900">
                        {label}
                    </option>
                ))}
            </select>
        </div>
    );
};
