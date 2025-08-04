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

        // 初期化処理
        this.initMermaid();
        this.initButtons();        // 表示切替ボタン
        this.render("week");       // デフォルト：週表示
        this.initDoneTaskLog();    // 完了タスク履歴ボタン
    }

    // Mermaid の設定（テーマやスタイル）
    initMermaid() {
        mermaid.initialize({
            startOnLoad: false,
            securityLevel: 'loose',
            theme: "base",
            themeVariables: {
                sectionFontSize: "14px",
                sectionFontFamily: "Fira Code, sans-serif",
                sectionMargin: 10,
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
                gridColor: "#dddddd"
            },
            gantt: {
                axisFormat: "%m/%d",
                barHeight: 20,
                barGap: 4,
                topPadding: 50,
                leftPadding: 150,
                rightPadding: 100,
                useMaxWidth: false
            }
        });
    }

    // Mermaid Gantt チャートの描画処理
    render(type = "week") {
        const code = window.ganttData[type];
        if (!code) {
            console.error(`Gantt code not found for type: ${type}`);
            return;
        }

        this.container.innerHTML = `<pre class="mermaid">${code}</pre>`;
        mermaid.run(); // Mermaid 再描画
    }

    // 表示切替ボタンのイベント設定
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

    // 完了タスク履歴の表示処理（noteがあれば展開式で表示）
    initDoneTaskLog() {
        const btn = document.getElementById("show-done-tasks");
        const log = document.getElementById("done-task-log");

        if (!btn || !log || !Array.isArray(window.doneTasks)) return;

        btn.addEventListener("click", () => {
            if (log.style.display === "block") {
                log.style.display = "none";
                return;
            }

            const items = window.doneTasks.map(task => {
                const dateText = task.start === task.end
                    ? task.start
                    : `${task.start}〜${task.end}`;
                const baseText = `${dateText} : [${task.section}] ${task.name}`;

                // メモがあれば <details> タグで展開表示、からの場合非表示
                if (task.note) {
                    return `
                        <li>
                        <details>
                            <summary>${baseText}</summary>
                            <div style="margin-left: 1em; color: #666;">📝 ${task.note}</div>
                        </details>
                        </li>`;
                } else {
                    return `<li>${baseText}</li>`;
                }

            }).join("");

            log.innerHTML = `<ul>${items}</ul>`;
            log.style.display = "block";
        });
    }
}

// DOM 読み込み後に Main を初期化
document.addEventListener("DOMContentLoaded", () => {
    window.MainApp = new Main();
});
