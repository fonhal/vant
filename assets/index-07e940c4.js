import{V as A}from"./index-fbad952d.js";import{V as S}from"./index-4a7db624.js";import{T as L,a as D}from"./index-b3b7a677.js";import{I as H}from"./index-13130ea7.js";import{A as z,u as j,x as B,e as n,q as P,Q as K,H as U,D as X,r as Q,o as W,a as Z,w as b,C as l,d as q,t as G,F as Y}from"./vue-libs-b2a2f6f9.js";import{e as M,c as R,a as I}from"./use-translate-bcc9285c.js";import{b as _,t as $,m as ee,n as te,w as le}from"./with-install-c0de7835.js";import{H as oe}from"./constant-a81ffd37.js";import{d as ae}from"./deep-clone-4dafed41.js";import"./index-95093031.js";import"./use-route-efd4b866.js";import"./use-id-92cebd14.js";import"./use-expose-52ca271b.js";import"./use-touch-8f92051d.js";import"./use-lazy-render-927fe2b4.js";import"./on-popup-reopen-e5b691e6.js";import"./index-e11a9c16.js";import"./interceptor-e1e3c393.js";import"./index-48ea421e.js";import"./use-refs-06cfd58f.js";import"./index-2274e31b.js";import"./index-3cdd9fde.js";function ne(c){return typeof c=="function"||Object.prototype.toString.call(c)==="[object Object]"&&!K(c)}const[se,C,ue]=R("cascader"),ie={title:String,options:_(),closeable:$,swipeable:$,closeIcon:ee("cross"),showHeader:$,modelValue:te,fieldNames:Object,placeholder:String,activeColor:String},re=z({name:se,props:ie,emits:["close","change","finish","clickTab","update:modelValue"],setup(c,{slots:o,emit:f}){const i=j([]),v=j(0),{text:h,value:w,children:m}=M({text:"text",value:"value",children:"children"},c.fieldNames),y=(a,s)=>{for(const d of a){if(d[w]===s)return[d];if(d[m]){const u=y(d[m],s);if(u)return[d,...u]}}},k=()=>{const{options:a,modelValue:s}=c;if(s!==void 0){const d=y(a,s);if(d){let u=a;i.value=d.map(p=>{const O={options:u,selected:p},g=u.find(T=>T[w]===p[w]);return g&&(u=g[m]),O}),u&&i.value.push({options:u,selected:null}),P(()=>{v.value=i.value.length-1});return}}i.value=[{options:a,selected:null}]},V=(a,s)=>{if(a.disabled)return;if(i.value[s].selected=a,i.value.length>s+1&&(i.value=i.value.slice(0,s+1)),a[m]){const p={options:a[m],selected:null};i.value[s+1]?i.value[s+1]=p:i.value.push(p),P(()=>{v.value++})}const d=i.value.map(p=>p.selected).filter(Boolean);f("update:modelValue",a[w]);const u={value:a[w],tabIndex:s,selectedOptions:d};f("change",u),a[m]||f("finish",u)},x=()=>f("close"),e=({name:a,title:s})=>f("clickTab",a,s),r=()=>c.showHeader?n("div",{class:C("header")},[n("h2",{class:C("title")},[o.title?o.title():c.title]),c.closeable?n(H,{name:c.closeIcon,class:[C("close-icon"),oe],onClick:x},null):null]):null,t=(a,s,d)=>{const{disabled:u}=a,p=!!(s&&a[w]===s[w]),O=a.color||(p?c.activeColor:void 0),g=o.option?o.option({option:a,selected:p}):n("span",null,[a[h]]);return n("li",{role:"menuitemradio",class:[C("option",{selected:p,disabled:u}),a.className],style:{color:O},tabindex:u?void 0:p?0:-1,"aria-checked":p,"aria-disabled":u||void 0,onClick:()=>V(a,d)},[g,p?n(H,{name:"success",class:C("selected-icon")},null):null])},F=(a,s,d)=>n("ul",{role:"menu",class:C("options")},[a.map(u=>t(u,s,d))]),E=(a,s)=>{const{options:d,selected:u}=a,p=c.placeholder||ue("select"),O=u?u[h]:p;return n(D,{title:O,titleClass:C("tab",{unselected:!u})},{default:()=>{var g,T;return[(g=o["options-top"])==null?void 0:g.call(o,{tabIndex:s}),F(d,u,s),(T=o["options-bottom"])==null?void 0:T.call(o,{tabIndex:s})]}})},J=()=>{let a;return n(L,{active:v.value,"onUpdate:active":s=>v.value=s,shrink:!0,animated:!0,class:C("tabs"),color:c.activeColor,swipeable:c.swipeable,onClickTab:e},ne(a=i.value.map(E))?a:{default:()=>[a]})};return k(),B(()=>c.options,k,{deep:!0}),B(()=>c.modelValue,a=>{a!==void 0&&i.value.map(d=>{var u;return(u=d.selected)==null?void 0:u[w]}).includes(a)||k()}),()=>n("div",{class:C()},[r(),J()])}}),de=le(re),N=de,ce=[{text:"浙江省",value:"330000",children:[{text:"杭州市",value:"330100",children:[{text:"上城区",value:"330102"},{text:"下城区",value:"330103"},{text:"江干区",value:"330104"}]},{text:"宁波市",value:"330200",children:[{text:"海曙区",value:"330203"},{text:"江北区",value:"330205"},{text:"北仑区",value:"330206"}]},{text:"温州市",value:"330300",children:[{text:"鹿城区",value:"330302"},{text:"龙湾区",value:"330303"},{text:"瓯海区",value:"330304"}]}]},{text:"江苏省",value:"320000",children:[{text:"南京市",value:"320100",children:[{text:"玄武区",value:"320102"},{text:"秦淮区",value:"320104"},{text:"建邺区",value:"320105"}]},{text:"无锡市",value:"320200",children:[{text:"锡山区",value:"320205"},{text:"惠山区",value:"320206"},{text:"滨湖区",value:"320211"}]},{text:"徐州市",value:"320300",children:[{text:"鼓楼区",value:"320302"},{text:"云龙区",value:"320303"},{text:"贾汪区",value:"320305"}]}]}],ve=[{text:"Zhejiang",value:"330000",children:[{text:"Hangzhou",value:"330100",children:[{text:"Shangcheng",value:"330102"},{text:"Xiacheng",value:"330103"},{text:"Jianggan",value:"330104"}]},{text:"Ningbo",value:"330200",children:[{text:"Haishu",value:"330203"},{text:"Jiangbei",value:"330205"},{text:"Beilun",value:"330206"}]},{text:"Wenzhou",value:"330300",children:[{text:"Lucheng",value:"330302"},{text:"Longwan",value:"330303"},{text:"Ouhai",value:"330304"}]}]},{text:"Jiangsu",value:"320000",children:[{text:"Nanjing",value:"320100",children:[{text:"Xuanwu",value:"320102"},{text:"Qinghuai",value:"320104"},{text:"Jianye",value:"320105"}]},{text:"Wuxi",value:"320200",children:[{text:"Xishan",value:"320205"},{text:"Huishan",value:"320206"},{text:"Binhu",value:"320211"}]},{text:"Xuzhou",value:"320300",children:[{text:"Gulou",value:"320302"},{text:"Yunlong",value:"320303"},{text:"Jiawang",value:"320305"}]}]}],me={class:"current-level"},Pe=z({__name:"index",setup(c){const o=I({"zh-CN":{area:"地区",options:ce,selectArea:"请选择地区",customColor:"自定义颜色",asyncOptions:"异步加载选项",asyncOptions1:[{text:"浙江省",value:"330000",children:[]}],asyncOptions2:[{text:"杭州市",value:"330100"},{text:"宁波市",value:"330200"}],currentLevel:x=>`当前为第 ${x} 级`,customContent:"自定义选项上方内容",customFieldNames:"自定义字段名"},"en-US":{area:"Area",options:ve,selectArea:"Select Area",customColor:"Custom Color",asyncOptions:"Async Options",asyncOptions1:[{text:"Zhejiang",value:"330000",children:[]}],asyncOptions2:[{text:"Hangzhou",value:"330100"},{text:"Ningbo",value:"330200"}],currentLevel:x=>`Current level is ${x}`,customContent:"Custom Content",customFieldNames:"Custom Field Names"}}),f=U({show:!1,value:"",result:""}),i=U({show:!1,value:void 0,result:""}),v=U({show:!1,value:void 0,result:"",options:o("asyncOptions1")}),h=U({show:!1,value:void 0,result:""}),w={text:"name",value:"code",children:"items"},m=U({show:!1,value:void 0,result:""}),y=X(()=>{const x=ae(o("options")),e=r=>{"text"in r&&(r.name=r.text,delete r.text),"value"in r&&(r.code=r.value,delete r.value),"children"in r&&(r.items=r.children,delete r.children,r.items.forEach(e))};return x.forEach(e),x}),k=({value:x})=>{x==="330000"&&setTimeout(()=>{v.options[0].children=o("asyncOptions2")},500)},V=(x,{value:e,selectedOptions:r})=>{const t=r.map(F=>F.text||F.name).join("/");x.show=!1,x.value=e,x.result=t};return(x,e)=>{const r=Q("demo-block");return W(),Z(Y,null,[n(r,{card:"",title:l(o)("basicUsage")},{default:b(()=>[n(l(A),{modelValue:f.result,"onUpdate:modelValue":e[0]||(e[0]=t=>f.result=t),"is-link":"",readonly:"",label:l(o)("area"),placeholder:l(o)("selectArea"),onClick:e[1]||(e[1]=t=>f.show=!0)},null,8,["modelValue","label","placeholder"]),n(l(S),{show:f.show,"onUpdate:show":e[5]||(e[5]=t=>f.show=t),round:"",teleport:"body",position:"bottom"},{default:b(()=>[n(l(N),{modelValue:f.value,"onUpdate:modelValue":e[2]||(e[2]=t=>f.value=t),title:l(o)("selectArea"),options:l(o)("options"),onClose:e[3]||(e[3]=t=>f.show=!1),onFinish:e[4]||(e[4]=t=>V(f,t))},null,8,["modelValue","title","options"])]),_:1},8,["show"])]),_:1},8,["title"]),n(r,{card:"",title:l(o)("customColor")},{default:b(()=>[n(l(A),{modelValue:i.result,"onUpdate:modelValue":e[6]||(e[6]=t=>i.result=t),"is-link":"",readonly:"",label:l(o)("area"),placeholder:l(o)("selectArea"),onClick:e[7]||(e[7]=t=>i.show=!0)},null,8,["modelValue","label","placeholder"]),n(l(S),{show:i.show,"onUpdate:show":e[11]||(e[11]=t=>i.show=t),round:"",teleport:"body",position:"bottom"},{default:b(()=>[n(l(N),{modelValue:i.value,"onUpdate:modelValue":e[8]||(e[8]=t=>i.value=t),title:l(o)("selectArea"),options:l(o)("options"),"active-color":"#ee0a24",onClose:e[9]||(e[9]=t=>i.show=!1),onFinish:e[10]||(e[10]=t=>V(i,t))},null,8,["modelValue","title","options"])]),_:1},8,["show"])]),_:1},8,["title"]),n(r,{card:"",title:l(o)("asyncOptions")},{default:b(()=>[n(l(A),{modelValue:v.result,"onUpdate:modelValue":e[12]||(e[12]=t=>v.result=t),"is-link":"",readonly:"",label:l(o)("area"),placeholder:l(o)("selectArea"),onClick:e[13]||(e[13]=t=>v.show=!0)},null,8,["modelValue","label","placeholder"]),n(l(S),{show:v.show,"onUpdate:show":e[17]||(e[17]=t=>v.show=t),round:"",teleport:"body",position:"bottom"},{default:b(()=>[n(l(N),{modelValue:v.value,"onUpdate:modelValue":e[14]||(e[14]=t=>v.value=t),title:l(o)("selectArea"),options:v.options,onClose:e[15]||(e[15]=t=>v.show=!1),onChange:k,onFinish:e[16]||(e[16]=t=>V(v,t))},null,8,["modelValue","title","options"])]),_:1},8,["show"])]),_:1},8,["title"]),n(r,{card:"",title:l(o)("customFieldNames")},{default:b(()=>[n(l(A),{modelValue:h.result,"onUpdate:modelValue":e[18]||(e[18]=t=>h.result=t),"is-link":"",readonly:"",label:l(o)("area"),placeholder:l(o)("selectArea"),onClick:e[19]||(e[19]=t=>h.show=!0)},null,8,["modelValue","label","placeholder"]),n(l(S),{show:h.show,"onUpdate:show":e[23]||(e[23]=t=>h.show=t),round:"",teleport:"body",position:"bottom","safe-area-inset-bottom":""},{default:b(()=>[n(l(N),{modelValue:h.value,"onUpdate:modelValue":e[20]||(e[20]=t=>h.value=t),title:l(o)("selectArea"),options:l(y),"field-names":w,onClose:e[21]||(e[21]=t=>h.show=!1),onFinish:e[22]||(e[22]=t=>V(h,t))},null,8,["modelValue","title","options"])]),_:1},8,["show"])]),_:1},8,["title"]),n(r,{card:"",title:l(o)("customContent")},{default:b(()=>[n(l(A),{modelValue:m.result,"onUpdate:modelValue":e[24]||(e[24]=t=>m.result=t),"is-link":"",readonly:"",label:l(o)("area"),placeholder:l(o)("selectArea"),onClick:e[25]||(e[25]=t=>m.show=!0)},null,8,["modelValue","label","placeholder"]),n(l(S),{show:m.show,"onUpdate:show":e[29]||(e[29]=t=>m.show=t),round:"",teleport:"body",position:"bottom","safe-area-inset-bottom":""},{default:b(()=>[n(l(N),{modelValue:m.value,"onUpdate:modelValue":e[26]||(e[26]=t=>m.value=t),title:l(o)("selectArea"),options:l(y),"field-names":w,onClose:e[27]||(e[27]=t=>m.show=!1),onFinish:e[28]||(e[28]=t=>V(m,t))},{"options-top":b(({tabIndex:t})=>[q("div",me,G(l(o)("currentLevel",t)),1)]),_:1},8,["modelValue","title","options"])]),_:1},8,["show"])]),_:1},8,["title"])],64)}}});export{Pe as default};
