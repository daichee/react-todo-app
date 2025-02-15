import React from 'react';
import { FilterConfig } from '../../types/todo';
import { TodoFilter } from '../TodoFilter/TodoFilter';
import { DueDateFilter } from '../DueDateFilter/DueDateFilter';
import { SortConfig } from '../../types/sort';

interface FilterSectionProps {
    filterConfig: FilterConfig;
    sortConfig: SortConfig;
    onFilterChange: (newConfig: FilterConfig) => void;
    onSortChange: (newConfig: SortConfig) => void;
}

export const FilterSection: React.FC<FilterSectionProps> = ({
    filterConfig,
    sortConfig,
    onFilterChange,
    onSortChange
}) => {
    return (
        <div className="bg-white rounded-lg shadow p-6 mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-6">フィルター＆ソート</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* ステータスフィルター */}
                <div className="space-y-4">
                    <TodoFilter
                        filterConfig={filterConfig}
                        onFilterChange={onFilterChange}
                    />
                </div>

                {/* 期限フィルターとソート */}
                <div className="space-y-4">
                    <DueDateFilter
                        filterConfig={filterConfig}
                        onFilterChange={onFilterChange}
                    />
                    
                    <div>
                        <h3 className="text-sm font-medium text-gray-700 mb-3">ソート</h3>
                        <div className="flex items-center gap-2">
                            <select
                                value={sortConfig.field}
                                onChange={(e) => onSortChange({ 
                                    ...sortConfig, 
                                    field: e.target.value as 'dueDate' | 'createdAt' 
                                })}
                                className="px-3 py-1.5 rounded-md text-sm bg-gray-100 border-none focus:ring-2 focus:ring-blue-500"
                            >
                                <option value="dueDate">期限日</option>
                                <option value="createdAt">作成日</option>
                            </select>
                            <button
                                onClick={() => onSortChange({ 
                                    ...sortConfig, 
                                    order: sortConfig.order === 'asc' ? 'desc' : 'asc' 
                                })}
                                className="p-1.5 rounded-md bg-gray-100 hover:bg-gray-200 transition-colors duration-200"
                            >
                                {sortConfig.order === 'asc' ? '↑' : '↓'}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
