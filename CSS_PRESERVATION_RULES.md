# CSS保全ルール - 絶対に守るべき原則

## 禁止事項
1. ❌ `rm -rf .next` を安易に実行しない
2. ❌ layout.tsxからTailwind importを削除しない
3. ❌ テスト時にコンポーネントを簡略化しない
4. ❌ globals.cssファイルを編集・削除しない
5. ❌ tailwind.config.tsを変更しない

## 必須確認事項
1. ✅ 変更前に必ず `ls -la .next/static/css` でCSS存在確認
2. ✅ layout.tsxには常に `import "./globals.css"` を維持
3. ✅ ビルドエラー時は削除ではなく修正で対応
4. ✅ Provider変更時はCSS importを保持
5. ✅ テスト後は必ず元のコンポーネント構造に戻す

## CSS消失時の復旧手順
1. サーバー停止
2. `npm run build` でビルド実行
3. `npm run dev` で再起動
4. CSSファイル生成確認
5. それでもダメなら git stash で一時退避後、git stash pop

## Next.js 15.4.2 特有の注意点
- App Routerではglobals.cssのimportが必須
- CSS ModulesよりTailwindクラスを優先使用
- 'use client'の配置に注意（CSSに影響）