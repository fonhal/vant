import{m as I,u as M}from"./mount-component-23f5a3b8.js";import{I as L}from"./index-13130ea7.js";import{P as N}from"./index-4a7db624.js";import{L as z}from"./index-2bd2daba.js";import{p as j,c as U,i as V,e as h,d as _,f as q}from"./use-translate-bcc9285c.js";import{m as k,n as v,a as A,u as O}from"./with-install-c0de7835.js";import{A as D,x as p,M as E,G as F,e as i,B as S,u as G,O as H}from"./vue-libs-b2a2f6f9.js";let d=0;function J(e){e?(d||document.body.classList.add("van-toast--unclickable"),d++):d&&(d--,d||document.body.classList.remove("van-toast--unclickable"))}const[K,c]=U("toast"),Q=["show","overlay","teleport","transition","overlayClass","overlayStyle","closeOnClickOverlay"],R={icon:String,show:Boolean,type:k("text"),overlay:Boolean,message:v,iconSize:v,duration:A(2e3),position:k("middle"),teleport:[String,Object],wordBreak:String,className:O,iconPrefix:String,transition:k("van-fade"),loadingType:String,forbidClick:Boolean,overlayClass:O,overlayStyle:Object,closeOnClick:Boolean,closeOnClickOverlay:Boolean},W=D({name:K,props:R,emits:["update:show"],setup(e,{emit:n,slots:s}){let f,l=!1;const r=()=>{const o=e.show&&e.forbidClick;l!==o&&(l=o,J(l))},u=o=>n("update:show",o),y=()=>{e.closeOnClick&&u(!1)},m=()=>clearTimeout(f),g=()=>{const{icon:o,type:t,iconSize:C,iconPrefix:x,loadingType:B}=e;if(o||t==="success"||t==="fail")return i(L,{name:o||t,size:C,class:c("icon"),classPrefix:x},null);if(t==="loading")return i(z,{class:c("loading"),size:C,type:B},null)},T=()=>{const{type:o,message:t}=e;if(s.message)return i("div",{class:c("text")},[s.message()]);if(V(t)&&t!=="")return o==="html"?i("div",{key:0,class:c("text"),innerHTML:String(t)},null):i("div",{class:c("text")},[t])};return p(()=>[e.show,e.forbidClick],r),p(()=>[e.show,e.type,e.message,e.duration],()=>{m(),e.show&&e.duration>0&&(f=setTimeout(()=>{u(!1)},e.duration))}),E(r),F(r),()=>i(N,S({class:[c([e.position,e.wordBreak==="normal"?"break-normal":e.wordBreak,{[e.type]:!e.icon}]),e.className],lockScroll:!1,onClick:y,onClosed:m,"onUpdate:show":u},j(e,Q)),{default:()=>[g(),T()]})}}),X={icon:"",type:"text",message:"",className:"",overlay:!1,onClose:void 0,onOpened:void 0,duration:2e3,teleport:"body",iconSize:void 0,iconPrefix:void 0,position:"middle",transition:"van-fade",forbidClick:!1,loadingType:void 0,overlayClass:"",overlayStyle:void 0,closeOnClick:!1,closeOnClickOverlay:!1};let a=[],Y=!1,b=h({},X);const Z=new Map;function P(e){return q(e)?e:{message:e}}function $(){const{instance:e,unmount:n}=I({setup(){const s=G(""),{open:f,state:l,close:r,toggle:u}=M(),y=()=>{},m=()=>i(W,S(l,{onClosed:y,"onUpdate:show":u}),null);return p(s,g=>{l.message=g}),H().render=m,{open:f,close:r,message:s}}});return e}function ee(){if(!a.length||Y){const e=$();a.push(e)}return a[a.length-1]}function ne(e={}){if(!_)return{};const n=ee(),s=P(e);return n.open(h({},b,Z.get(s.type||b.type),s)),n}const w=e=>n=>ne(h({type:e},P(n))),ue=w("loading"),de=w("success"),fe=w("fail"),me=e=>{a.length&&(e?(a.forEach(n=>{n.close()}),a=[]):a[0].close())};export{W as _,ue as a,de as b,me as c,fe as d,ne as s};
