// ==UserScript==
// @name         jsfiddle-dl
// @namespace    https://github.com/ssrtw/ssrtw-userjs
// @version      1.0.0
// @description  A small userscript, make you download fiddle just one click!
// @author       ssrtw
// @match        https://jsfiddle.net/*
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    function dlFunc() {
        let pageName = document.querySelector("input[name=title]").value;
        if (pageName == "") {
            pageName = EditorConfig.fiddle.slug;
        }
        pageName += ".html";
        let pageCss = EditorConfig.value.css.replaceAll("\n", "\n        ");
        let pageHtml = EditorConfig.value.html.replaceAll("\n", "\n    ");
        let pageJS = EditorConfig.value.js.replaceAll("\n", "\n        ");
        let pageText = `<!DOCTYPE html>\n<html>\n<head>\n    <title>${pageName}</title>\n    <style>\n        ${pageCss}\n    </style>\n</head>\n<body>\n    ${pageHtml}\n    <script>\n        ${pageJS}\n    </script>\n</body>\n</html>`;
        let blob = new Blob([pageText], { type: 'text/html' });
        let path = URL.createObjectURL(blob);
        var a = document.createElement("a");
        a.href = path;
        a.download = pageName;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(path);
    }

    function createDL() {
        if (document.querySelector("#actions > nav") !== undefined) {
            let nav = document.querySelector("#actions > nav");
            let div = document.createElement("div");
            div.classList.add('actionItem');
            let appUpdateBtn = document.querySelector("#app-updates");
            if (appUpdateBtn !== undefined)
                nav.insertBefore(div, appUpdateBtn);
            else
                nav.insertBefore(div, document.querySelector("#actions > nav > script"));
            var link = document.createElement("a");
            link.classList.add("aiButton");
            link.textContent = "↓ Download";
            link.onclick = dlFunc;
            link.href = "#";
            div.appendChild(link);
        }
    }

    createDL();
})();