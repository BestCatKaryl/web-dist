import{u as bt,a as _,b as M,s as W,n as I,c as rt,p as wt,d as Z,g as _t,f as kt,_ as ot,l as re,o as Pe,e as k,h as e,P as $t,i as vt,j as yt,k as D,m as y,q as Ct,r as me,t as xt,v as St,w as Mt,x as _e,M as K,y as X,z as V,A as G,S as b,I as ke,T as Ot,F as Ft,B as oe,C as S,D as J,E as se,G as ue,H as Rt,J as Lt,K as Tt,L as De,N as Et,O as It,Q as Bt,R as zt,U as ce,V as fe,W as pe,X as Se,Y as je,Z as $e,$ as Me,a0 as B,a1 as p,a2 as Pt,a3 as x,a4 as Y,a5 as Dt,a6 as jt,a7 as ae,a8 as At,a9 as at,aa as Ht,ab as Vt,ac as Nt,ad as Oe,ae as Ae,af as Ut,ag as q,ah as Ee,ai as lt,aj as it,ak as He,al as U,am as Wt,an as qt,ao as Ve,ap as P,aq as Kt,ar as Xt,as as h,at as Ne,au as Gt,av as ve,aw as Jt,ax as Ie,ay as st,az as Q,aA as Yt,aB as Qt,aC as Zt,aD as ct,aE as ut,aF as dt,aG as en,aH as gt,aI as C,aJ as Fe,aK as Re,aL as tn,aM as nn,aN as rn,aO as Ge,aP as on,aQ as an,aR as ln,aS as sn,aT as cn,aU as un,aV as z,aW as dn,aX as j,aY as gn,aZ as hn,a_ as mn,a$ as fn,b0 as pn,b1 as bn,b2 as wn,b3 as _n,b4 as ye,b5 as kn,b6 as $n,b7 as Je,b8 as vn,b9 as yn,ba as Cn,bb as Ye,bc as xn,bd as Sn,be as Mn,bf as On,bg as Fn,bh as Rn,bi as Ln,bj as Tn,bk as En,bl as In,bm as Bn,bn as Be,bo as zn,bp as Pn,bq as Dn,br as jn,bs as An,bt as Hn,bu as Vn,bv as Nn,bw as Un,bx as Wn,by as qn,bz as Kn,bA as Xn,bB as Gn}from"./index.98bb8b3f.js";import{u as Jn,a as Yn}from"./useTitle.7e1fd3c7.js";import{u as T,r as Qn,a as Zn,b as er,R as tr}from"./index.75b033d3.js";import{F as nr,M as Ue}from"./FolderTree.65bbf211.js";import{F as ht,C as rr,a as or,B as ar,b as lr,T as ir,c as Qe,d as sr}from"./index.b12b573f.js";function we(t){return t==null||t===""}function cr(t){return t==null}async function ur(t,n){let r="/downloads/alist";const o=await rt.post(t,{id:Math.random().toString(),jsonrpc:"2.0",method:"aria2.getGlobalOption",params:["token:"+n]});return console.log(o),o.status===200&&(we(o.data.result.dir)||(r=o.data.result.dir),r=r.endsWith("/")?r.slice(0,-1):r),r}const dr=()=>{const{rawLinks:t}=bt(),n=_(),{pathname:r}=M();return{batchDownloadSelected:()=>{t(!0).forEach(l=>{window.open(l,"_blank")})},sendToAria2:async()=>{const o=W(),l=async(i,a)=>{var c;if(a.is_dir){const u=await kt(Z(r(),i,a.name),ot());if(u.code!==200)return u.message;const g=[];for(const m of(c=u.data.content)!=null?c:[]){const $=await l(Z(i,a.name),m);if(typeof $=="string")return $;g.push(...$)}return g}else return[{path:Z(i,a.name),dir:i,url:_t(Z(r(),i),a,"direct",!0),name:a.name}]},{aria2_rpc_url:s,aria2_rpc_secret:d}=re;if(!s){I.warning(n("home.toolbar.aria2_not_set"));return}try{let i="/downloads/alist";i=await ur(s,d);let a=!1;I.info(`${n("home.package_download.fetching_struct")}`);for(const c of o){const u=await l("",c);if(typeof u!="object"||u.length===void 0)return I.error(`${n("home.package_download.fetching_struct_failed")}: ${u}`),u;for(let g=0;g<u.length;g++){if(we(u[g].path)||cr(u[g].dir)||we(u[g].url)||we(u[g].name)){I.error(`${n("home.package_download.fetching_struct_failed")}: ${JSON.stringify(u[g])}`);continue}a||(a=!0,I.info(`${n("home.package_download.downloading")}`));const m=await rt.post(s,{id:Math.random().toString(),jsonrpc:"2.0",method:"aria2.addUri",params:["token:"+d,[u[g].url],{out:u[g].name,dir:i+u[g].dir,"check-certificate":"false"}]});console.log(m)}}I.success(n("home.toolbar.send_aria2_success"))}catch(i){console.error(i),I.error(`failed to send to aria2: ${i}`)}},playlistDownloadSelected:()=>{const o=W().filter(a=>!a.is_dir);let l=wt(r());o.length===1&&(l=o[0].name),l||(l=n("manage.sidemenu.home"));const s=o.reduce((a,c,u)=>`${a}#EXTINF:-1,${c.name}
${t(!0)[u]}
`,`#EXTM3U
`),d=new Blob([s],{type:"application/x-mpegURL"}),i=document.createElement("a");i.href=URL.createObjectURL(d),i.download=`${l}.m3u8`,i.click(),URL.revokeObjectURL(i.href)}}},gr=t=>(t=Array.isArray(t)?t[0]:t,t instanceof Element?t:void 0),hr=(t,n)=>{const r={once:!0};t.addEventListener("motioncomplete",n,r),k(t.removeEventListener.bind(t,"motioncomplete",n,r))},mr=t=>{let{initial:n=!0}=t;Pe(()=>n=!0);let r=!1,o=[],l=[],s=[];return k(()=>{s.concat(l).forEach(d=>d()),l=s=o=[]}),e(Mt.Provider,{value:{addCleanup:d=>l.push(d),addMount:d=>o.push(d),initial:()=>n},get children(){return e($t.Provider,{value:void 0,get children(){return vt(()=>{const d=yt(()=>t.children),i=D(()=>gr(d())),[a,c]=y(),[u,g]=y();return Ct(me(i,v=>{s.push(...l),l=[],xt(()=>{t.exitBeforeEnter?(c(),$(()=>!r&&m(v))):(m(v),$())})})),[a,u];function m(v){c(v),o.forEach(E=>E()),o=[]}function $(v){var le;const E=()=>{g(),s.forEach(ie=>ie()),s=[],v==null||v()},f=g((le=a())!=null?le:u());if(!f)return E();const O=St.get(f);if(!O||!O.getOptions().exit)return E();O.setActive("exit",r=!0),hr(f,()=>{r=!1,E()})}})}})}})},Le=t=>{var i;const[n,r]=y((i=t.defaultValue)!=null?i:""),o=_();let l;const s=()=>{const a=n().lastIndexOf(".");setTimeout(()=>{a>0&&t.isRenamingFile?l.setSelectionRange(0,a):l.select()},10)};_e(()=>{l&&(l.focus(),s()),k(()=>{l&&l.setSelectionRange(0,0)})});const d=()=>{var a;if(!n()){I.warning(o("global.empty_input"));return}(a=t.onSubmit)==null||a.call(t,n()),r("")};return e(J,{blockScrollOnMount:!1,get opened(){return t.opened},get onClose(){return t.onClose},initialFocus:"#modal-input",get children(){return[e(K,{}),e(X,{get children(){return[e(V,{get children(){return o(t.title)}}),e(G,{get children(){return[e(b,{get when(){return t.topSlot},get children(){return t.topSlot}}),e(b,{get when(){return t.type==="text"},get fallback(){return e(ke,{id:"modal-input",get type(){return t.type},get value(){return n()},ref:a=>l=a,onInput:a=>{r(a.currentTarget.value)},onFocus:s,onKeyDown:a=>{a.key==="Enter"&&d()}})},get children(){return e(Ot,{id:"modal-input",get value(){return n()},ref:a=>l=a,onInput:a=>{r(a.currentTarget.value)},onFocus:s})}}),e(b,{get when(){return t.tips},get children(){return e(Ft,{get children(){return t.tips}})}}),e(b,{get when(){return t.bottomSlot},get children(){return t.bottomSlot}})]}}),e(oe,{display:"flex",gap:"$2",get children(){return[e(S,{get onClick(){return t.onClose},colorScheme:"neutral",get children(){return o("global.cancel")}}),e(S,{get loading(){return t.loading},onClick:()=>d(),get children(){return o("global.ok")}})]}})]}})]}})},fr=()=>{const{pathname:t}=M(),n=D(()=>["",...t().split("/").filter(Boolean)]),r=_(),{setPathAs:o}=T(),l=D(()=>{const s={_after:{content:"",bgColor:"$background",position:"absolute",height:"100%",width:"99vw",zIndex:-1,transform:"translateX(-50%)",left:"50%",top:0}};switch(re.position_of_header_navbar){case"only_navbar_sticky":return{...s,position:"sticky",zIndex:"$sticky",top:0};case"sticky":return{...s,position:"sticky",zIndex:"$sticky",top:60};default:return{_after:void 0,position:void 0,zIndex:void 0,top:void 0}}});return e(zt,se(l,{background:"$background",class:"nav",w:"$full",get children(){return e(ue,{get each(){return n()},children:(s,d)=>{const i=D(()=>d()===n().length-1),a=n().slice(0,d()+1).join("/"),c=Rt(a);let u=()=>s;return u()===""&&(u=()=>ce("home_icon")+r("manage.sidemenu.home")),e(Lt,{class:"nav-item",get children(){return[e(Tt,{class:"nav-link",css:{wordBreak:"break-all"},color:"unset",get _hover(){return{bgColor:De(),color:"unset"}},_active:{transform:"scale(.95)",transition:"0.1s"},cursor:"pointer",p:"$1",rounded:"$lg",get currentPage(){return i()},get as(){return i()?void 0:Et},get href(){return It(c)},onMouseEnter:()=>o(a),children:u}),e(b,{get when(){return!i()},get children(){return e(Bt,{class:"nav-separator"})}})]}})}})}}))},pr=fe(()=>pe(()=>import("./Folder.3bec0a40.js").then(t=>t.F),["assets/Folder.3bec0a40.js","assets/Folder.b511ba9e.css","assets/index.98bb8b3f.js","assets/index.15d8d646.css","assets/icon.2f390b7c.js","assets/index.b12b573f.js","assets/index.fdc8639d.js","assets/video_box.6ed8c8ed.js","assets/_commonjs-dynamic-modules.30ae7933.js","assets/index.75b033d3.js","assets/Paginator.bc78f241.js","assets/LinkWithBase.85afd1b0.js"])),br=fe(()=>pe(()=>import("./File.7e7318cb.js").then(t=>t.a),["assets/File.7e7318cb.js","assets/index.98bb8b3f.js","assets/index.15d8d646.css","assets/icon.2f390b7c.js","assets/index.b12b573f.js","assets/index.fdc8639d.js"])),wr=fe(()=>pe(()=>import("./Password.3c646ac2.js"),["assets/Password.3c646ac2.js","assets/index.98bb8b3f.js","assets/index.15d8d646.css","assets/index.75b033d3.js"])),[_r,kr]=y();let Ze=!0;const $r=()=>{const t=Se("white","$neutral3"),{pathname:n}=M(),{handlePathChange:r}=T();let o=n();return _e(me(n,l=>{Jn(),Ze||Zn(),Ze=!1,Qn(o,window.scrollY),r(l),o=l})),e(Y,{ref:l=>kr(l),class:"obj-box",w:"$full",rounded:"$xl",get bgColor(){return t()},p:"$2",shadow:"$lg",spacing:"$2",get children(){return e(je,{get fallback(){return e($e,{})},get children(){return e(Me,{get children(){return[e(B,{get when(){return p.err},get children(){return e(Pt,{get msg(){return p.err},disableColor:!0})}}),e(B,{get when(){return[x.FetchingObj,x.FetchingObjs].includes(p.state)},get children(){return e($e,{})}}),e(B,{get when(){return p.state===x.NeedPassword},get children(){return e(wr,{})}}),e(B,{get when(){return[x.Folder,x.FetchingMore].includes(p.state)},get children(){return e(pr,{})}}),e(B,{get when(){return p.state===x.File},get children(){return e(br,{})}})]}})}})}})};function et(t){const n=Se("white","$neutral3"),{proxyLink:r}=Dt(),{pathname:o}=M(),l=D(me(()=>p.state,()=>{if(![x.FetchingMore,x.Folder,x.File].includes(p.state))return"";if([x.FetchingMore,x.Folder].includes(p.state)){const i=p.objs.find(a=>t.files.find(c=>c.toLowerCase()===a.name.toLowerCase()));if(i)return r(i,!0)}return p[t.fromMeta]&&typeof p[t.fromMeta]=="string"?p[t.fromMeta]:""})),s=async i=>{let a={content:i};return/^https?:\/\//g.test(i)&&(a=await Ht(i)),setTimeout(()=>{er(o())}),a},[d]=jt(l,s);return e(b,{get when(){return l()},get children(){return e(ae,{w:"$full",rounded:"$xl",p:"$4",get bgColor(){return n()},shadow:"$lg",get children(){return e(At,{get loading(){return d.loading},get children(){return e(at,{get children(){var i;return(i=d())==null?void 0:i.content},readme:!0,get toc(){return t.fromMeta==="readme"}})}})}})}})}const mt=t=>{const n=ce("home_container");return e(Me,{get fallback(){return e(ae,{w:"min(99%, 980px)",get children(){return t.children}})},get children(){return e(B,{when:n==="hope_container",get children(){return e(Vt,{get children(){return t.children}})}})}})};function vr(){const{to:t}=M(),n=Nt(),[r,o]=y(),[l,s]=y(),[d,i]=y(-999),a=()=>i(0),c=()=>{const g=_r(),m=l();if(!g||!m)return;const $=g.offsetLeft>50?16:0;m.clientWidth<g.offsetLeft-$?i(0):i(`calc(-100% + ${g.offsetLeft}px - ${$}px)`)};let u;return Pe(()=>{const g=r();g==null||g.setPath(n.pathname),u=requestAnimationFrame(c),window.addEventListener("resize",c),k(()=>window.removeEventListener("resize",c))}),_e(me(()=>p.state,()=>{cancelAnimationFrame(u),u=requestAnimationFrame(c)})),_e(me(()=>n.pathname,()=>{const g=r();g==null||g.setPath(n.pathname)})),e(ae,{get as(){return Oe.div},initial:{x:-999},get animate(){return{x:d()}},zIndex:"$overlay",pos:"fixed",left:3,top:3,h:"calc(100vh - 6px)",minW:180,p:"$2",overflow:"auto",shadow:"$lg",rounded:"$lg",bgColor:"white",_dark:{bgColor:"$neutral3"},onMouseEnter:a,onMouseLeave:c,ref:g=>s(g),get children(){return e(nr,{autoOpen:!0,showEmptyIcon:!0,showHiddenFolder:!1,onChange:g=>t(g),handle:g=>o(g)})}})}function yr(){const t=D(()=>re.show_sidebar!=="none");return e(b,{get when(){return t()},get children(){return e(vr,{})}})}const Cr=()=>e(mt,{get children(){return e(Y,{class:"body",mt:"$1",py:"$2",px:"2%",minH:"80vh",w:"$full",gap:"$4",get children(){return[e(et,{files:["header.md","top.md"],fromMeta:"header"}),e(fr,{}),e($r,{}),e(et,{files:["readme.md","footer.md","bottom.md"],fromMeta:"readme"}),e(yr,{})]}})}}),xr=()=>(_(),e(Y,{class:"footer",w:"$full",py:"$4"})),tt={black:"#000",silver:"#C0C0C0",gray:"#808080",white:"#FFF",maroon:"#800000",red:"#F00",purple:"#800080",fuchsia:"#F0F",green:"#008000",lime:"#0F0",olive:"#808000",yellow:"#FF0",navy:"#000080",blue:"#00F",teal:"#008080",aqua:"#0FF",transparent:"#0000"},de="^\\s*",ge="\\s*$",ee="\\s*((\\.\\d+)|(\\d+(\\.\\d*)?))\\s*",te="([0-9A-Fa-f])",ne="([0-9A-Fa-f]{2})",Sr=new RegExp(`${de}rgb\\s*\\(${ee},${ee},${ee}\\)${ge}`),Mr=new RegExp(`${de}rgba\\s*\\(${ee},${ee},${ee},${ee}\\)${ge}`),Or=new RegExp(`${de}#${te}${te}${te}${ge}`),Fr=new RegExp(`${de}#${ne}${ne}${ne}${ge}`),Rr=new RegExp(`${de}#${te}${te}${te}${te}${ge}`),Lr=new RegExp(`${de}#${ne}${ne}${ne}${ne}${ge}`);function F(t){return parseInt(t,16)}function ft(t){try{let n;if(n=Fr.exec(t))return[F(n[1]),F(n[2]),F(n[3]),1];if(n=Sr.exec(t))return[H(n[1]),H(n[5]),H(n[9]),1];if(n=Mr.exec(t))return[H(n[1]),H(n[5]),H(n[9]),ze(n[13])];if(n=Or.exec(t))return[F(n[1]+n[1]),F(n[2]+n[2]),F(n[3]+n[3]),1];if(n=Lr.exec(t))return[F(n[1]),F(n[2]),F(n[3]),ze(F(n[4])/255)];if(n=Rr.exec(t))return[F(n[1]+n[1]),F(n[2]+n[2]),F(n[3]+n[3]),ze(F(n[4]+n[4])/255)];if(t in tt)return ft(tt[t]);throw new Error(`[seemly/rgba]: Invalid color value ${t}.`)}catch(n){throw n}}function Tr(t){return t>1?1:t<0?0:t}function nt(t,n,r,o){return`rgba(${H(t)}, ${H(n)}, ${H(r)}, ${Tr(o)})`}function Ce(t,n){const[r,o,l,s=1]=Array.isArray(t)?t:ft(t);return n.alpha?nt(r,o,l,n.alpha):nt(r,o,l,s)}function ze(t){const n=Math.round(Number(t)*100)/100;return n>1?1:n<0?0:n}function H(t){const n=Math.round(Number(t));return n>255?255:n<0?0:n}const Er={list:ht,grid:lt,image:it},Ir=()=>{const t=_();return e(Ve,{get children(){return[e(Ae,{as:Ut,get color(){return q()},get bgColor(){return Ce(q(),{alpha:.15})},get _hover(){return{bgColor:Ce(q(),{alpha:.2})}},"aria-label":"switch layout",compact:!0,size:"lg",get icon(){return e(Me,{get children(){return[e(B,{get when(){return Ee()==="list"},get children(){return e(ht,{})}}),e(B,{get when(){return Ee()==="grid"},get children(){return e(lt,{})}}),e(B,{get when(){return Ee()==="image"},get children(){return e(it,{})}})]}})}}),e(He,{get children(){return e(ue,{get each(){return Object.entries(Er)},children:n=>e(U,{get icon(){return e(Wt,{get component(){return n[1]}})},onSelect:()=>{qt(n[0])},get children(){return t(`home.layouts.${n[0]}`)}})})}})]}})},Br=()=>{const t=ce("logo").split(`
`),n=Se(t[0],t.pop()),r=D(()=>{switch(re.position_of_header_navbar){case"sticky":return{position:"sticky",zIndex:"$sticky",top:0};default:return{position:void 0,zIndex:void 0,top:void 0}}});return e(st,se(r,{bgColor:"$background",class:"header",w:"$full",get children(){return e(mt,{get children(){return e(P,{px:"calc(2% + 0.5rem)",py:"$2",w:"$full",justifyContent:"space-between",get children(){return[e(P,{class:"header-left",h:"44px",get children(){return e(Kt,{get src(){return n()},h:"$full",w:"auto",get fallback(){return e(Xt,{})}})}}),e(P,{class:"header-right",spacing:"$2",get children(){return e(b,{get when(){return p.state===x.Folder},get children(){return[e(b,{get when(){return ce("search_index")!=="none"},get children(){return e(P,{bg:"$neutral4",w:"$32",p:"$1",rounded:"$md",justifyContent:"space-between",border:"2px solid transparent",cursor:"pointer",get color(){return q()},get bgColor(){return Ce(q(),{alpha:.15})},get _hover(){return{bgColor:Ce(q(),{alpha:.2})}},onClick:()=>{h.emit("tool","search")},get children(){return[e(Ne,{as:Gt}),e(P,{get children(){return[ve(()=>Jt?e(Ie,{children:"Cmd"}):e(Ie,{children:"Ctrl"})),e(Ie,{children:"K"})]}})]}})}}),e(Ir,{})]}})}})]}})}})}}))};function zr(t){return Q({a:{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",viewBox:"0 0 24 24"},c:'<path stroke="none" d="M0 0h24v24H0z"/><path d="M9 11l3 3 8-8"/><path d="M20 12v6a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h9"/>'},t)}function Pr(t){return Q({a:{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",viewBox:"0 0 24 24"},c:'<path stroke="none" d="M0 0h24v24H0z"/><rect width="12" height="12" x="8" y="8" rx="2"/><path d="M16 8V6a2 2 0 00-2-2H6a2 2 0 00-2 2v8a2 2 0 002 2h2"/>'},t)}function yo(t){return Q({a:{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",viewBox:"0 0 24 24"},c:'<path stroke="none" d="M0 0h24v24H0z"/><path d="M11 7H6a2 2 0 00-2 2v9a2 2 0 002 2h9a2 2 0 002-2v-5M10 14L20 4M15 4h5v5"/>'},t)}function Dr(t){return Q({a:{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",viewBox:"0 0 24 24"},c:'<path stroke="none" d="M0 0h24v24H0z"/><path d="M14 3v4a1 1 0 001 1h4"/><path d="M17 21H7a2 2 0 01-2-2V5a2 2 0 012-2h7l5 5v11a2 2 0 01-2 2zM9 15h6"/><path d="M12.5 17.5L15 15l-2.5-2.5"/>'},t)}function jr(t){return Q({a:{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",viewBox:"0 0 24 24"},c:'<path stroke="none" d="M0 0h24v24H0z"/><path d="M10 14a3.5 3.5 0 005 0l4-4a3.5 3.5 0 00-5-5l-.5.5"/><path d="M14 10a3.5 3.5 0 00-5 0l-4 4a3.5 3.5 0 005 5l.5-.5"/>'},t)}function Ar(t){return Q({a:{viewBox:"0 0 16 16"},c:'<path fill="currentColor" d="M11 8v6h1V8h2.5l-3-3-3 3zM1 3h1.5v1H1V3zM3 3h1.5v1H3V3zM5 3h1v1.5H5V3zM1 6.5h1V8H1V6.5zM2.5 7H4v1H2.5V7zM4.5 7H6v1H4.5V7zM1 4.5h1V6H1V4.5zM5 5h1v1.5H5V5zM5 11v3H2v-3h3zm1-1H1v5h5v-5z"/>'},t)}function Co(t){return Q({a:{viewBox:"0 0 16 16"},c:'<path fill="currentColor" d="M14 6c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1s1-.45 1-1V7c0-.55-.45-1-1-1zM2 6c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1s1-.45 1-1V7c0-.55-.45-1-1-1zm1.5 5.5A1.5 1.5 0 005 13v2c0 .55.45 1 1 1s1-.45 1-1v-2h2v2c0 .55.45 1 1 1s1-.45 1-1v-2a1.5 1.5 0 001.5-1.5V6h-9v5.5zM12.472 5a4.5 4.5 0 00-2.025-3.276l.5-1.001a.5.5 0 00-.895-.447L9.55 1.28l-.13-.052a4.504 4.504 0 00-2.84 0l-.13.052L5.948.276a.5.5 0 00-.895.447l.5 1.001A4.499 4.499 0 003.528 5v.5H12.5V5h-.028zM6.5 4a.5.5 0 01-.001-1h.002A.5.5 0 016.5 4zm3 0a.5.5 0 01-.001-1h.003a.5.5 0 01-.001 1z"/>'},t)}function Hr(t){return Q({a:{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},c:'<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 13h6M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>'},t)}const N={rename:{icon:rr,color:"$accent9"},copy:{icon:Pr,color:"$success9"},move:{icon:Dr,color:"$warning9"},delete:{icon:Yt,color:"$danger9"},copy_link:{icon:jr,color:"$info9"},mkdir:{icon:or,p:!0},recursive_move:{icon:Ar,p:!0},remove_empty_directory:{icon:Hr,p:!0},batch_rename:{icon:ar,p:!0},new_file:{icon:lr,p:!0},cancel_select:{icon:ir},download:{icon:Qt,color:"$primary9"}},xe=t=>{const n=Zt.findIndex(o=>o===t.name);if(n!==-1&&!ct.can(ut(),n))return null;const r=_();return e(dt,{placement:"top",withArrow:!0,get label(){return r(`home.toolbar.${t.name}`)},get children(){return e(Ne,se({get class(){return`toolbar-${t.name}`},get _hover(){return{bgColor:De()}},_focus:{outline:"none"},cursor:"pointer",boxSize:"$7",rounded:"$md",get p(){var o;return(o=N[t.name])!=null&&o.p?"$1_5":"$1"},_active:{transform:"scale(.94)",transition:"0.2s"},get as(){var o;return(o=N[t.name])==null?void 0:o.icon},get color(){var o;return(o=N[t.name])==null?void 0:o.color}},t))}})},L=t=>{const n=_();return e(dt,{get disabled(){return!t.tips},placement:"left",withArrow:!0,get label(){return n(`home.toolbar.${t.tips}`)},get children(){return e(Ne,se({get color(){return q()},get _hover(){return{bgColor:q(),color:"white"}},_focus:{outline:"none"},cursor:"pointer",boxSize:"$8",rounded:"$lg",p:"$1",_active:{transform:"scale(.94)",transition:"0.2s"},get as(){return t.icon}},t))}})},Vr=()=>{const t=_(),{copySelectedPreviewPage:n,copySelectedRawLink:r}=en(),o="neutral";return e(Ve,{placement:"top",offset:10,get children(){return[e(Ae,{as:xe,name:"copy_link"}),e(He,{get children(){return[e(U,{colorScheme:o,onSelect:()=>{n()},get children(){return t("home.toolbar.preview_page")}}),e(U,{colorScheme:o,onSelect:()=>{r()},get children(){return t("home.toolbar.down_link")}}),e(U,{colorScheme:o,onSelect:()=>{r(!0)},get children(){return t("home.toolbar.encode_down_link")}})]}})]}})},Nr=Re("<p></p>"),Ur=()=>{const t=_(),n="neutral",{batchDownloadSelected:r,sendToAria2:o,playlistDownloadSelected:l}=dr();return e(Ve,{placement:"top",offset:10,get children(){return[e(Ae,{as:xe,name:"download"}),e(He,{get children(){return[e(U,{colorScheme:n,onSelect:r,get children(){return t("home.toolbar.batch_download")}}),e(b,{get when(){return ct.is_admin(ut())||gt("package_download")},get children(){return[e(U,{colorScheme:n,onSelect:()=>{h.emit("tool","package_download")},get children(){return t("home.toolbar.package_download")}}),e(U,{colorScheme:n,onSelect:l,get children(){return t("home.toolbar.playlist_download")}})]}}),e(U,{colorScheme:n,onSelect:o,get children(){return t("home.toolbar.send_aria2")}})]}})]}})},Wr=fe(()=>pe(()=>import("./PackageDownload.0d26a19b.js"),["assets/PackageDownload.0d26a19b.js","assets/index.98bb8b3f.js","assets/index.15d8d646.css"])),qr=()=>{const t=_(),n=i=>{if(i==="package_download"){if(!gt("package_download"))return;o()}};h.on("tool",n),k(()=>{h.off("tool",n)});const{isOpen:r,onOpen:o,onClose:l}=C(),[s,d]=y("pre_tips");return e(J,{blockScrollOnMount:!1,get opened(){return r()},onClose:l,closeOnOverlayClick:!1,closeOnEsc:!1,get children(){return[e(K,{}),e(X,{get children(){return[e(V,{get children(){return t("home.toolbar.package_download")}}),e(je,{get fallback(){return e($e,{})},get children(){return e(b,{get when(){return s()==="pre_tips"},get fallback(){return e(Wr,{onClose:l})},get children(){return[e(G,{get children(){const i=Nr.cloneNode(!0);return Fe(i,()=>t("home.toolbar.pre_package_download-tips")),i}}),e(oe,{display:"flex",gap:"$2",get children(){return[e(S,{onClick:l,colorScheme:"neutral",get children(){return t("global.cancel")}}),e(S,{colorScheme:"info",onClick:()=>{d("package_download")},get children(){return t("global.confirm")}})]}})]}})}})]}})]}})},Kr=()=>{const t=D(()=>[x.Folder,x.FetchingMore].includes(p.state)&&tn()&&nn());return e(mr,{exitBeforeEnter:!0,get children(){return e(b,{get when(){return t()},get children(){return e(ae,{class:"center-toolbar",pos:"fixed",bottom:"$4",right:"50%",w:"max-content",color:"$neutral11",get as(){return Oe.div},initial:{opacity:0,scale:.9,x:"50% ",y:10},animate:{opacity:1,scale:1,x:"50%",y:0},exit:{opacity:0,scale:.9},transition:{duration:.2},get children(){return e(P,{p:"$2",get bgColor(){return Se("white","#000000d0")()},spacing:"$1",shadow:"0px 10px 30px -5px rgba(0, 0, 0, 0.3)",rounded:"$lg",css:{backdropFilter:"blur(8px)"},get children(){return[e(ue,{each:["rename","move","copy","delete"],children:n=>e(xe,{name:n,onClick:()=>{h.emit("tool",n)}})}),e(Vr,{}),e(Ur,{}),e(xe,{name:"cancel_select",onClick:()=>{rn(!1)}})]}})}})}})}})},Xr=()=>{const{isOpen:t,onToggle:n}=C({defaultIsOpen:localStorage.getItem("more-open")==="true",onClose:()=>localStorage.setItem("more-open","false"),onOpen:()=>localStorage.setItem("more-open","true")}),r=D(()=>t()?"$4":"$5"),o=D(()=>p.state===x.Folder),{refresh:l}=T();return e(ae,{class:"left-toolbar-box",pos:"fixed",get right(){return r()},get bottom(){return r()},get children(){return e(b,{get when(){return t()},get fallback(){return e(L,{class:"toolbar-toggle",as:Qe,onClick:()=>{n()}})},get children(){return e(Y,{class:"left-toolbar",p:"$1",rounded:"$lg",spacing:"$1",bgColor:"$neutral1",get as(){return Oe.div},initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.6},transition:{duration:.2},get children(){return[e(Y,{spacing:"$1",class:"left-toolbar-in",get children(){return[e(b,{get when(){return ve(()=>!!o(),!0)()&&(Ge("write")||p.write)},get children(){return[e(L,{as:tr,tips:"refresh",onClick:()=>{l(void 0,!0)}}),e(L,{get as(){return N.new_file.icon},tips:"new_file",onClick:()=>{h.emit("tool","new_file")}}),e(L,{get as(){return N.mkdir.icon},p:"$1_5",tips:"mkdir",onClick:()=>{h.emit("tool","mkdir")}}),e(L,{get as(){return N.recursive_move.icon},tips:"recursive_move",onClick:()=>{h.emit("tool","recursiveMove")}}),e(L,{get as(){return N.remove_empty_directory.icon},tips:"remove_empty_directory",onClick:()=>{h.emit("tool","removeEmptyDirectory")}}),e(L,{get as(){return N.batch_rename.icon},tips:"batch_rename",onClick:()=>{h.emit("tool","batchRename")}}),e(L,{as:on,tips:"upload",onClick:()=>{h.emit("tool","upload")}})]}}),e(b,{get when(){return ve(()=>!!o(),!0)()&&Ge("offline_download")},get children(){return e(L,{as:an,pl:"0",tips:"offline_download",onClick:()=>{h.emit("tool","offline_download")}})}}),e(b,{get when(){return ln()},get children(){return e(L,{as:sr,tips:"toggle_markdown_toc",onClick:()=>{sn(s=>!s)}})}}),e(L,{tips:"toggle_checkbox",as:zr,onClick:cn}),e(L,{as:un,tips:"local_settings",onClick:()=>{h.emit("tool","local_settings")}})]}}),e(L,{tips:"more",as:Qe,onClick:n})]}})}})}})},Gr=()=>{const{isOpen:t,onOpen:n,onClose:r}=C(),[o,l]=z(dn),{pathname:s}=M(),{refresh:d}=T(),i=a=>{a==="copy"&&n()};return h.on("tool",i),k(()=>{h.off("tool",i)}),e(Ue,{get opened(){return t()},onClose:r,get loading(){return o()},onSubmit:async a=>{const c=await l(s(),a,W().map(u=>u.name));j(c,()=>{d(),r()})}})},Jr=()=>{const{isOpen:t,onOpen:n,onClose:r}=C(),[o,l]=z(gn),{pathname:s}=M(),{refresh:d}=T(),i=a=>{a==="move"&&n()};return h.on("tool",i),k(()=>{h.off("tool",i)}),e(Ue,{get opened(){return t()},onClose:r,get loading(){return o()},onSubmit:async a=>{const c=await l(s(),a,W().map(u=>u.name));j(c,()=>{d(),r()})}})},Yr=Re("<p></p>"),Qr=()=>{const t=_(),{isOpen:n,onOpen:r,onClose:o}=C(),[l,s]=z(hn),{refresh:d}=T(),{pathname:i}=M(),a=c=>{c==="delete"&&r()};return h.on("tool",a),k(()=>{h.off("tool",a)}),e(J,{blockScrollOnMount:!1,get opened(){return n()},onClose:o,size:{"@initial":"xs","@md":"md"},get children(){return[e(K,{}),e(X,{get children(){return[e(V,{get children(){return t("home.toolbar.delete")}}),e(G,{get children(){const c=Yr.cloneNode(!0);return Fe(c,()=>t("home.toolbar.delete-tips")),c}}),e(oe,{display:"flex",gap:"$2",get children(){return[e(S,{onClick:o,colorScheme:"neutral",get children(){return t("global.cancel")}}),e(S,{colorScheme:"danger",get loading(){return l()},onClick:async()=>{const c=await s(i(),W().map(u=>u.name));j(c,()=>{d(),o()})},get children(){return t("global.confirm")}})]}})]}})]}})},Zr=()=>{const{isOpen:t,onOpen:n,onClose:r}=C(),o=_(),[l,s]=z(mn),{pathname:d}=M(),{refresh:i}=T(),a=c=>{if(c==="rename"){if(!fn()){I.warning(o("home.toolbar.only_one-tips"));return}n()}};return h.on("tool",a),k(()=>{h.off("tool",a)}),e(b,{get when(){return t()},get children(){return e(Le,{title:"home.toolbar.input_new_name",get isRenamingFile(){return!W()[0].is_dir},get opened(){return t()},onClose:r,get defaultValue(){var c,u;return(u=(c=W()[0])==null?void 0:c.name)!=null?u:""},get loading(){return l()},onSubmit:async c=>{const u=await s(Z(d(),W()[0].name),c);j(u,()=>{i(),r()})}})}})},eo=()=>{const{isOpen:t,onOpen:n,onClose:r}=C(),[o,l]=z(pn),{refresh:s}=T(),{pathname:d}=M(),i=a=>{a==="new_file"&&n()};return h.on("tool",i),k(()=>{h.off("tool",i)}),e(Le,{title:"home.toolbar.input_filename",get opened(){return t()},onClose:r,get loading(){return o()},onSubmit:async a=>{const c=await l(Z(d(),a),ot());j(c,()=>{s(),r()})}})},to=()=>{const{isOpen:t,onOpen:n,onClose:r}=C(),[o,l]=z(bn),{pathname:s}=M(),{refresh:d}=T(),i=a=>{a==="mkdir"&&n()};return h.on("tool",i),k(()=>{h.off("tool",i)}),e(Le,{title:"home.toolbar.input_dir_name",get opened(){return t()},onClose:r,get loading(){return o()},onSubmit:async a=>{const c=await l(Z(s(),a));j(c,()=>{d(),r()})}})},no=Re("<p></p>"),ro=()=>{const{isOpen:t,onOpen:n,onClose:r}=C(),{isOpen:o,onOpen:l,onClose:s}=C(),[d,i]=z(wn),{pathname:a}=M(),{refresh:c}=T(),u=m=>{m==="recursiveMove"&&n()};h.on("tool",u),k(()=>{h.off("tool",u)});const g=_();return[e(J,{blockScrollOnMount:!1,get opened(){return t()},onClose:()=>r(),size:{"@initial":"xs","@md":"md"},get children(){return[e(K,{}),e(X,{get children(){return[e(V,{get children(){return g("home.toolbar.recursive_move")}}),e(G,{get children(){const m=no.cloneNode(!0);return Fe(m,()=>g("home.toolbar.recursive_move_directory-tips")),m}}),e(oe,{display:"flex",gap:"$2",get children(){return[e(S,{onClick:()=>r(),colorScheme:"neutral",get children(){return g("global.cancel")}}),e(S,{onClick:()=>{r(),l()},colorScheme:"danger",get children(){return g("global.confirm")}})]}})]}})]}}),e(Ue,{get opened(){return o()},onClose:s,get loading(){return d()},onSubmit:async m=>{const $=await i(a(),m);j($,()=>{c(),s()})}})]},oo=Re("<p></p>"),ao=()=>{const{isOpen:t,onOpen:n,onClose:r}=C(),{pathname:o}=M(),[l,s]=z(_n),{refresh:d}=T(),i=c=>{c==="removeEmptyDirectory"&&n()};h.on("tool",i),k(()=>{h.off("tool",i)});const a=_();return e(J,{blockScrollOnMount:!1,get opened(){return t()},onClose:r,size:{"@initial":"xs","@md":"md"},get children(){return[e(K,{}),e(X,{get children(){return[e(V,{get children(){return a("home.toolbar.remove_empty_directory")}}),e(G,{get children(){const c=oo.cloneNode(!0);return Fe(c,()=>a("home.toolbar.remove_empty_directory-tips")),c}}),e(oe,{display:"flex",gap:"$2",get children(){return[e(S,{onClick:r,colorScheme:"neutral",get children(){return a("global.cancel")}}),e(S,{colorScheme:"danger",get loading(){return l()},onClick:async()=>{const c=await s(o());j(c,()=>{d(),r()})},get children(){return a("global.confirm")}})]}})]}})]}})},lo=t=>e(Oe.div,{initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},transition:{duration:.2},style:{width:"100%"},get children(){return e(P,{class:"list-item",w:"$full",p:"$2",rounded:"$lg",transition:"all 0.3s",get _hover(){return{transform:"scale(1.01)",bgColor:De()}},get children(){return[e(ye,{w:{"@initial":"50%","@md":"50%"},class:"name",css:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},get title(){return t.obj.src_name},get children(){return t.obj.src_name}}),e(ye,{w:{"@initial":"50%","@md":"50%"},class:"name",css:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},get title(){return t.obj.new_name},get children(){return t.obj.new_name}})]}})}}),io=()=>{const{isOpen:t,onOpen:n,onClose:r}=C(),{isOpen:o,onOpen:l,onClose:s}=C(),[d,i]=z(kn),{pathname:a}=M(),{refresh:c}=T(),[u,g]=y("1"),[m,$]=y(""),[v,E]=y(""),[f,O]=y("string"),[le,ie]=y([]),R=_(),We=()=>({fontWeight:"bold",fontSize:"$sm",color:"$neutral11",textAlign:"left",cursor:"pointer"}),qe=w=>{w==="batchRename"&&l()};h.on("tool",qe),k(()=>{h.off("tool",qe)});const Te=()=>{if(!m()||!v()){I.warning(R("global.empty_input"));return}const w=new RegExp(m(),"g");let he;if(u()==="1")he=p.objs.filter(A=>A.name.match(m())).map(A=>({src_name:A.name,new_name:A.name.replace(w,v())}));else{let A=v();he=p.objs.map(be=>{let Ke="";const Xe=be.name.lastIndexOf(".");Xe!==-1&&(Ke=be.name.substring(Xe+1));const pt={src_name:be.name,new_name:m()+A+"."+Ke};return A=(parseInt(A)+1).toString().padStart(A.length,"0"),pt})}ie(he),n(),s()};return[e(J,{blockScrollOnMount:!1,get opened(){return o()},onClose:s,initialFocus:"#modal-input1",size:{"@initial":"xs","@md":"md"},get children(){return[e(K,{}),e(X,{get children(){return[e(b,{get when(){return u()==="1"},get children(){return e(V,{get children(){return R("home.toolbar.regular_rename")}})}}),e(b,{get when(){return u()==="2"},get children(){return e(V,{get children(){return R("home.toolbar.sequential_renaming_desc")}})}}),e(G,{get children(){return[e($n,{defaultValue:"1",style:{margin:"20px 0"},onChange:w=>{g(w),w==="1"?O("string"):w==="2"&&O("number")},get children(){return e(P,{spacing:"$4",get children(){return[e(Je,{value:"1",get children(){return R("home.toolbar.regex_rename")}}),e(Je,{value:"2",get children(){return R("home.toolbar.sequential_renaming")}})]}})}}),e(Y,{spacing:"$2",get children(){return[e(ke,{id:"modal-input1",type:"string",get value(){return m()},onInput:w=>{$(w.currentTarget.value)},onKeyDown:w=>{w.key==="Enter"&&Te()}}),e(ke,{id:"modal-input2",get type(){return f()},get value(){return v()},onInput:w=>{E(w.currentTarget.value)},onKeyDown:w=>{w.key==="Enter"&&Te()}})]}})]}}),e(oe,{display:"flex",gap:"$2",get children(){return[e(S,{onClick:()=>{g("1"),O("string"),s()},colorScheme:"neutral",get children(){return R("global.cancel")}}),e(S,{onClick:()=>Te(),get disabled(){return!m()||!v()},get children(){return R("global.ok")}})]}})]}})]}}),e(J,{size:"xl",get opened(){return t()},onClose:r,get children(){return[e(K,{}),e(X,{get children(){return[e(V,{get children(){return R("home.toolbar.regex_rename_preview")}}),e(G,{get children(){return e(Y,{class:"list",w:"$full",spacing:"$1",get children(){return[e(P,{class:"title",w:"$full",p:"$2",get children(){return[e(ye,se({w:{"@initial":"50%","@md":"50%"}},We,{get children(){return R("home.toolbar.regex_rename_preview_old_name")}})),e(ye,se({w:{"@initial":"50%","@md":"50%"}},We,{get children(){return R("home.toolbar.regex_rename_preview_new_name")}}))]}}),e(ue,{get each(){return le()},children:(w,he)=>e(lo,{obj:w,get index(){return he()}})})]}})}}),e(oe,{display:"flex",gap:"$2",get children(){return[e(S,{onClick:()=>{ie([]),g("1"),O("string"),r(),s()},colorScheme:"neutral",get children(){return R("global.cancel")}}),e(S,{onClick:()=>{ie([]),r(),l()},colorScheme:"neutral",get children(){return R("global.back")}}),e(S,{get loading(){return d()},onClick:async()=>{const w=await i(a(),le());j(w,()=>{ie([]),$(""),E(""),g("1"),O("string"),c(),s(),r()})},get disabled(){return le().length==0},get children(){return R("global.ok")}})]}})]}})]}})]},so=["delete_on_upload_succeed","delete_on_upload_failed","delete_never","delete_always"],co=()=>{const t=_(),[n,r]=y([]),[o,l]=z(()=>vn.get("/public/offline_download_tools")),[s,d]=y(""),[i,a]=y("delete_on_upload_succeed");Pe(async()=>{const f=await l();yn(f,O=>{r(O),d(O[0])})});const{isOpen:c,onOpen:u,onClose:g}=C(),[m,$]=z(Cn),{pathname:v}=M(),E=f=>{f==="offline_download"&&u()};return h.on("tool",E),k(()=>{h.off("tool",E)}),e(Le,{title:"home.toolbar.offline_download",type:"text",get opened(){return c()},onClose:g,get loading(){return o()||m()},get tips(){return t("home.toolbar.offline_download-tips")},get topSlot(){return e(ae,{mb:"$2",get children(){return e(Ye,{get value(){return s()},onChange:f=>d(f),get options(){return n().map(f=>({value:f,label:f}))}})}})},get bottomSlot(){return e(ae,{mb:"$2",get children(){return e(Ye,{get value(){return i()},onChange:f=>a(f),get options(){return so.map(f=>({value:f,label:t(`home.toolbar.delete_policy.${f}`)}))}})}})},onSubmit:async f=>{const O=await $(v(),f.split(`
`),s(),i());j(O,()=>{g()})}})},uo=t=>{const n=_(),r=d=>{d===t.name&&l()};h.on("tool",r),k(()=>{h.off("tool",r)});const{isOpen:o,onOpen:l,onClose:s}=C();return e(J,{get blockScrollOnMount(){return t.blockScrollOnMount},get opened(){return o()},onClose:s,closeOnOverlayClick:!1,closeOnEsc:!1,size:{"@initial":"xs","@md":"md","@lg":"lg","@xl":"xl","@2xl":"2xl"},get children(){return[e(K,{}),e(X,{get children(){return[e(xn,{}),e(V,{get children(){return n(t.title)}}),e(G,{get children(){return e(b,{get when(){return o()},get children(){return e(je,{get fallback(){return e($e,{})},get children(){return t.children}})}})}})]}})]}})};function go(t){const n=_();return e(Kn,{get children(){return[e(Bn,{get children(){return n(`home.local_settings.${t.key}`)}}),e(Me,{get fallback(){return e(ke,{get value(){return re[t.key]},onInput:r=>{Be(t.key,r.currentTarget.value)}})},get children(){return[e(B,{get when(){return t.type==="select"},get children(){return e(zn,{get id(){return t.key},get defaultValue(){return re[t.key]},onChange:r=>Be(t.key,r),get children(){return[e(Pn,{get children(){return[e(Dn,{get children(){return n("global.choose")}}),e(jn,{}),e(An,{})]}}),e(Hn,{get children(){return e(Vn,{get children(){return e(ue,{get each(){return ve(()=>typeof t.options=="function",!0)()?t.options():t.options},children:r=>e(Nn,{value:r,get children(){return[e(Un,{get children(){return n(`home.local_settings.${t.key}_options.${r}`)}}),e(Wn,{})]}})})}})}})]}})}}),e(B,{get when(){return t.type==="boolean"},get children(){return e(qn,{get defaultChecked(){return re[t.key]==="true"},onChange:r=>{Be(t.key,r.currentTarget.checked.toString())}})}})]}})]}})}const ho=()=>{const{isOpen:t,onOpen:n,onClose:r}=C(),o=_(),l=s=>{s==="local_settings"&&n()};return h.on("tool",l),k(()=>{h.off("tool",l)}),e(In,{get opened(){return t()},placement:"right",onClose:r,get children(){return[e(Sn,{}),e(Mn,{get children(){return[e(On,{}),e(Fn,{color:"$info9",get children(){return o("home.toolbar.local_settings")}}),e(Rn,{get children(){return[e(Y,{spacing:"$2",get children(){return e(ue,{get each(){return Ln.filter(s=>!s.hidden)},children:s=>e(go,s)})}}),e(st,{mt:"$4",get children(){return e(P,{spacing:"$4",p:"$2",color:"$neutral11",get children(){return[e(Tn,{}),e(En,{})]}})}})]}})]}})]}})},mo=fe(()=>pe(()=>import("./Upload.2ac868b7.js"),["assets/Upload.2ac868b7.js","assets/index.98bb8b3f.js","assets/index.15d8d646.css","assets/index.75b033d3.js"])),fo=()=>[e(Gr,{}),e(Jr,{}),e(Zr,{}),e(Qr,{}),e(eo,{}),e(to,{}),e(ro,{}),e(ao,{}),e(io,{}),e(co,{}),e(qr,{}),e(uo,{name:"upload",title:"home.toolbar.upload",get children(){return e(mo,{})}}),e(ho,{})],po=()=>e(Gn,{get children(){return[e(Xr,{}),e(Kr,{}),e(fo,{}),e(Xn,{})]}}),bo=()=>{Yn(ce("site_title"));const t=ce("announcement");return t&&I.render(()=>e(at,{children:t})),[e(Br,{}),e(po,{}),e(Cr,{}),e(xr,{})]},xo=Object.freeze(Object.defineProperty({__proto__:null,default:bo},Symbol.toStringTag,{value:"Module"}));export{Co as I,xo as L,yo as T,N as o,dr as u};
