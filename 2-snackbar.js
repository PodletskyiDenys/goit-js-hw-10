import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{i}from"./assets/vendor-BbbuE1sJ.js";const n=document.querySelector(".form"),c=document.querySelector(".delay-input");n.addEventListener("submit",l=>{l.preventDefault();const e=c.value,s=document.querySelector('input[name="state"][value="fulfilled"]:checked')!==null,o=new Promise((t,r)=>{setTimeout(()=>{s?t(e):r(e)},e)});o.then(t=>{i.success({title:`✅ Fulfilled promise in ${e}ms`,position:"topRight",timeout:5e3,icon:!1})}),o.catch(t=>{i.error({title:`❌ Rejected promise in ${e}ms`,position:"topRight",backgroundColor:"#B51B1B",color:"#fff",theme:"dark",icon:!1,timeout:5e3})})});
//# sourceMappingURL=2-snackbar.js.map
