# Asset List: Venator Capital LLC Official Website

このドキュメントは、Venator Capital公式サイトに使用される全アセット（画像、動画、アニメーション、ロゴ）の一覧と、それぞれの用途・配置方法・形式ルールを定義します。

---

## 🔹 1. ロゴ（公式）

| ファイル名                        | 種別    | 用途                   | 配置先       |
|----------------------------------|---------|------------------------|--------------|
| `venator_logo_black.svg`         | SVG     | Navbar, Footer         | `/public/`   |
| `venator_logo_black.png`         | PNG     | Heroセクション中央     | `/public/`   |
| `venator_logo_white.svg`         | SVG     | 黒背景に白抜きで表示   | `/public/`   |
| `venator_logo_white.png`         | PNG     | ダークモード時の代替   | `/public/`   |

> ✅ SVG優先。PNGはSafariなどSVG互換性対策として残す。  
> ✅ ファイル名にバージョン（`_white`, `_black`）を明記。

---

## 🔹 2. アニメーション（Lottie / Gif）

| ファイル名                        | 種別    | 用途                   | 配置先       |
|----------------------------------|---------|------------------------|--------------|
| `hero_background_motion.json`    | Lottie  | Heroセクション背景      | `/public/lottie/` |
| `cta_signal_loop.json`           | Lottie  | CTA横で微動する装飾     | `/public/lottie/` |
| `hero_wireframe_loop.gif`        | GIF     | Hero背景代替（低負荷） | `/public/gif/` |

> ✅ Lottie使用時は`react-lottie`または`lottie-react`で実装  
> ✅ モバイルではGIF fallbackに切り替える想定

---

## 🔹 3. プロジェクト関連ビジュアル（任意）

| ファイル名                        | 種別    | 用途                         | 配置先       |
|----------------------------------|---------|------------------------------|--------------|
| `clipwise_preview.png`           | PNG     | ProjectCard (ClipWise)       | `/public/projects/` |
| `autopilot_mockup.png`           | PNG     | ProjectCard (AutoPilot)      | `/public/projects/` |
| `droptop_ui.png`                 | PNG     | ProjectCard (DropTop)        | `/public/projects/` |
| `passflow_map.png`               | PNG     | ProjectCard (PassFlow)       | `/public/projects/` |

> ✅ 1280px以内、webp圧縮も検討  
> ✅ モックアップ作成前でも仮画像でOK（例：`placeholder.png`）

---

## 🔹 4. ソーシャルメディア / メタ画像（OGP）

| ファイル名             | 用途                          | 推奨サイズ           |
|------------------------|-------------------------------|----------------------|
| `ogp_main.png`         | SNSシェア / link preview      | 1200×630px           |
| `favicon.ico`          | ブラウザタブ / モバイル表示    | 32×32 / 64×64px      |
| `apple-touch-icon.png` | iOS用アプリショートカット       | 180×180px            |

---

## 🔹 配置ルール

- 静的ファイルはすべて `/public/` またはその配下に配置
- Reactからは `/ファイル名` で直接参照
- ファイル管理は `kebab-case` or `snake_case`（一貫性を持たせる）

---

## 🔹 今後の運用

- アセット数が増えたら `/assets/` フォルダを分割管理（例：`/assets/logos/`, `/assets/projects/`）
- 画像最適化には [Squoosh](https://squoosh.app/) を推奨
- Git管理時は `.gitignore` に大サイズ動画や元素材は除外