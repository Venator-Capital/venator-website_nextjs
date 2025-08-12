# 🔄 コンポーネント復元手順書

## 📋 概要

このドキュメントは、新デザインの実装中に問題が発生した場合、既存のコンポーネントを復元する方法を説明します。

## 🚨 緊急復元が必要な場合

### 1. すべてのコンポーネントを復元

```bash
npm run restore:all
```

### 2. 特定のコンポーネントを復元

```bash
# ヒーローセクションのみ復元
npm run restore:component HeroSection

# ナビゲーションのみ復元
npm run restore:component Navbar

# レイアウトのみ復元
npm run restore:component Layout
```

## 📁 バックアップされているファイル

### コンポーネント
- `HeroSection.tsx` - ヒーローセクション
- `AboutSection.tsx` - 会社概要セクション
- `TechStackSection.tsx` - 技術スタックセクション
- `CapabilitiesSection.tsx` - サービス内容セクション
- `ContactSection.tsx` - お問い合わせセクション
- `Navbar.tsx` - ナビゲーションバー
- `Layout.tsx` - レイアウトコンポーネント
- `Footer.tsx` - フッター

### セクション
- `page.tsx` - メインページ
- `layout.tsx` - アプリケーションレイアウト

## 🔧 手動復元の手順

### 1. ファイルの直接コピー

```bash
# 例: ヒーローセクションを復元
cp backup/components/HeroSection.tsx src/components/

# 例: ページ全体を復元
cp backup/sections/page.tsx src/app/
```

### 2. 個別ファイルの復元

特定のファイルのみ復元したい場合：

```bash
# コンポーネントディレクトリから
cp backup/components/[ComponentName].tsx src/components/

# セクションディレクトリから
cp backup/sections/[SectionName].tsx src/app/
```

## 📝 復元後の確認事項

### 1. 開発サーバーの起動

```bash
npm run dev
```

### 2. 確認ポイント

- [ ] サイトが正常に表示される
- [ ] ナビゲーションが機能する
- [ ] 各セクションが正しく表示される
- [ ] 言語切り替えが動作する
- [ ] レスポンシブデザインが機能する

### 3. 問題が発生した場合

1. **ビルドエラー**: `npm run build` でエラーを確認
2. **依存関係の問題**: `npm install` を実行
3. **キャッシュの問題**: `.next` フォルダを削除して再起動

## 🎯 段階的復元の推奨

問題が特定のコンポーネントに限定されている場合、段階的に復元することを推奨します：

### 段階1: ナビゲーションの復元
```bash
npm run restore:component Navbar
npm run restore:component Layout
```

### 段階2: メインコンテンツの復元
```bash
npm run restore:component HeroSection
npm run restore:component AboutSection
```

### 段階3: 残りのセクションの復元
```bash
npm run restore:component TechStackSection
npm run restore:component CapabilitiesSection
npm run restore:component ContactSection
```

## ⚠️ 注意事項

1. **復元前に現在の変更をコミット**: 復元前に現在の作業を保存
2. **段階的なテスト**: 一度にすべてを復元せず、段階的にテスト
3. **バックアップの保持**: 復元後もバックアップファイルは保持

## 🆘 サポート

復元に問題がある場合：

1. エラーメッセージを確認
2. コンソールログを確認
3. 必要に応じて個別ファイルを手動で復元

## 📚 関連ファイル

- `scripts/restore-components.js` - 復元スクリプト
- `backup/components/` - コンポーネントのバックアップ
- `backup/sections/` - セクションのバックアップ
- `package.json` - 復元スクリプトの定義
