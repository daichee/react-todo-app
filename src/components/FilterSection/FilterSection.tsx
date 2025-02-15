import React from 'react';
import { TodoStatus } from '../../types/todo';
import { DueDateFilter } from '../features/filter/DueDateFilter/DueDateFilter';
import { StatusFilter } from '../features/filter/StatusFilter/StatusFilter';
import { TodoSort } from '../features/sort/TodoSort/TodoSort';

interface FilterSectionProps {
    statusFilter: TodoStatus | 'ALL';
    dueDateFilter: string;
    sortConfig: {
        field: 'createdAt' | 'dueDate' | 'title';
        order: 'asc' | 'desc';
    };
    onStatusFilterChange: (status: TodoStatus | 'ALL') => void;
    onDueDateFilterChange: (filter: string) => void;
    onSortChange: (field: 'createdAt' | 'dueDate' | 'title', order: 'asc' | 'desc') => void;
}

export const FilterSection: React.FC<FilterSectionProps> = ({
    statusFilter,
    dueDateFilter,
    sortConfig,
    onStatusFilterChange,
    onDueDateFilterChange,
    onSortChange
}) => {
    return (
        <div className="flex flex-col gap-4 mb-6 p-4 bg-white rounded-lg shadow-sm">
            <div className="flex flex-wrap gap-4">
                <StatusFilter
                    value={statusFilter}
                    onChange={onStatusFilterChange}
                />
                <DueDateFilter
                    value={dueDateFilter}
                    onChange={onDueDateFilterChange}
                />
                <TodoSort
                    field={sortConfig.field}
                    order={sortConfig.order}
                    onChange={onSortChange}
                />
            </div>
        </div>
    );
};
