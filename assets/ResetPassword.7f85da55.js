import{t as u,a as f,h as v,e as _,b as l,S as w,i as d}from"./vendor.bb69e759.js";import b from"./index.90bf2a70.js";import{u as h}from"./index.027e04e2.js";const y=u("<div></div>"),E=u('<form class="mx-auto max-w-sm my-6"><div class="p-2"><label for="email">Email <br><input class="p-2 border-2 w-full" id="email" type="text"></label></div><div class="p-2"></div><div class="p-2"></div></form>'),S=u('<form class="col-span-6 mx-2 my-6"><div class="m-2"><label>Enter new password<input class="border-2" type="password" required></label></div><div class="m-2"><label>Re-enter new password<input class="border-2" type="password" required></label></div></form>');function $(a){return(()=>{const r=y.cloneNode(!0);return d(r,()=>a.message),r})()}function x(){const a=h(),[r,i]=f(""),m=async s=>{s.preventDefault();const o=s.target[0].value;if(o)i("");else{i("Please enter an email");return}const{data:t,error:n}=a.supabase.auth.api.resetPasswordForEmail(o);n&&console.log("error",n),t&&console.log("data",t)};return(()=>{const s=E.cloneNode(!0),o=s.firstChild,t=o.nextSibling,n=t.nextSibling;return s.addEventListener("submit",m),d(t,r),d(n,l(b,{type:"submit",children:"Send password reset request"})),s})()}function k(){const[a,r]=f(""),i=h();v().hash;const s=_();let o=new URLSearchParams(window.location.hash),t="";for(let e of o)if(e[0].includes("access_token")){t=e[1];break}const n=async e=>{e.preventDefault();const c=e.target[0].value,g=e.target[1].value;if(c!==g&&r("Passwords do not match"),!!!a()){const{user:q,error:p}=await i.supabase.auth.api.updateUser(t,{password:c});p?console.log("error :>> ",p):s("/")}};return[l(w,{get when(){return a()},get children(){return l($,{get message(){return a()}})}}),l(w,{get when(){return window.location.hash.includes("type=recovery")},get fallback(){return l(x,{})},get children(){const e=S.cloneNode(!0);return e.firstChild.nextSibling,e.addEventListener("submit",n),d(e,l(b,{type:"submit",children:"Submit"}),null),e}})]}export{k as default};
