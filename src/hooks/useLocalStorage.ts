import { useState, useEffect } from 'react';

export function useLocalStorage<T>(key: string, initialValue: T): [T, (value: T) => void] {
    // 初期値の取得
    const readValue = (): T => {
        if (typeof window === 'undefined') {
            return initialValue;
        }

        try {
            const item = window.localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
        } catch (error) {
            console.warn(`Error reading localStorage key "${key}":`, error);
            return initialValue;
        }
    };

    // 状態の初期化
    const [storedValue, setStoredValue] = useState<T>(readValue);

    // 値の更新
    const setValue = (value: T) => {
        try {
            const newValue = value instanceof Function ? value(storedValue) : value;
            window.localStorage.setItem(key, JSON.stringify(newValue));
            setStoredValue(newValue);
        } catch (error) {
            console.warn(`Error setting localStorage key "${key}":`, error);
        }
    };

    // ウィンドウイベントのハンドリング
    useEffect(() => {
        setStoredValue(readValue());
    }, []);

    return [storedValue, setValue];
}
