# patch_email_copy.py
# usage:
#   python patch_email_copy.py venator-capital-email-template-light-ja.html
#   python patch_email_copy.py venator-capital-email-template-light-ja.html --with-optional
#   python patch_email_copy.py venator-capital-email-template-light-ja.html --dry-run
import argparse, shutil, sys
from pathlib import Path

REQUIRED = [
    # 1) mailto本文の不自然語（URLエンコード）
    ("%E6%83%85%E5%A0%B1%E7%B3%BB%E7%B5%B1%E5%90%8C%E5%BA%A7%3A%E6%9C%89%E3%83%BB%E7%84%A1",
     "%E6%83%85%E5%A0%B1%E3%82%B7%E3%82%B9%E3%83%86%E3%83%A0%E9%83%A8%E9%96%80%E5%90%8C%E5%B8%AD%3A%E6%9C%89%E3%83%BB%E7%84%A1",
     "mailto: 情報系統同座→情報システム部門同席"),
    # 2) 断片文（Process 01）
    ("手戻りを抑止。", "手戻りを抑止します。", "Process01 断片文→完全文"),
    # 3) 断片文（Process 02）
    ("実働プロトタイプを構築。迅速にレビュー可能です。",
     "実働プロトタイプを構築します。迅速にレビュー可能です。",
     "Process02 断片文→完全文"),
    # 4) 断片文（Process 04）
    ("安心して本番へ。", "安心して本番へ移行できます。", "Process04 断片文→完全文"),
    # 5) FAQ内の文末ブレ
    ("既存資産の再活用を前提に構成。", "既存資産の再活用を前提に構成します。", "FAQ 文末統一"),
    # 6) "材料"→"資料" 残存
    ("投資継続の可否を判断する材料を揃えます。", "投資継続の可否を判断する資料を揃えます。", "用語統一 材料→資料"),
    # 7) 段階導入→段階的導入
    ("段階導入します。", "段階的導入します。", "表記統一 段階的導入"),
    # 8) 脆弱性 検査→スキャン（本文）
    ("継続的な脆弱性検査。", "継続的な脆弱性スキャン。", "表記統一 スキャン"),
    # 9) 記号統一 ／→・（特定箇所のみ）
    ("監視／監査ログ／通知", "監視・監査ログ・通知", "記号統一 中点"),
    # 10) 「動作する成果物」→「実働プロトタイプ」
    ("短期間で動作する成果物を構築します。", "短期間で実働プロトタイプを構築します。", "用語統一 実働プロトタイプ"),
    # 11) 48時間の主語明確化（Stats）
    ("初回提案は受領後48時間以内", "初回提案はご依頼受領後48時間以内", "Stats 文意明確化"),
]

OPTIONAL = [
    # 12) ヒーローの断定→検証（法務にやさしい保守案）
    ("顧客対応の自動化、レポート作成の効率化、異常検知の自動化を2週間で実現。",
     "顧客対応の自動化、レポート作成の効率化、異常検知の自動化を2週間での実現可能性を検証します。",
     "ヒーロー 断定→検証"),
    # 13) 価値ブロック見出しのトーン調整
    ("お支払いいただく価値", "ご提供価値", "見出しトーン調整"),
    # 14) Contact段落末の自然さ
    ("48時間で初期提案までお返しします。", "48時間で初期提案までご提示します。", "日本語自然さ（提示）"),
    # 15) <title> の自然さ（お好み）
    ("エンタープライズ要件でAI導入を加速", "エンタープライズ要件に適合するAI導入を加速", "タイトル自然さ"),
]

def apply_replacements(text: str, repls: list[tuple[str, str, str]]):
    total = 0
    report = []
    for old, new, label in repls:
        count = text.count(old)
        if count:
            text = text.replace(old, new)
        total += count
        report.append((label, count))
    return text, total, report

def main():
    ap = argparse.ArgumentParser(description="Venator email HTML 一括置換パッチャ")
    ap.add_argument("file", help="対象HTMLファイルのパス")
    ap.add_argument("--with-optional", action="store_true", help="任意の置換（12–15）も適用する")
    ap.add_argument("--dry-run", action="store_true", help="置換せず差分件数のみ表示")
    args = ap.parse_args()

    p = Path(args.file)
    if not p.exists():
        print(f"[ERR] ファイルが見つかりません: {p}", file=sys.stderr)
        sys.exit(1)

    src = p.read_text(encoding="utf-8")
    text, total_req, rep_req = apply_replacements(src, REQUIRED)

    total_opt = 0
    rep_opt = []
    if args.with_optional:
        text, total_opt, rep_opt = apply_replacements(text, OPTIONAL)

    # レポート出力
    print("=== 必須置換（1–11）結果 ===")
    for label, cnt in rep_req:
        print(f"{label}: {cnt} 件")
    print(f"合計: {total_req} 件\n")

    if args.with_optional:
        print("=== 任意置換（12–15）結果 ===")
        for label, cnt in rep_opt:
            print(f"{label}: {cnt} 件")
        print(f"合計: {total_opt} 件\n")

    if args.dry_run:
        print("[DRY-RUN] 書き込みは行っていません。")
        return

    # バックアップ & 書き込み
    backup = p.with_suffix(p.suffix + ".bak")
    shutil.copy2(p, backup)
    p.write_text(text, encoding="utf-8")
    print(f"[OK] 置換を適用しました。バックアップ: {backup}")

if __name__ == "__main__":
    main()
