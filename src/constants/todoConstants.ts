import { TodoStatus, DueDateFilter } from '../types/todo';

export const TODO_STATUSES: { [key in TodoStatus]: string } = {
    'NOT_STARTED': '未着手',
    'IN_PROGRESS': '進行中',
    'COMPLETED': '完了'
};

export const DUE_DATE_FILTERS: { [key in DueDateFilter]: string } = {
    'ALL': 'すべて',
    'OVERDUE': '期限切れ',
    'TODAY': '今日まで',
    'THIS_WEEK': '今週まで'
};

export const SORT_FIELDS = {
    'dueDate': '期限日',
    'createdAt': '作成日'
} as const;

export const SORT_ORDERS = {
    'asc': '昇順',
    'desc': '降順'
} as const;
