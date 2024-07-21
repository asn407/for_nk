// KaTeXのスタイルシート
const katexCSS = document.createElement("link");
katexCSS.rel = "stylesheet";
katexCSS.href = "https://cdn.jsdelivr.net/npm/katex@0.13.16/dist/katex.min.css";
katexCSS.integrity = "sha384-6LkG2wmY8FK9E0vU9OOr8UvLwsaqUg9SETfpq4uTCN1agNe8HRdE9ABlk+fVx6gZ";
katexCSS.crossOrigin = "anonymous";
document.head.appendChild(katexCSS);

// KaTeXのスクリプト
const katexScript = document.createElement("script");
katexScript.defer = true;
katexScript.src = "https://cdn.jsdelivr.net/npm/katex@0.13.16/dist/katex.min.js";
katexScript.integrity = "sha384-31El76TwmbHj4rF9DyLsygbq6xoIobG0W+jqXim+a3dU9W53tdH3A/ngRPxOzzaB";
katexScript.crossOrigin = "anonymous";
document.head.appendChild(katexScript);

// KaTeXの自動レンダリングスクリプト
const autoRenderScript = document.createElement("script");
autoRenderScript.defer = true;
autoRenderScript.src = "https://cdn.jsdelivr.net/npm/katex@0.13.16/dist/contrib/auto-render.min.js";
autoRenderScript.integrity = "sha384-vZTG03m+2yp6N6BNi5iM4rW4oIwk5DfcNdFfxkk9ZWpDriOkXX8voJBFrAO7MpVl";
autoRenderScript.crossOrigin = "anonymous";
document.head.appendChild(autoRenderScript);

// KaTeXのレンダリング設定
document.addEventListener("DOMContentLoaded", () => {
    renderMathInElement(document.body, {
        delimiters: [
            { left: "$$", right: "$$", display: true },
            { left: "$", right: "$", display: false }
        ]
    });
});
