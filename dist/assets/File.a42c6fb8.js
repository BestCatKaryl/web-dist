import{h as e,au as I,ax as _,al as P,a1 as o,a4 as l,bP as x,b5 as L,az as E,cl as k,cS as S,a as f,k as d,cT as $,a5 as w,at as A,aj as D,C as m,ap as V,G as j,aq as R,cy as y,S as g,aI as C,ae as O,cB as M,L as z,cU as F,V as t,W as n,b as B,cC as W,cV as U,m as H,bc as X,Y as G,Z as q,ar as Y}from"./index.f15b461e.js";import{g as Z,O as u}from"./icon.64735f6f.js";import{o as J}from"./index.7fa5417d.js";import{T as K}from"./Layout.6858cf73.js";const N=r=>e(l,{class:"fileinfo",py:"$6",spacing:"$6",get children(){return[e(I,{boxSize:"$20",get fallback(){return e(_,{get color(){return P()},boxSize:"$20",get as(){return Z(o.obj)}})},get src(){return o.obj.thumb}}),e(l,{spacing:"$2",get children(){return[e(x,{size:"lg",css:{wordBreak:"break-all"},get children(){return o.obj.name}}),e(L,{color:"$neutral10",size:"sm",get children(){return[E(()=>k(o.obj.size))," \xB7 ",E(()=>S(o.obj.modified))]}})]}}),e(l,{spacing:"$2",get children(){return r.children}})]}}),T=()=>{const r=f(),a=d(()=>$(o.obj.name)),{currentObjLink:i}=w();return e(g,{get when(){return a().length},get children(){return e(A,{get children(){return[e(D,{as:m,colorScheme:"success",get rightIcon(){return e(_,{as:J})},get children(){return r("home.preview.open_with")}}),e(V,{get children(){return e(j,{get each(){return a()},children:s=>e(R,{as:"a",target:"_blank",get href(){return y(s.value,{raw_url:o.raw_url,name:o.obj.name,d_url:i(!0)})},get children(){return s.key}})})}})]}})}})},p=r=>{const a=f(),{copyCurrentRawLink:i}=C();return e(N,{get children(){return[e(O,{spacing:"$2",get children(){return[e(m,{colorScheme:"accent",onClick:()=>i(!0),get children(){return a("home.toolbar.copy_link")}}),e(m,{as:"a",get href(){return o.raw_url},target:"_blank",get children(){return a("home.preview.download")}})]}}),e(g,{get when(){return r.openWith},get children(){return e(T,{})}})]}})},Q=Object.freeze(Object.defineProperty({__proto__:null,Download:p,default:p},Symbol.toStringTag,{value:"Module"})),ee=r=>{const{currentObjLink:a}=w(),i=d(()=>y(r.scheme,{raw_url:o.raw_url,name:o.obj.name,d_url:a(!0),ts:!0}));return e(F,{w:"$full",h:"70vh",get children(){return[e(M.iframe,{w:"$full",h:"$full",get src(){return i()}}),e(_,{pos:"absolute",right:"$2",bottom:"$10","aria-label":"Open in new tab",as:K,onClick:()=>{window.open(i(),"_blank")},cursor:"pointer",rounded:"$md",get bgColor(){return z()},p:"$1",boxSize:"$7"})]}})},re=r=>()=>e(ee,{scheme:r}),te=[{name:"HTML render",exts:["html"],component:t(()=>n(()=>import("./html.f562bac0.js"),["assets/html.f562bac0.js","assets/index.f15b461e.js","assets/index.15d8d646.css"]))},{name:"Aliyun Video Previewer",type:u.VIDEO,provider:/^Aliyundrive(Open)?$/,component:t(()=>n(()=>import("./aliyun_video.cd251fcb.js"),["assets/aliyun_video.cd251fcb.js","assets/index.f15b461e.js","assets/index.15d8d646.css","assets/icon.64735f6f.js","assets/index.7fa5417d.js","assets/Layout.6858cf73.js","assets/useTitle.4ee8d8d3.js","assets/index.c030b2c6.js","assets/FolderTree.7a888cb4.js","assets/index.69dfabdd.js","assets/video_box.fc5c11ff.js","assets/_commonjs-dynamic-modules.30ae7933.js","assets/hls.3dc5e245.js"]))},{name:"Markdown",type:u.TEXT,component:t(()=>n(()=>import("./markdown.b2357c71.js"),["assets/markdown.b2357c71.js","assets/index.f15b461e.js","assets/index.15d8d646.css"]))},{name:"Markdown with word wrap",type:u.TEXT,component:t(()=>n(()=>import("./markdown_with_word_wrap.418e2cda.js"),["assets/markdown_with_word_wrap.418e2cda.js","assets/index.f15b461e.js","assets/index.15d8d646.css"]))},{name:"Url Open",exts:["url"],component:t(()=>n(()=>import("./url.cb382bb1.js"),["assets/url.cb382bb1.js","assets/index.f15b461e.js","assets/index.15d8d646.css","assets/icon.64735f6f.js","assets/index.7fa5417d.js","assets/Layout.6858cf73.js","assets/useTitle.4ee8d8d3.js","assets/index.c030b2c6.js","assets/FolderTree.7a888cb4.js","assets/index.69dfabdd.js"]))},{name:"Text Editor",type:u.TEXT,exts:["url"],component:t(()=>n(()=>import("./text-editor.dc915b01.js"),["assets/text-editor.dc915b01.js","assets/index.f15b461e.js","assets/index.15d8d646.css","assets/index.93fe5a11.js"]))},{name:"Image",type:u.IMAGE,component:t(()=>n(()=>import("./image.44d33cd3.js"),["assets/image.44d33cd3.js","assets/index.f15b461e.js","assets/index.15d8d646.css","assets/ImageWithError.55e26929.js"]))},{name:"Video",type:u.VIDEO,component:t(()=>n(()=>import("./video.9b48e34c.js"),["assets/video.9b48e34c.js","assets/index.f15b461e.js","assets/index.15d8d646.css","assets/icon.64735f6f.js","assets/index.7fa5417d.js","assets/Layout.6858cf73.js","assets/useTitle.4ee8d8d3.js","assets/index.c030b2c6.js","assets/FolderTree.7a888cb4.js","assets/index.69dfabdd.js","assets/video_box.fc5c11ff.js","assets/_commonjs-dynamic-modules.30ae7933.js","assets/hls.3dc5e245.js"]))},{name:"Audio",type:u.AUDIO,component:t(()=>n(()=>import("./audio.e1f5cd6c.js"),["assets/audio.e1f5cd6c.js","assets/audio.e5b5af14.css","assets/index.f15b461e.js","assets/index.15d8d646.css","assets/icon.64735f6f.js","assets/index.7fa5417d.js","assets/Layout.6858cf73.js","assets/useTitle.4ee8d8d3.js","assets/index.c030b2c6.js","assets/FolderTree.7a888cb4.js","assets/index.69dfabdd.js"]))},{name:"Ipa",exts:["ipa","tipa"],component:t(()=>n(()=>import("./ipa.6d37148e.js"),["assets/ipa.6d37148e.js","assets/index.f15b461e.js","assets/index.15d8d646.css","assets/icon.64735f6f.js","assets/index.7fa5417d.js","assets/Layout.6858cf73.js","assets/useTitle.4ee8d8d3.js","assets/index.c030b2c6.js","assets/FolderTree.7a888cb4.js","assets/index.69dfabdd.js"]))},{name:"Plist",exts:["plist"],component:t(()=>n(()=>import("./plist.ba8000d3.js"),["assets/plist.ba8000d3.js","assets/index.f15b461e.js","assets/index.15d8d646.css","assets/icon.64735f6f.js","assets/index.7fa5417d.js","assets/Layout.6858cf73.js","assets/useTitle.4ee8d8d3.js","assets/index.c030b2c6.js","assets/FolderTree.7a888cb4.js","assets/index.69dfabdd.js"]))},{name:"Aliyun Office Previewer",exts:["doc","docx","ppt","pptx","xls","xlsx","pdf"],provider:/^Aliyundrive(Share)?$/,component:t(()=>n(()=>import("./aliyun_office.69ffb1f0.js"),["assets/aliyun_office.69ffb1f0.js","assets/index.f15b461e.js","assets/index.15d8d646.css"]))},{name:"Asciinema",exts:["cast"],component:t(()=>n(()=>import("./asciinema.aa7070e5.js"),["assets/asciinema.aa7070e5.js","assets/asciinema.53412307.css","assets/index.f15b461e.js","assets/index.15d8d646.css"]))}],ne=r=>{var b;const{searchParams:a}=B(),i=u[(b=a.type)==null?void 0:b.toUpperCase()],s=[];return te.forEach(c=>{var v;c.provider&&!c.provider.test(r.provider)||(c.type===r.type||i&&c.type===i||c.exts==="*"||((v=c.exts)==null?void 0:v.includes(W(r.name).toLowerCase())))&&s.push({name:c.name,component:c.component})}),U(r.name).forEach(c=>{s.push({name:c.key,component:re(c.value)})}),s.push({name:"Download",component:t(()=>n(()=>Promise.resolve().then(()=>Q),void 0))}),s},oe=()=>{const r=d(()=>ne({...o.obj,provider:o.provider})),[a,i]=H(r()[0]);return e(g,{get when(){return r().length>1},get fallback(){return e(p,{openWith:!0})},get children(){return e(l,{w:"$full",spacing:"$2",get children(){return[e(O,{w:"$full",spacing:"$2",get children(){return[e(X,{alwaysShowBorder:!0,get value(){return a().name},onChange:s=>{i(r().find(h=>h.name===s))},get options(){return r().map(s=>({value:s.name}))}}),e(T,{})]}}),e(G,{get fallback(){return e(q,{})},get children(){return e(Y,{get component(){return a().component}})}})]}})}})},ue=Object.freeze(Object.defineProperty({__proto__:null,default:oe},Symbol.toStringTag,{value:"Module"}));export{N as F,ue as a};
