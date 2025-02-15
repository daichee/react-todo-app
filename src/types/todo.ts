// TodoのステータスをTypeScriptの型として定義
export type TodoStatus = 'NOT_STARTED' | 'IN_PROGRESS' | 'COMPLETED';

// Todoの状態を表す型
// export type TodoStatus = 'NOT_STARTED' | 'IN_PROGRESS' | 'COMPLETED';

// 期限フィルターの型
export type DueDateFilter = 'ALL' | 'OVERDUE' | 'TODAY' | 'THIS_WEEK';

// フィルター設定の型
export interface FilterConfig {
    status: TodoStatus | 'ALL';
    dueDate: DueDateFilter;
}

// Todoの型を定義
export interface Todo {
    id: string;
    title: string;
    status: TodoStatus;
    details?: string;
    createdAt: Date;
    dueDate: Date;  // 期限日を必須に変更
}

// フィルター用の型を定義
export type TodoFilter = {
    searchID: string;
    status: TodoStatus | 'ALL';
}