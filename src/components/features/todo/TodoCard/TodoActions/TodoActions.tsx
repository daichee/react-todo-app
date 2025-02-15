import React from 'react';
import { Todo } from '../../../../../types/todo';

interface TodoActionsProps {
    todo: Todo;
    onEdit: (todo: Todo) => void;
    onDelete: (id: string) => void;
}

export const TodoActions: React.FC<TodoActionsProps> = ({ todo, onEdit, onDelete }) => {
    return (
        <div className="px-4 py-3">
            <div className="flex justify-end gap-4">
                <button
                    onClick={() => onEdit(todo)}
                    className="text-blue-600 hover:text-blue-800 text-sm font-medium px-3 py-1.5 rounded bg-gray-50 transition-all duration-200"
                >
                    編集
                </button>
                <button
                    onClick={() => onDelete(todo.id)}
                    className="text-red-600 hover:text-red-800 text-sm font-medium px-3 py-1.5 rounded bg-gray-50 transition-all duration-200"
                >
                    削除
                </button>
            </div>
        </div>
    );
};
