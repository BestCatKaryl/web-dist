import{h as e,bP as i,au as w,a as y,n as C,m as R,aW as r,b9 as c,cj as b,e as k,a4 as o,G as x,ar as T,E as W,I as F,ae as G,C as g,bG as H,aY as L,dm as N}from"./index.af967edd.js";const P=n=>e(i,{get children(){return n.content}}),j=n=>e(w,{get src(){return n.content}}),z={string:P,image:j},D=()=>{const n=y();C.info(n("manage.messenger-tips"));const[a,l]=R(""),[u,d]=r(()=>c.post("/admin/message/get")),[m,p]=r(()=>c.post("/admin/message/send",{message:a()})),[h,S]=b([]),s=async()=>{const t=await d();H(t,f=>{S(N($=>$.push(f)))})},v=async()=>{const t=await p();L(t)},I=setInterval(s,1e3);return k(()=>clearInterval(I)),e(o,{spacing:"$2",h:"$full",alignItems:"start",get children(){return[e(o,{w:"$full",spacing:"$2",alignItems:"start",p:"$2",rounded:"$lg",border:"1px solid var(--hope-colors-neutral6)",get children(){return[e(i,{size:"xl",get children(){return n("manage.received_msgs")}}),e(x,{each:h,children:t=>e(T,W({get component(){return z[t.type]}},t))})]}}),e(F,{w:"$full",get value(){return a()},onInput:t=>l(t.currentTarget.value)}),e(G,{spacing:"$2",get children(){return[e(g,{colorScheme:"accent",get loading(){return u()},onClick:s,get children(){return n("manage.receive")}}),e(g,{get loading(){return m()},onClick:v,get children(){return n("manage.send")}})]}})]}})};export{D as Messenger,z as Shower,D as default};
