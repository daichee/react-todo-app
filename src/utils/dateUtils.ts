export const isOverdue = (dueDate: Date | string): boolean => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const dueDateObj = new Date(dueDate);
    dueDateObj.setHours(0, 0, 0, 0);
    return dueDateObj < today;
};

export const isToday = (date: Date | string): boolean => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const dateObj = new Date(date);
    dateObj.setHours(0, 0, 0, 0);
    return dateObj.getTime() === today.getTime();
};

export const isThisWeek = (date: Date | string): boolean => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const dateObj = new Date(date);
    dateObj.setHours(0, 0, 0, 0);
    const weekEnd = new Date(today);
    weekEnd.setDate(today.getDate() + (6 - today.getDay()));
    return dateObj <= weekEnd && dateObj >= today;
};

export const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toLocaleDateString('ja-JP', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
    });
};
