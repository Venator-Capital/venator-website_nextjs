# ESP配信設定ガイド - Venator Capital

## 必須設定（配信率向上）

### 1. From/Reply-To設定
```
From: Souta from Venator Capital <info@venator-capital.net>
Reply-To: info@venator-capital.net
```

**効果**: 開封・返信率が上がります

### 2. List-Unsubscribe（ESP側ヘッダー）
```
List-Unsubscribe: <https://venator-capital.net/unsubscribe?email={{email}}>, <mailto:unsubscribe@venator-capital.net?subject=unsubscribe>
List-Unsubscribe-Post: List-Unsubscribe=One-Click
```

**注意**: HTML内ではなくESPのヘッダー設定です

### 3. SPF/DKIM/DMARC設定
```
SPF: v=spf1 include:_spf.venator-capital.net ~all
DKIM: d=venator-capital.net; s=default; k=rsa;
DMARC: v=DMARC1; p=none; rua=mailto:dmarc@venator-capital.net
```

**段階的改善**: p=none → quarantine → reject

### 4. BIMI（後回し可）
```
BIMI: v=BIMI1; l=https://venator-capital.net/logo.svg; a=https://venator-capital.net/vmc.pem
```

**要件**: SVG-Tiny + VMC証明書

## 配信テスト環境

### 主要メーラー
- Gmail（Web/Android/iOS）
- Outlook（M365/Win/旧版）
- iOS Mail
- Yahoo!

### テスト項目
- 画像OFF/ON
- ダークモード
- 1×/2×DPI
- 返信ボタンのmailto事前埋め込み機能

## 配信スケジュール

### 最適時間帯（日本時間）
- **火曜日**: 10:00-11:00
- **水曜日**: 14:00-15:00
- **木曜日**: 9:00-10:00

### 避ける時間帯
- 月曜日朝（メール処理集中）
- 金曜日夕方（週末前の忙しさ）
- 祝日前後

## 監視指標

### 配信率目標
- **Gmail**: 95%以上
- **Outlook**: 90%以上
- **その他**: 85%以上

### 開封率目標
- **初回配信**: 25%以上
- **フォローアップ**: 35%以上

### クリック率目標
- **CTA**: 8%以上
- **全体**: 12%以上
