import React from 'react';

interface HeaderProps {
    onCreateClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onCreateClick }) => {
    return (
        <header className="bg-white shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                <div className="grid grid-cols-7 gap-4">
                    <h1 className="col-span-7 text-xl font-bold text-gray-900 text-center mb-2">
                        Todo App
                    </h1>
                    <p className="col-span-7 md:col-span-4 md:col-start-1 text-sm text-gray-600 text-left">
                        シンプルで使いやすいタスク管理アプリ。タスクの作成、編集、フィルタリング、並び替えが可能です。
                    </p>
                    <div className="col-span-7 md:col-span-2 md:col-start-6 flex justify-center md:justify-end">
                        <button
                            onClick={onCreateClick}
                            className="whitespace-nowrap px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                        >
                            + 新規作成
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};
