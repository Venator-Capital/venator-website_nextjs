# Animation Guidelines: Venator Capital LLC Official Website

本ドキュメントでは、Venator Capitalの公式ウェブサイトにおけるUIアニメーションの基本設計方針を記述します。  
すべてのアニメーションは、**品のある動き・重くないUX・意図のある変化**に限定します。

---

## 🔹 使用技術

| 種別           | 使用ツール / ライブラリ |
|----------------|--------------------------|
| 基本アニメ     | Framer Motion（React対応） |
| 装飾 / 背景    | Lottie Web / .json |
| 軽量トランジション | Tailwind CSS `transition` `transform` |

---

## 🔹 アニメーションの原則

- 動きすぎない：滞在時間の長いページで疲労を起こさない
- "意味のある動き" のみを採用（出現・注目・状態変化）
- 短時間で完結する（0.3〜0.6sが中心）

---

## 🔹 セクションごとのアニメーション設計

### Hero Section

| 要素         | アニメーション内容 |
|--------------|--------------------|
| ロゴ         | `fadeIn` + `scale` (0.6s) |
| タイトル     | `fadeInUp` + delay (0.4s〜0.6s) |
| CTAボタン     | `fadeInRight` または `staggered` |

**Framer Motion例（概念）**
```jsx
<motion.h1
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
  Turning Niche Into Core.
</motion.h1>
Navbar
状態	アニメーション内容
スクロール後	背景 transparent → #000 with fade-in
モバイル展開	スライドメニュー（slideInRight）

Section Entry（共通）
すべてのセクション（About, Projectsなど）に以下を適用：

jsx
コピーする
編集する
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
  viewport={{ once: true }}
>
  {/* Section content */}
</motion.div>
ProjectCard（ホバー）
イベント	動作
hover	scale(1.02) + shadow-lg + transition ease-in-out

Tailwind簡易記述：

html
コピーする
編集する
<div class="transition-transform duration-300 transform hover:scale-105 hover:shadow-xl">
🔹 Lottie Animation（オプション）
使用箇所候補：

Heroセクションの背景（半透明線が動く都市・ネットワーク図）

CTA周辺の装飾（ボタン横に非干渉Lottie）

注意点：

.jsonは軽量にし、1MB以下

モバイル時は表示を制限または停止

🔹 ページ遷移（Multipage構成時）
Framer Motionの AnimatePresence を利用し、以下を設定：

フェードイン/アウト

ページ遷移時にスクロールトップへ戻す

🔹 動作タイミング目安
種類	時間（秒）
フェード出現	0.4–0.6
スライド移動	0.5–0.7
ボタンホバー	0.2–0.3
セクション入場	0.5