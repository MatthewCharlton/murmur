import{c as w,u as f,p as b,j as g,a as o,S as p,i,t as c}from"./index-cabe918c.js";import h from"./index-c8c820a2.js";import"./browser-ponyfill-5ce9a37a.js";const y=c("<div></div>"),E=c('<form class="mx-auto max-w-sm my-6"><div class="p-2"><label for="email">Email <br><input class="p-2 border-2 w-full" id="email" type="text"></label></div><div class="p-2"></div><div class="p-2"></div></form>'),_=c('<form class="col-span-6 mx-2 my-6"><div class="m-2"><label>Enter new password<input id="new-password" class="border-2" type="password" required></label></div><div class="m-2"><label>Re-enter new password<input id="reenter-new-password" class="border-2" type="password" required></label></div></form>');function S(s){return(()=>{const r=y.cloneNode(!0);return i(r,()=>s.message),r})()}function $(){const s=f(),[r,l]=w(""),u=async t=>{t.preventDefault();const n=document.getElementById("email")?.value.trim();if(n)l("");else{l("Please enter an email");return}const{data:a,error:e}=await s.supabase.auth.resetPasswordForEmail(n);e&&console.log("error",e),a&&console.log("data",a)};return(()=>{const t=E.cloneNode(!0),n=t.firstChild,a=n.nextSibling,e=a.nextSibling;return t.addEventListener("submit",u),i(a,r),i(e,o(h,{type:"submit",children:"Send password reset request"})),t})()}function R(){const[s,r]=w(""),l=f();b().hash;const t=g();let n=new URLSearchParams(window.location.hash);for(let e of n)if(e[0].includes("access_token")){e[1];break}const a=async e=>{e.preventDefault();const d=document.getElementById("new-password")?.value,v=document.getElementById("reenter-new-password")?.value;if(d!==v&&r("Passwords do not match"),!!!s()){const{data:x,error:m}=await l.supabase.auth.updateUser({password:d});m?console.log("error :>> ",m):t("/")}};return[o(p,{get when(){return s()},get children(){return o(S,{get message(){return s()}})}}),o(p,{get when(){return window.location.hash.includes("type=recovery")},get fallback(){return o($,{})},get children(){const e=_.cloneNode(!0);return e.firstChild.nextSibling,e.addEventListener("submit",a),i(e,o(h,{type:"submit",children:"Submit"}),null),e}})]}export{R as default};
