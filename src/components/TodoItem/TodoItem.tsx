import React from 'react';
import { Todo, TodoStatus } from '../../types/todo';
import { ClockIcon, ExclamationCircleIcon } from '@heroicons/react/24/solid';

interface TodoItemProps {
    todo: Todo;
    onStatusChange: (id: string, status: TodoStatus) => void;
    onEdit: (todo: Todo) => void;
    onDelete: (id: string) => void;
}

// ステータスに応じた背景色を取得
const getStatusBgColor = (status: TodoStatus): string => {
    switch (status) {
        case 'NOT_STARTED': return 'bg-gray-50 hover:bg-gray-100';
        case 'IN_PROGRESS': return 'bg-blue-50 hover:bg-blue-100';
        case 'COMPLETED': return 'bg-green-50 hover:bg-green-100';
    }
};

// TodoItemコンポーネントの定義
export const TodoItem: React.FC<TodoItemProps> = ({
    todo,
    onStatusChange,
    onEdit,
    onDelete
}) => {
    // 期限日の状態を取得
    const getDueDateStatus = (dueDate: Date): { icon: JSX.Element; color: string } => {
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        const due = new Date(dueDate);
        due.setHours(0, 0, 0, 0);
        
        if (due.getTime() < today.getTime()) {
            return {
                icon: <ExclamationCircleIcon className="h-5 w-5 text-red-500" />,
                color: 'text-red-600'
            };
        }
        return {
            icon: <ClockIcon className="h-5 w-5 text-gray-500" />,
            color: 'text-gray-600'
        };
    };

    const dueDateStatus = getDueDateStatus(todo.dueDate);

    return (
        <div className={`w-full p-4 rounded-lg shadow transition-colors ${getStatusBgColor(todo.status)}`}>
            <div className="flex flex-col space-y-2">
                <div className="flex justify-between items-start">
                    <h3 className="text-lg font-medium truncate flex-1 mr-4">{todo.title}</h3>
                    <div className="flex items-center space-x-2 shrink-0">
                        <select
                            value={todo.status}
                            onChange={(e) => onStatusChange(todo.id, e.target.value as TodoStatus)}
                            className="text-sm border rounded px-2 py-1 bg-white"
                        >
                            <option value="NOT_STARTED">未着手</option>
                            <option value="IN_PROGRESS">進行中</option>
                            <option value="COMPLETED">完了</option>
                        </select>
                        <button
                            onClick={() => onEdit(todo)}
                            className="text-blue-600 hover:text-blue-700"
                        >
                            編集
                        </button>
                        <button
                            onClick={() => onDelete(todo.id)}
                            className="text-red-600 hover:text-red-700"
                        >
                            削除
                        </button>
                    </div>
                </div>
                {todo.details && (
                    <p className="text-gray-600 break-words">{todo.details}</p>
                )}
                <div className="flex flex-wrap gap-4 text-sm">
                    <span className="text-gray-500 shrink-0">
                        作成: {todo.createdAt.toLocaleDateString()}
                    </span>
                    <span className={`flex items-center space-x-1 ${dueDateStatus.color} shrink-0`}>
                        {dueDateStatus.icon}
                        <span>期限: {todo.dueDate.toLocaleDateString()}</span>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default TodoItem;