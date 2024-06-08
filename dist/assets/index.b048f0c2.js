import{c8 as se,E as A,c9 as j,ca as x,aK as D,X as P,h as e,a7 as L,aH as S,U as v,b as H,c3 as _,cb as y,e as ae,at as K,b8 as b,bW as ie,cc as le,cd as ce,ce as ue,cf as ge,a as de,k as pe,m as f,cg as he,aV as E,a4 as fe,bP as R,aq as me,bO as we,S as m,I as O,ch as M,b4 as be,ap as _e,C as B,bj as $e,bk as Ce,ci as ve,ay as xe,bF as N,n as w,b9 as Se}from"./index.98bb8b3f.js";import{a as ye}from"./useTitle.7e1fd3c7.js";import{s as ke,g as Ie,a as Ge}from"./webauthn-json.browser-ponyfill.1c672167.js";const Le="https://github.com/alist-org/alist";function Ee(s){return se(`${s}-${Le}`)}const Re=D('<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" height="896" width="967.8852157128662"><defs><path id="path-2" opacity="1" fill-rule="evenodd" d="M896,448 C1142.6325445712241,465.5747656464056 695.2579309733121,896 448,896 C200.74206902668806,896 5.684341886080802e-14,695.2579309733121 0,448.0000000000001 C0,200.74206902668806 200.74206902668791,5.684341886080802e-14 447.99999999999994,0 C695.2579309733121,0 475,418 896,448Z"></path><linearGradient id="linearGradient-3" x1="0.5" y1="0" x2="0.5" y2="1"><stop offset="0" stop-opacity="1"></stop><stop offset="1" stop-opacity="1"></stop></linearGradient></defs><g opacity="1"><use xlink:href="#path-2" fill="url(#linearGradient-3)" fill-opacity="1"></use></g></svg>'),Oe=s=>{const u=A({startColor:"#28aff0",endColor:"#120fc4"},s);return(()=>{const n=Re.cloneNode(!0),c=n.firstChild,g=c.firstChild,r=g.nextSibling,l=r.firstChild,a=l.nextSibling;return j(t=>{const i=u.startColor,d=u.endColor;return i!==t._v$&&x(l,"stop-color",t._v$=i),d!==t._v$2&&x(a,"stop-color",t._v$2=d),t},{_v$:void 0,_v$2:void 0}),n})()},Pe=D('<svg height="1337" width="1337"><defs><path id="path-1" opacity="1" fill-rule="evenodd" d="M1337,668.5 C1337,1037.455193874239 1037.455193874239,1337 668.5,1337 C523.6725684305388,1337 337,1236 370.50000000000006,1094 C434.03835568300906,824.6732385973953 6.906089672974592e-14,892.6277623047779 0,668.5000000000001 C0,299.5448061257611 299.5448061257609,1.1368683772161603e-13 668.4999999999999,0 C1037.455193874239,0 1337,299.544806125761 1337,668.5Z"></path><linearGradient id="linearGradient-2" x1="0.79" y1="0.62" x2="0.21" y2="0.86"><stop offset="0" stop-opacity="1"></stop><stop offset="1" stop-opacity="1"></stop></linearGradient></defs><g opacity="1"><use xlink:href="#path-1" fill="url(#linearGradient-2)" fill-opacity="1"></use></g></svg>'),Te=s=>{const u=A({startColor:"#28aff0",endColor:"#120fc4"},s);return(()=>{const n=Pe.cloneNode(!0),c=n.firstChild,g=c.firstChild,r=g.nextSibling,l=r.firstChild,a=l.nextSibling;return j(t=>{const i=u.startColor,d=u.endColor;return i!==t._v$&&x(l,"stop-color",t._v$=i),d!==t._v$2&&x(a,"stop-color",t._v$2=d),t},{_v$:void 0,_v$2:void 0}),n})()},Ue=()=>{const s=P("#a9c6ff","#062b74");return e(L,{get bgColor(){return s()},pos:"fixed",top:"0",left:"0",overflow:"hidden",zIndex:"-1",w:"100vw",h:"100vh",get children(){return[e(L,{pos:"absolute",right:{"@initial":"-100px","@sm":"-300px"},top:{"@initial":"-1170px","@sm":"-900px"},get children(){return e(Te,{})}}),e(L,{pos:"absolute",left:{"@initial":"-100px","@sm":"-200px"},bottom:{"@initial":"-760px","@sm":"-400px"},get children(){return e(Oe,{})}})]}})},ze=()=>{const s=S("sso_login_enabled"),u=v("sso_login_platform"),n=S("sso_compatibility_mode"),{searchParams:c,to:g}=H(),r=c.token;r!=null&&r!=""&&(_(r),g(decodeURIComponent(c.redirect||y||"/"),!0));function l(a){const t=a.data;t.token&&(_(t.token),g(decodeURIComponent(c.redirect||y||"/"),!0))}if(window.addEventListener("message",l),ae(()=>{window.removeEventListener("message",l)}),s){const a=()=>{const i=b.getUri()+"/auth/sso?method=sso_get_token";if(n){window.location.href=i;return}window.open(i,"authPopup","width=500,height=600")};let t;switch(u){case"Github":t=ge;break;case"Microsoft":t=ue;break;case"Google":t=ce;break;case"Dingtalk":t=le;break;default:t=ie}return e(K,{cursor:"pointer",boxSize:"$8",as:t,p:"$0_5",onclick:a})}},Ne=()=>{const s=v("logo").split(`
`),u=P(s[0],s.pop()),n=de(),c=pe(()=>`${v("site_title")}`);ye(c);const g=P("white","$neutral1"),[r,l]=f(localStorage.getItem("username")||""),[a,t]=f(localStorage.getItem("password")||""),[i,d]=f(""),[$,V]=f(!1),[C,W]=he("remember-pwd","false"),[k,T]=f(!1),[q,J]=E(async()=>k()?b.post("/auth/login/ldap",{username:r(),password:a(),otp_code:i()}):b.post("/auth/login/hash",{username:r(),password:Ee(a()),otp_code:i()})),[,Z]=E((o,p,h)=>b.post("/authn/webauthn_finish_login?username="+h,JSON.stringify(p),{headers:{session:o}})),[,X]=E(o=>b.get("/authn/webauthn_begin_login?username="+o)),{searchParams:U,to:z}=H(),Q=S("webauthn_login_enabled"),Y=async()=>{V(!$())},I=async()=>{if($()){if(!ke()){w.error(n("users.webauthn_not_supported"));return}_(),C()==="true"?localStorage.setItem("username",r()):localStorage.removeItem("username");const o=await X(r());Se(o,async p=>{try{const h=Ie(p.options),ne=await Ge(h),oe=await Z(p.session,ne,r());N(oe,re=>{w.success(n("login.success")),_(re.token),z(decodeURIComponent(U.redirect||y||"/"),!0)})}catch(h){h instanceof Error&&w.error(h.message)}})}else{C()==="true"?(localStorage.setItem("username",r()),localStorage.setItem("password",a())):(localStorage.removeItem("username"),localStorage.removeItem("password"));const o=await J();N(o,p=>{w.success(n("login.success")),_(p.token),z(decodeURIComponent(U.redirect||y||"/"),!0)},(p,h)=>{!G()&&h===402?ee(!0):w.error(p)})}},[G,ee]=f(!1),F=S("ldap_login_enabled"),te=v("ldap_login_tips");return F&&T(!0),e(xe,{zIndex:"1",w:"$full",h:"100vh",get children(){return[e(fe,{get bgColor(){return g()},rounded:"$xl",p:"24px",w:{"@initial":"90%","@sm":"364px"},spacing:"$4",get children(){return[e(R,{alignItems:"center",justifyContent:"space-around",get children(){return[e(me,{mr:"$2",boxSize:"$12",get src(){return u()}}),e(we,{color:"$info9",fontSize:"$2xl",get children(){return c()}})]}}),e(m,{get when(){return!G()},get fallback(){return e(O,{id:"totp",name:"otp",get placeholder(){return n("login.otp-tips")},get value(){return i()},onInput:o=>d(o.currentTarget.value),onKeyDown:o=>{o.key==="Enter"&&I()}})},get children(){return[e(O,{name:"username",get placeholder(){return n("login.username-tips")},get value(){return r()},onInput:o=>l(o.currentTarget.value)}),e(m,{get when(){return!$()},get children(){return e(O,{name:"password",get placeholder(){return n("login.password-tips")},type:"password",get value(){return a()},onInput:o=>t(o.currentTarget.value),onKeyDown:o=>{o.key==="Enter"&&I()}})}}),e(R,{px:"$1",w:"$full",fontSize:"$sm",color:"$neutral10",justifyContent:"space-between",alignItems:"center",get children(){return[e(M,{get checked(){return C()==="true"},onChange:()=>W(C()==="true"?"false":"true"),get children(){return n("login.remember")}}),e(be,{as:"a",target:"_blank",get href(){return n("login.forget_url")},get children(){return n("login.forget")}})]}})]}}),e(_e,{w:"$full",spacing:"$2",get children(){return[e(m,{get when(){return!$()},get children(){return e(B,{colorScheme:"primary",w:"$full",onClick:()=>{G()?d(""):(l(""),t(""))},get children(){return n("login.clear")}})}}),e(B,{w:"$full",get loading(){return q()},onClick:I,get children(){return n("login.login")}})]}}),e(m,{when:F,get children(){return e(M,{w:"$full",get checked(){return k()===!0},onChange:()=>T(!k()),children:te})}}),e(R,{mt:"$2",justifyContent:"space-evenly",alignItems:"center",color:"$neutral10",w:"$full",get children(){return[e($e,{}),e(Ce,{}),e(ze,{}),e(m,{when:Q,get children(){return e(K,{cursor:"pointer",boxSize:"$8",as:ve,p:"$0_5",onclick:Y})}})]}})]}}),e(Ue,{})]}})};export{Ne as default};
