import React from 'react';
import { Todo, TodoStatus } from '../../../../types/todo';
import { TodoHeader } from './TodoHeader/TodoHeader';
import { TodoContent } from './TodoContent/TodoContent';
import { TodoActions } from './TodoActions/TodoActions';

interface TodoCardProps {
    todo: Todo;
    onStatusChange: (id: string, status: TodoStatus) => void;
    onEdit: (todo: Todo) => void;
    onDelete: (id: string) => void;
}

export const TodoCard: React.FC<TodoCardProps> = ({
    todo,
    onStatusChange,
    onEdit,
    onDelete
}) => {
    const getBgColor = (status: TodoStatus) => {
        switch (status) {
            case 'NOT_STARTED':
                return 'bg-gray-500';
            case 'IN_PROGRESS':
                return 'bg-blue-500';
            case 'COMPLETED':
                return 'bg-green-500';
            default:
                return 'bg-gray-500';
        }
    };

    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className={`${getBgColor(todo.status)} p-4`}>
                <TodoHeader todo={todo} onStatusChange={onStatusChange} />
            </div>
            <TodoContent todo={todo} />
            <TodoActions todo={todo} onEdit={onEdit} onDelete={onDelete} />
        </div>
    );
};
