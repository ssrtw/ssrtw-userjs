# ssrtw-userjs
---
放些自製的user script
#### 環境
於瀏覽器上安裝擴充功能︰
* Google Chrome上安裝[TamperMonkey](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)
* Firefox上安裝[Greasemonkey](https://addons.mozilla.org/zh-TW/firefox/addon/greasemonkey/)

之後，點擊Install就可以安裝腳本了。

---

### jsfiddle-dl
[Install](https://github.com/ssrtw/ssrtw-userjs/raw/main/jsfiddle-dl/jsfiddle-dl.user.js)
#### 說明
jsfiddle沒有提供將fiddle下載為一個html檔的功能，這個user script會在jsfiddle的navbar上添加一個download按鈕，點擊後直接將fiddle包成html。
下載的檔名會取做該fiddle的title，若無title則用fiddle的網頁id命名。

![navbar](https://raw.githubusercontent.com/ssrtw/ssrtw-userjs/main/jsfiddle-dl/jsfiddle-nav.png)