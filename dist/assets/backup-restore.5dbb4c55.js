import{m as D,a as ue,aV as g,b8 as l,h as o,ap as V,C,bz as ge,bP as le,bm as E,by as me,I as pe,a4 as J,G as fe,b4 as A,bF as $,n as be}from"./index.a3c9a5ba.js";import{b as he}from"./useTitle.d7bec1dd.js";import{c as f}from"./index.0261add8.js";import"./_commonjs-dynamic-modules.30ae7933.js";const N={success:{icon:"\u2705",color:"$success9"},error:{icon:"\u274C",color:"$danger9"},info:{icon:"\u2139\uFE0F",color:"$info9"}},ye=p=>o(V,{w:"$full",spacing:"$1",get children(){return[o(A,{get children(){return N[p.type].icon}}),o(A,{get color(){return N[p.type].color},get children(){return p.msg}})]}}),Le=()=>{const[p,L]=D(!1),[b,w]=D(""),t=ue();he("manage.sidemenu.backup-restore");let _;const[H,P]=D([]),i=(e,r)=>{P(d=>[...d,{type:r,msg:e}]),_.scrollTop=_.scrollHeight},[z,G]=g(()=>l.get("/admin/setting/list")),[W,O]=g(()=>l.get("/admin/user/list")),[Y,I]=g(()=>l.get("/admin/meta/list")),[q,M]=g(()=>l.get("/admin/storage/list")),K=()=>z()||W()||Y()||q();function U(e,r){if(r=="")return e;const d=f.AES.encrypt(JSON.stringify(e),r).toString();return f.enc.Base64.stringify(f.enc.Utf8.parse(d))}function R(e,r,d,c){if(!c)return e;const a=f.enc.Base64.parse(e).toString(f.enc.Utf8);return d?f.AES.decrypt(a,r).toString(f.enc.Utf8):JSON.parse(f.AES.decrypt(a,r).toString(f.enc.Utf8))}const x=async()=>{i(t("br.start_backup"),"info");const e={encrypted:"",settings:[],users:[],storages:[],metas:[]};b()!=""&&(e.encrypted=U("encrypted",b()));for(const r of[{name:"settings",fn:G,page:!1},{name:"users",fn:O,page:!0},{name:"storages",fn:M,page:!0},{name:"metas",fn:I,page:!0}]){const d=await r.fn();$(d,c=>{if(i(t("br.success_backup_item",{item:t(`manage.sidemenu.${r.name}`)}),"success"),r.page){for(let a=0;a<c.content.length;a++){const n=c.content[a];for(const m in n)n[m]=U(n[m],b())}e[r.name]=c.content}else{for(let a=0;a<c.length;a++){const n=c[a];for(const m in n)n[m]=U(n[m],b())}e[r.name]=c}},c=>{i(t("br.failed_backup_item",{item:t(`manage.sidemenu.${r.name}`)})+":"+c,"error")})}we("alist_backup_"+new Date().toLocaleString()+".json",e),i(t("br.finish_backup"),"info")},[Q,X]=g(e=>l.post("/admin/setting/save",e)),[Z,F]=g(e=>l.post("/admin/user/create",e)),[ee,T]=g(e=>l.post("/admin/storage/create",e)),[te,B]=g(e=>l.post("/admin/meta/create",e)),[ne,re]=g(e=>l.post("/admin/user/update",e)),[ae,se]=g(e=>l.post("/admin/storage/update",e)),[oe,ce]=g(e=>l.post("/admin/meta/update",e));async function v(e,r,d,c,a,n){const m=(await r()).data.content;for(const y in e){const s=e[y],u=s[a],k=(m.find(j=>j[a]===u)?"update":"add")==="add"?d:c;await $(await k(s),()=>{i(t("br.success_restore_item",{item:t(n)})+`-[${u}]`,"success")},j=>{i(t("br.failed_restore_item",{item:t(n)})+`-[${u}]:`+j,"error")})}}const ie=()=>Q()||Z()||ee()||te()||ne()||ae()||oe(),de=async()=>{i(t("br.start_restore"),"info");const e=document.createElement("input");e.type="file",e.accept="application/json",e.onchange=async r=>{const d=r.target.files;if(!d||d.length===0){be.warning(t("br.no_file"));return}const c=d[0],a=new FileReader;a.onload=async()=>{const n=JSON.parse(a.result),m=Boolean(n.encrypted);if(m&&R(n.encrypted,b(),!0,!0)!=='"encrypted"'){i(t("br.wrong_encrypt_password"),"error");return}const y=Object.values(n);for(let s=y.length-4;s<y.length;s++){const u=y[s];console.log(u);for(let h=0;h<u.length;h++){const S=u[h];for(const k in S)S[k]=R(S[k],b(),!1,m)}}if(p()&&await x(),n.settings&&$(await X(n.settings.filter(s=>!["version","index_progress"].includes(s.key))),()=>{i(t("br.success_restore_item",{item:t("manage.sidemenu.settings")}),"success")},s=>{i(t("br.failed_restore_item",{item:t("manage.sidemenu.settings")})+":"+s,"error")}),p())await v(n.users,O,F,re,"username","manage.sidemenu.users"),await v(n.storages,M,T,se,"mount_path","manage.sidemenu.storages"),await v(n.metas,I,B,ce,"path","manage.sidemenu.metas");else for(const s of[{name:"users",fn:F,data:n.users,key:"username"},{name:"storages",fn:T,data:n.storages,key:"mount_path"},{name:"metas",fn:B,data:n.metas,key:"path"}])for(const u of s.data||[])u.id=0,$(await s.fn(u),()=>{i(t("br.success_restore_item",{item:t(`manage.sidemenu.${s.name}`)})+`-[${u[s.key]}]`,"success")},h=>{i(t("br.failed_restore_item",{item:t(`manage.sidemenu.${s.name}`)})+` [ ${u[s.key]} ] :`+h,"error")});i(t("br.finish_restore"),"info")},a.readAsText(c)},e.click()};return o(J,{spacing:"$2",w:"$full",get children(){return[o(V,{spacing:"$2",w:"$full",get children(){return[o(C,{get loading(){return K()},onClick:()=>{x()},colorScheme:"accent",get children(){return t("br.backup")}}),o(C,{get loading(){return ie()},onClick:()=>{de()},get children(){return t("br.restore")}})]}}),o(ge,{w:"$full",display:"flex",flexDirection:"column",get children(){return o(le,{w:"$full",direction:"column",gap:"$1",get children(){return[o(E,{get children(){return t("br.override")}}),o(me,{id:"restore-override",get checked(){return p()},onChange:e=>L(e.currentTarget.checked)}),o(E,{get children(){return t("br.encrypt_password")}}),o(pe,{id:"password",type:"password",get placeholder(){return t("br.encrypt_password_placeholder")},onInput:e=>w(e.currentTarget.value)})]}})}}),o(J,{p:"$2",ref(e){const r=_;typeof r=="function"?r(e):_=e},w:"$full",alignItems:"start",rounded:"$md",h:"70vh",bg:"$neutral3",overflowY:"auto",spacing:"$1",get children(){return o(fe,{get each(){return H()},children:e=>o(ye,e)})}})]}})};function we(p,L){const b=new Blob([JSON.stringify(L,null,2)],{type:"application/json"}),w=URL.createObjectURL(b),t=document.createElement("a");t.href=w,t.download=p,t.click(),URL.revokeObjectURL(w)}export{Le as default};
