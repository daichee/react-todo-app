import React from 'react';
import { TodoStatus } from '../../../../types/todo';
import { TODO_STATUSES } from '../../../../constants/todoConstants';
import { FilterConfig } from '../../../../types/todo';
import { SortConfig } from '../../../../types/sort';
import { STATUS_COLORS, DUE_DATE_COLORS } from '../../../../constants/colorConstants';
import { CalendarIcon, ClockIcon, ChevronUpIcon, ChevronDownIcon } from '@heroicons/react/24/outline';

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
    onSortChange,
}) => {
    return (
        <div className="bg-white shadow-sm rounded-lg p-4 mb-6">
            <div className="grid grid-cols-4 gap-6">
                <div className="space-y-2">
                    <label className="block text-sm font-bold text-gray-700">
                        ステータス
                    </label>
                    <select
                        value={filterConfig.status}
                        onChange={(e) => onFilterChange({ ...filterConfig, status: e.target.value as TodoStatus | 'ALL' })}
                        className="w-full px-3 py-2 text-sm bg-gray-50 rounded-md text-center font-normal focus:outline-none hover:bg-gray-100 transition-colors appearance-none"
                    >
                        <option value="ALL" className={`text-center font-normal ${STATUS_COLORS.ALL}`}>すべて</option>
                        {Object.entries(TODO_STATUSES).map(([value, label]) => (
                            <option 
                                key={value} 
                                value={value} 
                                className={`text-center font-normal ${STATUS_COLORS[value as TodoStatus]}`}
                            >
                                {label}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="space-y-2">
                    <label className="block text-sm font-bold text-gray-700">
                        期限
                    </label>
                    <select
                        value={filterConfig.dueDate}
                        onChange={(e) => onFilterChange({ ...filterConfig, dueDate: e.target.value })}
                        className="w-full px-3 py-2 text-sm bg-gray-50 rounded-md text-center font-normal focus:outline-none hover:bg-gray-100 transition-colors appearance-none"
                    >
                        <option value="ALL" className="text-center font-normal text-gray-600">すべて</option>
                        <option value="TODAY" className={`text-center font-normal ${DUE_DATE_COLORS.TODAY}`}>今日</option>
                        <option value="THIS_WEEK" className={`text-center font-normal ${DUE_DATE_COLORS.FUTURE}`}>今週</option>
                        <option value="OVERDUE" className={`text-center font-normal ${DUE_DATE_COLORS.OVERDUE}`}>期限切れ</option>
                    </select>
                </div>

                <div className="space-y-2">
                    <label className="block text-sm font-bold text-gray-700">
                        ソート
                    </label>
                    <div className="relative">
                        <select
                            value={sortConfig.field}
                            onChange={(e) => onSortChange({ ...sortConfig, field: e.target.value as 'dueDate' | 'createdAt' })}
                            className="w-full pl-8 pr-3 py-2 text-sm bg-gray-50 rounded-md text-center font-normal focus:outline-none hover:bg-gray-100 transition-colors appearance-none"
                        >
                            <option value="dueDate" className="text-center font-normal">期限日</option>
                            <option value="createdAt" className="text-center font-normal">作成日</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 left-3 flex items-center">
                            {sortConfig.field === 'dueDate' ? (
                                <CalendarIcon className="h-4 w-4 text-gray-500" />
                            ) : (
                                <ClockIcon className="h-4 w-4 text-gray-500" />
                            )}
                        </div>
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="block text-sm font-bold text-gray-700">
                        順序
                    </label>
                    <div className="relative">
                        <select
                            value={sortConfig.order}
                            onChange={(e) => onSortChange({ ...sortConfig, order: e.target.value as 'asc' | 'desc' })}
                            className="w-full pl-8 pr-3 py-2 text-sm bg-gray-50 rounded-md text-center font-normal focus:outline-none hover:bg-gray-100 transition-colors appearance-none"
                        >
                            <option value="asc" className="text-center font-normal">昇順</option>
                            <option value="desc" className="text-center font-normal">降順</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 left-3 flex items-center">
                            {sortConfig.order === 'asc' ? (
                                <ChevronUpIcon className="h-4 w-4 text-gray-500" />
                            ) : (
                                <ChevronDownIcon className="h-4 w-4 text-gray-500" />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
