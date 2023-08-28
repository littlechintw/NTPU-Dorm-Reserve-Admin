"use strict";(self["webpackChunkntpu_dorm_check_in"]=self["webpackChunkntpu_dorm_check_in"]||[]).push([[63],{8630:function(t,e,n){n.d(e,{Z:function(){return h}});var r=n(3058),i=n(4437),a=n(6035),s=n(5294),o=function(){var t=this,e=t._self._c;return e(r.Z,{attrs:{elevation:"0"}},[e(a.Z,{attrs:{fluid:""}},[e(s.Z,[e(i.Z,{attrs:{cols:"12"}},[e(s.Z,{attrs:{align:"center",justify:"center",length:""}},[e("br")]),e(s.Z,{attrs:{align:"center",justify:"center",length:""}},[e("h1",{staticStyle:{zoom:"1.3"}},[t._v("北大宿舍預約系統 - 後台")])]),e(s.Z,{attrs:{align:"center",justify:"center",length:""}},[e("br")]),e(s.Z,{attrs:{align:"center",justify:"center",length:""}},[e("h2",[t._v("就後台，沒什麼好看的")])]),e(s.Z,{attrs:{align:"center",justify:"center",length:""}},[e("br")])],1)],1)],1)],1)},l=[],c=n(1001),u={},d=(0,c.Z)(u,o,l,!1,null,null,null),h=d.exports},4864:function(t,e,n){n.d(e,{Z:function(){return u}});var r=n(6035),i=function(){var t=this,e=t._self._c;return e(r.Z,{attrs:{fluid:""}},[e("a",{attrs:{href:"/admin"}},[t._v("報到頁面")]),e("br"),e("a",{attrs:{href:"/reserve_list"}},[t._v("預約總表")]),e("br"),e("a",{attrs:{href:"/edit_user"}},[t._v("新增 / 編輯 / 刪除使用者")]),e("br"),e("a",{attrs:{href:"/events"}},[t._v("編輯報到列表")]),e("br"),e("a",{attrs:{href:"/adminmember"}},[t._v("管理者帳號")]),e("br"),e("a",{attrs:{href:"/status"}},[t._v("現在預約 / 報到狀態")]),e("br"),e("a",{attrs:{href:"/config"}},[t._v("系統開放時間設定")]),e("br"),e("a",{attrs:{href:"/studentsExcelUpload"}},[t._v("宿生資料 Excel 上傳")]),e("br")])},a=[],s={data(){return{window_height:100,window_width:100}},mounted:function(){this.window_height=window.innerHeight,this.window_width=window.innerWidth}},o=s,l=n(1001),c=(0,l.Z)(o,i,a,!1,null,null,null),u=c.exports},7063:function(t,e,n){n.r(e),n.d(e,{default:function(){return Z}});var r=n(7179),i=n(3058),a=n(4437),s=n(6035),o=n(8236),l=n(6275),c=n(5294),u=n(5251),d=function(){var t=this,e=t._self._c;return e(i.Z,{attrs:{elevation:"0"}},[e(s.Z,{attrs:{fluid:""}},[e(c.Z,[e(a.Z,{attrs:{cols:"12"}},[e(c.Z,{attrs:{align:"center",justify:"center",length:""}},[e("br")]),e(c.Z,{directives:[{name:"show",rawName:"v-show",value:!t.loginStatus,expression:"!loginStatus"}],attrs:{align:"center",justify:"center",length:""}},[e("about")],1)],1)],1)],1),e(s.Z,{directives:[{name:"show",rawName:"v-show",value:t.isTrueAdmin,expression:"isTrueAdmin"}],attrs:{fluid:""}},[e("Announcement"),e(c.Z,{attrs:{align:"center",justify:"center",length:""}},[e("br")]),e("br"),e("p",[t._v("RESERVE_START 與 RESERVE_END 為預約系統開啟與關閉時間，格式應為 2022-08-26 13:00:00")]),e("br"),t._l(t.serverConfig,(function(n){return e(c.Z,{key:n,attrs:{align:"center",justify:"center",length:""}},[e("div",{staticStyle:{width:"300px"}},[e(u.Z,{attrs:{label:n.title,required:""},model:{value:n.data,callback:function(e){t.$set(n,"data",e)},expression:"configData.data"}})],1)])})),e(c.Z,{attrs:{align:"center",justify:"center",length:""}},[e(r.Z,{staticClass:"mr-4",attrs:{color:"#87C1A2"},on:{click:t.update_config}},[t._v("更新")])],1),e(c.Z,{attrs:{align:"center",justify:"center",length:""}},[e("br")])],2),e(o.Z,{directives:[{name:"show",rawName:"v-show",value:t.initOverlay,expression:"initOverlay"}]},[e(l.Z,{attrs:{indeterminate:"",size:"64"}})],1)],1)},h=[],g=(n(7658),n(8630)),v=n(4864);const f=n(9669);var m=n(1181),_={name:"Home",data(){return{initOverlay:!0,window_height:100,window_width:100,overlay:!1,isAdmin:!1,isTrueAdmin:!1,downloadHref:"",serverConfig:[]}},components:{About:g.Z,Announcement:v.Z},methods:{verify_admin(){let t=this;t.initOverlay=!0,f({method:"post",url:m.apiurl+"/admin/verify",headers:{Authorization:t.$cookie.get("token")}}).then((function(e){t.initOverlay=!1,console.log(e.data),t.initOverlay=!1,200===e.data.code?(console.log("You can access!"),console.log(e.data),"admin"===e.data.message.rule&&(t.isTrueAdmin=!0),t.isAdmin=!0):console.log(e.data),403===e.data.code&&(alert("You bad bad :("),t.$router.push("/logout"))})).catch((function(e){403===e.response.status?t.$router.push("/logout"):alert(e)}))},get_config(){let t=this;t.initOverlay=!0,f({method:"get",url:m.apiurl+"/admin/read_config",headers:{Authorization:t.$cookie.get("token")}}).then((function(e){t.initOverlay=!1,console.log(e.data),t.initOverlay=!1,200===e.data.code?(console.log("You can access!"),console.log(e.data),t.serverConfig=e.data.message,console.log(t.serverConfig)):console.log(e.data),403===e.data.code&&(alert("You bad bad :("),t.$router.push("/logout"))})).catch((function(e){403===e.response.status?t.$router.push("/logout"):alert(e)}))},update_config(){let t=this;t.initOverlay=!0,f({method:"post",url:m.apiurl+"/admin/write_config",headers:{Authorization:t.$cookie.get("token")},data:{config:t.serverConfig}}).then((function(e){t.initOverlay=!1,console.log(e.data),t.initOverlay=!1,200===e.data.code?(console.log("You can access!"),console.log(e.data),alert("更新成功")):console.log(e.data),403===e.data.code&&(alert("You bad bad :("),t.$router.push("/logout"))})).catch((function(e){403===e.response.status?t.$router.push("/logout"):alert(e)}))}},mounted:function(){this.$cookie.get("token")?(this.loginStatus=!0,this.verify_admin(),this.get_config()):this.$router.push("/login"),this.window_height=window.innerHeight,this.window_width=window.innerWidth}},y=_,p=n(1001),w=(0,p.Z)(y,d,h,!1,null,"016e5cea",null),Z=w.exports},8236:function(t,e,n){n.d(e,{Z:function(){return o}});n(7658);var r=n(8914),i=n(3276),a=n(6470),s=n(4987),o=(0,s.Z)(r.Z,i.Z,a.Z).extend({name:"v-overlay",props:{absolute:Boolean,color:{type:String,default:"#212121"},dark:{type:Boolean,default:!0},opacity:{type:[Number,String],default:.46},value:{default:!0},zIndex:{type:[Number,String],default:5}},computed:{__scrim(){const t=this.setBackgroundColor(this.color,{staticClass:"v-overlay__scrim",style:{opacity:this.computedOpacity}});return this.$createElement("div",t)},classes(){return{"v-overlay--absolute":this.absolute,"v-overlay--active":this.isActive,...this.themeClasses}},computedOpacity(){return Number(this.isActive?this.opacity:0)},styles(){return{zIndex:this.zIndex}}},methods:{genContent(){return this.$createElement("div",{staticClass:"v-overlay__content"},this.$slots.default)}},render(t){const e=[this.__scrim];return this.isActive&&e.push(this.genContent()),t("div",{staticClass:"v-overlay",on:this.$listeners,class:this.classes,style:this.styles},e)}})}}]);
//# sourceMappingURL=63.0c692396.js.map