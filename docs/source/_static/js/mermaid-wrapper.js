// _static/js/mermaid-wrapper.js
document.addEventListener("DOMContentLoaded", () => {
  if (typeof mermaid === "undefined") {
    console.error("Mermaid is not loaded.");
    return;
  }

  if (typeof window.ganttData === "undefined") {
    console.error("ganttData is not loaded.");
    return;
  }

  // Mermaid Gantt を描画する関数
  window.renderGantt = function (type = "week") {
    const container = document.getElementById("mermaid-chart");
    if (!container) return;

    const code = window.ganttData[type];
    if (!code) {
      console.error("Mermaid Gantt code is undefined for type:", type);
      return;
    }

    container.innerHTML = `<pre class="mermaid">${code}</pre>`;
    mermaid.run();  // ← innerHTML に挿入された mermaid を再解析
  };

  // Mermaid 初期設定
  mermaid.initialize({
    startOnLoad: false, // 自動で描画せず、明示的に renderGantt() で描画
    theme: "base",      // Mermaid のテーマ、 "dark"、"forest"、"neutral"、"default"、"base"

    themeVariables: {
      fontFamily: "Fira Code, sans-serif",
      fontSize: "16px",           // チャート全体のフォントサイズ
      primaryColor: "#f9c74f",    // タスクバーのメイン色（黄色）
      primaryTextColor: "#000000",// タスクの文字色（黒）
      background: "#ffffff",      // チャート全体の背景色（白）
      todayLineColor: "#ff0000",  // 今日の縦線の色（赤）
      todayLineWidth: 2,          // 今日の縦線の太さ（px）
      edgeLabelBackground: "#e8e8e8",
      taskTextLightColor: "#fff",   // テキストが暗背景のときの色
      taskTextOutsideColor: "#000", // タスク外に出たテキストの色
      gridColor: "#dddddd",         // チャートのグリッド線
    },

    gantt: {
      axisFormat: "%m/%d" // 日付の軸フォーマット（例：07/27）
    }
  });

  // 初回描画（週表示）
  renderGantt("week");
});
