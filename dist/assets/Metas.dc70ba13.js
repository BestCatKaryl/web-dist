import{a as $,b as k,aV as C,b8 as d,m as M,d4 as y,h as e,ap as l,C as i,a7 as S,d5 as v,d6 as F,d7 as o,G as g,d8 as u,d9 as x,da as n,b9 as h,n as B,a4 as D}from"./index.98bb8b3f.js";import{b as H}from"./useTitle.7e1fd3c7.js";import{D as L}from"./DeletePopover.8a30b6f6.js";import{W as R}from"./Wether.42dc743c.js";const O=()=>{const r=$();H("manage.sidemenu.metas");const{to:c}=k(),[p,m]=C(()=>d.get("/admin/meta/list")),[b,f]=M([]),a=async()=>{const t=await m();h(t,s=>f(s.content))};a();const[w,T]=y(t=>d.post(`/admin/meta/delete?id=${t}`));return e(D,{spacing:"$2",alignItems:"start",w:"$full",get children(){return[e(l,{spacing:"$2",get children(){return[e(i,{colorScheme:"accent",get loading(){return p()},onClick:a,get children(){return r("global.refresh")}}),e(i,{onClick:()=>{c("/@manage/metas/add")},get children(){return r("global.add")}})]}}),e(S,{w:"$full",overflowX:"auto",get children(){return e(v,{highlightOnHover:!0,dense:!0,get children(){return[e(F,{get children(){return e(o,{get children(){return[e(g,{each:["path","password","write"],children:t=>e(u,{get children(){return r(`metas.${t}`)}})}),e(u,{get children(){return r("global.operations")}})]}})}}),e(x,{get children(){return e(g,{get each(){return b()},children:t=>e(o,{get children(){return[e(n,{get children(){return t.path}}),e(n,{get children(){return t.password}}),e(n,{get children(){return e(R,{get yes(){return t.write}})}}),e(n,{get children(){return e(l,{spacing:"$2",get children(){return[e(i,{onClick:()=>{c(`/@manage/metas/edit/${t.id}`)},get children(){return r("global.edit")}}),e(L,{get name(){return t.path},get loading(){return w()===t.id},onClick:async()=>{const s=await T(t.id);h(s,()=>{B.success(r("global.delete_success")),a()})}})]}})}})]}})})}})]}})}})]}})};export{O as default};
