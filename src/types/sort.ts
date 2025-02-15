export type SortOrder = 'asc' | 'desc';
export type SortField = 'createdAt' | 'dueDate';

export interface SortConfig {
    field: SortField;
    order: SortOrder;
}

// ソートフィールドの表示名
export const SORT_FIELD_LABELS: Record<SortField, string> = {
    createdAt: '作成日',
    dueDate: '期限日'
};

// ソート順の表示名
export const SORT_ORDER_LABELS: Record<SortOrder, string> = {
    asc: '昇順',
    desc: '降順'
};
