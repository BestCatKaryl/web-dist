import{a as v,b as C,aW as l,b9 as r,cj as $,cX as w,m as I,h as t,cY as R,E as L,ba as o,n as p,ae as T,C as u,a4 as _}from"./index.af967edd.js";import{b as x}from"./useTitle.086b8ff1.js";import{I as j}from"./SettingItem.a840b3e0.js";import{R as B}from"./ResponsiveGrid.8c74f315.js";import"./index.addfadfa.js";import"./index.9950a410.js";import"./index.c55f2465.js";import"./item_type.be442da4.js";const X=m=>{const s=v(),{pathname:d}=C();x(`manage.sidemenu.${d().split("/").pop()}`);const[h,f]=l(()=>r.get(`/admin/setting/list?group=${m.group}`)),[c,i]=$([]),a=async()=>{const e=await f();o(e,i)};a();const[S,b]=l(()=>r.post("/admin/setting/save",w(c))),[k,g]=I(!1);return t(_,{w:"$full",alignItems:"start",spacing:"$2",get children(){return[t(B,{get children(){return t(R,{each:c,children:(e,D)=>t(j,L(e,{onChange:n=>{i(y=>e().key===y.key,"value",n)},onDelete:async()=>{g(!0);const n=await r.post(`/admin/setting/delete?key=${e().key}`);g(!1),o(n,()=>{p.success(s("global.delete_success")),a()})}}))})}}),t(T,{spacing:"$2",get children(){return[t(u,{colorScheme:"accent",onClick:a,get loading(){return h()||k()},get children(){return s("global.refresh")}}),t(u,{get loading(){return S()},onClick:async()=>{const e=await b();o(e,()=>p.success(s("global.save_success")))},get children(){return s("global.save")}})]}})]}})};export{X as default};
