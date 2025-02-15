import React from 'react';
import { FilterConfig, DueDateFilter as DueDateFilterType } from '../../types/todo';

interface DueDateFilterProps {
    filterConfig: FilterConfig;
    onFilterChange: (newConfig: FilterConfig) => void;
}

export const DueDateFilter: React.FC<DueDateFilterProps> = ({
    filterConfig,
    onFilterChange
}) => {
    const handleDueDateChange = (dueDate: DueDateFilterType) => {
        onFilterChange({
            ...filterConfig,
            dueDate
        });
    };

    return (
        <div>
            <h3 className="text-sm font-medium text-gray-700 mb-3">期限</h3>
            <div className="flex flex-wrap gap-2">
                <button
                    onClick={() => handleDueDateChange('ALL')}
                    className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors duration-200 
                        ${filterConfig.dueDate === 'ALL' 
                            ? 'bg-blue-500 text-white' 
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                >
                    全て
                </button>
                <button
                    onClick={() => handleDueDateChange('OVERDUE')}
                    className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors duration-200 
                        ${filterConfig.dueDate === 'OVERDUE'
                            ? 'bg-red-500 text-white'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                >
                    期限切れ
                </button>
                <button
                    onClick={() => handleDueDateChange('TODAY')}
                    className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors duration-200 
                        ${filterConfig.dueDate === 'TODAY'
                            ? 'bg-yellow-500 text-white'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                >
                    今日まで
                </button>
                <button
                    onClick={() => handleDueDateChange('THIS_WEEK')}
                    className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors duration-200 
                        ${filterConfig.dueDate === 'THIS_WEEK'
                            ? 'bg-green-500 text-white'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                >
                    今週まで
                </button>
            </div>
        </div>
    );
};
