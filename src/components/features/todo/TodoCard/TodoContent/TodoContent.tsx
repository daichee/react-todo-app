import React from 'react';
import { Todo } from '../../../../../types/todo';
import { CalendarIcon, ClockIcon } from '@heroicons/react/24/outline';
import { DUE_DATE_COLORS } from '../../../../../constants/colorConstants';
import { format, isToday, isPast } from 'date-fns';
import { ja } from 'date-fns/locale/ja';

interface TodoContentProps {
    todo: Todo;
}

export const TodoContent: React.FC<TodoContentProps> = ({ todo }) => {
    const getDueDateColor = (date: Date) => {
        if (isPast(date) && !isToday(date)) {
            return DUE_DATE_COLORS.OVERDUE;
        }
        if (isToday(date)) {
            return DUE_DATE_COLORS.TODAY;
        }
        return DUE_DATE_COLORS.FUTURE;
    };

    return (
        <div className="p-4 space-y-3">
            {/* 詳細テキスト */}
            <div className="min-h-[3rem]">
                <p className="text-sm text-gray-600 text-left line-clamp-2">
                    {todo.details}
                </p>
            </div>

            {/* 日付情報 */}
            <div className="flex flex-col space-y-2 text-sm">
                {/* 作成日 */}
                <div className="flex items-center">
                    <ClockIcon className="h-4 w-4 mr-1 text-gray-500" />
                    <span className={DUE_DATE_COLORS.FUTURE}>
                        作成日: {format(new Date(todo.createdAt), 'yyyy年MM月dd日(E)', { locale: ja })}
                    </span>
                </div>

                {/* 期限日 */}
                <div className="flex items-center">
                    <CalendarIcon className="h-4 w-4 mr-1 text-gray-500" />
                    <span className={getDueDateColor(new Date(todo.dueDate))}>
                        期限日: {format(new Date(todo.dueDate), 'yyyy年MM月dd日(E)', { locale: ja })}
                    </span>
                </div>
            </div>
        </div>
    );
};
