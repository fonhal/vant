import{B as S}from"./index-3cdd9fde.js";import{e as E,d as O,c as f,k as $,h as j}from"./use-translate-bcc9285c.js";import{A as g,D as h,x as k,J as w,L as z,I as B,P as C,R as D,e as r,E as L,B as _}from"./vue-libs-b2a2f6f9.js";import{m as i,n as l,w as y}from"./with-install-c0de7835.js";let b=2e3;const H=()=>++b,N=e=>{b=e},[I,T]=f("config-provider"),P=Symbol(I),G={tag:i("div"),theme:i("light"),zIndex:Number,themeVars:Object,themeVarsDark:Object,themeVarsLight:Object,iconPrefix:String};function R(e){const t={};return Object.keys(e).forEach(a=>{t[`--van-${$(a)}`]=e[a]}),t}const M=g({name:I,props:G,setup(e,{slots:t}){const a=h(()=>R(E({},e.themeVars,e.theme==="dark"?e.themeVarsDark:e.themeVarsLight)));if(O){const n=()=>{document.documentElement.classList.add(`van-theme-${e.theme}`)},c=(o=e.theme)=>{document.documentElement.classList.remove(`van-theme-${o}`)};k(()=>e.theme,(o,s)=>{s&&c(s),n()},{immediate:!0}),w(n),z(c),B(c)}return C(P,e),D(()=>{e.zIndex!==void 0&&N(e.zIndex)}),()=>r(e.tag,{class:T(),style:a.value},{default:()=>{var n;return[(n=t.default)==null?void 0:n.call(t)]}})}}),[Z,u]=f("icon"),A=e=>e==null?void 0:e.includes("/"),U={dot:Boolean,tag:i("i"),name:String,size:l,badge:l,color:String,badgeProps:Object,classPrefix:String},F=g({name:Z,props:U,setup(e,{slots:t}){const a=L(P,null),n=h(()=>e.classPrefix||(a==null?void 0:a.iconPrefix)||u());return()=>{const{tag:c,dot:o,name:s,size:v,badge:x,color:V}=e,m=A(s);return r(S,_({dot:o,tag:c,class:[n.value,m?"":`${n.value}-${s}`],style:{color:V,fontSize:j(v)},content:x},e.badgeProps),{default:()=>{var d;return[(d=t.default)==null?void 0:d.call(t),m&&r("img",{class:u("image"),src:s},null)]}})}}}),J=y(F),Q=J;export{J as I,Q as V,M as _,H as u};
