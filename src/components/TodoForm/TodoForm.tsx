import React, { useState, useEffect } from 'react';
import { Todo, TodoStatus } from '../../types/todo';
import { v4 as uuidv4 } from 'uuid';

interface TodoFormProps {
    onSubmit: (todo: Todo) => void;
    initialTodo?: Todo;
    onCancel?: () => void;
}

export const TodoForm: React.FC<TodoFormProps> = ({ onSubmit, initialTodo, onCancel }) => {
    const [title, setTitle] = useState(initialTodo?.title || '');
    const [details, setDetails] = useState(initialTodo?.details || '');
    const [status, setStatus] = useState<TodoStatus>(initialTodo?.status || 'NOT_STARTED');
    const [dueDate, setDueDate] = useState(
        initialTodo?.dueDate 
            ? new Date(initialTodo.dueDate).toISOString().split('T')[0]
            : new Date().toISOString().split('T')[0]
    );

    // フォームをリセットする関数
    const resetForm = () => {
        setTitle('');
        setDetails('');
        setStatus('NOT_STARTED');
        setDueDate(new Date().toISOString().split('T')[0]);
    };

    // 編集対象のTodoが変更されたら、フォームの値を更新
    useEffect(() => {
        if (initialTodo) {
            setTitle(initialTodo.title);
            setDetails(initialTodo.details || '');
            setStatus(initialTodo.status);
            setDueDate(new Date(initialTodo.dueDate).toISOString().split('T')[0]);
        } else {
            resetForm();
        }
    }, [initialTodo]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!title.trim()) return;

        const todo: Todo = {
            id: initialTodo?.id || uuidv4(),
            title: title.trim(),
            status,
            details: details.trim(),
            createdAt: initialTodo?.createdAt || new Date(),
            dueDate: new Date(dueDate)
        };

        onSubmit(todo);
        
        if (!initialTodo) {
            resetForm();
        }
    };

    const handleCancel = () => {
        resetForm();
        if (onCancel) {
            onCancel();
        }
    };

    return (
        <form onSubmit={handleSubmit} className="mb-6 p-4 bg-white rounded-lg shadow">
            <div className="mb-4">
                <label htmlFor="title" className="block text-gray-700 font-medium mb-2">タイトル</label>
                <input
                    type="text"
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Todoのタイトルを入力"
                    required
                />
            </div>
            <div className="mb-4">
                <label htmlFor="details" className="block text-gray-700 font-medium mb-2">詳細</label>
                <textarea
                    id="details"
                    value={details}
                    onChange={(e) => setDetails(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="詳細を入力（任意）"
                    rows={3}
                />
            </div>
            <div className="mb-4">
                <label htmlFor="dueDate" className="block text-gray-700 font-medium mb-2">期限日</label>
                <input
                    type="date"
                    id="dueDate"
                    value={dueDate}
                    onChange={(e) => setDueDate(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                />
            </div>
            <div className="mb-4">
                <label htmlFor="status" className="block text-gray-700 font-medium mb-2">
                    ステータス
                </label>
                <select
                    id="status"
                    value={status}
                    onChange={(e) => setStatus(e.target.value as TodoStatus)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    <option value="NOT_STARTED">未着手</option>
                    <option value="IN_PROGRESS">進行中</option>
                    <option value="COMPLETED">完了</option>
                </select>
            </div>
            <div className="flex space-x-2">
                <button
                    type="submit"
                    className="flex-1 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200"
                >
                    {initialTodo ? '更新' : '追加'}
                </button>
                {onCancel && (
                    <button
                        type="button"
                        onClick={handleCancel}
                        className="flex-1 bg-gray-100 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-colors duration-200"
                    >
                        キャンセル
                    </button>
                )}
            </div>
        </form>
    );
};

export default TodoForm;