(()=>{"use strict";(()=>{const e=document.querySelector(".modal-callback"),t=document.querySelector(".modal-overlay");document.querySelectorAll(".fancyboxModal").forEach((o=>{o.addEventListener("click",(()=>{t.style.display="block",e.style.display="block"}))})),document.addEventListener("click",(o=>{const l=o.target;console.log(l),(l.closest("#close")||l.closest("#modal-overlay"))&&(t.style.display="none",e.style.display="none")}))})(),(()=>{const e=document.querySelectorAll(".scroll-to");for(const t of e)t.addEventListener("click",(e=>{e.preventDefault();const o=t.getAttribute("href");document.querySelector(o).scrollIntoView({behavior:"smooth",block:"start"})}))})(),(()=>{const e=document.querySelector(".top-slider").querySelectorAll(".item");let t=0;const o=()=>{e[t].classList.remove("active"),t++,t>2&&(t=0),e[t].classList.add("active")};((e=3e3)=>{setInterval(o,e)})()})()})();