import{a as F,m as i,aV as o,b8 as c,bH as N,h as t,bO as m,d2 as A,E as g,C as u,b9 as l,n as h,I as P,ap as V,a8 as j}from"./index.9c923db5.js";import{b as z}from"./useTitle.bad8149d.js";import{G}from"./index.f59f97bd.js";import{I as d}from"./SettingItem.3dfa00d2.js";import"./index.27c6c4cc.js";import"./LinkWithBase.88b355e6.js";import"./index.bce9104b.js";import"./item_type.be442da4.js";const re=()=>{const r=F();z("manage.sidemenu.other");const[p,_]=i(""),[k,y]=i(""),[b,f]=i(""),[$,v]=i(""),[C,S]=i(""),[a,Q]=i([]),[U,H]=o(()=>c.get(`/admin/setting/list?groups=${G.ARIA2},${G.SINGLE}`)),[O,E]=o(()=>c.post("/admin/setting/set_aria2",{uri:p(),secret:k()})),[M,R]=o(()=>c.post("/admin/setting/set_qbit",{url:b(),seedtime:$()}));(async()=>{const e=await H();l(e,n=>{var q,T,I,L,w;_(((q=n.find(s=>s.key==="aria2_uri"))==null?void 0:q.value)||""),y(((T=n.find(s=>s.key==="aria2_secret"))==null?void 0:T.value)||""),S(((I=n.find(s=>s.key==="token"))==null?void 0:I.value)||""),f(((L=n.find(s=>s.key==="qbittorrent_url"))==null?void 0:L.value)||""),v(((w=n.find(s=>s.key==="qbittorrent_seedtime"))==null?void 0:w.value)||""),Q(n)})})();const[x,B]=o(()=>c.post("/admin/setting/reset_token")),{copy:D}=N();return t(j,{get loading(){return U()},get children(){return[t(m,{mb:"$2",get children(){return r("settings_other.aria2")}}),t(A,{gap:"$2",columns:{"@initial":1,"@md":2},get children(){return[t(d,g(()=>a().find(e=>e.key==="aria2_uri"),{get value(){return p()},onChange:e=>_(e)})),t(d,g(()=>a().find(e=>e.key==="aria2_secret"),{get value(){return k()},onChange:e=>y(e)}))]}}),t(u,{my:"$2",get loading(){return O()},onClick:async()=>{const e=await E();l(e,n=>{h.success(`${r("settings_other.aria2_version")} ${n}`)})},get children(){return r("settings_other.set_aria2")}}),t(m,{my:"$2",get children(){return r("settings_other.qbittorrent")}}),t(A,{gap:"$2",columns:{"@initial":1,"@md":2},get children(){return[t(d,g(()=>a().find(e=>e.key==="qbittorrent_url"),{get value(){return b()},onChange:e=>f(e)})),t(d,g(()=>a().find(e=>e.key==="qbittorrent_seedtime"),{get value(){return $()},onChange:e=>v(e)}))]}}),t(u,{my:"$2",get loading(){return M()},onClick:async()=>{const e=await R();l(e,n=>{h.success(n)})},get children(){return r("settings_other.set_qbit")}}),t(m,{my:"$2",get children(){return r("settings.token")}}),t(P,{get value(){return C()},readOnly:!0}),t(V,{my:"$2",spacing:"$2",get children(){return[t(u,{onClick:()=>{D(C())},get children(){return r("settings_other.copy_token")}}),t(u,{colorScheme:"danger",get loading(){return x()},onClick:async()=>{const e=await B();l(e,n=>{h.success(r("settings_other.reset_token_success")),S(n)})},get children(){return r("settings_other.reset_token")}})]}})]}})};export{re as default};
