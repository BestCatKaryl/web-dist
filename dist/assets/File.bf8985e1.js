import{h as e,aq as I,at as _,ag as P,a1 as o,a4 as l,bO as k,b4 as x,av as E,cl as L,cS as S,a as f,k as d,cT as $,a5 as w,ao as A,ae as D,C as m,ak as V,G as j,al as R,cy as O,S as g,aG as C,ap as y,cB as M,L as z,cU as F,V as t,W as n,b as B,cC as W,cV as U,m as G,bb as H,Y as X,Z as q,am as Y}from"./index.9c923db5.js";import{g as Z,O as u}from"./icon.11257189.js";import{o as J}from"./index.27c6c4cc.js";import{T as K}from"./Layout.f3c4e2ff.js";const N=r=>e(l,{class:"fileinfo",py:"$6",spacing:"$6",get children(){return[e(I,{boxSize:"$20",get fallback(){return e(_,{get color(){return P()},boxSize:"$20",get as(){return Z(o.obj)}})},get src(){return o.obj.thumb}}),e(l,{spacing:"$2",get children(){return[e(k,{size:"lg",css:{wordBreak:"break-all"},get children(){return o.obj.name}}),e(x,{color:"$neutral10",size:"sm",get children(){return[E(()=>L(o.obj.size))," \xB7 ",E(()=>S(o.obj.modified))]}})]}}),e(l,{spacing:"$2",get children(){return r.children}})]}}),T=()=>{const r=f(),a=d(()=>$(o.obj.name)),{currentObjLink:i}=w();return e(g,{get when(){return a().length},get children(){return e(A,{get children(){return[e(D,{as:m,colorScheme:"success",get rightIcon(){return e(_,{as:J})},get children(){return r("home.preview.open_with")}}),e(V,{get children(){return e(j,{get each(){return a()},children:s=>e(R,{as:"a",target:"_blank",get href(){return O(s.value,{raw_url:o.raw_url,name:o.obj.name,d_url:i(!0)})},get children(){return s.key}})})}})]}})}})},p=r=>{const a=f(),{copyCurrentRawLink:i}=C();return e(N,{get children(){return[e(y,{spacing:"$2",get children(){return[e(m,{colorScheme:"accent",onClick:()=>i(!0),get children(){return a("home.toolbar.copy_link")}}),e(m,{as:"a",get href(){return o.raw_url},target:"_blank",get children(){return a("home.preview.download")}})]}}),e(g,{get when(){return r.openWith},get children(){return e(T,{})}})]}})},Q=Object.freeze(Object.defineProperty({__proto__:null,Download:p,default:p},Symbol.toStringTag,{value:"Module"})),ee=r=>{const{currentObjLink:a}=w(),i=d(()=>O(r.scheme,{raw_url:o.raw_url,name:o.obj.name,d_url:a(!0),ts:!0}));return e(F,{w:"$full",h:"70vh",get children(){return[e(M.iframe,{w:"$full",h:"$full",get src(){return i()}}),e(_,{pos:"absolute",right:"$2",bottom:"$10","aria-label":"Open in new tab",as:K,onClick:()=>{window.open(i(),"_blank")},cursor:"pointer",rounded:"$md",get bgColor(){return z()},p:"$1",boxSize:"$7"})]}})},re=r=>()=>e(ee,{scheme:r}),te=[{name:"HTML render",exts:["html"],component:t(()=>n(()=>import("./html.aa11edba.js"),["assets/html.aa11edba.js","assets/index.9c923db5.js","assets/index.15d8d646.css"]))},{name:"Aliyun Video Previewer",type:u.VIDEO,provider:/^Aliyundrive(Open)?$/,component:t(()=>n(()=>import("./aliyun_video.5b7444a5.js"),["assets/aliyun_video.5b7444a5.js","assets/index.9c923db5.js","assets/index.15d8d646.css","assets/icon.11257189.js","assets/index.27c6c4cc.js","assets/Layout.f3c4e2ff.js","assets/useTitle.bad8149d.js","assets/index.d421c1cc.js","assets/FolderTree.275d3374.js","assets/index.bce9104b.js","assets/video_box.773665ac.js","assets/_commonjs-dynamic-modules.30ae7933.js","assets/hls.b1b28382.js"]))},{name:"Markdown",type:u.TEXT,component:t(()=>n(()=>import("./markdown.743ee405.js"),["assets/markdown.743ee405.js","assets/index.9c923db5.js","assets/index.15d8d646.css"]))},{name:"Markdown with word wrap",type:u.TEXT,component:t(()=>n(()=>import("./markdown_with_word_wrap.8cf3ff2a.js"),["assets/markdown_with_word_wrap.8cf3ff2a.js","assets/index.9c923db5.js","assets/index.15d8d646.css"]))},{name:"Url Open",exts:["url"],component:t(()=>n(()=>import("./url.751c27c0.js"),["assets/url.751c27c0.js","assets/index.9c923db5.js","assets/index.15d8d646.css","assets/icon.11257189.js","assets/index.27c6c4cc.js","assets/Layout.f3c4e2ff.js","assets/useTitle.bad8149d.js","assets/index.d421c1cc.js","assets/FolderTree.275d3374.js","assets/index.bce9104b.js"]))},{name:"Text Editor",type:u.TEXT,exts:["url"],component:t(()=>n(()=>import("./text-editor.6e8a73fb.js"),["assets/text-editor.6e8a73fb.js","assets/index.9c923db5.js","assets/index.15d8d646.css","assets/index.a7f11fba.js"]))},{name:"Image",type:u.IMAGE,component:t(()=>n(()=>import("./image.0bfc023f.js"),["assets/image.0bfc023f.js","assets/index.9c923db5.js","assets/index.15d8d646.css","assets/ImageWithError.e6609912.js"]))},{name:"Video",type:u.VIDEO,component:t(()=>n(()=>import("./video.cccf12c3.js"),["assets/video.cccf12c3.js","assets/index.9c923db5.js","assets/index.15d8d646.css","assets/icon.11257189.js","assets/index.27c6c4cc.js","assets/Layout.f3c4e2ff.js","assets/useTitle.bad8149d.js","assets/index.d421c1cc.js","assets/FolderTree.275d3374.js","assets/index.bce9104b.js","assets/video_box.773665ac.js","assets/_commonjs-dynamic-modules.30ae7933.js","assets/hls.b1b28382.js"]))},{name:"Audio",type:u.AUDIO,component:t(()=>n(()=>import("./audio.862a6820.js"),["assets/audio.862a6820.js","assets/audio.e5b5af14.css","assets/index.9c923db5.js","assets/index.15d8d646.css","assets/icon.11257189.js","assets/index.27c6c4cc.js","assets/Layout.f3c4e2ff.js","assets/useTitle.bad8149d.js","assets/index.d421c1cc.js","assets/FolderTree.275d3374.js","assets/index.bce9104b.js"]))},{name:"Ipa",exts:["ipa","tipa"],component:t(()=>n(()=>import("./ipa.89436ffa.js"),["assets/ipa.89436ffa.js","assets/index.9c923db5.js","assets/index.15d8d646.css","assets/icon.11257189.js","assets/index.27c6c4cc.js","assets/Layout.f3c4e2ff.js","assets/useTitle.bad8149d.js","assets/index.d421c1cc.js","assets/FolderTree.275d3374.js","assets/index.bce9104b.js"]))},{name:"Plist",exts:["plist"],component:t(()=>n(()=>import("./plist.032c4a38.js"),["assets/plist.032c4a38.js","assets/index.9c923db5.js","assets/index.15d8d646.css","assets/icon.11257189.js","assets/index.27c6c4cc.js","assets/Layout.f3c4e2ff.js","assets/useTitle.bad8149d.js","assets/index.d421c1cc.js","assets/FolderTree.275d3374.js","assets/index.bce9104b.js"]))},{name:"Aliyun Office Previewer",exts:["doc","docx","ppt","pptx","xls","xlsx","pdf"],provider:/^Aliyundrive(Share)?$/,component:t(()=>n(()=>import("./aliyun_office.bd77dcc0.js"),["assets/aliyun_office.bd77dcc0.js","assets/index.9c923db5.js","assets/index.15d8d646.css"]))},{name:"Asciinema",exts:["cast"],component:t(()=>n(()=>import("./asciinema.85fa51c2.js"),["assets/asciinema.85fa51c2.js","assets/asciinema.53412307.css","assets/index.9c923db5.js","assets/index.15d8d646.css"]))}],ne=r=>{var b;const{searchParams:a}=B(),i=u[(b=a.type)==null?void 0:b.toUpperCase()],s=[];return te.forEach(c=>{var v;c.provider&&!c.provider.test(r.provider)||(c.type===r.type||i&&c.type===i||c.exts==="*"||((v=c.exts)==null?void 0:v.includes(W(r.name).toLowerCase())))&&s.push({name:c.name,component:c.component})}),U(r.name).forEach(c=>{s.push({name:c.key,component:re(c.value)})}),s.push({name:"Download",component:t(()=>n(()=>Promise.resolve().then(()=>Q),void 0))}),s},oe=()=>{const r=d(()=>ne({...o.obj,provider:o.provider})),[a,i]=G(r()[0]);return e(g,{get when(){return r().length>1},get fallback(){return e(p,{openWith:!0})},get children(){return e(l,{w:"$full",spacing:"$2",get children(){return[e(y,{w:"$full",spacing:"$2",get children(){return[e(H,{alwaysShowBorder:!0,get value(){return a().name},onChange:s=>{i(r().find(h=>h.name===s))},get options(){return r().map(s=>({value:s.name}))}}),e(T,{})]}}),e(X,{get fallback(){return e(q,{})},get children(){return e(Y,{get component(){return a().component}})}})]}})}})},ue=Object.freeze(Object.defineProperty({__proto__:null,default:oe},Symbol.toStringTag,{value:"Module"}));export{N as F,ue as a};
