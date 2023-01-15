import{L,I as K,x as g,A as N,u as A,D as j,q as F,M as H,J as M,P as V,e as v,S as G,F as U,T as Y,j as $,v as q,B as J}from"./vue-libs-b2a2f6f9.js";import{n as T,t as O,u as W,m as x,w as Z}from"./with-install-c0de7835.js";import{o as Q,m as X,l as ee,i as oe,n as ne,e as te,c as ae}from"./use-translate-bcc9285c.js";import{u as se}from"./use-expose-52ca271b.js";import{u as ce}from"./use-touch-8f92051d.js";import{u as re}from"./use-lazy-render-927fe2b4.js";import{P as le}from"./on-popup-reopen-e5b691e6.js";import{u as ie,I as ue}from"./index-13130ea7.js";import{O as de}from"./index-e11a9c16.js";import{c as fe}from"./interceptor-e1e3c393.js";import{H as ve}from"./constant-a81ffd37.js";const D={show:Boolean,zIndex:T,overlay:O,duration:T,teleport:[String,Object],lockScroll:O,lazyRender:O,beforeClose:Function,overlayStyle:Object,overlayClass:W,transitionAppear:Boolean,closeOnClickOverlay:O},Ee=Object.keys(D);let y=0;const B="van-overflow-hidden";function me(e,n){const s=ce(),i="01",t="10",r=c=>{s.move(c);const d=s.deltaY.value>0?t:i,C=X(c.target,e.value),{scrollHeight:m,offsetHeight:I,scrollTop:h}=C;let f="11";h===0?f=I>=m?"00":"01":h+I>=m&&(f="10"),f!=="11"&&s.isVertical()&&!(parseInt(f,2)&parseInt(d,2))&&ee(c,!0)},u=()=>{document.addEventListener("touchstart",s.start),document.addEventListener("touchmove",r,{passive:!1}),y||document.body.classList.add(B),y++},l=()=>{y&&(document.removeEventListener("touchstart",s.start),document.removeEventListener("touchmove",r),y--,y||document.body.classList.remove(B))},P=()=>n()&&u(),p=()=>n()&&l();Q(P),L(p),K(p),g(n,c=>{c?u():l()})}const ye=te({},D,{round:Boolean,position:x("center"),closeIcon:x("cross"),closeable:Boolean,transition:String,iconPrefix:String,closeOnPopstate:Boolean,closeIconPosition:x("top-right"),safeAreaInsetTop:Boolean,safeAreaInsetBottom:Boolean}),[pe,E]=ae("popup"),Ie=N({name:pe,inheritAttrs:!1,props:ye,emits:["open","close","opened","closed","keydown","update:show","clickOverlay","clickCloseIcon"],setup(e,{emit:n,attrs:s,slots:i}){let t,r;const u=A(),l=A(),P=re(()=>e.show||!e.lazyRender),p=j(()=>{const o={zIndex:u.value};if(oe(e.duration)){const a=e.position==="center"?"animationDuration":"transitionDuration";o[a]=`${e.duration}s`}return o}),c=()=>{t||(t=!0,u.value=e.zIndex!==void 0?+e.zIndex:ie(),n("open"))},d=()=>{t&&fe(e.beforeClose,{done(){t=!1,n("close"),n("update:show",!1)}})},C=o=>{n("clickOverlay",o),e.closeOnClickOverlay&&d()},m=()=>{if(e.overlay)return v(de,{show:e.show,class:e.overlayClass,zIndex:u.value,duration:e.duration,customStyle:e.overlayStyle,role:e.closeOnClickOverlay?"button":void 0,tabindex:e.closeOnClickOverlay?0:void 0,onClick:C},{default:i["overlay-content"]})},I=o=>{n("clickCloseIcon",o),d()},h=()=>{if(e.closeable)return v(ue,{role:"button",tabindex:0,name:e.closeIcon,class:[E("close-icon",e.closeIconPosition),ve],classPrefix:e.iconPrefix,onClick:I},null)},f=()=>n("opened"),z=()=>n("closed"),R=o=>n("keydown",o),_=P(()=>{var S;const{round:o,position:a,safeAreaInsetTop:k,safeAreaInsetBottom:w}=e;return $(v("div",J({ref:l,style:p.value,role:"dialog",tabindex:0,class:[E({round:o,[a]:a}),{"van-safe-area-top":k,"van-safe-area-bottom":w}],onKeydown:R},s),[(S=i.default)==null?void 0:S.call(i),h()]),[[q,e.show]])}),b=()=>{const{position:o,transition:a,transitionAppear:k}=e,w=o==="center"?"van-fade":`van-popup-slide-${o}`;return v(Y,{name:a||w,appear:k,onAfterEnter:f,onAfterLeave:z},{default:_})};return g(()=>e.show,o=>{o&&!t&&(c(),s.tabindex===0&&F(()=>{var a;(a=l.value)==null||a.focus()})),!o&&t&&(t=!1,n("close"))}),se({popupRef:l}),me(l,()=>e.show&&e.lockScroll),ne("popstate",()=>{e.closeOnPopstate&&(d(),r=!1)}),H(()=>{e.show&&c()}),M(()=>{r&&(n("update:show",!0),r=!1)}),L(()=>{e.show&&e.teleport&&(d(),r=!0)}),V(le,()=>e.show),()=>e.teleport?v(G,{to:e.teleport},{default:()=>[m(),b()]}):v(U,null,[m(),b()])}}),he=Z(Ie),Le=he;export{he as P,Le as V,Ee as a,D as p};
