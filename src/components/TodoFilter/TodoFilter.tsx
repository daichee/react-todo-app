import React from 'react';
import { TodoStatus } from '../../types/todo';

type FilterStatus = TodoStatus | 'ALL';

interface TodoFilterProps {
    currentFilter: FilterStatus;
    onFilterChange: (status: FilterStatus) => void;
}

export const TodoFilter: React.FC<TodoFilterProps> = ({ currentFilter, onFilterChange }) => {
    const getFilterLabel = (status: FilterStatus): string => {
        switch (status) {
            case 'ALL': return '全て';
            case 'NOT_STARTED': return '未着手';
            case 'IN_PROGRESS': return '進行中';
            case 'COMPLETED': return '完了';
        }
    };

    return (
        <div className="flex space-x-2 mb-4">
            {(['ALL', 'NOT_STARTED', 'IN_PROGRESS', 'COMPLETED'] as const).map(status => (
                <button
                    key={status}
                    onClick={() => onFilterChange(status)}
                    className={`px-4 py-2 rounded-md transition-colors duration-200 ${
                        currentFilter === status
                            ? 'bg-blue-500 text-white'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                >
                    {getFilterLabel(status)}
                </button>
            ))}
        </div>
    );
};

export default TodoFilter;
