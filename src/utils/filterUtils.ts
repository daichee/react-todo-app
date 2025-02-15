import { Todo, FilterConfig } from '../types/todo';
import { isOverdue, isToday, isThisWeek } from './dateUtils';

export const filterTodos = (todos: Todo[], filterConfig: FilterConfig): Todo[] => {
    return todos.filter(todo => {
        // ステータスフィルター
        if (filterConfig.status !== 'ALL' && todo.status !== filterConfig.status) {
            return false;
        }

        // 期限フィルター
        switch (filterConfig.dueDate) {
            case 'OVERDUE':
                if (!isOverdue(todo.dueDate)) return false;
                break;
            case 'TODAY':
                if (!isToday(todo.dueDate)) return false;
                break;
            case 'THIS_WEEK':
                if (!isThisWeek(todo.dueDate)) return false;
                break;
        }

        return true;
    });
};
