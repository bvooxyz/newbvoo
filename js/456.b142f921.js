(self["webpackChunknewbvoo"]=self["webpackChunknewbvoo"]||[]).push([[456],{9944:(e,t,n)=>{"use strict";n.d(t,{Z:()=>d});var a=n(3673),l=n(2323);function o(e,t,n,o,i,r){const u=(0,a.up)("q-icon"),c=(0,a.up)("q-item-section"),s=(0,a.up)("q-item-label"),p=(0,a.up)("q-item");return(0,a.wg)(),(0,a.j4)(p,{clickable:"",tag:"a",target:"_blank",href:e.link},{default:(0,a.w5)((()=>[e.icon?((0,a.wg)(),(0,a.j4)(c,{key:0,avatar:""},{default:(0,a.w5)((()=>[(0,a.Wm)(u,{name:e.icon},null,8,["name"])])),_:1})):(0,a.ry)("",!0),(0,a.Wm)(c,null,{default:(0,a.w5)((()=>[(0,a.Wm)(s,null,{default:(0,a.w5)((()=>[(0,a.Uk)((0,l.zw)(e.title),1)])),_:1}),(0,a.Wm)(s,{caption:""},{default:(0,a.w5)((()=>[(0,a.Uk)((0,l.zw)(e.caption),1)])),_:1})])),_:1})])),_:1},8,["href"])}const i=(0,a.aZ)({name:"EssentialLink",props:{title:{type:String,required:!0},caption:{type:String,default:""},link:{type:String,default:"#"},icon:{type:String,default:""}}});var r=n(3414),u=n(2035),c=n(4554),s=n(2350),p=n(7518),w=n.n(p);i.render=o;const d=i;w()(i,"components",{QItem:r.Z,QItemSection:u.Z,QIcon:c.Z,QItemLabel:s.Z})},9456:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>h});var a=n(3673);const l=(0,a.Uk)(" My Stuff ");function o(e,t,n,o,i,r){const u=(0,a.up)("q-btn"),c=(0,a.up)("q-toolbar"),s=(0,a.up)("q-header"),p=(0,a.up)("q-item-label"),w=(0,a.up)("EssentialLink"),d=(0,a.up)("q-list"),m=(0,a.up)("q-drawer"),f=(0,a.up)("router-view"),b=(0,a.up)("q-page-container"),g=(0,a.up)("q-layout");return(0,a.wg)(),(0,a.j4)(g,{view:"lHh Lpr lFf"},{default:(0,a.w5)((()=>[(0,a.Wm)(s,null,{default:(0,a.w5)((()=>[(0,a.Wm)(c,null,{default:(0,a.w5)((()=>[(0,a.Wm)(u,{flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu",onClick:e.toggleLeftDrawer},null,8,["onClick"])])),_:1})])),_:1}),(0,a.Wm)(m,{modelValue:e.leftDrawerOpen,"onUpdate:modelValue":t[1]||(t[1]=t=>e.leftDrawerOpen=t),"show-if-above":"",class:"bg-secondary",behavior:"mobile"},{default:(0,a.w5)((()=>[(0,a.Wm)(d,null,{default:(0,a.w5)((()=>[(0,a.Wm)(p,{header:"",class:"text-grey-1"},{default:(0,a.w5)((()=>[l])),_:1}),((0,a.wg)(!0),(0,a.j4)(a.HY,null,(0,a.Ko)(e.essentialLinks,(e=>((0,a.wg)(),(0,a.j4)(w,(0,a.dG)({key:e.title},e,{class:"text-grey-1"}),null,16)))),128))])),_:1})])),_:1},8,["modelValue"]),(0,a.Wm)(b,null,{default:(0,a.w5)((()=>[(0,a.Wm)(f)])),_:1})])),_:1})}var i=n(9944),r=n(1959);const u=[{title:"Twitter",caption:"twitter.com/bvoo",icon:"fab fa-twitter",link:"https://twitter.com/bvoo"},{title:"Github",caption:"github.com/bvoo",icon:"code",link:"https://github.com/bvoo"},{title:"Discord",caption:"discord.gg/kyBjEY6",icon:"chat",link:"https://discord.gg/kyBjEY6"},{title:"Patreon",caption:"patreon.com/bvoo",icon:"fab fa-patreon",link:"https://www.patreon.com/bvoo"}],c=(0,a.aZ)({name:"MainLayout",components:{EssentialLink:i.Z},setup(){const e=(0,r.iH)(!1);return{essentialLinks:u,leftDrawerOpen:e,toggleLeftDrawer(){e.value=!e.value}}}});var s=n(3066),p=n(3812),w=n(9570),d=n(1828),m=n(4883),f=n(7011),b=n(2350),g=n(2652),k=n(7518),v=n.n(k);c.render=o;const h=c;v()(c,"components",{QLayout:s.Z,QHeader:p.Z,QToolbar:w.Z,QBtn:d.Z,QDrawer:m.Z,QList:f.Z,QItemLabel:b.Z,QPageContainer:g.Z})}}]);