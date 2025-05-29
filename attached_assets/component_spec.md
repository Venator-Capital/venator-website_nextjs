# Component Specifications: Venator Capital LLC Official Website

本ドキュメントは、React + Tailwind CSSを用いたVenator公式サイトにおける主要UIコンポーネントの構成・プロパティ仕様を定義する。

---

## 🔹 Navbar

**ファイル名**: `Navbar.jsx`

| 要素         | 内容 |
|--------------|------|
| ロゴ         | 左上に配置、クリックで`/`に遷移 |
| リンク       | About, Projects, Contact |
| モバイル     | ハンバーガーメニュー展開 |
| スクロール時 | 背景透明→黒に変化、影付与あり |

---

## 🔹 HeroSection

**ファイル名**: `HeroSection.jsx`

| 要素             | 内容 |
|------------------|------|
| ロゴ             | 中央または上部中央に表示 |
| キャッチコピー   | H1：48px程度、太字 |
| サブコピー       | 20px程度の説明文、灰色 |
| CTAボタン群      | 2つ：Explore Projects / Contact Us |
| 背景             | 黒、半透明エフェクト可 / Lottie挿入可能 |

---

## 🔹 AboutSection

**ファイル名**: `AboutSection.jsx`

| 要素        | 内容 |
|-------------|------|
| セクションタイトル | "About Venator Capital"（白文字） |
| テキストブロック   | 最大幅700px、中央揃え |
| 背景        | 濃いグレー（例：#111111） |

---

## 🔹 ProjectGrid

**ファイル名**: `ProjectGrid.jsx`

| 要素        | 内容 |
|-------------|------|
| セクションタイトル | "Featured Projects" |
| グリッド       | カード3〜6個（レスポンシブ対応） |
| 各カード       | `ProjectCard.jsx`を使用 |
| 背景           | ブラック、各カードはやや浮かせる |

---

## 🔹 ProjectCard

**ファイル名**: `ProjectCard.jsx`

| 要素        | 内容 |
|-------------|------|
| タイトル      | bold、24px |
| ステータス    | Badge：In Progress / Concept / Released |
| 説明文        | 100〜150文字程度 |
| アクション    | 詳細ボタン（将来的にproject/:slug遷移） |
| ホバー時      | 拡大 + シャドウ追加、スムーズアニメーション |

---

## 🔹 ContactSection

**ファイル名**: `ContactSection.jsx`

| 要素            | 内容 |
|-----------------|------|
| タイトル         | "Get in Touch" |
| フォーム or 外部リンク | Notion / Google Form で外部送信（最初は静的） |
| CTA文言         | "We’re open to collaborations, inquiries, and partnerships." |
| 背景            | 黒、明朝 or 青系アクセント可能 |

---

## 🔹 Footer

**ファイル名**: `Footer.jsx`

| 要素         | 内容 |
|--------------|------|
| ロゴ or テキスト | "© Venator Capital LLC 2025" |
| ナビゲーション | About / Projects / Contact |
| SNSリンク     | 任意（後から追加可能） |
| 配色         | ダークグレー、白文字 |

---

## 🔹 Layout Wrapper

**ファイル名**: `Layout.jsx`

| 内容 |
|------|
| 各ページに共通レイアウトを提供（Navbar → Children → Footer） |
| `children`を受け取り、meta情報もオプションで挿入可能 |

---

## 備考
- すべてのコンポーネントは `props` 最小限、状態管理は最小で。
- 状態を持つとすれば：Navbar開閉 / Animation Trigger（Framer Motionで管理）

