if(!self.define){const n=n=>{"require"!==n&&(n+=".js");let i=Promise.resolve();return e[n]||(i=new Promise((async i=>{if("document"in self){const e=document.createElement("script");e.src=n,document.head.appendChild(e),e.onload=i}else importScripts(n),i()}))),i.then((()=>{if(!e[n])throw new Error(`Module ${n} didn’t register its module`);return e[n]}))},i=(i,e)=>{Promise.all(i.map(n)).then((n=>e(1===n.length?n[0]:n)))},e={require:Promise.resolve(i)};self.define=(i,s,r)=>{e[i]||(e[i]=Promise.resolve().then((()=>{let e={};const o={uri:location.origin+i.slice(1)};return Promise.all(s.map((i=>{switch(i){case"exports":return e;case"module":return o;default:return n(i)}}))).then((n=>{const i=r(...n);return e.default||(e.default=i),e}))})))}}define("./service-worker.js",["./workbox-90faa4c2"],(function(n){"use strict";n.setCacheNameDetails({prefix:"newbvoo"}),self.addEventListener("message",(n=>{n.data&&"SKIP_WAITING"===n.data.type&&self.skipWaiting()})),n.precacheAndRoute([{url:"css/10.125d36a1.css",revision:null},{url:"css/723.6fea56f8.css",revision:null},{url:"css/app.a6b1ccba.css",revision:null},{url:"css/vendor.57cbaff5.css",revision:null},{url:"favicon.ico",revision:"a5ab18790e53929550444fb5da02444c"},{url:"fonts/KFOkCnqEu92Fr1MmgVxIIzQ.9391e6e2.woff",revision:null},{url:"fonts/KFOlCnqEu92Fr1MmEU9fBBc-.ddd11dab.woff",revision:null},{url:"fonts/KFOlCnqEu92Fr1MmSU5fBBc-.877b9231.woff",revision:null},{url:"fonts/KFOlCnqEu92Fr1MmWUlfBBc-.0344cc3c.woff",revision:null},{url:"fonts/KFOlCnqEu92Fr1MmYUtfBBc-.b555d228.woff",revision:null},{url:"fonts/KFOmCnqEu92Fr1Mu4mxM.9b78ea3b.woff",revision:null},{url:"fonts/fa-brands-400.329a95a9.woff",revision:null},{url:"fonts/fa-brands-400.c1210e5e.woff2",revision:null},{url:"fonts/fa-regular-400.36722648.woff",revision:null},{url:"fonts/fa-regular-400.68c5af1f.woff2",revision:null},{url:"fonts/fa-solid-900.ada6e6df.woff2",revision:null},{url:"fonts/fa-solid-900.c6ec0800.woff",revision:null},{url:"fonts/flUhRq6tzZclQEJ-Vdg-IuiaDsNa.0d57c481.woff",revision:null},{url:"fonts/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.ae520e14.woff2",revision:null},{url:"icons/apple-icon-120x120.png",revision:"c9920835d2adb9f6ab6a79a27f220a3a"},{url:"icons/apple-icon-152x152.png",revision:"9df9e65a1d2c6df3bd9143666b0e8c63"},{url:"icons/apple-icon-167x167.png",revision:"4300c6c136c06abcd781aa18644dd7a3"},{url:"icons/apple-icon-180x180.png",revision:"88dbf3d9e8269f1298486d103e22a57c"},{url:"icons/favicon-128x128.png",revision:"a075752ea3bda7291a088852312238e3"},{url:"icons/favicon-16x16.png",revision:"90adf913d9aac4e7979976d895316739"},{url:"icons/favicon-192x192.png",revision:"81af36ac8d7635ae94fc1b3f1bf8575f"},{url:"icons/favicon-256x256.png",revision:"ff625df66c206b8b822978a51f0437ff"},{url:"icons/favicon-32x32.png",revision:"3d94275e0e99f7b6db66183987d83cf8"},{url:"icons/favicon-384x384.png",revision:"2790f75ad07126af6ee6909fd1c8a802"},{url:"icons/favicon-512x512.png",revision:"093b3412993b56f69d89a59dd0072194"},{url:"icons/favicon-96x96.png",revision:"62e1564fd2171b012ea98ec89ad43ae1"},{url:"icons/icon-128x128.png",revision:"1be07e62226c8f6a7086f132d9be1642"},{url:"icons/icon-192x192.png",revision:"a1b423855a450ae7adbd9d2a782e0dfb"},{url:"icons/icon-256x256.png",revision:"9f33ebc999e51d0dc2975fc573d53a0b"},{url:"icons/icon-384x384.png",revision:"a126be0d50ed682c3129e0b8b31f680a"},{url:"icons/icon-512x512.png",revision:"02abd24e7c8638e848d96a6bf78d2c27"},{url:"icons/ms-icon-144x144.png",revision:"f256ec55be616f32ae486ab7571eb936"},{url:"icons/safari-pinned-tab.svg",revision:"de8107bed7f087fb443d8e36855e7467"},{url:"index.html",revision:"6a1f5ce87654d10ec4de6e3efdd852fa"},{url:"js/10.3a1aff6d.js",revision:null},{url:"js/154.bb1b9a6f.js",revision:null},{url:"js/464.5f27d7d6.js",revision:null},{url:"js/654.5161ca79.js",revision:null},{url:"js/723.8007e9af.js",revision:null},{url:"js/900.45f73457.js",revision:null},{url:"js/902.1a92a968.js",revision:null},{url:"js/app.9c5dd624.js",revision:null},{url:"js/vendor.68705e0a.js",revision:null},{url:"manifest.json",revision:"5b118b546bd7c3b2c064f9b001fc887a"}],{}),n.registerRoute(new n.NavigationRoute(n.createHandlerBoundToURL("index.html"),{denylist:[/service-worker\.js$/,/workbox-(.)*\.js$/]}))}));
