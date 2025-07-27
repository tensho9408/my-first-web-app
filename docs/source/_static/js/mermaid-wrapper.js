// _static/js/mermaid-wrapper.js

class Main {
  constructor() {
    if (typeof mermaid === "undefined") {
      console.error("Mermaid is not loaded.");
      return;
    }

    if (typeof window.ganttData === "undefined") {
      console.error("ganttData is not loaded.");
      return;
    }

    this.container = document.getElementById("mermaid-chart");
    if (!this.container) {
      console.warn("Mermaid chart container not found.");
      return;
    }

    this.initMermaid();
    this.render("week");
  }

  initMermaid() {
    mermaid.initialize({
      startOnLoad: false,
      theme: "base",
      themeVariables: {
        fontFamily: "Fira Code, sans-serif",
        fontSize: "16px",
        primaryColor: "#f9c74f",
        primaryTextColor: "#000000",
        background: "#ffffff",
        todayLineColor: "#ff0000",
        todayLineWidth: 2,
        edgeLabelBackground: "#e8e8e8",
        taskTextLightColor: "#fff",
        taskTextOutsideColor: "#000",
        gridColor: "#dddddd",
      },
      gantt: {
        axisFormat: "%m/%d"
      }
    });
  }

  render(type = "week") {
    const code = window.ganttData[type];
    if (!code) {
      console.error(`Gantt code not found for type: ${type}`);
      return;
    }

    this.container.innerHTML = `<pre class="mermaid">${code}</pre>`;
    mermaid.run();
  }
}

// `defer` 付き script で読み込まれた場合、DOMContentLoaded は不要
window.MainApp = new Main();
