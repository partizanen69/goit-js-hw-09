import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                      */const m=document.querySelector('button[type="submit"]'),n=document.querySelector("form");let u=0;m.addEventListener("click",async s=>{if(s.preventDefault(),u>0)return;let e=n.elements.delay.value,l=n.elements.step.value,t=n.elements.amount.value;if(!e||!l||!t){alert("Please fill in all values");return}if(e=Number(e),l=Number(l),t=Number(t),e<=0){alert("Delay must be greater than zero");return}if(l<=0){alert("Step must be greater than zero");return}if(t<=0){alert("Amount must be greater than zero");return}u=t,m.disabled=!0,n.elements.delay.value="",n.elements.step.value="",n.elements.amount.value="";for(let r=0;r<t;r++)i(r+1,e+l*r).then(({position:a,delay:o})=>{console.log(`✅ Fulfilled promise ${a} in ${o}ms`)}).catch(({position:a,delay:o})=>{console.log(`❌ Rejected promise ${a} in ${o}ms`)}).finally(()=>{u-=1,u===0&&(m.disabled=!1)})});function i(s,e){const l=Math.random()>.3;return new Promise((t,r)=>{setTimeout(()=>{l?t({position:s,delay:e}):r({position:s,delay:e})},e)})}
//# sourceMappingURL=commonHelpers3.js.map
