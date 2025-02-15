import React from 'react';
import { SortConfig, SortField, SortOrder } from '../../types/sort';
import { ArrowUpIcon, ArrowDownIcon } from '@heroicons/react/24/outline';

interface TodoSortProps {
    sortConfig: SortConfig;
    onSortChange: (newConfig: SortConfig) => void;
}

export const TodoSort: React.FC<TodoSortProps> = ({ sortConfig, onSortChange }) => {
    const handleFieldChange = (field: SortField) => {
        onSortChange({
            field,
            order: sortConfig.order
        });
    };

    const handleOrderChange = (order: SortOrder) => {
        onSortChange({
            field: sortConfig.field,
            order
        });
    };

    return (
        <div className="flex items-center space-x-4 mb-4">
            <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-600">ソート:</span>
                <select
                    value={sortConfig.field}
                    onChange={(e) => handleFieldChange(e.target.value as SortField)}
                    className="text-sm border rounded px-2 py-1 bg-white"
                >
                    <option value="dueDate">期限日</option>
                    <option value="createdAt">作成日</option>
                </select>
            </div>
            <div className="flex items-center space-x-1">
                <button
                    onClick={() => handleOrderChange('asc')}
                    className={`p-1 rounded ${
                        sortConfig.order === 'asc' 
                            ? 'bg-blue-100 text-blue-600' 
                            : 'hover:bg-gray-100'
                    }`}
                    title="昇順"
                >
                    <ArrowUpIcon className="h-5 w-5" />
                </button>
                <button
                    onClick={() => handleOrderChange('desc')}
                    className={`p-1 rounded ${
                        sortConfig.order === 'desc' 
                            ? 'bg-blue-100 text-blue-600' 
                            : 'hover:bg-gray-100'
                    }`}
                    title="降順"
                >
                    <ArrowDownIcon className="h-5 w-5" />
                </button>
            </div>
        </div>
    );
};
