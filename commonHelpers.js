import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                      */const n=document.querySelector("body");let t=null,e=null,o=null;window.onload=()=>{t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),console.log({startBtn:t,stopBtn:e}),t.addEventListener("click",r),e.addEventListener("click",a)};const r=l=>{t.disabled=!0,e.disabled=!1,o=setInterval(()=>{n.style.backgroundColor=d()},1e3)},a=l=>{clearInterval(o),t.disabled=!1,e.disabled=!0};function d(){return`#${Math.floor(Math.random()*16777215).toString(16).padStart(6,0)}`}
//# sourceMappingURL=commonHelpers.js.map
