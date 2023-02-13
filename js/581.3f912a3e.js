"use strict";(self["webpackChunkntpu_dorm_check_in"]=self["webpackChunkntpu_dorm_check_in"]||[]).push([[581],{7581:function(t,e,a){a.r(e),a.d(e,{default:function(){return $}});var s=a(7179),i=a(3058),r=a(4437),n=a(6035),o=a(9359),l=a(6904),u=a(248),c=a(1908),h=a(2630),d=a(4831),v=a(8236),m=a(6275),p=a(5294),f=a(5251),g=function(){var t=this,e=t._self._c;return e(i.Z,{attrs:{elevation:"0"}},[e(n.Z,{attrs:{fluid:""}},[e(p.Z,[e(r.Z,{attrs:{cols:"12"}},[e(p.Z,{attrs:{align:"center",justify:"center",length:""}},[e("br")]),e(p.Z,{directives:[{name:"show",rawName:"v-show",value:!t.loginStatus,expression:"!loginStatus"}],attrs:{align:"center",justify:"center",length:""}},[e("about")],1)],1)],1)],1),e(n.Z,{directives:[{name:"show",rawName:"v-show",value:t.isTrueAdmin,expression:"isTrueAdmin"}],attrs:{fluid:""}},[e("Announcement"),e(p.Z,[e(r.Z,{attrs:{cols:"12"}},[e(p.Z,{attrs:{align:"center",justify:"center",length:""}},[e("br")]),e(p.Z,{attrs:{align:"center",justify:"center",length:""}},[e(s.Z,{staticClass:"mr-4",attrs:{outlined:"",href:t.downloadHref,target:"_blank"},on:{click:t.csv}},[t._v("下載 csv")])],1),e(p.Z,{attrs:{align:"center",justify:"center",length:""}},[e("br")]),e(p.Z,{attrs:{align:"center",justify:"center",length:""}},[e(s.Z,{staticClass:"mr-4",attrs:{outlined:"",color:"#B5563E"},on:{click:t.updateStatus}},[t._v("更新已登入資訊")])],1),e(p.Z,{attrs:{align:"center",justify:"center",length:""}},[e("br")]),e(p.Z,{attrs:{align:"center",justify:"center",length:""}},[e(l.Z,{ref:"form",attrs:{"lazy-validation":""},on:{submit:function(e){return e.preventDefault(),t.search.apply(null,arguments)}},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[e(f.Z,{attrs:{label:"學號 / Student ID",type:"number",required:""},model:{value:t.searchStuid,callback:function(e){t.searchStuid=e},expression:"searchStuid"}}),e(p.Z,{attrs:{align:"center",justify:"center",length:""}},[e(s.Z,{staticClass:"mr-4",attrs:{color:"#87C1A2"},on:{click:t.search}},[t._v("搜尋")]),e(s.Z,{staticClass:"mr-4",attrs:{color:"pink",outlined:""},on:{click:t.search_clean}},[t._v("清空")])],1)],1)],1),e(p.Z,{attrs:{align:"center",justify:"center",length:""}},[e("br")]),e(p.Z,{attrs:{align:"center",justify:"center",length:""}},[e("br")]),e(p.Z,{attrs:{align:"center",justify:"center",length:""}},[e(o.Z,{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.statusData},scopedSlots:t._u([{key:"item.d",fn:function({item:a}){return[e("h3",{staticStyle:{color:"#2b7a78"}},[t._v(t._s(a.d))])]}},{key:"item.p",fn:function({item:a}){return[e("h3",{directives:[{name:"show",rawName:"v-show",value:"n"===a.p,expression:"item.p === 'n'"}],staticStyle:{color:"#2b7a78"}},[t._v("❌")]),e("h3",{directives:[{name:"show",rawName:"v-show",value:"n"!==a.p,expression:"item.p !== 'n'"}],staticStyle:{color:"#2b7a78"}},[t._v(" "+t._s(a.p)+" ")])]}},{key:"item.h",fn:function({item:a}){return[e("h3",{directives:[{name:"show",rawName:"v-show",value:"0"===a.h,expression:"item.h === '0'"}],staticStyle:{color:"#2b7a78"}},[t._v("❌")]),e("h3",{directives:[{name:"show",rawName:"v-show",value:"0"!==a.h,expression:"item.h !== '0'"}],staticStyle:{color:"#2b7a78"}},[t._v("✔️")])]}},{key:"item.c",fn:function({item:a}){return[e("h3",{directives:[{name:"show",rawName:"v-show",value:"n"===a.c,expression:"item.c === 'n'"}],staticStyle:{color:"#2b7a78"}},[t._v("❌")]),e("h3",{directives:[{name:"show",rawName:"v-show",value:"n"!==a.c,expression:"item.c !== 'n'"}],staticStyle:{color:"#2b7a78"}},[t._v("✔️")])]}},{key:"item.vi",fn:function({item:a}){return[e("h3",{directives:[{name:"show",rawName:"v-show",value:"n"===a.vi,expression:"item.vi === 'n'"}],staticStyle:{color:"#2b7a78"}},[t._v("❌")]),e("h3",{directives:[{name:"show",rawName:"v-show",value:"n"!==a.vi,expression:"item.vi !== 'n'"}],staticStyle:{color:"#2b7a78"}},[t._v("✔️")])]}},{key:"item.de",fn:function({item:a}){return[e(d.Z,{attrs:{"offset-y":""},scopedSlots:t._u([{key:"activator",fn:function({on:a,attrs:i}){return[e(s.Z,t._g(t._b({staticClass:"mr-4",attrs:{outlined:"",color:"#B5563E"}},"v-btn",i,!1),a),[t._v(" 確認刪除這個預約？ ")])]}}],null,!0)},[e(u.Z,[e(c.Z,{on:{click:function(e){return t.recordDelete(a)}}},[e(h.V9,[t._v(" 按下去就刪除了 ")])],1)],1)],1)]}}])})],1),e(p.Z,{attrs:{align:"center",justify:"center",length:""}},[e("br")])],1)],1)],1),e(v.Z,{directives:[{name:"show",rawName:"v-show",value:t.initOverlay,expression:"initOverlay"}]},[e(m.Z,{attrs:{indeterminate:"",size:"64"}})],1)],1)},w=[],y=(a(7658),a(8630)),_=a(1821);const b=a(9669);var Z=a(1181),k={name:"Home",data(){return{initOverlay:!0,window_height:100,window_width:100,overlay:!1,isAdmin:!1,isTrueAdmin:!1,downloadHref:"",headers:[{text:"日期",value:"d"},{text:"學號",value:"s"},{text:"棟別",value:"b"},{text:"停車券",value:"p"},{text:"是否健康",value:"h"},{text:"報到",value:"c"},{text:"訪客是否在宿舍",value:"vi"},{text:"訪客開始時間",value:"vs"},{text:"刪除",value:"de"}],statusData:[],tmpStatusData:[],searchStuid:""}},components:{About:y.Z,Announcement:_.Z},methods:{verify_admin(){let t=this;t.initOverlay=!0,b({method:"post",url:Z.apiurl+"/admin/verify",headers:{Authorization:t.$cookie.get("token")}}).then((function(e){t.initOverlay=!1,console.log(e.data),t.initOverlay=!1,200===e.data.code?(console.log("You can access!"),console.log(e.data),"admin"===e.data.message.rule&&(t.isTrueAdmin=!0),t.isAdmin=!0):console.log(e.data),403===e.data.code&&(alert("You bad bad :("),t.$router.push("/logout"))})).catch((function(e){403===e.response.status?t.$router.push("/logout"):alert(e)}))},updateStatus(){let t=this;t.initOverlay=!0,b({method:"post",url:Z.apiurl+"/admin/reserve_status",headers:{Authorization:t.$cookie.get("token")}}).then((function(e){t.initOverlay=!1,console.log(e.data),t.initOverlay=!1,200===e.data.code?(console.log("You can access!"),console.log(e.data),t.statusData=e.data.message,t.tmpStatusData=e.data.message):console.log(e.data),403===e.data.code&&(alert("You bad bad :("),t.$router.push("/logout"))})).catch((function(e){403===e.response.status?t.$router.push("/logout"):alert(e)}))},recordDelete(t){let e=this;e.initOverlay=!0,b({method:"post",url:Z.apiurl+"/admin/reserve_delete",headers:{Authorization:e.$cookie.get("token")},data:{id:t.s}}).then((function(t){e.initOverlay=!1,console.log(t.data),e.initOverlay=!1,200===t.data.code?(console.log("You can access!"),console.log(t.data),e.updateStatus()):console.log(t.data),403===t.data.code&&(alert("You bad bad :("),e.$router.push("/logout"))})).catch((function(t){403===t.response.status?e.$router.push("/logout"):alert(t)}))},search(){if(console.log("Search"),this.statusData=[],""!==this.searchStuid){for(let t=0;t<this.tmpStatusData.length;t++)if(this.tmpStatusData[t].s===this.searchStuid)return console.log(this.tmpStatusData[t]),this.statusData.push(this.tmpStatusData[t]),void console.log(this.statusData)}else this.statusData=this.tmpStatusData},search_clean(){console.log("Clean"),this.searchStuid="",this.statusData=this.tmpStatusData},csvDownloadUrlMaker(){let t=Math.floor(1e6*Math.random());this.downloadHref=Z.apiurl+"/admin/access/csv/"+t+"/"+this.$cookie.get("token")}},mounted:function(){this.$cookie.get("token")?(this.loginStatus=!0,this.verify_admin(),this.csvDownloadUrlMaker()):this.$router.push("/login"),this.window_height=window.innerHeight,this.window_width=window.innerWidth}},S=k,x=a(1001),D=(0,x.Z)(S,g,w,!1,null,"f10b4df8",null),$=D.exports},6904:function(t,e,a){a(7658);var s=a(4987),i=a(4609),r=a(380);e["Z"]=(0,s.Z)(i.Z,(0,r.J)("form")).extend({name:"v-form",provide(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:()=>({inputs:[],watchers:[],errorBag:{}}),watch:{errorBag:{handler(t){const e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput(t){const e=t=>t.$watch("hasError",(e=>{this.$set(this.errorBag,t._uid,e)}),{immediate:!0}),a={_uid:t._uid,valid:()=>{},shouldValidate:()=>{}};return this.lazyValidation?a.shouldValidate=t.$watch("shouldValidate",(s=>{s&&(this.errorBag.hasOwnProperty(t._uid)||(a.valid=e(t)))})):a.valid=e(t),a},validate(){return 0===this.inputs.filter((t=>!t.validate(!0))).length},reset(){this.inputs.forEach((t=>t.reset())),this.resetErrorBag()},resetErrorBag(){this.lazyValidation&&setTimeout((()=>{this.errorBag={}}),0)},resetValidation(){this.inputs.forEach((t=>t.resetValidation())),this.resetErrorBag()},register(t){this.inputs.push(t),this.watchers.push(this.watchInput(t))},unregister(t){const e=this.inputs.find((e=>e._uid===t._uid));if(!e)return;const a=this.watchers.find((t=>t._uid===e._uid));a&&(a.valid(),a.shouldValidate()),this.watchers=this.watchers.filter((t=>t._uid!==e._uid)),this.inputs=this.inputs.filter((t=>t._uid!==e._uid)),this.$delete(this.errorBag,e._uid)}},render(t){return t("form",{staticClass:"v-form",attrs:{novalidate:!0,...this.attrs$},on:{submit:t=>this.$emit("submit",t)}},this.$slots.default)}})}}]);
//# sourceMappingURL=581.3f912a3e.js.map