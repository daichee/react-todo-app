import React from 'react';
import { PlusIcon } from '@heroicons/react/24/outline';

interface HeaderProps {
    onCreateClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onCreateClick }) => {
    return (
        <div className="bg-white shadow">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                <div className="flex justify-between items-center">
                    <div className="flex-1 pr-12">
                        <h1 className="text-2xl font-bold text-gray-900">Todo App</h1>
                        <p className="mt-1 text-sm text-gray-500">
                            シンプルで使いやすいタスク管理アプリ。タスクの作成、編集、フィルタリング、並び替えが可能です。
                        </p>
                    </div>
                    <button
                        onClick={onCreateClick}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded-full hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
                    >
                        <PlusIcon className="w-5 h-5" />
                        新規作成
                    </button>
                </div>
            </div>
        </div>
    );
};
