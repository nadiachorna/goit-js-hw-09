const t={bodyEl:document.querySelector("body"),startBtn:document.querySelector("button[data-start]"),stopBtn:document.querySelector("button[data-stop]")};let e=null;function n(r){r.preventDefault(),t.startBtn.disabled=!1,e=setInterval((()=>{t.bodyEl.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3),t.startBtn.removeEventListener("click",n)}t.startBtn.addEventListener("click",n),t.stopBtn.addEventListener("click",(function(r){r.preventDefault(),clearInterval(e),t.startBtn.disabled=!0,t.startBtn.addEventListener("click",n)}));
//# sourceMappingURL=01-color-switcher.85725997.js.map
