// Mermaid の初期化と Gantt チャート描画を管理するクラス
class Main {
  constructor() {
    // Mermaid が読み込まれているか確認
    if (typeof mermaid === "undefined") {
      console.error("Mermaid is not loaded.");
      return;
    }

    // 外部データファイルが読み込まれているか確認
    if (typeof window.ganttData === "undefined") {
      console.error("ganttData is not loaded.");
      return;
    }

    // Mermaid チャートを表示する要素を取得
    this.container = document.getElementById("mermaid-chart");
    if (!this.container) {
      console.warn("Mermaid chart container not found.");
      return;
    }

    // Mermaid の設定と初回描画を実行
    this.initMermaid();
    this.initButtons(); // ← ボタンイベントのバインド
    this.render("week"); // デフォルトは週表示
  }

  // Mermaid の初期設定（テーマやスタイルなど）
  initMermaid() {
    mermaid.initialize({
      startOnLoad: false, // 明示的に描画関数を呼び出す
      theme: "base",
      themeVariables: {
        fontFamily: "Fira Code, sans-serif",
        fontSize: "16px",               // 全体のフォントサイズ
        primaryColor: "#f9c74f",        // タスクバーの色
        primaryTextColor: "#000000",    // テキスト色
        background: "#ffffff",          // 背景色
        todayLineColor: "#ff0000",      // 今日を示す線の色
        todayLineWidth: 2,              // 今日線の太さ
        edgeLabelBackground: "#e8e8e8", // ラベルの背景
        taskTextLightColor: "#fff",     // 明るい背景のテキスト色
        taskTextOutsideColor: "#000",   // タスク外テキストの色
        gridColor: "#dddddd"            // グリッド線の色
      },
      gantt: {
        axisFormat: "%m/%d" // 軸の日付フォーマット
      }
    });
  }

  // Gantt チャートを描画する
  render(type = "week") {
    const code = window.ganttData[type];
    if (!code) {
      console.error(`Gantt code not found for type: ${type}`);
      return;
    }

    this.container.innerHTML = `<pre class="mermaid">${code}</pre>`;
    mermaid.run(); // Mermaid を再解析して描画
  }

  // ボタンクリックイベントを登録する（HTML 側の ID に依存）
  initButtons() {
    const weekBtn = document.getElementById("btn-week");
    const monthBtn = document.getElementById("btn-month");

    if (weekBtn) {
      weekBtn.addEventListener("click", () => this.render("week"));
    }

    if (monthBtn) {
      monthBtn.addEventListener("click", () => this.render("month"));
    }
  }
}

// DOM 読み込み完了後に Main を初期化（defer が付いていれば不要）
document.addEventListener("DOMContentLoaded", () => {
  window.MainApp = new Main(); // グローバル参照も可能（デバッグ・開発用）
});
