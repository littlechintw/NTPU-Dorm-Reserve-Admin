"use strict";(self["webpackChunkntpu_dorm_check_in"]=self["webpackChunkntpu_dorm_check_in"]||[]).push([[49],{6049:function(t,e,i){i.r(e),i.d(e,{default:function(){return y}});var n=i(3058),s=i(4437),a=i(6035),o=i(9359),r=i(8236),u=i(6275),l=i(5294),d=function(){var t=this,e=t._self._c;return e(n.Z,{attrs:{elevation:"0"}},[e(a.Z,{attrs:{fluid:""}},[e(l.Z,[e(s.Z,{attrs:{cols:"12"}},[e(l.Z,{attrs:{align:"center",justify:"center",length:""}},[e("br")]),e(l.Z,{directives:[{name:"show",rawName:"v-show",value:!t.loginStatus,expression:"!loginStatus"}],attrs:{align:"center",justify:"center",length:""}},[e("about")],1)],1)],1)],1),e(a.Z,{directives:[{name:"show",rawName:"v-show",value:t.isTrueAdmin,expression:"isTrueAdmin"}],attrs:{fluid:""}},[e("Announcement"),e(l.Z,{attrs:{align:"center",justify:"center",length:""}},[e("br")]),e(l.Z,{attrs:{align:"center",justify:"center",length:""}},[e("h1",[t._v("宿舍內訪客")])]),e(l.Z,{attrs:{align:"center",justify:"center",length:""}},[e(o.Z,{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.status,"hide-default-footer":"","items-per-page":"100"}})],1),e(l.Z,{attrs:{align:"center",justify:"center",length:""}},[e("br")])],1),t.initOverlay?e(r.Z,[e(u.Z,{attrs:{indeterminate:"",size:"64"}})],1):t._e()],1)},c=[],h=(i(7658),i(8630)),g=i(3950);const v=i(9669);var m=i(1181),f={name:"Home",data(){return{initOverlay:!0,window_height:100,window_width:100,overlay:!1,isAdmin:!1,isTrueAdmin:!1,downloadHref:"",status:[],headers:[{text:"宿舍",value:"dorm"},{text:"姓名",value:"name"},{text:"學號",value:"user"},{text:"訪客身分證",value:"visitor_id"},{text:"訪客電話",value:"visitor_phone"},{text:"訪客開始時間",value:"visitor_start"}]}},components:{About:h.Z,Announcement:g.Z},methods:{verify_admin(){let t=this;t.initOverlay=!0,v({method:"post",url:m.apiurl+"/admin/verify",headers:{Authorization:t.$cookie.get("token")}}).then((function(e){t.initOverlay=!1,console.log(e.data),t.initOverlay=!1,200===e.data.code?(console.log("You can access!"),console.log(e.data),"admin"===e.data.message.rule&&(t.isTrueAdmin=!0),t.isAdmin=!0):console.log(e.data),403===e.data.code&&(alert("You bad bad :("),t.$router.push("/logout"))})).catch((function(e){403===e.response.status?t.$router.push("/logout"):alert(e)}))},get_visitor_status(){console.log("Status Check!");let t=this;t.initOverlay=!0,v({method:"get",url:m.apiurl+"/api/visitor_inside",headers:{Authorization:t.$cookie.get("token")}}).then((function(e){200===e.status?(t.status=e.data.message,t.initOverlay=!1,console.log(t.status)):console.log(e.data),403===e.status&&(alert("You bad bad :("),t.$router.push("/logout"))})).catch((function(e){403===e.response.status?t.$router.push("/logout"):alert(e)}))}},mounted:function(){this.$cookie.get("token")?(this.loginStatus=!0,this.verify_admin(),this.get_visitor_status()):this.$router.push("/login"),this.window_height=window.innerHeight,this.window_width=window.innerWidth}},_=f,p=i(1001),w=(0,p.Z)(_,d,c,!1,null,"20a6170e",null),y=w.exports}}]);
//# sourceMappingURL=49.5d23b8a6.js.map