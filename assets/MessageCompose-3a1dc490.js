import{l as i,_ as l,u as c,o as m,i as d,a as u,t as f,h as p}from"./index-77142ebd.js";import"./browser-ponyfill-5ce9a37a.js";const b=f('<form id="send-message-form" class="bottom-0 sticky flex p-2 bg-white"><span class="flex-1 border-2 bg-gray-50 focus:bg-white p-2 overflow-hidden resize" role="textbox" contenteditable id="message"></span></form>'),g=i(()=>l(()=>import("./index-5844a2ca.js"),["assets/index-5844a2ca.js","assets/index-77142ebd.js","assets/browser-ponyfill-5ce9a37a.js","assets/index-541ea756.css"]));function x(){const s=c(),o=s.username();m(()=>{document.getElementById("message").addEventListener("keydown",t=>{console.log(t.shiftKey,t.key),t.key==="Enter"&&!t.shiftKey&&(t.preventDefault(),a())})});const r=async e=>{e.preventDefault(),await a()},a=async()=>{const e=document.getElementById("message");let t=e.innerText.trim();if(!t)return;const{error:n}=await s.supabase.from(p).insert([{text:t,email:o}]);if(n){console.log("error",n);return}e.innerText="",e.focus()};return(()=>{const e=b.cloneNode(!0);return e.firstChild,e.addEventListener("submit",r),d(e,u(g,{class:"bg-[#46cbb2] text-black",type:"submit",children:"Send"}),null),e})()}export{x as default};
