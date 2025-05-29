# Deployment Instructions: Venator Capital LLC Official Website

このドキュメントは、Replit上での開発・ビルド・公開・独自ドメイン接続までの一連のデプロイ手順をまとめたものです。

---

## 🔹 必要環境

| 項目                 | バージョン・要件             |
|----------------------|------------------------------|
| Replit account       | Pro推奨（独自ドメイン設定可能） |
| Node.js              | v18 以上                     |
| React                | v18 以上                     |
| Tailwind CSS         | 最新（CLI or PostCSS）       |
| Framer Motion        | v7 以上                      |

---

## 🔹 フォルダ構成（再掲）

venator_capital_website/
├── public/ # 静的ファイル（ロゴ、Lottieなど）
├── src/
│ ├── components/ # Reactコンポーネント
│ ├── pages/ # ルーティング（Next.jsの場合）
│ └── styles/ # Tailwind設定
├── replit.nix # Node環境宣言
├── index.html (Vite時)
├── tailwind.config.js
├── postcss.config.js
├── package.json

yaml
コピーする
編集する

---

## 🔹 Replitでの初期セットアップ手順

1. Replitで **"Create Repl" → "Node.js"** を選択  
2. 以下のパッケージをインストール：

```bash
npm install react react-dom vite
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
npm install framer-motion
tailwind.config.js 設定：

js
コピーする
編集する
content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"]
index.css 記述（Tailwind適用）：

css
コピーする
編集する
@tailwind base;
@tailwind components;
@tailwind utilities;
vite.config.js 作成（Vite使用時）：

js
コピーする
編集する
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
})
replit.nix（ReplitでのNode + Vite用）：

nix
コピーする
編集する
{ pkgs }: {
  deps = [
    pkgs.nodejs-18_x
    pkgs.yarn
  ];
}
🔹 ローカル開発コマンド
bash
コピーする
編集する
npm run dev
ブラウザで /index.html ではなく vite が指定したURL（例：localhost:5173）で確認。

🔹 Replitで公開
.replit ファイルを作成：

toml
コピーする
編集する
run = "npm run dev"
Replitの「Web View」→「Open in new tab」で動作確認

公開URL例：

arduino
コピーする
編集する
https://venator-capital-website.soutayamada.repl.co/
🔹 独自ドメイン接続（任意）
Replit画面右上の「Deployments」→「Custom Domain」

ドメイン名（例：venator.capital）を入力

Replitが指示するDNS設定（A or CNAME）をドメイン管理側で登録

数分〜1時間で反映

🔹 .envファイル・機密情報の扱い（今後拡張時）
.env を作成し、以下のような構成に：

env
コピーする
編集する
NOTION_API_KEY=xxx
GOOGLE_FORM_URL=xxx
vite.config.js に dotenv 読み込みを追加

本番環境と開発環境で分ける運用も視野に入れる

🔹 GitHub連携（推奨）
Replitの「Version Control」からGitHub接続

コミット履歴を残して品質担保＋協業しやすくする