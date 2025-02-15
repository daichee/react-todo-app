import React from 'react';
import { TodoStatus } from '../../types/todo';
import { TODO_STATUSES } from '../../constants/todoConstants';

interface FilterSectionProps {
    statusFilter: TodoStatus | 'ALL';
    dateFilter: string;
    sortOrder: string;
    onStatusFilterChange: (status: TodoStatus | 'ALL') => void;
    onDateFilterChange: (date: string) => void;
    onSortOrderChange: (order: string) => void;
}

export const FilterSection: React.FC<FilterSectionProps> = ({
    statusFilter,
    dateFilter,
    sortOrder,
    onStatusFilterChange,
    onDateFilterChange,
    onSortOrderChange,
}) => {
    return (
        <div className="bg-white shadow-sm rounded-lg p-4 mb-6">
            <div className="grid grid-cols-3 gap-6">
                <div className="space-y-2">
                    <label className="block text-sm font-bold text-gray-700">
                        ステータス
                    </label>
                    <select
                        value={statusFilter}
                        onChange={(e) => onStatusFilterChange(e.target.value as TodoStatus | 'ALL')}
                        className="w-full px-3 py-2 text-sm bg-gray-50 border border-gray-200 rounded-md text-center font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                        <option value="ALL" className="text-center">すべて</option>
                        {Object.entries(TODO_STATUSES).map(([value, label]) => (
                            <option key={value} value={value} className="text-center">
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
                        value={dateFilter}
                        onChange={(e) => onDateFilterChange(e.target.value)}
                        className="w-full px-3 py-2 text-sm bg-gray-50 border border-gray-200 rounded-md text-center font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                        <option value="ALL" className="text-center">すべて</option>
                        <option value="TODAY" className="text-center">今日</option>
                        <option value="THIS_WEEK" className="text-center">今週</option>
                        <option value="OVERDUE" className="text-center">期限切れ</option>
                    </select>
                </div>

                <div className="space-y-2">
                    <label className="block text-sm font-bold text-gray-700">
                        ソート
                    </label>
                    <select
                        value={sortOrder}
                        onChange={(e) => onSortOrderChange(e.target.value)}
                        className="w-full px-3 py-2 text-sm bg-gray-50 border border-gray-200 rounded-md text-center font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                        <option value="DUE_DATE_ASC" className="text-center">期限日 ↑</option>
                        <option value="DUE_DATE_DESC" className="text-center">期限日 ↓</option>
                        <option value="CREATED_AT_ASC" className="text-center">作成日 ↑</option>
                        <option value="CREATED_AT_DESC" className="text-center">作成日 ↓</option>
                    </select>
                </div>
            </div>
        </div>
    );
};
