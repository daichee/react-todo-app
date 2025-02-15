import React from 'react';
import { Todo } from '../../../../../types/todo';

interface TodoContentProps {
    todo: Todo;
}

export const TodoContent: React.FC<TodoContentProps> = ({ todo }) => {
    const isDueDatePassed = new Date(todo.dueDate) < new Date();

    return (
        <div className="p-4">
            <div className="text-base text-gray-700 line-clamp-2 mb-3">
                {todo.details}
            </div>
            <div className="flex flex-col gap-1.5 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span>作成日: {new Date(todo.createdAt).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center gap-2">
                    <svg className={`w-4 h-4 ${isDueDatePassed ? 'text-red-500' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className={isDueDatePassed ? 'text-red-500' : ''}>
                        期限日: {new Date(todo.dueDate).toLocaleDateString()}
                    </span>
                </div>
            </div>
        </div>
    );
};
