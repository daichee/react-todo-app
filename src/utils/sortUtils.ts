import { Todo } from '../types/todo';
import { SortConfig } from '../types/sort';

export const sortTodos = (todos: Todo[], sortConfig: SortConfig): Todo[] => {
    const sortedTodos = [...todos];
    sortedTodos.sort((a, b) => {
        const aValue = sortConfig.field === 'dueDate' ? a.dueDate : a.createdAt;
        const bValue = sortConfig.field === 'dueDate' ? b.dueDate : b.createdAt;
        
        if (sortConfig.order === 'asc') {
            return new Date(aValue).getTime() - new Date(bValue).getTime();
        } else {
            return new Date(bValue).getTime() - new Date(aValue).getTime();
        }
    });
    return sortedTodos;
};
