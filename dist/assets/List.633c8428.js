import{bI as C,b as v,h as n,ae as g,L as w,aM as m,az as A,dn as b,t as j,aO as k,S as y,ax as I,al as M,aw as O,b5 as a,cl as z,cS as L,ad as P,l as _,a as B,m as x,x as D,dp as E,dq as W,dr as H,E as f,G as K,a1 as T,a4 as q}from"./index.f15b461e.js";import{b as F}from"./Folder.80720a03.js";import{u as G}from"./index.c030b2c6.js";import{q as R}from"./index.7fa5417d.js";import{g as U,O as V}from"./icon.64735f6f.js";import{u as J,I as S,a as $}from"./helper.14502a2e.js";import"./Layout.6858cf73.js";import"./useTitle.4ee8d8d3.js";import"./FolderTree.7a888cb4.js";import"./video_box.fc5c11ff.js";import"./_commonjs-dynamic-modules.30ae7933.js";import"./Paginator.4d0fd536.js";import"./index.69dfabdd.js";import"./index.93fe5a11.js";const r=[{name:"name",textAlign:"left",w:{"@initial":"76%","@md":"50%"}},{name:"size",textAlign:"right",w:{"@initial":"24%","@md":"17%"}},{name:"modified",textAlign:"right",w:{"@initial":0,"@md":"33%"}}],N=e=>{const{isHide:o}=C();if(o(e.obj))return null;const{setPathAs:h}=G(),{show:u}=F({id:1}),{pushHref:s,to:i}=v(),{isMouseSupported:l}=$(),d=J(),c=()=>_.list_item_filename_overflow;return n(P.div,{initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},transition:{duration:.2},style:{width:"100%"},get children(){return n(g,{get classList(){return{selected:!!e.obj.selected}},class:"list-item viselect-item",get["data-index"](){return e.index},w:"$full",p:"$2",rounded:"$lg",transition:"all 0.3s",get _hover(){return{transform:"scale(1.01)",bgColor:w()}},as:R,get href(){return e.obj.name},get cursor(){return!l()&&(!m()||d())?"pointer":"default"},get bgColor(){return A(()=>!!e.obj.selected,!0)()?w():void 0},"on:dblclick":t=>{!l()||t.ctrlKey||t.metaKey||t.shiftKey||i(s(e.obj.name))},"on:click":t=>{if(l())return t.preventDefault();if(!!m()){if(t.preventDefault(),d()){i(s(e.obj.name));return}b(e.index,!e.obj.selected)}},onMouseEnter:()=>{h(e.obj.name,e.obj.is_dir,!0)},onContextMenu:t=>{j(()=>{k(!1),b(e.index,!0,!0)}),u(t,{props:e.obj})},get children(){return[n(g,{class:"name-box",spacing:"$1",get w(){return r[0].w},get children(){return[n(y,{get when(){return m()},get children(){return n(S,{"on:click":t=>{t.stopPropagation()},get checked(){return e.obj.selected},onChange:t=>{b(e.index,t.target.checked)}})}}),n(I,{class:"icon",boxSize:"$6",get color(){return M()},get as(){return U(e.obj)},mr:"$1","on:click":t=>{e.obj.type===V.IMAGE&&(t.stopPropagation(),t.preventDefault(),O.emit("gallery",e.obj.name))}}),n(a,{class:"name",get css(){return{wordBreak:"break-all",whiteSpace:c()==="multi_line"?"unset":"nowrap","overflow-x":c()==="scrollable"?"auto":"hidden",textOverflow:c()==="ellipsis"?"ellipsis":"unset","scrollbar-width":"none","&::-webkit-scrollbar":{display:"none"}}},get title(){return e.obj.name},get children(){return e.obj.name}})]}}),n(a,{class:"size",get w(){return r[1].w},get textAlign(){return r[1].textAlign},get children(){return z(e.obj.size)}}),n(a,{class:"modified",display:{"@initial":"none","@md":"inline"},get w(){return r[2].w},get textAlign(){return r[2].textAlign},get children(){return L(e.obj.modified)}})]}})}})},ue=()=>{const e=B(),[o,h]=x(),[u,s]=x(!1);D(()=>{o()&&E(o(),u())});const i=t=>({fontWeight:"bold",fontSize:"$sm",color:"$neutral11",textAlign:t.textAlign,cursor:"pointer",onClick:()=>{t.name===o()?s(!u()):j(()=>{h(t.name),s(!1)})}}),{isMouseSupported:l,registerSelectContainer:d,captureContentMenu:c}=$();return d(),n(q,{"oncapture:contextmenu":c,get classList(){return{"viselect-container":l()}},class:"list",w:"$full",spacing:"$1",get children(){return[n(g,{class:"title",w:"$full",p:"$2",get children(){return[n(g,{get w(){return r[0].w},spacing:"$1",get children(){return[n(y,{get when(){return m()},get children(){return n(S,{get checked(){return W()},get indeterminate(){return H()},onChange:t=>{k(t.target.checked)}})}}),n(a,f(()=>i(r[0]),{get children(){return e(`home.obj.${r[0].name}`)}}))]}}),n(a,f({get w(){return r[1].w}},()=>i(r[1]),{get children(){return e(`home.obj.${r[1].name}`)}})),n(a,f({get w(){return r[2].w}},()=>i(r[2]),{display:{"@initial":"none","@md":"inline"},get children(){return e(`home.obj.${r[2].name}`)}}))]}}),n(K,{get each(){return T.objs},children:(t,p)=>n(N,{obj:t,get index(){return p()}})})]}})};export{ue as default};
