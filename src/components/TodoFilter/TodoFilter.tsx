import React from 'react';
import { TodoStatus, FilterConfig } from '../../types/todo';

interface TodoFilterProps {
    filterConfig: FilterConfig;
    onFilterChange: (newConfig: FilterConfig) => void;
}

const getButtonStyle = (isSelected: boolean, status: TodoStatus | 'ALL'): string => {
    if (!isSelected) {
        return 'bg-gray-100 text-gray-600 hover:bg-gray-200';
    }

    switch (status) {
        case 'ALL':
            return 'bg-blue-500 text-white';
        case 'NOT_STARTED':
            return 'bg-gray-600 text-white';
        case 'IN_PROGRESS':
            return 'bg-blue-600 text-white';
        case 'COMPLETED':
            return 'bg-green-600 text-white';
    }
};

export const TodoFilter: React.FC<TodoFilterProps> = ({
    filterConfig,
    onFilterChange
}) => {
    const handleStatusChange = (status: TodoStatus | 'ALL') => {
        onFilterChange({
            ...filterConfig,
            status
        });
    };

    return (
        <div>
            <h3 className="text-sm font-medium text-gray-700 mb-2">ステータス</h3>
            <div className="flex flex-wrap gap-2">
                <button
                    onClick={() => handleStatusChange('ALL')}
                    className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${getButtonStyle(filterConfig.status === 'ALL', 'ALL')}`}
                >
                    全て
                </button>
                <button
                    onClick={() => handleStatusChange('NOT_STARTED')}
                    className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${getButtonStyle(filterConfig.status === 'NOT_STARTED', 'NOT_STARTED')}`}
                >
                    未着手
                </button>
                <button
                    onClick={() => handleStatusChange('IN_PROGRESS')}
                    className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${getButtonStyle(filterConfig.status === 'IN_PROGRESS', 'IN_PROGRESS')}`}
                >
                    進行中
                </button>
                <button
                    onClick={() => handleStatusChange('COMPLETED')}
                    className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${getButtonStyle(filterConfig.status === 'COMPLETED', 'COMPLETED')}`}
                >
                    完了
                </button>
            </div>
        </div>
    );
};

export default TodoFilter;
