import React from 'react';
import { DueDateFilter as DueDateFilterType } from '../../../../types/todo';
import { DUE_DATE_FILTERS } from '../../../../constants/todoConstants';

interface DueDateFilterProps {
    value: DueDateFilterType;
    onChange: (filter: DueDateFilterType) => void;
}

export const DueDateFilter: React.FC<DueDateFilterProps> = ({ value, onChange }) => {
    return (
        <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700 mb-1">
                期限
            </label>
            <select
                value={value}
                onChange={(e) => onChange(e.target.value as DueDateFilterType)}
                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
            >
                {Object.entries(DUE_DATE_FILTERS).map(([value, label]) => (
                    <option key={value} value={value}>
                        {label}
                    </option>
                ))}
            </select>
        </div>
    );
};
