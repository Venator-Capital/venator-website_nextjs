# メール配信最終チェックリスト

## 技術面チェック

### ✅ HTML互換性
- [ ] CSS Grid, :hover, box-shadow 完全撤廃
- [ ] SVGアイコン → テキスト記号（■✓●）
- [ ] テーブルベースレイアウト
- [ ] インラインCSS使用

### ✅ 画像最適化
- [ ] ロゴ: width/height/ALT属性
- [ ] 重要文言: 生テキスト（画像依存なし）
- [ ] 総サイズ < 102KB（Gmailクリップ回避）

### ✅ リンク設定
- [ ] 全リンクにUTMパラメータ
- [ ] 自社ドメイン中継（venator-capital.net/assessment）
- [ ] 同一タブ開き（target未指定）

## 配信面チェック

### ✅ ヘッダー設定
- [ ] From: "Souta from Venator Capital <info@venator-capital.net>"
- [ ] Reply-To: info@venator-capital.net
- [ ] List-Unsubscribe: ESP側で設定済み

### ✅ 認証設定
- [ ] SPF: _spf.venator-capital.net
- [ ] DKIM: d=venator-capital.net
- [ ] DMARC: p=none（段階的改善予定）

### ✅ 配信テスト
- [ ] Gmail（Web/Android/iOS）
- [ ] Outlook（M365/Win/旧版）
- [ ] iOS Mail, Yahoo!
- [ ] 画像OFF/ON, ダークモード

## 運用面チェック

### ✅ コンテンツ一貫性
- [ ] 全箇所で"2 weeks & 48h SLA"統一
- [ ] "3x faster" → "2 weeks"に修正
- [ ] 英語版: 完全英語統一
- [ ] 日本語版: 完全日本語統一

### ✅ CTA最適化
- [ ] 主CTA: "Get Free Assessment (48h SLA)"
- [ ] 副CTA: mailtoのみ（分散禁止）
- [ ] マイクロ抵抗除去文言追加
- [ ] ターゲット明示（IT & Ops leaders）

### ✅ 配信設定
- [ ] 件名ABテスト: 3パターン準備
- [ ] プレーンテキスト版作成
- [ ] 配信時間: 火水木の最適時間帯
- [ ] 監視指標設定

## 配信後監視

### 📊 即座に確認
- [ ] 配信率（各メーラー別）
- [ ] バウンス率
- [ ] スパム判定

### 📊 24時間以内
- [ ] 開封率
- [ ] クリック率
- [ ] 返信率
- [ ] 配信停止率

### 📊 48時間以内
- [ ] CTA到達率
- [ ] フォーム送信数
- [ ] 問い合わせ内容分析

## 緊急対応

### 🚨 配信問題発生時
1. **即座に配信停止**
2. **技術チームに連絡**
3. **問題箇所特定・修正**
4. **再配信テスト**
5. **段階的配信再開**

### 🚨 スパム判定時
1. **配信リスト分割**
2. **件名・内容調整**
3. **配信間隔調整**
4. **認証設定見直し**
