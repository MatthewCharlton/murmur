import{_ as i,u as l}from"./index.9ec66424.js";import{t as c,l as m,i as u,b as d}from"./vendor.eefe3fb1.js";const f=c('<form id="send-message-form" class="bottom-0 sticky flex p-2 bg-white"><textarea class="flex-1 border-2 bg-gray-50 focus:bg-white max-h-32" name="message" id="message"></textarea></form>'),b=m(()=>i(()=>import("./index.3392c7d7.js"),["assets/index.3392c7d7.js","assets/vendor.eefe3fb1.js"]));function x(){const t=l(),o=t.username();t.messages();const n=async e=>{e.preventDefault();const s=e?.target?.[0];let a=s.value;if(!a)return;const{error:r}=await t.supabase.from("chat-data").insert([{text:a,email:o}]);if(r){console.log("error",r);return}s.value="",s.focus()};return(()=>{const e=f.cloneNode(!0);return e.firstChild,e.addEventListener("submit",n),u(e,d(b,{class:"bg-[#46cbb2] text-black",type:"submit",children:"Send"}),null),e})()}export{x as default};