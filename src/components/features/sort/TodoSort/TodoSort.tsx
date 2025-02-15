import React from 'react';
import { SortConfig } from '../../../../types/sort';
import { SORT_FIELDS, SORT_ORDERS } from '../../../../constants/todoConstants';

interface TodoSortProps {
    config: SortConfig;
    onChange: (config: SortConfig) => void;
}

export const TodoSort: React.FC<TodoSortProps> = ({ config, onChange }) => {
    return (
        <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700 mb-1">
                ソート
            </label>
            <div className="flex gap-2">
                <select
                    value={config.field}
                    onChange={(e) => onChange({ ...config, field: e.target.value as 'dueDate' | 'createdAt' })}
                    className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                >
                    {Object.entries(SORT_FIELDS).map(([value, label]) => (
                        <option key={value} value={value}>
                            {label}
                        </option>
                    ))}
                </select>
                <select
                    value={config.order}
                    onChange={(e) => onChange({ ...config, order: e.target.value as 'asc' | 'desc' })}
                    className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                >
                    {Object.entries(SORT_ORDERS).map(([value, label]) => (
                        <option key={value} value={value}>
                            {label}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
};
