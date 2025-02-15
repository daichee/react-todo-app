import React from 'react';
import { TodoStatus } from '../../../../types/todo';
import { TODO_STATUSES } from '../../../../constants/todoConstants';

interface StatusFilterProps {
    value: TodoStatus | 'ALL';
    onChange: (status: TodoStatus | 'ALL') => void;
}

export const StatusFilter: React.FC<StatusFilterProps> = ({ value, onChange }) => {
    return (
        <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700 mb-1">
                ステータス
            </label>
            <select
                value={value}
                onChange={(e) => onChange(e.target.value as TodoStatus | 'ALL')}
                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
            >
                <option value="ALL">すべて</option>
                {Object.entries(TODO_STATUSES).map(([value, label]) => (
                    <option key={value} value={value}>
                        {label}
                    </option>
                ))}
            </select>
        </div>
    );
};
