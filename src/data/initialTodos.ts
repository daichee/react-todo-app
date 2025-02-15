import { Todo } from '../types/todo';
import { v4 as uuidv4 } from 'uuid';

// 現在の日付を取得
const now = new Date();

// 日付を加算する関数
const addDays = (date: Date, days: number): Date => {
    const newDate = new Date(date);
    newDate.setDate(date.getDate() + days);
    return newDate;
};

export const initialTodos: Todo[] = [
    {
        id: uuidv4(),
        title: "Reactの基礎学習",
        details: "公式ドキュメントを読んでコンポーネントの基礎を理解する",
        status: "IN_PROGRESS",
        createdAt: now,
        dueDate: addDays(now, 3)
    },
    {
        id: uuidv4(),
        title: "TypeScriptの型定義",
        details: "インターフェースとジェネリクスについて学習",
        status: "NOT_STARTED",
        createdAt: addDays(now, -1),
        dueDate: addDays(now, 5)
    },
    {
        id: uuidv4(),
        title: "Tailwind CSSの実践",
        details: "レスポンシブデザインの実装方法を確認",
        status: "COMPLETED",
        createdAt: addDays(now, -2),
        dueDate: addDays(now, 1)
    },
    {
        id: uuidv4(),
        title: "APIとの連携実装",
        details: "fetch APIを使用してデータの取得と更新を実装",
        status: "NOT_STARTED",
        createdAt: addDays(now, -1),
        dueDate: addDays(now, 7)
    },
    {
        id: uuidv4(),
        title: "ユニットテストの作成",
        details: "Jest and React Testing Libraryを使用したテストケースの作成",
        status: "NOT_STARTED",
        createdAt: now,
        dueDate: addDays(now, 10)
    },
    {
        id: uuidv4(),
        title: "状態管理の実装",
        details: "Reduxの導入とストア設計",
        status: "NOT_STARTED",
        createdAt: addDays(now, -3),
        dueDate: addDays(now, 6)
    },
    {
        id: uuidv4(),
        title: "セキュリティ対策",
        details: "XSS対策とCSRF対策の実装",
        status: "IN_PROGRESS",
        createdAt: addDays(now, -2),
        dueDate: addDays(now, 2)
    },
    {
        id: uuidv4(),
        title: "パフォーマンス最適化",
        details: "メモ化とコード分割の実装",
        status: "NOT_STARTED",
        createdAt: now,
        dueDate: addDays(now, 8)
    },
    {
        id: uuidv4(),
        title: "アクセシビリティ対応",
        details: "WAI-ARIAの実装とキーボード操作の対応",
        status: "NOT_STARTED",
        createdAt: addDays(now, -1),
        dueDate: addDays(now, 9)
    },
    {
        id: uuidv4(),
        title: "デプロイ準備",
        details: "本番環境の設定とビルドプロセスの確認",
        status: "IN_PROGRESS",
        createdAt: addDays(now, -4),
        dueDate: addDays(now, 4)
    }
];
