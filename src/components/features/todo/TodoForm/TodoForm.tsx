import React, { useState, useEffect } from 'react';
import { Todo, TodoStatus } from '../../../../types/todo';
import { TODO_STATUSES } from '../../../../constants/todoConstants';

interface TodoFormProps {
    onSubmit: (todo: Todo) => void;
    onCancel: () => void;
    initialData?: Todo | null;
}

export const TodoForm: React.FC<TodoFormProps> = ({
    onSubmit,
    onCancel,
    initialData
}) => {
    const [formData, setFormData] = useState<Omit<Todo, 'id'>>({
        title: initialData?.title || '',
        details: initialData?.details || '',
        status: initialData?.status || 'NOT_STARTED',
        createdAt: initialData?.createdAt || new Date().toISOString(),
        dueDate: initialData?.dueDate?.split('T')[0] || new Date().toISOString().split('T')[0]
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit({
            ...formData,
            id: initialData?.id ?? '',  // 新規作成時はApp.tsxで生成
            dueDate: new Date(formData.dueDate + 'T00:00:00').toISOString()
        });
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            {/* タイトル入力 */}
            <div>
                <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
                    タイトル
                </label>
                <input
                    type="text"
                    id="title"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    placeholder={initialData?.title || 'タスクのタイトルを入力'}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400"
                />
            </div>

            {/* 詳細入力 */}
            <div>
                <label htmlFor="details" className="block text-sm font-medium text-gray-700 mb-1">
                    詳細
                </label>
                <textarea
                    id="details"
                    value={formData.details}
                    onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                    placeholder={initialData?.details || 'タスクの詳細を入力'}
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400"
                />
            </div>

            {/* ステータス選択 */}
            <div>
                <label htmlFor="status" className="block text-sm font-medium text-gray-700 mb-1">
                    ステータス
                </label>
                <select
                    id="status"
                    value={formData.status}
                    onChange={(e) => setFormData({ ...formData, status: e.target.value as TodoStatus })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                    {Object.entries(TODO_STATUSES).map(([value, label]) => (
                        <option key={value} value={value}>
                            {label}
                        </option>
                    ))}
                </select>
            </div>

            {/* 期限日入力 */}
            <div>
                <label htmlFor="dueDate" className="block text-sm font-medium text-gray-700 mb-1">
                    期限日
                </label>
                <input
                    type="date"
                    id="dueDate"
                    value={formData.dueDate}
                    onChange={(e) => setFormData({ ...formData, dueDate: e.target.value })}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
            </div>

            {/* ボタン */}
            <div className="flex justify-end gap-3 pt-4">
                <button
                    type="button"
                    onClick={onCancel}
                    className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                    キャンセル
                </button>
                <button
                    type="submit"
                    className="px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                    {initialData ? '更新' : '作成'}
                </button>
            </div>
        </form>
    );
};
