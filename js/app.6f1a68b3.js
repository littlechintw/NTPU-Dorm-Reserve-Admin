(function(){"use strict";var e={1272:function(e,t,n){var o=n(144),i=n(2202),r=n(1096),a=n(5378),s=n(7179),c=n(3058),l=n(4437),u=n(3584),d=n(3551),f=n(5234),m=n(2370),h=function(){var e=this,t=e._self._c;return t(r.Z,{staticStyle:{"background-color":"#feffff"}},[t("div",{staticClass:"inapp"},[t(a.Z,{attrs:{app:"",dark:"",dense:"",flat:"",color:"#264653"}},[t(m.qW,[t("a",{staticStyle:{color:"white","text-decoration":"none"},attrs:{href:"/admin"}},[e._v("北大宿舍預約系統")])]),t(f.Z),t(c.Z,{attrs:{width:"10px"}}),t(s.Z,{attrs:{disabled:e.closeState,href:e.btn.url,elevation:"2",outlined:"",plain:"",raised:""}},[e._v(e._s(e.btn.title))])],1),t(d.Z,[t(c.Z,[t(i.Z,{directives:[{name:"show",rawName:"v-show",value:!e.apiStatus,expression:"!apiStatus"}],attrs:{type:"red",dense:"",text:"",dismissible:""}},[e._v(" API seem bad, refresh this page for some times. If not work, please contact IT to solve this problem. "+e._s(e.apiurl)+" ")])],1),t(c.Z,{directives:[{name:"show",rawName:"v-show",value:e.account,expression:"account"}]},[t(i.Z,{attrs:{type:"success",dense:"",text:"",dismissible:""}},[e._v(" Login as "+e._s(e.account)+" ")])],1),t(c.Z,[e.closeState?t(i.Z,{attrs:{type:"warning",dense:"",text:"",dismissible:""}},[e._v(" 系統已經關閉 ")]):e._e()],1),t("div",{style:{minHeight:e.Height+"px"},attrs:{id:"router"}},[t("router-view")],1)],1)],1),t(u.Z,{staticClass:"font-weight-medium",attrs:{padless:"",color:"#e9c46a"}},[t(l.Z,{staticClass:"text-center",staticStyle:{"font-size":"14px"},attrs:{cols:"12"}},[e._v(" © 2022 Copyright "),t("a",{attrs:{href:"https://littlechintw.github.io"}},[e._v("littlechin.tw")]),e._v(". All rights reserved. ")])],1)],1)},p=[];const v=n(9669);let b=n(9575).Base64;var g=n(1181),y={name:"App",components:{},data:()=>({apiStatus:!0,btn:{title:"LOGIN",url:"/login"},reserveBtnShow:!1,account:"",login:!1,Height:0,Width:0,closeState:!1}),methods:{checkApiAlive(){let e=this;this.apiurl=g.apiurl,v({method:"get",url:g.apiurl+"/monitor",timeout:5e3}).then((function(e){console.log("API OK"),console.log(e)})).catch((function(t){console.log("API BAD"),e.apiStatus=!1,console.log(t)}))}},mounted(){this.checkApiAlive(),this.closeState=g.closeState,this.$cookie.get("token")&&(this.btn.title="LOGOUT",this.btn.url="/logout",this.reserveBtnShow=!0,this.account=b.decode(this.$cookie.get("id"))),this.Height=document.documentElement.clientHeight-90,this.Width=document.documentElement.clientWidth,window.onresize=()=>{this.Height=document.documentElement.clientHeight-100}}},w=y,P=n(1001),Z=(0,P.Z)(w,h,p,!1,null,null,null),S=Z.exports,_=n(8345);o.ZP.use(_.Z);const k=[{path:"/",name:"Home",component:()=>n.e(725).then(n.bind(n,6725)),meta:{title:"北大宿舍開宿預約"}},{path:"/admin",name:"Admin",component:()=>Promise.all([n.e(896),n.e(883)]).then(n.bind(n,3883)),meta:{title:"Admin | 北大宿舍開宿預約"}},{path:"/reserve_list",name:"Admin",component:()=>Promise.all([n.e(896),n.e(422),n.e(581)]).then(n.bind(n,7581)),meta:{title:"預約總表 | 北大宿舍開宿預約"}},{path:"/edit_user",name:"Admin",component:()=>Promise.all([n.e(896),n.e(154)]).then(n.bind(n,6154)),meta:{title:"編輯宿生 | 北大宿舍開宿預約"}},{path:"/config",name:"Config",component:()=>Promise.all([n.e(896),n.e(199)]).then(n.bind(n,2199)),meta:{title:"參數設定 | 北大宿舍開宿預約"}},{path:"/events",name:"Events",component:()=>Promise.all([n.e(896),n.e(422),n.e(337)]).then(n.bind(n,6337)),meta:{title:"編輯報到時間 | 北大宿舍開宿預約"}},{path:"/adminmember",name:"AdminMember",component:()=>Promise.all([n.e(896),n.e(422),n.e(986)]).then(n.bind(n,7986)),meta:{title:"管理者帳號 | 北大宿舍開宿預約"}},{path:"/status",name:"Status",component:()=>Promise.all([n.e(896),n.e(422),n.e(859)]).then(n.bind(n,1859)),meta:{title:"Status | 北大宿舍開宿預約"}},{path:"/visitor",name:"Visitor",component:()=>Promise.all([n.e(896),n.e(422),n.e(49)]).then(n.bind(n,6049)),meta:{title:"宿舍內訪客 | 北大宿舍開宿預約"}},{path:"/login",name:"Login",component:()=>Promise.all([n.e(896),n.e(834)]).then(n.bind(n,9834)),meta:{title:"Login | 北大宿舍開宿預約"}},{path:"/logout",name:"Logout",component:()=>n.e(764).then(n.bind(n,764)),meta:{title:"Logout | 北大宿舍開宿預約"}},{path:"/random",name:"Random",component:()=>Promise.all([n.e(896),n.e(502)]).then(n.bind(n,9502)),meta:{title:"Random | 北大宿舍開宿預約"}}],A=new _.Z({mode:"history",base:"/",routes:k});A.beforeEach(((e,t,n)=>{e.meta.title&&(document.title=e.meta.title),n()}));var O=A,x=n(629);o.ZP.use(x.ZP);var C=new x.ZP.Store({state:{},mutations:{},actions:{},modules:{}}),E=n(2250);o.ZP.use(E.Z);var j=new E.Z({}),L=n(4253),N=n.n(L),T=n(660),H=n(3464),B=n.n(H),I=n(5527),q=n.n(I);o.ZP.config.productionTip=!1,o.ZP.use(N()),o.ZP.component("qr-code",T.Z),o.ZP.use(B()),o.ZP.use(q(),{id:"UA-167881827-4",router:O,checkDuplicatedScript:!0}),new o.ZP({router:O,store:C,vuetify:j,render:e=>e(S)}).$mount("#app")},1181:function(e){e.exports=JSON.parse('{"apiurl":"https://615d-120-126-194-208.ap.ngrok.io","closeState":false}')}},t={};function n(o){var i=t[o];if(void 0!==i)return i.exports;var r=t[o]={id:o,loaded:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.loaded=!0,r.exports}n.m=e,function(){var e=[];n.O=function(t,o,i,r){if(!o){var a=1/0;for(u=0;u<e.length;u++){o=e[u][0],i=e[u][1],r=e[u][2];for(var s=!0,c=0;c<o.length;c++)(!1&r||a>=r)&&Object.keys(n.O).every((function(e){return n.O[e](o[c])}))?o.splice(c--,1):(s=!1,r<a&&(a=r));if(s){e.splice(u--,1);var l=i();void 0!==l&&(t=l)}}return t}r=r||0;for(var u=e.length;u>0&&e[u-1][2]>r;u--)e[u]=e[u-1];e[u]=[o,i,r]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,o){return n.f[o](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+"."+{49:"5d23b8a6",154:"9f537bdb",199:"69725eda",337:"bbc4c581",422:"f6e43f2d",502:"fc1f87dc",581:"d8bd4450",725:"1b943114",764:"df07d928",834:"42f9d1b0",859:"7392d8f7",883:"d68602a5",896:"337d7115",986:"7b8c74b8"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+e+"."+{49:"d19e3652",154:"58faebf8",199:"47a3bd35",337:"9dff35d9",422:"0efe3594",502:"9f3333ea",581:"9cbb8ee0",764:"0ef0626c",859:"f407b6c1",883:"cecc375a",896:"739e6d45",986:"fc907ed4"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="ntpu-dorm-check-in:";n.l=function(o,i,r,a){if(e[o])e[o].push(i);else{var s,c;if(void 0!==r)for(var l=document.getElementsByTagName("script"),u=0;u<l.length;u++){var d=l[u];if(d.getAttribute("src")==o||d.getAttribute("data-webpack")==t+r){s=d;break}}s||(c=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,n.nc&&s.setAttribute("nonce",n.nc),s.setAttribute("data-webpack",t+r),s.src=o),e[o]=[i];var f=function(t,n){s.onerror=s.onload=null,clearTimeout(m);var i=e[o];if(delete e[o],s.parentNode&&s.parentNode.removeChild(s),i&&i.forEach((function(e){return e(n)})),t)return t(n)},m=setTimeout(f.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=f.bind(null,s.onerror),s.onload=f.bind(null,s.onload),c&&document.head.appendChild(s)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e}}(),function(){n.p="/"}(),function(){if("undefined"!==typeof document){var e=function(e,t,n,o,i){var r=document.createElement("link");r.rel="stylesheet",r.type="text/css";var a=function(n){if(r.onerror=r.onload=null,"load"===n.type)o();else{var a=n&&("load"===n.type?"missing":n.type),s=n&&n.target&&n.target.href||t,c=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=a,c.request=s,r.parentNode.removeChild(r),i(c)}};return r.onerror=r.onload=a,r.href=t,n?n.parentNode.insertBefore(r,n.nextSibling):document.head.appendChild(r),r},t=function(e,t){for(var n=document.getElementsByTagName("link"),o=0;o<n.length;o++){var i=n[o],r=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(r===e||r===t))return i}var a=document.getElementsByTagName("style");for(o=0;o<a.length;o++){i=a[o],r=i.getAttribute("data-href");if(r===e||r===t)return i}},o=function(o){return new Promise((function(i,r){var a=n.miniCssF(o),s=n.p+a;if(t(a,s))return i();e(o,s,null,i,r)}))},i={143:0};n.f.miniCss=function(e,t){var n={49:1,154:1,199:1,337:1,422:1,502:1,581:1,764:1,859:1,883:1,896:1,986:1};i[e]?t.push(i[e]):0!==i[e]&&n[e]&&t.push(i[e]=o(e).then((function(){i[e]=0}),(function(t){throw delete i[e],t})))}}}(),function(){var e={143:0};n.f.j=function(t,o){var i=n.o(e,t)?e[t]:void 0;if(0!==i)if(i)o.push(i[2]);else{var r=new Promise((function(n,o){i=e[t]=[n,o]}));o.push(i[2]=r);var a=n.p+n.u(t),s=new Error,c=function(o){if(n.o(e,t)&&(i=e[t],0!==i&&(e[t]=void 0),i)){var r=o&&("load"===o.type?"missing":o.type),a=o&&o.target&&o.target.src;s.message="Loading chunk "+t+" failed.\n("+r+": "+a+")",s.name="ChunkLoadError",s.type=r,s.request=a,i[1](s)}};n.l(a,c,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,o){var i,r,a=o[0],s=o[1],c=o[2],l=0;if(a.some((function(t){return 0!==e[t]}))){for(i in s)n.o(s,i)&&(n.m[i]=s[i]);if(c)var u=c(n)}for(t&&t(o);l<a.length;l++)r=a[l],n.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return n.O(u)},o=self["webpackChunkntpu_dorm_check_in"]=self["webpackChunkntpu_dorm_check_in"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(1272)}));o=n.O(o)})();
//# sourceMappingURL=app.6f1a68b3.js.map