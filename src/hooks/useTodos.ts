import { useState } from 'react';
import { Todo, TodoStatus, FilterConfig } from '../types/todo';
import { SortConfig } from '../types/sort';
import { useLocalStorage } from './useLocalStorage';
import { filterTodos } from '../utils/filterUtils';
import { sortTodos } from '../utils/sortUtils';
import { initialTodos } from '../data/initialTodos';

export const useTodos = () => {
    const [todos, setTodos] = useLocalStorage<Todo[]>('todos', initialTodos);
    const [filterConfig, setFilterConfig] = useState<FilterConfig>({
        status: 'ALL',
        dueDate: 'ALL'
    });
    const [sortConfig, setSortConfig] = useState<SortConfig>({
        field: 'dueDate',
        order: 'asc'
    });

    const getFilteredAndSortedTodos = () => {
        const filtered = filterTodos(todos, filterConfig);
        return sortTodos(filtered, sortConfig);
    };

    const addTodo = (todo: Todo) => {
        setTodos([...todos, todo]);
    };

    const updateTodo = (updatedTodo: Todo) => {
        setTodos(todos.map(todo => 
            todo.id === updatedTodo.id ? updatedTodo : todo
        ));
    };

    const deleteTodo = (todoId: string) => {
        setTodos(todos.filter(todo => todo.id !== todoId));
    };

    const updateTodoStatus = (todoId: string, newStatus: TodoStatus) => {
        setTodos(todos.map(todo =>
            todo.id === todoId ? { ...todo, status: newStatus } : todo
        ));
    };

    return {
        todos: getFilteredAndSortedTodos(),
        filterConfig,
        sortConfig,
        setFilterConfig,
        setSortConfig,
        addTodo,
        updateTodo,
        deleteTodo,
        updateTodoStatus
    };
};
