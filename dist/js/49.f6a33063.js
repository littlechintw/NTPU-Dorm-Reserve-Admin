"use strict";(self["webpackChunkntpu_dorm_check_in"]=self["webpackChunkntpu_dorm_check_in"]||[]).push([[49],{6049:function(t,e,s){s.r(e),s.d(e,{default:function(){return w}});var i=s(3058),n=s(4437),a=s(6035),o=s(9359),r=s(8236),l=s(6275),u=s(5294),c=function(){var t=this,e=t._self._c;return e(i.Z,{attrs:{elevation:"0"}},[e(a.Z,{attrs:{fluid:""}},[e(u.Z,[e(n.Z,{attrs:{cols:"12"}},[e(u.Z,{attrs:{align:"center",justify:"center",length:""}},[e("br")]),e(u.Z,{directives:[{name:"show",rawName:"v-show",value:!t.loginStatus,expression:"!loginStatus"}],attrs:{align:"center",justify:"center",length:""}},[e("about")],1)],1)],1)],1),e(a.Z,{directives:[{name:"show",rawName:"v-show",value:t.isTrueAdmin,expression:"isTrueAdmin"}],attrs:{fluid:""}},[e("Announcement"),e(u.Z,{attrs:{align:"center",justify:"center",length:""}},[e("br")]),e(u.Z,{attrs:{align:"center",justify:"center",length:""}},[e("h1",[t._v("宿舍內訪客")])]),e(u.Z,{attrs:{align:"center",justify:"center",length:""}},[e(o.Z,{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.status,"hide-default-footer":"","items-per-page":"100"}})],1),e(u.Z,{attrs:{align:"center",justify:"center",length:""}},[e("br")])],1),t.initOverlay?e(r.Z,[e(l.Z,{attrs:{indeterminate:"",size:"64"}})],1):t._e()],1)},d=[],h=(s(7658),s(8630)),v=s(4864);const m=s(9669);var g=s(1181),p={name:"Home",data(){return{initOverlay:!0,window_height:100,window_width:100,overlay:!1,isAdmin:!1,isTrueAdmin:!1,downloadHref:"",status:[],headers:[{text:"宿舍",value:"dorm"},{text:"姓名",value:"name"},{text:"學號",value:"user"},{text:"訪客身分證",value:"visitor_id"},{text:"訪客電話",value:"visitor_phone"},{text:"訪客開始時間",value:"visitor_start"}]}},components:{About:h.Z,Announcement:v.Z},methods:{verify_admin(){let t=this;t.initOverlay=!0,m({method:"post",url:g.apiurl+"/admin/verify",headers:{Authorization:t.$cookie.get("token")}}).then((function(e){t.initOverlay=!1,console.log(e.data),t.initOverlay=!1,200===e.data.code?(console.log("You can access!"),console.log(e.data),"admin"===e.data.message.rule&&(t.isTrueAdmin=!0),t.isAdmin=!0):console.log(e.data),403===e.data.code&&(alert("You bad bad :("),t.$router.push("/logout"))})).catch((function(e){403===e.response.status?t.$router.push("/logout"):alert(e)}))},get_visitor_status(){console.log("Status Check!");let t=this;t.initOverlay=!0,m({method:"get",url:g.apiurl+"/api/visitor_inside",headers:{Authorization:t.$cookie.get("token")}}).then((function(e){200===e.status?(t.status=e.data.message,t.initOverlay=!1,console.log(t.status)):console.log(e.data),403===e.status&&(alert("You bad bad :("),t.$router.push("/logout"))})).catch((function(e){403===e.response.status?t.$router.push("/logout"):alert(e)}))}},mounted:function(){this.$cookie.get("token")?(this.loginStatus=!0,this.verify_admin(),this.get_visitor_status()):this.$router.push("/login"),this.window_height=window.innerHeight,this.window_width=window.innerWidth}},y=p,f=s(1001),_=(0,f.Z)(y,c,d,!1,null,"20a6170e",null),w=_.exports},8236:function(t,e,s){s.d(e,{Z:function(){return r}});s(7658);var i=s(8914),n=s(3276),a=s(6470),o=s(4987),r=(0,o.Z)(i.Z,n.Z,a.Z).extend({name:"v-overlay",props:{absolute:Boolean,color:{type:String,default:"#212121"},dark:{type:Boolean,default:!0},opacity:{type:[Number,String],default:.46},value:{default:!0},zIndex:{type:[Number,String],default:5}},computed:{__scrim(){const t=this.setBackgroundColor(this.color,{staticClass:"v-overlay__scrim",style:{opacity:this.computedOpacity}});return this.$createElement("div",t)},classes(){return{"v-overlay--absolute":this.absolute,"v-overlay--active":this.isActive,...this.themeClasses}},computedOpacity(){return Number(this.isActive?this.opacity:0)},styles(){return{zIndex:this.zIndex}}},methods:{genContent(){return this.$createElement("div",{staticClass:"v-overlay__content"},this.$slots.default)}},render(t){const e=[this.__scrim];return this.isActive&&e.push(this.genContent()),t("div",{staticClass:"v-overlay",on:this.$listeners,class:this.classes,style:this.styles},e)}})}}]);
//# sourceMappingURL=49.f6a33063.js.map