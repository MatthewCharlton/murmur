import{c as O,a as f,o as j,b as r,u as M,d as N,t as v,e as x,f as D,R as k,g as _,S as $,m as V,i as g,L as E,l,h as W,r as z,j as G}from"./vendor.bb69e759.js";const H=function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function t(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(e){if(e.ep)return;e.ep=!0;const o=t(e);fetch(e.href,o)}};H();const S=N(),J="https://umyqzzqlfvdupowmybfs.supabase.co",U="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzMTkzMTIwOCwiZXhwIjoxOTQ3NTA3MjA4fQ.9_yqUYeJRjf5tCyhdXK69Kro_zF4-JXA_zSVfgcL-t8",m=O(J,U);let h=null;const[q,I]=f(""),[K,X]=f("/murmur/"),[L,w]=f([]),C=(n,i)=>{navigator.serviceWorker.ready.then(async t=>{navigator.serviceWorker.controller?.postMessage({type:n,payload:i})})},Y=n=>{const[i,t]=f(),[s,e]=f(),o=async()=>{if(!L().length){const{data:c,error:u}=await m.from("chat-data").select().order("id",{ascending:!0});if(t(!1),u){if(e(u.message),!h)return;m.removeSubscription(h),h=null;return}if(!c)return;w(c),C("LAST_MESSAGE_ID",c)}},a=()=>{h=m.from("chat-data").on("*",c=>{console.log("payload",c),w(u=>[...u,c.new]),C("LAST_MESSAGE_ID",[c.new])}).subscribe()},p=m.auth.user()?.email;p&&I(p),m.auth.onAuthStateChange((c,u)=>{console.log("onAuthStateChange",{event:c,session:u}),c==="SIGNED_OUT"&&I(""),c==="SIGNED_IN"&&(console.log("event",c,u?.user?.email),I(u?.user?.email||""),o(),a())});const{hash:b,pathname:P}=window.location;b&&P==="/murmur/"&&X(b),j(()=>{!h||m.removeSubscription(h)});const T={supabase:m,username:q,routeHash:K,messages:L};return r(S.Provider,{value:T,get children(){return n.children}})};function B(){return M(S)}const F="modulepreload",A={},Q="/murmur/",d=function(i,t){return!t||t.length===0?i():Promise.all(t.map(s=>{if(s=`${Q}${s}`,s in A)return;A[s]=!0;const e=s.endsWith(".css"),o=e?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${s}"]${o}`))return;const a=document.createElement("link");if(a.rel=e?"stylesheet":F,e||(a.as="script",a.crossOrigin=""),a.href=s,document.head.appendChild(a),e)return new Promise((y,p)=>{a.addEventListener("load",y),a.addEventListener("error",p)})})).then(()=>i())},Z=v("<div><p>This link has expired</p></div>"),ee=v('<div class="flex flex-col col-span-6 lg:col-span-4 lg:col-start-2"></div>'),R=v('<div class="col-span-6"></div>'),te=l(()=>d(()=>import("./index.b0a045ab.js"),["assets/index.b0a045ab.js","assets/vendor.bb69e759.js","assets/index.90bf2a70.js"])),re=l(()=>d(()=>import("./index.0e9f3540.js"),["assets/index.0e9f3540.js","assets/vendor.bb69e759.js"])),se=l(()=>d(()=>import("./index.302276f0.js"),["assets/index.302276f0.js","assets/vendor.bb69e759.js"])),oe=l(()=>d(()=>import("./MessageList.147350a0.js"),["assets/MessageList.147350a0.js","assets/vendor.bb69e759.js"])),ne=l(()=>d(()=>import("./MessageCompose.7df28eeb.js"),["assets/MessageCompose.7df28eeb.js","assets/vendor.bb69e759.js"])),ae=l(()=>d(()=>import("./SignIn.5cc80e09.js"),["assets/SignIn.5cc80e09.js","assets/vendor.bb69e759.js","assets/index.90bf2a70.js"])),ie=l(()=>d(()=>import("./ResetPassword.e4b255aa.js"),["assets/ResetPassword.e4b255aa.js","assets/vendor.bb69e759.js","assets/index.90bf2a70.js"])),ce=()=>{const n=B(),i=x();return D(()=>{const t=W(),s=n.routeHash();if(console.log("location",t.pathname),t.pathname==="/murmur"&&(window.location.pathname="/murmur/"),s&&(s.endsWith("&type=recovery")&&i(`/murmur/reset-password/${s}`),s.startsWith("#error_code=404")))return(()=>{const e=Z.cloneNode(!0);return e.firstChild,g(e,r(E,{href:"/murmur/",style:{cursor:"pointer"},children:"Back to app"}),null),e})()}),console.log("username",n.username()),r(re,{get children(){return[r(te,{}),r(se,{}),r(k,{get children(){return[r(_,{path:"/murmur/",get element(){return r($,{get when(){return!!n.username()},get fallback(){return V(()=>i("/murmur/sign-in"))},get children(){const t=ee.cloneNode(!0);return g(t,r(oe,{get messages(){return n.messages()}}),null),g(t,r(ne,{}),null),t}})}}),r(_,{path:"/murmur/sign-in",get element(){return(()=>{const t=R.cloneNode(!0);return g(t,r(ae,{})),t})()}}),r(_,{path:"/murmur/reset-password",get element(){return(()=>{const t=R.cloneNode(!0);return g(t,r(ie,{})),t})()}}),r(_,{path:"/*all",get element(){return["Not found",r(E,{class:"",href:"/murmur/",children:"Go home"})]}})]}})]}})};navigator.serviceWorker.register("sw.js").then(n=>{console.log("Registration succeeded. Scope is "+n.scope)}).catch(n=>{console.log("Registration failed with "+n)});z(()=>r(Y,{get children(){return r(G,{get children(){return r(ce,{})}})}}),document.getElementById("root"));export{d as _,B as u};