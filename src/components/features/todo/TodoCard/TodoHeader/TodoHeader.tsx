import React from 'react';
import { Todo, TodoStatus } from '../../../../../types/todo';
import { TODO_STATUSES } from '../../../../../constants/todoConstants';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

interface TodoHeaderProps {
    todo: Todo;
    onStatusChange: (id: string, status: TodoStatus) => void;
}

export const TodoHeader: React.FC<TodoHeaderProps> = ({
    todo,
    onStatusChange
}) => {
    const getOptionColor = (status: TodoStatus) => {
        switch (status) {
            case 'NOT_STARTED':
                return 'text-gray-600';
            case 'IN_PROGRESS':
                return 'text-blue-600';
            case 'COMPLETED':
                return 'text-green-600';
            default:
                return 'text-gray-600';
        }
    };

    return (
        <div className="p-4 flex justify-between items-center gap-4">
            <h3 className="text-lg font-semibold text-white text-left line-clamp-1">
                {todo.title}
            </h3>
            <div className="relative">
                <select
                    value={todo.status}
                    onChange={(e) => onStatusChange(todo.id, e.target.value as TodoStatus)}
                    className={`pl-3 pr-7 py-1.5 text-sm rounded-full border border-gray-200 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-1 transition-colors text-center font-bold appearance-none
                        ${todo.status === 'NOT_STARTED' ? 'text-gray-700 focus:ring-gray-400' : ''}
                        ${todo.status === 'IN_PROGRESS' ? 'text-blue-700 focus:ring-blue-400' : ''}
                        ${todo.status === 'COMPLETED' ? 'text-green-700 focus:ring-green-400' : ''}
                    `}
                >
                    {Object.entries(TODO_STATUSES).map(([value, label]) => (
                        <option 
                            key={value} 
                            value={value} 
                            className={`text-center font-bold ${getOptionColor(value as TodoStatus)}`}
                        >
                            {label}
                        </option>
                    ))}
                </select>
                <ChevronDownIcon className="w-4 h-4 absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
        </div>
    );
};
