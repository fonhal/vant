import{A as b,e as t,T as p}from"./vue-libs-b2a2f6f9.js";import{I as S}from"./index-13130ea7.js";import{c as k}from"./use-translate-bcc9285c.js";import{t as B,m as I,w as P}from"./with-install-c0de7835.js";import{H as h}from"./constant-a81ffd37.js";const[w,s]=k("tag"),x={size:String,mark:Boolean,show:B,type:I("default"),color:String,plain:Boolean,round:Boolean,textColor:String,closeable:Boolean},y=b({name:w,props:x,emits:["close"],setup(o,{slots:a,emit:c}){const i=e=>{e.stopPropagation(),c("close",e)},m=()=>o.plain?{color:o.textColor||o.color,borderColor:o.color}:{color:o.textColor,background:o.color},u=()=>{var l;const{type:e,mark:d,plain:f,round:g,size:n,closeable:C}=o,r={mark:d,plain:f,round:g};n&&(r[n]=n);const T=C&&t(S,{name:"cross",class:[s("close"),h],onClick:i},null);return t("span",{style:m(),class:s([r,e])},[(l=a.default)==null?void 0:l.call(a),T])};return()=>t(p,{name:o.closeable?"van-fade":void 0},{default:()=>[o.show?u():null]})}}),A=P(y),_=A;export{A as T,_ as V};
