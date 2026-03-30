# Venator Capital Website - Version Management Guide

## 概要

このドキュメントは、Venator Capitalのウェブサイトのバージョン管理と復元手順を説明します。

## 現在のバージョン構成

### バージョン1.0.0 (Production)
- **ブランチ**: `main`
- **タグ**: `v1.0.0-production`
- **コミット**: `0d694d7` - "Initial Next.js migration and setup"
- **状態**: 現在デプロイ中の本番サイト
- **保護**: 完全に保護されており、変更されません

### バージョン2.0.0 (Development)
- **ブランチ**: `v2.0.0-development`
- **コミット**: `1656214` - "feat: Version 2.0.0 - Complete UI redesign and modernization"
- **状態**: 新しいUIデザインとモダン化が完了した開発版
- **特徴**: 
  - 完全にリデザインされたHeroSection
  - 3D Spline背景の統合
  - 新しいコンポーネント（InteractiveElements, LoadingScreen, ScrollProgress等）
  - 改善されたレスポンシブデザインとアクセシビリティ

## 復元手順

### バージョン1.0.0（本番版）に戻す場合

```bash
# 現在の変更を保存（必要に応じて）
git stash

# バージョン1.0.0のタグにチェックアウト
git checkout v1.0.0-production

# または、mainブランチにチェックアウト
git checkout main
```

### バージョン2.0.0（開発版）に戻す場合

```bash
# バージョン2.0.0のブランチにチェックアウト
git checkout v2.0.0-development

# 最新の変更を取得
git pull origin v2.0.0-development
```

### 特定のコミットに戻す場合

```bash
# コミットハッシュを指定してチェックアウト
git checkout <commit-hash>

# 例：バージョン1.0.0のコミット
git checkout 0d694d7

# 例：バージョン2.0.0のコミット
git checkout 1656214
```

## バックアップファイル

### 場所
- **バックアップディレクトリ**: `backup/`
- **以前のコンポーネント**: `backup/components/`
- **以前のセクション**: `backup/sections/`

### 復元方法

```bash
# バックアップから特定のコンポーネントを復元
cp backup/components/HeroSection.tsx src/components/
cp backup/components/Layout.tsx src/components/

# または、git restoreを使用
git restore backup/components/HeroSection.tsx --source=HEAD
```

## 重要な注意事項

### 1. 本番サイトの保護
- `main`ブランチと`v1.0.0-production`タグは**絶対に変更しないでください**
- 本番サイトへの影響を避けるため、直接的なマージは行わないでください

### 2. 開発作業
- 新しい機能開発は`v2.0.0-development`ブランチで行ってください
- 必要に応じて新しいブランチを作成してください

### 3. デプロイ
- 本番サイトへのデプロイは`main`ブランチから行ってください
- 開発版のデプロイは`v2.0.0-development`ブランチから行ってください

## トラブルシューティング

### マージコンフリクトが発生した場合

```bash
# コンフリクトを解決
git status  # コンフリクトファイルを確認
# ファイルを編集してコンフリクトを解決
git add <resolved-file>
git commit -m "Resolve merge conflicts"
```

### 変更を失った場合

```bash
# stashされた変更を確認
git stash list

# 特定のstashを復元
git stash pop stash@{n}

# または、特定のstashを適用
git stash apply stash@{n}
```

### リモートとの同期

```bash
# リモートの最新情報を取得
git fetch origin

# リモートブランチの一覧を確認
git branch -r

# リモートブランチをローカルに作成
git checkout -b <branch-name> origin/<branch-name>
```

## 推奨ワークフロー

### 新機能開発の場合

```bash
# 開発ブランチから新しい機能ブランチを作成
git checkout v2.0.0-development
git checkout -b feature/new-feature

# 開発作業
# ...

# コミット
git add .
git commit -m "feat: add new feature"

# プッシュ
git push origin feature/new-feature

# プルリクエストを作成してv2.0.0-developmentにマージ
```

### 本番リリースの場合

```bash
# 開発版が安定したら、mainブランチにマージ
git checkout main
git merge v2.0.0-development

# 新しい本番タグを作成
git tag -a v1.1.0-production -m "Version 1.1.0 - Production release"
git push origin v1.1.0-production
```

## サポート

問題が発生した場合や、追加の説明が必要な場合は、開発チームに連絡してください。

---

**最終更新**: 2025年1月
**作成者**: AI Assistant
**バージョン**: 1.0
