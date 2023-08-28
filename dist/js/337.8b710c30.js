"use strict";(self["webpackChunkntpu_dorm_check_in"]=self["webpackChunkntpu_dorm_check_in"]||[]).push([[337],{6337:function(e,t,n){n.r(t),n.d(t,{default:function(){return w}});var s=n(7179),r=n(3058),a=n(4437),o=n(6035),i=n(9359),l=n(5057),u=n(8236),c=n(6275),d=n(5294),v=n(5251),m=function(){var e=this,t=e._self._c;return t(r.Z,{attrs:{elevation:"0"}},[t(o.Z,{attrs:{fluid:""}},[t(d.Z,[t(a.Z,{attrs:{cols:"12"}},[t(d.Z,{attrs:{align:"center",justify:"center",length:""}},[t("br")]),t(d.Z,{directives:[{name:"show",rawName:"v-show",value:!e.loginStatus,expression:"!loginStatus"}],attrs:{align:"center",justify:"center",length:""}},[t("about")],1)],1)],1)],1),t(o.Z,{directives:[{name:"show",rawName:"v-show",value:e.isTrueAdmin,expression:"isTrueAdmin"}],attrs:{fluid:""}},[t("Announcement"),t(d.Z,{attrs:{align:"center",justify:"center",length:""}},[t("br")]),t(d.Z,{attrs:{align:"center",justify:"center",length:""}},[[t(i.Z,{staticClass:"elevation-1",attrs:{headers:e.headers,items:e.serverEvents,"items-per-page":50,"hide-default-footer":""},scopedSlots:e._u([{key:"item.name",fn:function({item:n}){return[t(v.Z,{attrs:{label:"名稱",required:""},model:{value:n.name,callback:function(t){e.$set(n,"name",t)},expression:"item.name"}})]}},{key:"item.sun",fn:function({item:n}){return[t(v.Z,{attrs:{label:"上限人數",type:"number",counter:"4",required:""},model:{value:n.sun,callback:function(t){e.$set(n,"sun",t)},expression:"item.sun"}})]}},{key:"item.moon",fn:function({item:n}){return[t(v.Z,{attrs:{label:"上限人數",type:"number",counter:"4",required:""},model:{value:n.moon,callback:function(t){e.$set(n,"moon",t)},expression:"item.moon"}})]}},{key:"item.star",fn:function({item:n}){return[t(v.Z,{attrs:{label:"上限人數",type:"number",counter:"4",required:""},model:{value:n.star,callback:function(t){e.$set(n,"star",t)},expression:"item.star"}})]}},{key:"item.morn",fn:function({item:n}){return[t(v.Z,{attrs:{label:"上限人數",type:"number",counter:"4",required:""},model:{value:n.morn,callback:function(t){e.$set(n,"morn",t)},expression:"item.morn"}})]}},{key:"item.del",fn:function({item:n}){return[t(s.Z,{staticClass:"mr-4",attrs:{icon:""},on:{click:function(t){return e.delete_event(n.id)}}},[t(l.Z,[e._v("mdi-delete")])],1)]}}])})]],2),t(d.Z,{attrs:{align:"center",justify:"center",length:""}},[t("br")]),t(d.Z,{attrs:{align:"center",justify:"center",length:""}},[t(s.Z,{staticClass:"mr-4",attrs:{color:"#",outlined:""},on:{click:e.insert_events}},[e._v("新增項目")]),t(s.Z,{staticClass:"mr-4",attrs:{color:"#87C1A2"},on:{click:e.update_events}},[e._v("更新")])],1),t(d.Z,{attrs:{align:"center",justify:"center",length:""}},[t("br")])],1),t(u.Z,{directives:[{name:"show",rawName:"v-show",value:e.initOverlay,expression:"initOverlay"}]},[t(c.Z,{attrs:{indeterminate:"",size:"64"}})],1)],1)},h=[],f=(n(7658),n(8630)),g=n(4864);const p=n(9669);var y=n(1181),b={name:"Home",data(){return{initOverlay:!0,window_height:100,window_width:100,overlay:!1,isAdmin:!1,isTrueAdmin:!1,downloadHref:"",serverEvents:[],headers:[{text:"ID",align:"start",sortable:!1,value:"id"},{text:"名稱",sortable:!1,value:"name"},{text:"曉日",sortable:!1,value:"sun"},{text:"皓月",sortable:!1,value:"moon"},{text:"繁星",sortable:!1,value:"star"},{text:"辰曦",sortable:!1,value:"morn"},{text:"刪除",sortable:!1,value:"del"}]}},components:{About:f.Z,Announcement:g.Z},methods:{verify_admin(){let e=this;e.initOverlay=!0,p({method:"post",url:y.apiurl+"/admin/verify",headers:{Authorization:e.$cookie.get("token")}}).then((function(t){e.initOverlay=!1,console.log(t.data),e.initOverlay=!1,200===t.data.code?(console.log("You can access!"),console.log(t.data),"admin"===t.data.message.rule&&(e.isTrueAdmin=!0),e.isAdmin=!0):console.log(t.data),403===t.data.code&&(alert("You bad bad :("),e.$router.push("/logout"))})).catch((function(t){403===t.response.status?e.$router.push("/logout"):alert(t)}))},get_events(){let e=this;e.initOverlay=!0,p({method:"get",url:y.apiurl+"/admin/read_events",headers:{Authorization:e.$cookie.get("token")}}).then((function(t){e.initOverlay=!1,console.log(t.data),e.initOverlay=!1,200===t.data.code?(console.log("You can access!"),console.log(t.data),e.serverEvents=t.data.message,console.log(e.serverEvents)):console.log(t.data),403===t.data.code&&(alert("You bad bad :("),e.$router.push("/logout"))})).catch((function(t){403===t.response.status?e.$router.push("/logout"):alert(t)}))},new_id(){let e="",t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";for(let n=0;n<5;n++)e+=t.charAt(Math.floor(Math.random()*t.length));return this.id_exist(e)?this.new_id():e},id_exist(e){let t=this;for(let n=0;n<t.serverEvents.length;n++)if(t.serverEvents[n].id===e)return!0;return!1},insert_events(){this.serverEvents.push({id:this.new_id(),name:"",sun:"",moon:"",star:"",morn:""})},delete_event(e){console.log(e);let t=this;for(let n=0;n<t.serverEvents.length;n++)if(t.serverEvents[n].id===e)return void t.serverEvents.splice(n,1)},update_events(){let e=this;var t=!0;for(let n=0;n<e.serverEvents.length;n++)if(""===e.serverEvents[n].id||""===e.serverEvents[n].name||""===e.serverEvents[n].sun||""===e.serverEvents[n].moon||""===e.serverEvents[n].star||""===e.serverEvents[n].morn){t=!1;break}t?(e.initOverlay=!0,p({method:"post",url:y.apiurl+"/admin/write_events",headers:{Authorization:e.$cookie.get("token")},data:{events:e.serverEvents}}).then((function(t){e.initOverlay=!1,console.log(t.data),e.initOverlay=!1,200===t.data.code?(console.log("You can access!"),console.log(t.data),alert("更新成功")):console.log(t.data),403===t.data.code&&(alert("You bad bad :("),e.$router.push("/logout"))})).catch((function(t){403===t.response.status?e.$router.push("/logout"):alert(t)}))):alert("請確認所有欄位皆已填寫")}},mounted:function(){this.$cookie.get("token")?(this.loginStatus=!0,this.verify_admin(),this.get_events()):this.$router.push("/login"),this.window_height=window.innerHeight,this.window_width=window.innerWidth}},_=b,Z=n(1001),k=(0,Z.Z)(_,m,h,!1,null,"14177037",null),w=k.exports},8236:function(e,t,n){n.d(t,{Z:function(){return i}});n(7658);var s=n(8914),r=n(3276),a=n(6470),o=n(4987),i=(0,o.Z)(s.Z,r.Z,a.Z).extend({name:"v-overlay",props:{absolute:Boolean,color:{type:String,default:"#212121"},dark:{type:Boolean,default:!0},opacity:{type:[Number,String],default:.46},value:{default:!0},zIndex:{type:[Number,String],default:5}},computed:{__scrim(){const e=this.setBackgroundColor(this.color,{staticClass:"v-overlay__scrim",style:{opacity:this.computedOpacity}});return this.$createElement("div",e)},classes(){return{"v-overlay--absolute":this.absolute,"v-overlay--active":this.isActive,...this.themeClasses}},computedOpacity(){return Number(this.isActive?this.opacity:0)},styles(){return{zIndex:this.zIndex}}},methods:{genContent(){return this.$createElement("div",{staticClass:"v-overlay__content"},this.$slots.default)}},render(e){const t=[this.__scrim];return this.isActive&&t.push(this.genContent()),e("div",{staticClass:"v-overlay",on:this.$listeners,class:this.classes,style:this.styles},t)}})}}]);
//# sourceMappingURL=337.8b710c30.js.map