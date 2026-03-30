'use client';

import { useEffect } from 'react';

export default function TypographyEnhancer() {
  useEffect(() => {
    const SELECTOR = '.hero-title, .section-title';

    /** 1) text-wrap: balance の簡易ポリフィル */
    function balanceText(el: HTMLElement) {
      const supports = CSS && CSS.supports && CSS.supports('text-wrap: balance');
      if (supports) return; // ネイティブ対応なら不要

      const original = el.textContent?.trim().replace(/\s+/g, ' ') || '';
      const words = original.split(' ');
      if (words.length < 3) return;

      // 2行狙い：前後の語数を試し、短行/孤児行を避ける
      let best = original;
      let minRag = Infinity;

      for (let i = 1; i < words.length; i++) {
        const left = words.slice(0, i).join(' ');
        const right = words.slice(i).join(' ');
        const rag = Math.abs(left.length - right.length);
        if (rag < minRag) { 
          minRag = rag; 
          best = left + '<br>' + right; 
        }
      }
      el.innerHTML = best;
    }

    /** 2) 日本語の自然改行ポイント挿入（語ベース） */
    function insertJaBreaks(el: HTMLElement) {
      if (el.closest('[lang="en"]')) return;
      
      const text = el.textContent || '';
      
      // 重要な語句・複合語を保護する（優先順位順）
      let result = text
        // 長い複合語を先に処理
        .replace(/(AIエージェント構築|社内AI人材育成|AIソリューション|業務効率化|最適化された|システム統合|インフラ構築|Webアプリケーション|フルスタックAI|カスタムソリューション)/g, '<span class="nb">$1</span>')
        // 単語レベルの保護
        .replace(/(AI|組織|変える|人材|育成|構築|エージェント|ソリューション|デプロイ|フルスタック|カスタム|システム|インフラ|アプリケーション|統合|設計|支援|サポート|効率|最適|包括的)/g, '<span class="nb">$1</span>')
        // 助詞・助動詞を前の語と結合
        .replace(/([^<>\s])(を|に|へ|と|が|は|も|の|で|や|か|て|だ|な|る|ら|ない|たい|ます|です|まで|から|による|として|による)(\s|$)/g, '$1<span class="nb">$2</span>$3');
      
      el.innerHTML = result;
    }

    /** 3) 最終行の孤児回避（最後の2語を結合） */
    function preventOrphans(el: HTMLElement) {
      // 英語…末尾のスペースをノーブレークスペースへ
      if (el.querySelector('[lang="en"]')) {
        el.innerHTML = el.innerHTML.replace(/\s+([^\s<>]+)\s*$/, '&nbsp;$1');
        return;
      }
      
      // 日本語…最後の2セグメントを .nb でまとめる
      const text = el.textContent || '';
      // @ts-ignore
      const seg = (window.Intl && Intl.Segmenter) ? new Intl.Segmenter('ja', { granularity: 'word' }) : null;
      if (!seg) return;
      
      // @ts-ignore
      const arr = Array.from(seg.segment(text));
      if (arr.length < 2) return;
      
      const head = arr.slice(0, -2).map((s: any) => s.segment).join('');
      const tail = arr.slice(-2).map((s: any) => s.segment).join('');
      el.innerHTML = head + `<span class="nb">${tail}</span>`;
    }

    /** 初期化 */
    function init() {
      document.querySelectorAll(SELECTOR).forEach((el) => {
        const element = el as HTMLElement;
        // 先に日本語処理（必要なら）
        insertJaBreaks(element);
        // バランス & 孤児回避
        balanceText(element);
        preventOrphans(element);
      });
    }

    // 初期実行＆フォント読み込み後にも再実行（メトリクス変動対策）
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', init);
    } else { 
      init(); 
    }
    
    window.addEventListener('load', init);

    // リサイズでの再評価（連打防止）
    let rid: NodeJS.Timeout | null = null;
    const handleResize = () => {
      if (rid) clearTimeout(rid);
      rid = setTimeout(init, 120);
    };
    
    window.addEventListener('resize', handleResize);

    // クリーンアップ
    return () => {
      window.removeEventListener('load', init);
      window.removeEventListener('resize', handleResize);
      if (rid) clearTimeout(rid);
    };
  }, []);

  return null; // このコンポーネントはUIをレンダリングしない
}
