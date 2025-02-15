import React from 'react';
import { FilterConfig } from '../../../../types/todo';
import { SortConfig } from '../../../../types/sort';
import { StatusFilter } from '../StatusFilter/StatusFilter';
import { DueDateFilter } from '../DueDateFilter/DueDateFilter';
import { TodoSort } from '../../sort/TodoSort/TodoSort';

interface FilterSectionProps {
    filterConfig: FilterConfig;
    sortConfig: SortConfig;
    onFilterChange: (config: FilterConfig) => void;
    onSortChange: (config: SortConfig) => void;
}

export const FilterSection: React.FC<FilterSectionProps> = ({
    filterConfig,
    sortConfig,
    onFilterChange,
    onSortChange
}) => {
    return (
        <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <StatusFilter
                    value={filterConfig.status}
                    onChange={(status) => onFilterChange({ ...filterConfig, status })}
                />
                <DueDateFilter
                    value={filterConfig.dueDate}
                    onChange={(dueDate) => onFilterChange({ ...filterConfig, dueDate })}
                />
                <TodoSort
                    config={sortConfig}
                    onChange={onSortChange}
                />
            </div>
        </div>
    );
};
