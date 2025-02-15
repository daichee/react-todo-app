import React from 'react';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    children: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({
    isOpen,
    onClose,
    title,
    children
}) => {
    if (!isOpen) return null;

    return (
        <>
            {/* オーバーレイ */}
            <div
                className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
                onClick={onClose}
            />

            {/* モーダルコンテンツ */}
            <div className="fixed inset-0 z-10 overflow-y-auto">
                <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                    <div className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                        {/* ヘッダー */}
                        <div className="mb-4">
                            <h3 className="text-lg font-medium leading-6 text-gray-900">
                                {title}
                            </h3>
                        </div>

                        {/* コンテンツ */}
                        {children}
                    </div>
                </div>
            </div>
        </>
    );
};
