import React from 'react';
import { Todo, TodoStatus } from '../../types/todo';
import { format } from 'date-fns';
import { ja } from 'date-fns/locale';
import { CalendarIcon, ClockIcon } from '@heroicons/react/24/outline';

interface TodoItemProps {
    todo: Todo;
    onStatusChange: (id: string, status: TodoStatus) => void;
    onEdit: (todo: Todo) => void;
    onDelete: (id: string) => void;
}

const getStatusColor = (status: TodoStatus): string => {
    switch (status) {
        case 'NOT_STARTED': return 'bg-gray-600';
        case 'IN_PROGRESS': return 'bg-blue-600';
        case 'COMPLETED': return 'bg-green-600';
    }
};

const isOverdue = (date: Date | string): boolean => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const dueDate = new Date(date);
    dueDate.setHours(0, 0, 0, 0);
    return dueDate < today;
};

export const TodoItem: React.FC<TodoItemProps> = ({
    todo,
    onStatusChange,
    onEdit,
    onDelete
}) => {
    const isDueDateOverdue = isOverdue(todo.dueDate);

    return (
        <div className="bg-white rounded-lg shadow-sm hover:shadow transition-shadow duration-200 overflow-hidden">
            {/* タイトル行 */}
            <div className={`p-4 ${getStatusColor(todo.status)}`}>
                <h3 className="text-lg font-semibold text-white truncate">{todo.title}</h3>
            </div>

            {/* ステータスと日付情報 */}
            <div className="px-4 py-3">
                {/* モバイル・タブレット用レイアウト */}
                <div className="lg:hidden">
                    <div className="grid grid-cols-1 mb-2">
                        <select
                            value={todo.status}
                            onChange={(e) => onStatusChange(todo.id, e.target.value as TodoStatus)}
                            className="text-sm px-2 py-1.5 rounded bg-gray-50 border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full text-center"
                        >
                            <option value="NOT_STARTED">未着手</option>
                            <option value="IN_PROGRESS">進行中</option>
                            <option value="COMPLETED">完了</option>
                        </select>
                    </div>
                    <div className="flex justify-between items-center">
                        <div className="text-sm text-gray-600 flex items-center gap-1">
                            <ClockIcon className="w-4 h-4 flex-shrink-0" />
                            作成: {format(new Date(todo.createdAt), 'yyyy/MM/dd', { locale: ja })}
                        </div>
                        <div className={`text-sm ${isDueDateOverdue ? 'text-red-600' : 'text-gray-600'} flex items-center gap-1`}>
                            <CalendarIcon className="w-4 h-4 flex-shrink-0" />
                            期限: {format(new Date(todo.dueDate), 'yyyy/MM/dd', { locale: ja })}
                        </div>
                    </div>
                </div>

                {/* デスクトップ用レイアウト */}
                <div className="hidden lg:grid lg:grid-cols-3 lg:gap-4 lg:items-center">
                    <div>
                        <select
                            value={todo.status}
                            onChange={(e) => onStatusChange(todo.id, e.target.value as TodoStatus)}
                            className="text-sm px-2 py-1.5 rounded bg-gray-50 border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full"
                        >
                            <option value="NOT_STARTED">未着手</option>
                            <option value="IN_PROGRESS">進行中</option>
                            <option value="COMPLETED">完了</option>
                        </select>
                    </div>
                    <div className="text-sm text-gray-600 flex items-center gap-1">
                        <ClockIcon className="w-4 h-4 flex-shrink-0" />
                        作成: {format(new Date(todo.createdAt), 'yyyy/MM/dd', { locale: ja })}
                    </div>
                    <div className={`text-sm ${isDueDateOverdue ? 'text-red-600' : 'text-gray-600'} flex items-center gap-1`}>
                        <CalendarIcon className="w-4 h-4 flex-shrink-0" />
                        期限: {format(new Date(todo.dueDate), 'yyyy/MM/dd', { locale: ja })}
                    </div>
                </div>
            </div>

            {/* 詳細とアクション */}
            <div className="px-4 py-2 flex flex-col lg:flex-row lg:items-center lg:justify-between">
                <div className="text-sm text-gray-600 mb-2 lg:mb-0">
                    {todo.details}
                </div>
                <div className="flex gap-2 justify-end">
                    <button
                        onClick={() => onEdit(todo)}
                        className="text-blue-600 hover:text-blue-700 text-sm"
                    >
                        編集
                    </button>
                    <button
                        onClick={() => onDelete(todo.id)}
                        className="text-red-600 hover:text-red-700 text-sm"
                    >
                        削除
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TodoItem;