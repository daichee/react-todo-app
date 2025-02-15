import { Todo } from '../types/todo';

export const initialTodos: Todo[] = [
    {
        id: '1',
        title: 'プロジェクト計画の作成',
        details: '新規プロジェクトの計画書を作成し、チームメンバーと共有する',
        status: 'NOT_STARTED',
        createdAt: '2025-02-14T10:00:00.000Z',
        dueDate: '2025-02-20T00:00:00.000Z'
    },
    {
        id: '2',
        title: 'デザインレビュー',
        details: 'UIデザインのレビューを行い、フィードバックを収集する',
        status: 'IN_PROGRESS',
        createdAt: '2025-02-14T11:00:00.000Z',
        dueDate: '2025-02-16T00:00:00.000Z'
    },
    {
        id: '3',
        title: 'コードリファクタリング',
        details: '既存コードのリファクタリングを行い、保守性を向上させる',
        status: 'COMPLETED',
        createdAt: '2025-02-14T12:00:00.000Z',
        dueDate: '2025-02-15T00:00:00.000Z'
    },
    {
        id: '4',
        title: 'ユーザーインタビュー',
        details: '主要ユーザーへのインタビューを実施し、要望を収集する',
        status: 'NOT_STARTED',
        createdAt: '2025-02-14T13:00:00.000Z',
        dueDate: '2025-02-22T00:00:00.000Z'
    },
    {
        id: '5',
        title: 'セキュリティ監査',
        details: 'アプリケーションのセキュリティ監査を実施し、脆弱性を特定する',
        status: 'NOT_STARTED',
        createdAt: '2025-02-14T14:00:00.000Z',
        dueDate: '2025-02-28T00:00:00.000Z'
    },
    {
        id: '6',
        title: 'パフォーマンス最適化',
        details: 'アプリケーションのパフォーマンスを分析し、改善点を特定する',
        status: 'IN_PROGRESS',
        createdAt: '2025-02-14T15:00:00.000Z',
        dueDate: '2025-02-21T00:00:00.000Z'
    },
    {
        id: '7',
        title: 'ドキュメント更新',
        details: 'API仕様書とユーザーマニュアルを最新の状態に更新する',
        status: 'NOT_STARTED',
        createdAt: '2025-02-14T16:00:00.000Z',
        dueDate: '2025-02-19T00:00:00.000Z'
    },
    {
        id: '8',
        title: 'チームミーティング',
        details: '週次進捗報告会の準備と実施',
        status: 'COMPLETED',
        createdAt: '2025-02-14T17:00:00.000Z',
        dueDate: '2025-02-15T00:00:00.000Z'
    },
    {
        id: '9',
        title: 'バグ修正',
        details: '優先度の高いバグの修正と検証を行う',
        status: 'IN_PROGRESS',
        createdAt: '2025-02-14T18:00:00.000Z',
        dueDate: '2025-02-17T00:00:00.000Z'
    },
    {
        id: '10',
        title: 'デプロイ計画',
        details: '次回リリースのデプロイ計画を作成する',
        status: 'NOT_STARTED',
        createdAt: '2025-02-14T19:00:00.000Z',
        dueDate: '2025-02-23T00:00:00.000Z'
    },
    {
        id: '11',
        title: 'ユーザビリティテスト',
        details: '新機能のユーザビリティテストを実施する',
        status: 'NOT_STARTED',
        createdAt: '2025-02-14T20:00:00.000Z',
        dueDate: '2025-02-24T00:00:00.000Z'
    },
    {
        id: '12',
        title: 'データ分析',
        details: 'ユーザー行動データの分析とレポート作成',
        status: 'IN_PROGRESS',
        createdAt: '2025-02-14T21:00:00.000Z',
        dueDate: '2025-02-20T00:00:00.000Z'
    },
    {
        id: '13',
        title: 'CI/CD設定',
        details: 'CI/CDパイプラインの設定と最適化',
        status: 'COMPLETED',
        createdAt: '2025-02-14T22:00:00.000Z',
        dueDate: '2025-02-16T00:00:00.000Z'
    },
    {
        id: '14',
        title: 'コードレビュー',
        details: 'プルリクエストのレビューと承認',
        status: 'IN_PROGRESS',
        createdAt: '2025-02-14T23:00:00.000Z',
        dueDate: '2025-02-18T00:00:00.000Z'
    },
    {
        id: '15',
        title: 'テスト自動化',
        details: 'E2Eテストの自動化スクリプト作成',
        status: 'NOT_STARTED',
        createdAt: '2025-02-15T00:00:00.000Z',
        dueDate: '2025-02-25T00:00:00.000Z'
    },
    {
        id: '16',
        title: 'アクセシビリティ対応',
        details: 'WAI-ARIAガイドラインに基づく改善',
        status: 'NOT_STARTED',
        createdAt: '2025-02-15T01:00:00.000Z',
        dueDate: '2025-02-26T00:00:00.000Z'
    },
    {
        id: '17',
        title: '多言語対応',
        details: 'アプリケーションの国際化対応',
        status: 'IN_PROGRESS',
        createdAt: '2025-02-15T02:00:00.000Z',
        dueDate: '2025-02-27T00:00:00.000Z'
    },
    {
        id: '18',
        title: 'モバイル対応',
        details: 'レスポンシブデザインの実装と検証',
        status: 'COMPLETED',
        createdAt: '2025-02-15T03:00:00.000Z',
        dueDate: '2025-02-17T00:00:00.000Z'
    },
    {
        id: '19',
        title: 'ライブラリ更新',
        details: '依存ライブラリの最新化と動作確認',
        status: 'NOT_STARTED',
        createdAt: '2025-02-15T04:00:00.000Z',
        dueDate: '2025-02-21T00:00:00.000Z'
    },
    {
        id: '20',
        title: 'エラーハンドリング',
        details: 'グローバルエラーハンドリングの実装',
        status: 'IN_PROGRESS',
        createdAt: '2025-02-15T05:00:00.000Z',
        dueDate: '2025-02-22T00:00:00.000Z'
    },
    {
        id: '21',
        title: 'キャッシュ戦略',
        details: 'アプリケーションのキャッシュ戦略の設計と実装',
        status: 'NOT_STARTED',
        createdAt: '2025-02-15T06:00:00.000Z',
        dueDate: '2025-02-28T00:00:00.000Z'
    },
    {
        id: '22',
        title: 'ログ管理',
        details: 'ログ収集と分析基盤の構築',
        status: 'NOT_STARTED',
        createdAt: '2025-02-15T07:00:00.000Z',
        dueDate: '2025-03-01T00:00:00.000Z'
    },
    {
        id: '23',
        title: 'バックアップ設定',
        details: 'データバックアップとリカバリー手順の整備',
        status: 'IN_PROGRESS',
        createdAt: '2025-02-15T08:00:00.000Z',
        dueDate: '2025-02-23T00:00:00.000Z'
    },
    {
        id: '24',
        title: 'アナリティクス導入',
        details: 'Googleアナリティクスの設定と初期データ収集',
        status: 'COMPLETED',
        createdAt: '2025-02-15T09:00:00.000Z',
        dueDate: '2025-02-18T00:00:00.000Z'
    },
    {
        id: '25',
        title: 'SEO対策',
        details: 'メタタグの最適化とサイトマップの生成',
        status: 'NOT_STARTED',
        createdAt: '2025-02-15T10:00:00.000Z',
        dueDate: '2025-02-24T00:00:00.000Z'
    },
    {
        id: '26',
        title: 'PWA対応',
        details: 'プログレッシブウェブアプリケーション化',
        status: 'IN_PROGRESS',
        createdAt: '2025-02-15T11:00:00.000Z',
        dueDate: '2025-02-25T00:00:00.000Z'
    },
    {
        id: '27',
        title: 'コードドキュメント',
        details: 'ソースコードのドキュメント化とJSDoc追加',
        status: 'NOT_STARTED',
        createdAt: '2025-02-15T12:00:00.000Z',
        dueDate: '2025-02-26T00:00:00.000Z'
    },
    {
        id: '28',
        title: 'ステージング環境',
        details: 'ステージング環境のセットアップと構成管理',
        status: 'COMPLETED',
        createdAt: '2025-02-15T13:00:00.000Z',
        dueDate: '2025-02-19T00:00:00.000Z'
    },
    {
        id: '29',
        title: 'パフォーマンステスト',
        details: '負荷テストとパフォーマンス計測の実施',
        status: 'NOT_STARTED',
        createdAt: '2025-02-15T14:00:00.000Z',
        dueDate: '2025-02-27T00:00:00.000Z'
    },
    {
        id: '30',
        title: 'セキュリティレビュー',
        details: '外部セキュリティ監査の準備と対応',
        status: 'IN_PROGRESS',
        createdAt: '2025-02-15T15:00:00.000Z',
        dueDate: '2025-02-28T00:00:00.000Z'
    }
];
