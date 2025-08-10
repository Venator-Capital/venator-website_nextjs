# Venator Capital LLC Next.jsリプレイス計画・会話ログ

---

## 1. ゴールと現状の整理

**ゴール**  
- 既存のVite + React（TypeScript, Tailwind, Shadcn, Radix UI）で構築されたVenator Capital LLCのWebサイトを、Next.js（最新安定版）で完全再構築し、  
- 見た目・機能・UXを一切損なわず、将来的にVercelで独自ドメイン運用・デプロイ可能な状態にする。

**現状**  
- `client/`配下にReact + Vite構成のSPA
- TypeScript, TailwindCSS, Shadcn UI, Radix UI, 各種カスタムコンポーネント
- サーバーサイドは`server/`配下にNode/Express系のAPI（Vite用？）
- 静的アセットは`client/public/`配下
- ページ構成・セクションは`client/src/pages/`や`client/src/components/`に分割
- 既存のデプロイはReplit上

---

## 2. Next.jsリプレイスに必要な全作業（詳細・網羅的）

### A. Next.jsプロジェクトの初期セットアップ

1. **新規Next.jsプロジェクト作成**  
   - `npx create-next-app@latest`でTypeScript, Tailwind, ESLint, Prettier, App Router有効で初期化
   - ディレクトリ構成をNext.js標準（`app/`, `public/`, `components/`, `lib/`など）に合わせる

2. **依存パッケージの移植・追加**  
   - TailwindCSS, Shadcn UI, Radix UI, 必要なReact系ライブラリをNext.js用に再インストール
   - Vite固有のパッケージや設定は除外

3. **Tailwind/ESLint/tsconfig等の設定移植**  
   - 既存の`tailwind.config.ts`, `postcss.config.js`, `tsconfig.json`をNext.js用に調整・移植

---

### B. ページ・ルーティングの移植

1. **Vite/SPAのルーティング → Next.jsのApp Router/Pages Routerへ変換**  
   - `client/src/pages/`の各ページを`app/`配下のルート（`app/page.tsx`, `app/aiworkflows/page.tsx`など）に移植
   - ルートごとに`layout.tsx`や`template.tsx`を設計

2. **動的ルーティング・リンクのNext.js化**  
   - `react-router-dom`の`<Link>`等をNext.jsの`<Link>`に置換
   - ルーティングロジックをNext.jsの規約に合わせて修正

---

### C. コンポーネント・UIの移植

1. **`client/src/components/`配下の全コンポーネントを`components/`へ移植**  
   - 各コンポーネントのimportパス・依存関係をNext.js構成に合わせて修正
   - Shadcn/Radix UIのimportや設定もNext.js用に調整

2. **`ui/`配下のUIパーツも同様に移植**  
   - 必要に応じて`components/ui/`などにまとめる

3. **`contexts/`, `hooks/`, `lib/`の移植**  
   - Context, カスタムフック, ユーティリティ関数を`app/`や`lib/`、`contexts/`、`hooks/`に再配置

---

### D. 静的アセットの移植

1. **`client/public/`配下の画像・動画・SVG等をNext.jsの`public/`へ移動**  
   - 参照パスをNext.jsの`/public`規約に合わせて修正

2. **`img`, `logos`, `splash`等のパスを全てNext.js用に書き換え**

---

### E. サーバーサイド/バックエンドの整理

1. **APIルートのNext.js移植**  
   - `server/`配下のAPI（Express等）をNext.jsの`app/api/`（Route Handlers）に移植
   - 必要に応じてAPIの型やレスポンスをNext.jsの規約に合わせて修正

2. **SSR/SSG/ISRの検討**  
   - 各ページ・データ取得の最適なレンダリング方式（SSR, SSG, ISR, CSR）を選定し、`getServerSideProps`や`generateStaticParams`等を実装

---

### F. グローバルスタイル・テーマ・レイアウト

1. **`index.css`やグローバルCSSの移植**  
   - Tailwindの`globals.css`として`app/globals.css`に統合

2. **レイアウトコンポーネントのNext.js化**  
   - `Layout.tsx`を`app/layout.tsx`に移植し、全体のラップ構造をNext.js流に再設計

---

### G. その他の機能・最適化

1. **i18n（多言語対応）のNext.js化**  
   - 既存の`LanguageContext`等をNext.jsのi18n対応（`next-intl`や`next-i18next`等）に置換

2. **SEO/MetaタグのNext.js化**  
   - 各ページの`<Head>`やSEO設定をNext.jsの`metadata`や`<Head>`コンポーネントで再実装

3. **アクセシビリティ・パフォーマンス最適化**  
   - Next.jsのImage最適化（`<Image>`コンポーネント）や、Core Web Vitals対応

4. **Vercelデプロイ用設定**  
   - `vercel.json`や環境変数、独自ドメイン設定

---

### H. テスト・検証

1. **ローカルでの動作確認・E2Eテスト**  
   - 既存の動作・見た目と完全一致するか比較
   - PlaywrightやJest/React Testing Libraryで主要フローをテスト

2. **Vercelへのデプロイ・本番検証**  
   - 独自ドメインでの最終動作確認

---

## 3. 追加で考慮すべき点

- **Vite固有の機能やプラグインが使われていないか要確認**（Next.jsで代替不可な場合は要再設計）
- **サーバーサイドAPIの依存関係**（Next.jsのAPI Routeで十分か、外部サーバーが必要か）
- **Shadcn UI, Radix UIのNext.js対応状況**（公式ドキュメント・GitHubで最新情報を確認）
- **既存のSEO/OGP/Analytics等の移植**
- **既存のアニメーションやトランジションのNext.js対応**

---

## 4. まとめ：Next.jsリプレイスの全作業リスト

1. Next.js新規プロジェクト作成・初期設定
2. 依存パッケージの再インストール・設定
3. Tailwind/ESLint/tsconfig等の移植
4. ページ・ルーティングのNext.js化
5. 全コンポーネント・UIパーツの移植
6. 静的アセットの移植・パス修正
7. サーバーサイドAPIのNext.js化
8. グローバルスタイル・レイアウトの再設計
9. i18n, SEO, アクセシビリティ等のNext.js化
10. Vercelデプロイ用設定
11. テスト・動作検証・本番デプロイ

---

## 5. 方針確定・ご要望まとめ

- ブランドカラー・デザインガイドライン：初期は現状を完全再現、その後ご指示で細部調整
- API/バックエンド：Next.js内API Routeで内包しつつ、外部API化も容易な汎用設計
- i18n/SEO：どちらも強化（next-intl/next-i18next、metadata/OGP/Sitemap/構造化データ）
- Vercelデプロイ：現状の独自ドメインをそのまま移行

---

## 6. 進行フロー

1. Next.js新規プロジェクト作成・初期セットアップ
2. 既存サイトのフル再現（デザイン・機能）
3. i18n/SEO強化
4. API/バックエンドの汎用設計
5. Vercelデプロイ・独自ドメイン移行
6. デザイン・機能の細部調整（ご指示に応じて）

---

## 7. プロジェクトマネージャーからClaude Codeへの指示

- このドキュメントを参照し、Next.jsリプレイス作業を段階的に進めてください。
- まずはNext.js新規プロジェクトの初期セットアップ・ディレクトリ設計から着手し、以降は上記フローに従って移植・実装を進めてください。
- デザイン・機能の細部調整は、オーナーからの追加指示に従ってください。

---

（この会話ログは2025年6月時点のものです） 