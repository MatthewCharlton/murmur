import{_ as x}from"./index.ac5692f9.js";import{t as v,l as $,a as b,v as j,i as l,b as c,p,F as I}from"./vendor.bb69e759.js";function S(e){let t=0;for(let s=0;s<e.length;s++)t=Math.imul(31,t)+e.charCodeAt(s)|0;return t}function y(){let e={};try{e=JSON.parse(localStorage["supabase.auth.token"])}catch{}return e}const C=v('<li><div class="text-[1.2rem]"></div><div> </div></li>'),E=v('<ul class="flex flex-col m-2"></ul>'),M=$(()=>x(()=>import("./index.e4bdfd07.js"),["assets/index.e4bdfd07.js","assets/vendor.bb69e759.js"]));function N(e){const t=e.email,s=e.text,o=e.lastItem,[i,h]=b(null),u=y()?.currentSession?.user?.email===t,_=S(t);return j(()=>{setTimeout(()=>i()?.scrollIntoView({behavior:"smooth"}),150)}),(()=>{const r=C.cloneNode(!0),m=r.firstChild,n=m.nextSibling,g=n.firstChild;return(a=>o&&h(a))(r),l(m,s),l(n,c(M,{src:`https://avatars.dicebear.com/api/pixel-art-neutral/${_}.svg?scale=108`}),g),l(n,t,null),p(a=>{const d=["my-2 p-2 pb-4 border-2 max-w-[90%]",u?"self-end":"self-start"].join(" "),f=["flex items-center",u?"justify-end":"justify-start"].join(" ");return d!==a._v$&&(r.className=a._v$=d),f!==a._v$2&&(n.className=a._v$2=f),a},{_v$:void 0,_v$2:void 0}),r})()}function L(e){return(()=>{const t=E.cloneNode(!0);return l(t,c(I,{get each(){return e.messages},children:({text:s,email:o},i)=>c(N,{email:o,text:s,get lastItem(){return e.messages.length===i()+1}})})),t})()}export{N as Message,L as default};
