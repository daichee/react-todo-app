import React from 'react';
import { TodoStatus, FilterConfig } from '../../types/todo';

interface TodoFilterProps {
    filterConfig: FilterConfig;
    onFilterChange: (newConfig: FilterConfig) => void;
}

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
            <h3 className="text-sm font-medium text-gray-700 mb-3">ステータス</h3>
            <div className="flex flex-wrap gap-2">
                <button
                    onClick={() => handleStatusChange('ALL')}
                    className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors duration-200 
                        ${filterConfig.status === 'ALL' 
                            ? 'bg-blue-500 text-white' 
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                >
                    全て
                </button>
                <button
                    onClick={() => handleStatusChange('NOT_STARTED')}
                    className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors duration-200 
                        ${filterConfig.status === 'NOT_STARTED'
                            ? 'bg-gray-500 text-white'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                >
                    未着手
                </button>
                <button
                    onClick={() => handleStatusChange('IN_PROGRESS')}
                    className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors duration-200 
                        ${filterConfig.status === 'IN_PROGRESS'
                            ? 'bg-yellow-500 text-white'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                >
                    進行中
                </button>
                <button
                    onClick={() => handleStatusChange('COMPLETED')}
                    className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors duration-200 
                        ${filterConfig.status === 'COMPLETED'
                            ? 'bg-green-500 text-white'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                >
                    完了
                </button>
            </div>
        </div>
    );
};

export default TodoFilter;
