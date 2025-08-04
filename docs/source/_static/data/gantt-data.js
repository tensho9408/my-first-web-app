// Auto-generated Mermaid Gantt chart
window.ganttData = {
  "week": `
    gantt
      title 学習ロードマップ（週表示）
      dateFormat  YYYY-MM-DD
      axisFormat  %m/%d
      tickInterval 1day

      section フロントエンド
      HTML/CSS（90%） : active, e1, 2025-07-30, 2025-08-04
      JavaScript入門 : c6, 2025-08-04, 2025-08-06
      JavaScript入門 : c6, 2025-08-11, 2025-08-14

      section 基礎知識（独学）
      Linux基礎（10%） : active, c3, 2025-08-06, 2025-08-08
      Docker基礎 : c4, 2025-08-07, 2025-08-09
      Github練習 : c5, 2025-08-08, 2025-08-09
      アルゴリズム入門 : c7, 2025-08-09, 2025-08-13

      section 復習
      CSS : e1, 2025-08-09, 2025-08-10
      ロードマップ整理 : d1, 2025-08-08, 2025-08-10

      section マイルストーン
      広州 : milestone, m1, 2025-08-05, 0d

  `,
  "month": `
    gantt
      title 学習ロードマップ（月表示）
      dateFormat  YYYY-MM-DD
      axisFormat  %Y-%m
      tickInterval 1month

      section スクール
      受講期間 : a1, 2025-07-28, 2025-11-28

  `
};

// Done tasks for history log
window.doneTasks = 
[
  {
    "id": "b1",
    "name": "環境構築",
    "section": "基礎知識",
    "start": "2025-07-28",
    "end": "29",
    "status": "done",
    "critical": false,
    "progress": 0,
    "milestone": false,
    "note": "統合環境の使用はVSが王道。"
  },
  {
    "id": "c1",
    "name": "Github操作",
    "section": "基礎知識",
    "start": "2025-07-29",
    "end": "30",
    "status": "done",
    "critical": false,
    "progress": 0,
    "milestone": false,
    "note": "リポジトリとGitHubの設定、SSH秘密鍵の設定が難しかった。"
  },
  {
    "id": "c2",
    "name": "エンジニア入門",
    "section": "基礎知識",
    "start": "2025-07-28",
    "end": "29",
    "status": "done",
    "critical": false,
    "progress": 0,
    "milestone": false,
    "note": "ロードマップの課題提出に向けて、sphinxのライブラリを使用し、ブログ風に作成した。Github ActionとCI・CDの構築などに触れられて勉強になった。"
  },
  {
    "id": "d1",
    "name": "ロードマップ整理",
    "section": "課題",
    "start": "2025-07-28",
    "end": "31",
    "status": "done",
    "critical": false,
    "progress": 0,
    "milestone": false,
    "note": "今後学習内容のまとめなど追加していく"
  },
  {
    "id": "f1",
    "name": "Github応用",
    "section": "応用",
    "start": "2025-07-29",
    "end": "30",
    "status": "done",
    "critical": false,
    "progress": 0,
    "milestone": false,
    "note": "新規ブランチの作成からマージンまで操作できるようになった。また、慣れてきたのかターミナルから操作する方がGUIの画面操作より楽に感じる。"
  }
]
;