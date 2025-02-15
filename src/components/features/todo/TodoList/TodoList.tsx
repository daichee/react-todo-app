import React from 'react';
import { Todo, TodoStatus } from '../../../../types/todo';
import { TodoCard } from '../TodoCard/TodoCard';
import { TODO_STATUSES } from '../../../../constants/todoConstants';

interface TodoListProps {
    todos: Todo[];
    onStatusChange: (todoId: string, status: TodoStatus) => void;
    onEdit: (todo: Todo) => void;
    onDelete: (todoId: string) => void;
}

export const TodoList: React.FC<TodoListProps> = ({
    todos,
    onStatusChange,
    onEdit,
    onDelete
}) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* 未着手 */}
            <div>
                <h2 className="text-lg font-semibold mb-4">{TODO_STATUSES.NOT_STARTED}</h2>
                <div className="space-y-4">
                    {todos
                        .filter(todo => todo.status === 'NOT_STARTED')
                        .map(todo => (
                            <TodoCard
                                key={todo.id}
                                todo={todo}
                                onStatusChange={onStatusChange}
                                onEdit={onEdit}
                                onDelete={onDelete}
                            />
                        ))}
                </div>
            </div>

            {/* 進行中 */}
            <div>
                <h2 className="text-lg font-semibold mb-4">{TODO_STATUSES.IN_PROGRESS}</h2>
                <div className="space-y-4">
                    {todos
                        .filter(todo => todo.status === 'IN_PROGRESS')
                        .map(todo => (
                            <TodoCard
                                key={todo.id}
                                todo={todo}
                                onStatusChange={onStatusChange}
                                onEdit={onEdit}
                                onDelete={onDelete}
                            />
                        ))}
                </div>
            </div>

            {/* 完了 */}
            <div>
                <h2 className="text-lg font-semibold mb-4">{TODO_STATUSES.COMPLETED}</h2>
                <div className="space-y-4">
                    {todos
                        .filter(todo => todo.status === 'COMPLETED')
                        .map(todo => (
                            <TodoCard
                                key={todo.id}
                                todo={todo}
                                onStatusChange={onStatusChange}
                                onEdit={onEdit}
                                onDelete={onDelete}
                            />
                        ))}
                </div>
            </div>
        </div>
    );
};
