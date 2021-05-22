(()=>{"use strict";var e={9266:(e,t,o)=>{o(71);var n=o(8880),r=o(2277);const a={config:{}};var l=o(3673);function i(e,t,o,n,r,a){const i=(0,l.up)("router-view");return(0,l.wg)(),(0,l.j4)(i)}const s=(0,l.aZ)({name:"App"});s.render=i;const c=s;var u=o(7083),p=o(9728);const d=(0,l.Uk)(" My Stuff ");function m(e,t,o,n,r,a){const i=(0,l.up)("q-btn"),s=(0,l.up)("q-toolbar"),c=(0,l.up)("q-header"),u=(0,l.up)("q-item-label"),p=(0,l.up)("EssentialLink"),m=(0,l.up)("q-list"),f=(0,l.up)("q-drawer"),w=(0,l.up)("router-view"),h=(0,l.up)("q-page-container"),b=(0,l.up)("q-layout");return(0,l.wg)(),(0,l.j4)(b,{view:"lHh Lpr lFf"},{default:(0,l.w5)((()=>[(0,l.Wm)(c,null,{default:(0,l.w5)((()=>[(0,l.Wm)(s,null,{default:(0,l.w5)((()=>[(0,l.Wm)(i,{flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu",onClick:n.toggleLeftDrawer},null,8,["onClick"]),(0,l.Wm)(i,{dense:"",flat:"",label:"Back Home",icon:"arrow_back","aria-label":"Back",to:"/",id:"backBtn"})])),_:1})])),_:1}),(0,l.Wm)(f,{modelValue:n.leftDrawerOpen,"onUpdate:modelValue":t[1]||(t[1]=e=>n.leftDrawerOpen=e),"show-if-above":"",class:"bg-secondary",behavior:"mobile"},{default:(0,l.w5)((()=>[(0,l.Wm)(m,null,{default:(0,l.w5)((()=>[(0,l.Wm)(u,{header:"",class:"text-grey-1"},{default:(0,l.w5)((()=>[d])),_:1}),((0,l.wg)(!0),(0,l.j4)(l.HY,null,(0,l.Ko)(n.essentialLinks,(e=>((0,l.wg)(),(0,l.j4)(p,(0,l.dG)({key:e.title},e,{class:"text-grey-1"}),null,16)))),128))])),_:1})])),_:1},8,["modelValue"]),(0,l.Wm)(h,null,{default:(0,l.w5)((()=>[(0,l.Wm)(w)])),_:1})])),_:1})}var f=o(1959),w=o(2323);function h(e,t,o,n,r,a){const i=(0,l.up)("q-icon"),s=(0,l.up)("q-item-section"),c=(0,l.up)("q-item-label"),u=(0,l.up)("q-item");return(0,l.wg)(),(0,l.j4)(u,{clickable:"",tag:"a",target:"_blank",href:e.link},{default:(0,l.w5)((()=>[e.icon?((0,l.wg)(),(0,l.j4)(s,{key:0,avatar:""},{default:(0,l.w5)((()=>[(0,l.Wm)(i,{name:e.icon},null,8,["name"])])),_:1})):(0,l.ry)("",!0),(0,l.Wm)(s,null,{default:(0,l.w5)((()=>[(0,l.Wm)(c,null,{default:(0,l.w5)((()=>[(0,l.Uk)((0,w.zw)(e.title),1)])),_:1}),(0,l.Wm)(c,{caption:""},{default:(0,l.w5)((()=>[(0,l.Uk)((0,w.zw)(e.caption),1)])),_:1})])),_:1})])),_:1},8,["href"])}const b=(0,l.aZ)({name:"EssentialLink",props:{title:{type:String,required:!0},caption:{type:String,default:""},link:{type:String,default:"#"},icon:{type:String,default:""}}});var g=o(3414),v=o(2035),y=o(4554),k=o(2350),W=o(7518),x=o.n(W);b.render=h;const q=b;x()(b,"components",{QItem:g.Z,QItemSection:v.Z,QIcon:y.Z,QItemLabel:k.Z});const _={name:"BackHome",components:{EssentialLink:q},setup(){const e=(0,f.iH)(!1),t=[{title:"Twitter",caption:"twitter.com/bvoo",icon:"fab fa-twitter",link:"https://twitter.com/bvoo"},{title:"Github",caption:"github.com/bvoo",icon:"code",link:"https://github.com/bvoo"},{title:"Discord",caption:"discord.gg/kyBjEY6",icon:"chat",link:"https://discord.gg/kyBjEY6"},{title:"Patreon",caption:"patreon.com/bvoo",icon:"fab fa-patreon",link:"https://www.patreon.com/bvoo"}];return{essentialLinks:t,leftDrawerOpen:e,toggleLeftDrawer(){e.value=!e.value}}}};var O=o(3066),j=o(3812),B=o(9570),Q=o(1828),D=o(4883),P=o(7011),Z=o(2652);_.render=m;const M=_;x()(_,"components",{QLayout:O.Z,QHeader:j.Z,QToolbar:B.Z,QBtn:Q.Z,QDrawer:D.Z,QList:P.Z,QItemLabel:k.Z,QPageContainer:Z.Z});const L={class:"fullscreen bg-primary text-white text-center q-pa-md flex flex-center"},C=(0,l.Wm)("div",{style:{"font-size":"20vh"}},"Uh-oh.",-1),S=(0,l.Wm)("div",{class:"text-h2",style:{opacity:"0.4"}},"This isn't ready yet.",-1);function z(e,t,o,n,r,a){const i=(0,l.up)("q-btn");return(0,l.wg)(),(0,l.j4)("div",L,[(0,l.Wm)("div",null,[C,S,(0,l.Wm)(i,{class:"q-mt-xl",dense:"",flat:"",label:"Back Home",icon:"arrow_back","aria-label":"Back",to:"/",id:"backBtn",onClick:e.backButton},null,8,["onClick"])])])}const E={name:"Error404"};E.render=z;const H=E;x()(E,"components",{QBtn:Q.Z});const T={class:"fit row wrap justify-start"},I={class:"itemlist flex-col wrap"};function U(e,t,o,n,r,a){const i=(0,l.up)("typer"),s=(0,l.up)("router-link"),c=(0,l.up)("q-page");return(0,l.wg)(),(0,l.j4)(c,{class:"flex flex-center"},{default:(0,l.w5)((()=>[(0,l.Wm)("div",T,[(0,l.Wm)(i,{text:"bvoo.xyz",size:"8rem",delay:"1000",speed:"150",color:"white",cursorDisappear:"100",class:"moz://a-5"}),(0,l.Wm)("div",I,[(0,l.Wm)(s,{to:"/Projects"},{default:(0,l.w5)((()=>[(0,l.Wm)(i,{class:"pog-button",text:"Projects",size:"3.5rem",speed:"150",delay:2350,cursorDisappear:"5000",font:"'JetBrains Mono', monospace"})])),_:1}),(0,l.Wm)(s,{to:"/ROMs"},{default:(0,l.w5)((()=>[(0,l.Wm)(i,{class:"pog-button",text:"ROMs",size:"3.5rem",speed:"150",delay:2350,cursorDisappear:"5000",font:"'JetBrains Mono', monospace"})])),_:1}),(0,l.Wm)(s,{to:"/awa"},{default:(0,l.w5)((()=>[(0,l.Wm)(i,{class:"pog-button",text:"awa",size:"3.5rem",speed:"150",delay:2350,cursorDisappear:"5000",font:"'JetBrains Mono', monospace"})])),_:1})])])])),_:1})}const J=(0,l.HX)("data-v-49829330");(0,l.dD)("data-v-49829330");const F={class:"flex flex-row"};(0,l.Cn)();const Y=J(((e,t,o,n,r,a)=>((0,l.wg)(),(0,l.j4)("div",F,[(0,l.Wm)("div",{style:`color: ${o.color}; font-size: ${o.size}; font-family: ${o.font}`},(0,w.zw)(r.content),5),(0,l.Wm)("div",{style:`color: ${r.showCursor?o.color:"transparent"}; font-size: ${o.size}; font-family: ${o.font}`,class:"blinky"},"|",4)]))));o(7070);const N={props:{text:{type:String,default:"pog",required:!0},speed:{type:Number,default:250,required:!1},delay:{type:Number,default:0,required:!1},size:{type:String,default:"8em",required:!1},color:{type:String,default:"inherit",required:!1},font:{type:String,default:'"Space Mono", monospace',required:!1},noCursor:{type:Boolean,default:!1,required:!1},cursorDisappear:{type:Number,default:0,required:!1}},data(){return{content:"",showCursor:!1}},mounted(){let e=this.text.split("");e=e.reverse(),setTimeout((()=>{this.showCursor=!this.noCursor;const t=setInterval((()=>{e.length>0?this.content+=e.pop():(clearInterval(t),this.cursorDisappear>0&&setTimeout((()=>{this.showCursor=!1}),this.cursorDisappear))}),this.speed)}),this.delay)}};N.render=Y,N.__scopeId="data-v-49829330";const G=N,V={name:"PageIndex",components:{Typer:G}};var $=o(4379);V.render=U;const A=V;x()(V,"components",{QPage:$.Z});const R=(0,l.Uk)(" My Stuff ");function K(e,t,o,n,r,a){const i=(0,l.up)("q-btn"),s=(0,l.up)("q-toolbar"),c=(0,l.up)("q-header"),u=(0,l.up)("q-item-label"),p=(0,l.up)("EssentialLink"),d=(0,l.up)("q-list"),m=(0,l.up)("q-drawer"),f=(0,l.up)("router-view"),w=(0,l.up)("q-page-container"),h=(0,l.up)("q-layout");return(0,l.wg)(),(0,l.j4)(h,{view:"lHh Lpr lFf"},{default:(0,l.w5)((()=>[(0,l.Wm)(c,null,{default:(0,l.w5)((()=>[(0,l.Wm)(s,null,{default:(0,l.w5)((()=>[(0,l.Wm)(i,{flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu",onClick:n.toggleLeftDrawer},null,8,["onClick"])])),_:1})])),_:1}),(0,l.Wm)(m,{modelValue:n.leftDrawerOpen,"onUpdate:modelValue":t[1]||(t[1]=e=>n.leftDrawerOpen=e),"show-if-above":"",class:"bg-secondary",behavior:"mobile"},{default:(0,l.w5)((()=>[(0,l.Wm)(d,null,{default:(0,l.w5)((()=>[(0,l.Wm)(u,{header:"",class:"text-grey-1"},{default:(0,l.w5)((()=>[R])),_:1}),((0,l.wg)(!0),(0,l.j4)(l.HY,null,(0,l.Ko)(n.essentialLinks,(e=>((0,l.wg)(),(0,l.j4)(p,(0,l.dG)({key:e.title},e,{class:"text-grey-1"}),null,16)))),128))])),_:1})])),_:1},8,["modelValue"]),(0,l.Wm)(w,null,{default:(0,l.w5)((()=>[(0,l.Wm)(f)])),_:1})])),_:1})}const X=[{title:"Twitter",caption:"twitter.com/bvoowo",icon:"fab fa-twitter",link:"https://twitter.com/bvoowo"},{title:"Github",caption:"github.com/bvoo",icon:"code",link:"https://github.com/bvoo"},{title:"Discord",caption:"discord.gg/kyBjEY6",icon:"chat",link:"https://discord.gg/kyBjEY6"},{title:"Patreon",caption:"patreon.com/bvoo",icon:"fab fa-patreon",link:"https://www.patreon.com/bvoo"}],ee={name:"MainLayout",components:{EssentialLink:q},setup(){const e=(0,f.iH)(!1);return{essentialLinks:X,leftDrawerOpen:e,toggleLeftDrawer(){e.value=!e.value}}}};ee.render=K;const te=ee;x()(ee,"components",{QLayout:O.Z,QHeader:j.Z,QToolbar:B.Z,QBtn:Q.Z,QDrawer:D.Z,QList:P.Z,QItemLabel:k.Z,QPageContainer:Z.Z});const oe=(0,l.Wm)("link",{rel:"preconnect",href:"https://fonts.gstatic.com"},null,-1),ne=(0,l.Wm)("link",{href:"https://fonts.googleapis.com/css2?family=JetBrains+Mono&display=swap",rel:"stylesheet"},null,-1),re=(0,l.Wm)("link",{href:"https://fonts.googleapis.com/css2?family=Space+Mono&display=swap",rel:"stylesheet"},null,-1),ae=(0,l.Wm)("div",{class:"fit column items-center"},[(0,l.Wm)("div",{id:"pagetitle",class:"text-h2"},"ROMs")],-1),le=(0,l.Wm)("div",{class:"itemlist fit column inline wrap items-center"},[(0,l.Wm)("div",{class:"text-h3 q-pb-lg"},"Fightcade 2"),(0,l.Wm)("div",{class:"text-h4"},[(0,l.Wm)("a",{href:"https://newchallenger.net/fc2/fc2roms.zip"},"FC2 JSONs")]),(0,l.Wm)("div",{class:"text-h4"},[(0,l.Wm)("a",{href:"https://drive.google.com/uc?export=download&id=1KNzlMznYli9wlM6qhYXEvD2uQHJ6PtDE"},"JOJOBA ")]),(0,l.Wm)("div",{class:"text-h4"},[(0,l.Wm)("a",{href:"https://drive.google.com/uc?export=download&id=1DbnTTWDMFzGPEpa7v9UcU41PxQ3FwfQx"},"JOJOBANR1 ")]),(0,l.Wm)("div",{class:"text-h4"},[(0,l.Wm)("a",{href:"https://drive.google.com/uc?export=download&id=1IHD9QIlUPLmtGboCuu6j6hS8PeIBM8EX"}," NOBGM HFTF ")])],-1),ie={class:"itemlist fit column inline wrap items-center"},se=(0,l.Wm)("div",{class:"text-h3 q-pb-lg"},"Other",-1),ce={class:"text-h4"},ue=(0,l.Uk)("Other");function pe(e,t,o,n,r,a){const i=(0,l.up)("router-link"),s=(0,l.up)("q-page");return(0,l.wg)(),(0,l.j4)(s,{class:"flex"},{default:(0,l.w5)((()=>[oe,ne,re,ae,le,(0,l.Wm)("div",ie,[se,(0,l.Wm)("div",ce,[(0,l.Wm)(i,{to:"/awa"},{default:(0,l.w5)((()=>[ue])),_:1})])])])),_:1})}const de={name:"PageIndex"};de.render=pe;const me=de;x()(de,"components",{QPage:$.Z});const fe={class:"fullscreen bg-primary text-white text-center q-pa-md flex flex-center"},we=(0,l.Wm)("div",{style:{"font-size":"20vh"}},"404",-1),he=(0,l.Wm)("div",{class:"text-h2",style:{opacity:"0.4"}},"You shouldn't be here.",-1);function be(e,t,o,n,r,a){const i=(0,l.up)("q-btn");return(0,l.wg)(),(0,l.j4)("div",fe,[(0,l.Wm)("div",null,[we,he,(0,l.Wm)(i,{class:"q-mt-xl",dense:"",flat:"",label:"Back Home",icon:"arrow_back","aria-label":"Back",to:"/",id:"backBtn",onClick:e.backButton},null,8,["onClick"])])])}const ge={name:"Error404"};ge.render=be;const ve=ge;x()(ge,"components",{QBtn:Q.Z});const ye=[{path:"/",component:()=>te,children:[{path:"",component:()=>A}]},{path:"/Projects",component:()=>M,children:[{path:"",component:()=>H}]},{path:"/ROMs",component:()=>M,children:[{path:"",component:()=>me}]},{path:"/awa",component:()=>M,children:[{path:"",component:()=>H}]},{path:"/:catchAll(.*)*",component:()=>ve}],ke=ye,We=(0,u.BC)((()=>{const e=p.r5,t=(0,p.p7)({scrollBehavior:()=>({left:0,top:0}),routes:ke,history:e("")});return t}));async function xe(e){const t="function"===typeof We?await We({}):We,o=e(c);return o.use(r.Z,a),{app:o,router:t}}var qe=o(1413);(0,qe.z)("service-worker.js",{ready(){},registered(){},cached(){},updatefound(){},updated(){},offline(){},error(){}}),/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream&&window.navigator.standalone&&o.e(736).then(o.t.bind(o,9501,23));async function _e({app:e,router:t}){e.use(t),e.mount("#q-app")}xe(n.ri).then(_e)}},t={};function o(n){var r=t[n];if(void 0!==r)return r.exports;var a=t[n]={exports:{}};return e[n](a,a.exports,o),a.exports}o.m=e,(()=>{var e=[];o.O=(t,n,r,a)=>{if(!n){var l=1/0;for(c=0;c<e.length;c++){for(var[n,r,a]=e[c],i=!0,s=0;s<n.length;s++)(!1&a||l>=a)&&Object.keys(o.O).every((e=>o.O[e](n[s])))?n.splice(s--,1):(i=!1,a<l&&(l=a));i&&(e.splice(c--,1),t=r())}return t}a=a||0;for(var c=e.length;c>0&&e[c-1][2]>a;c--)e[c]=e[c-1];e[c]=[n,r,a]}})(),(()=>{o.n=e=>{var t=e&&e.__esModule?()=>e["default"]:()=>e;return o.d(t,{a:t}),t}})(),(()=>{var e,t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__;o.t=function(n,r){if(1&r&&(n=this(n)),8&r)return n;if("object"===typeof n&&n){if(4&r&&n.__esModule)return n;if(16&r&&"function"===typeof n.then)return n}var a=Object.create(null);o.r(a);var l={};e=e||[null,t({}),t([]),t(t)];for(var i=2&r&&n;"object"==typeof i&&!~e.indexOf(i);i=t(i))Object.getOwnPropertyNames(i).forEach((e=>l[e]=()=>n[e]));return l["default"]=()=>n,o.d(a,l),a}})(),(()=>{o.d=(e,t)=>{for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}})(),(()=>{o.e=()=>Promise.resolve()})(),(()=>{o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})(),(()=>{o.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{var e={143:0};o.O.j=t=>0===e[t];var t=(t,n)=>{var r,a,[l,i,s]=n,c=0;for(r in i)o.o(i,r)&&(o.m[r]=i[r]);if(s)var u=s(o);for(t&&t(n);c<l.length;c++)a=l[c],o.o(e,a)&&e[a]&&e[a][0](),e[l[c]]=0;return o.O(u)},n=self["webpackChunknewbvoo"]=self["webpackChunknewbvoo"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var n=o.O(void 0,[736],(()=>o(9266)));n=o.O(n)})();