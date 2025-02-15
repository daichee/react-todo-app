import { TodoStatus } from '../types/todo';

export const STATUS_COLORS: Record<TodoStatus | 'ALL', string> = {
    'ALL': 'text-gray-500',
    'NOT_STARTED': 'text-gray-500',
    'IN_PROGRESS': 'text-blue-500',
    'COMPLETED': 'text-green-500'
};

export const DUE_DATE_COLORS = {
    OVERDUE: 'text-red-500',
    TODAY: 'text-yellow-500',
    FUTURE: 'text-gray-500'
};
