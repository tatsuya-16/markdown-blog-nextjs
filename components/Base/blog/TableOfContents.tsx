"use client";

import React, { useEffect } from "react";
import tocbot from "tocbot";

export default function TableOfContents() {
  useEffect(() => {
    // Tocbotの初期化
    tocbot.init({
        tocSelector: ".toc", // 目次の表示部分のクラス
        contentSelector: ".blog", // 目次を生成する対象のクラス
        headingSelector: "h1, h2, h3",
        tocScrollingWrapper: null, // スクロールする要素
        headingsOffset: 16, // ヘッダーのオフセット
        scrollSmoothOffset: -16, // スクロールのオフセット
    });

    // コンポーネントがアンマウントされたときにTocbotを破棄
    return () => tocbot.destroy();
  }, []);

  return (
    <div className="sticky top-0 pt-16 ml-8">
      <h2 className="text-xl border-l-4 border-secondary pl-1">ToC</h2>
      <div className="toc px-0 pb-8 text-base"></div> {/* 目次の表示部分 */}
    </div>
  );
}
