"use strict";(self["webpackChunkntpu_dorm_check_in"]=self["webpackChunkntpu_dorm_check_in"]||[]).push([[747],{1747:function(e,t,s){s.r(t),s.d(t,{default:function(){return G}});var i=s(7179),r=s(3058),a=s(4944),o=s(4437),n=s(6035),l=s(6904),u=s(5057),c=s(8236),d=s(6275),h=s(4654),m=s(1012),p=s(3316),v=s(4609),g=s(8914),f=s(4791),y=s(1734),b=s(3276),w=s(911),Z=s(1050),_=s(4987),C=s(2653);const E=(0,_.Z)(v.Z,g.Z,y.Z,(0,f.d)("radioGroup"),b.Z);var k=E.extend().extend({name:"v-radio",inheritAttrs:!1,props:{disabled:Boolean,id:String,label:String,name:String,offIcon:{type:String,default:"$radioOff"},onIcon:{type:String,default:"$radioOn"},readonly:Boolean,value:{default:null}},data:()=>({isFocused:!1}),computed:{classes(){return{"v-radio--is-disabled":this.isDisabled,"v-radio--is-focused":this.isFocused,...this.themeClasses,...this.groupClasses}},computedColor(){if(!this.isDisabled)return w.Z.options.computed.computedColor.call(this)},computedIcon(){return this.isActive?this.onIcon:this.offIcon},computedId(){return p.Z.options.computed.computedId.call(this)},hasLabel:p.Z.options.computed.hasLabel,hasState(){return(this.radioGroup||{}).hasState},isDisabled(){return this.disabled||!!this.radioGroup&&this.radioGroup.isDisabled},isReadonly(){return this.readonly||!!this.radioGroup&&this.radioGroup.isReadonly},computedName(){return this.name||!this.radioGroup?this.name:this.radioGroup.name||`radio-${this.radioGroup._uid}`},rippleState(){return w.Z.options.computed.rippleState.call(this)},validationState(){return(this.radioGroup||{}).validationState||this.computedColor}},methods:{genInput(e){return w.Z.options.methods.genInput.call(this,"radio",e)},genLabel(){return this.hasLabel?this.$createElement(h.Z,{on:{click:w.X},attrs:{for:this.computedId},props:{color:this.validationState,focused:this.hasState}},(0,Z.z9)(this,"label")||this.label):null},genRadio(){const{title:e,...t}=this.attrs$;return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.$createElement(m.Z,this.setTextColor(this.validationState,{props:{dense:this.radioGroup&&this.radioGroup.dense}}),this.computedIcon),this.genInput({name:this.computedName,value:this.value,...t}),this.genRipple(this.setTextColor(this.rippleState))])},onFocus(e){this.isFocused=!0,this.$emit("focus",e)},onBlur(e){this.isFocused=!1,this.$emit("blur",e)},onChange(){this.isDisabled||this.isReadonly||this.isActive||this.toggle()},onKeydown:()=>{}},render(e){const t={staticClass:"v-radio",class:this.classes,on:(0,C.bp)({click:this.onChange},this.listeners$),attrs:{title:this.attrs$.title}};return e("div",t,[this.genRadio(),this.genLabel()])}}),S=(s(7393),s(2021));const I=(0,_.Z)(S.y,p.Z);var x=I.extend({name:"v-radio-group",provide(){return{radioGroup:this}},props:{column:{type:Boolean,default:!0},height:{type:[Number,String],default:"auto"},name:String,row:Boolean,value:null},computed:{classes(){return{...p.Z.options.computed.classes.call(this),"v-input--selection-controls v-input--radio-group":!0,"v-input--radio-group--column":this.column&&!this.row,"v-input--radio-group--row":this.row}}},methods:{genDefaultSlot(){return this.$createElement("div",{staticClass:"v-input--radio-group__input",attrs:{id:this.id,role:"radiogroup","aria-labelledby":this.computedId}},p.Z.options.methods.genDefaultSlot.call(this))},genInputSlot(){const e=p.Z.options.methods.genInputSlot.call(this);return delete e.data.on.click,e},genLabel(){const e=p.Z.options.methods.genLabel.call(this);return e?(e.data.attrs.id=this.computedId,delete e.data.attrs.for,e.tag="legend",e):null},onClick:S.y.options.methods.onClick},render(e){const t=p.Z.options.render.call(this,e);return this._b(t.data,"div",this.attrs$),t}}),$=s(5294),A=s(5251),F=function(){var e=this,t=e._self._c;return t(r.Z,{attrs:{elevation:"0"}},[t(n.Z,{attrs:{fluid:""}},[t($.Z,[t(o.Z,{attrs:{cols:"12"}},[t($.Z,{attrs:{align:"center",justify:"center",length:""}},[t("br")]),t($.Z,{directives:[{name:"show",rawName:"v-show",value:!e.loginStatus,expression:"!loginStatus"}],attrs:{align:"center",justify:"center",length:""}},[t("about")],1)],1)],1)],1),t(n.Z,{directives:[{name:"show",rawName:"v-show",value:e.isTrueAdmin,expression:"isTrueAdmin"}],attrs:{fluid:""}},[t("Announcement")],1),t(n.Z,{directives:[{name:"show",rawName:"v-show",value:e.isAdmin,expression:"isAdmin"}],attrs:{fluid:""}},[t($.Z,[t(o.Z,{attrs:{cols:"12"}},[t($.Z,{attrs:{align:"center",justify:"center",length:""}},[t("h3",[e._v("新增 / 編輯 / 刪除前先輸入學號搜尋確認狀態")])]),t($.Z,{attrs:{align:"center",justify:"center",length:""}},[t("br")]),t($.Z,{attrs:{align:"center",justify:"center",length:""}},[t(l.Z,{ref:"form",attrs:{"lazy-validation":""},on:{submit:function(t){return t.preventDefault(),e.findUser.apply(null,arguments)}}},[t(A.Z,{attrs:{label:"帳號 / Account",required:"",type:"number",maxlength:"9",counter:""},model:{value:e.searchId,callback:function(t){e.searchId=t},expression:"searchId"}}),t(i.Z,{staticClass:"mr-4",attrs:{disabled:9!==e.searchId.length,color:"#87C1A2"},on:{click:e.findUser}},[e._v("搜尋 / Search ")])],1)],1),t($.Z,{directives:[{name:"show",rawName:"v-show",value:null!==e.searchResponse.alert&&""!==e.searchResponse.alert,expression:"searchResponse.alert !== null && searchResponse.alert !== ''"}],attrs:{align:"center",justify:"center",length:""}},[t("br")]),t($.Z,{attrs:{align:"center",justify:"center",length:""}},[t("h3",{staticStyle:{"background-color":"red",color:"white",width:"100%","text-align":"center"}},[e._v(e._s(e.searchResponse.alert))])]),t($.Z,{attrs:{align:"center",justify:"center",length:""}},[t("br")]),t("div",{directives:[{name:"show",rawName:"v-show",value:e.firstSearch,expression:"firstSearch"}]},[t($.Z,{directives:[{name:"show",rawName:"v-show",value:e.searchUserExist,expression:"searchUserExist"}],attrs:{align:"center",justify:"center",length:""}},[t(a.Z,{staticClass:"ma-2",attrs:{label:"","text-color":"white",color:e.chipColor(e.searchResponse.reserved)}},[t(u.Z,{attrs:{left:""}},[e._v(" mdi-calendar-check ")]),e._v(" 預約狀態 "+e._s(e.searchResponse.reserved)+" ")],1),t(a.Z,{staticClass:"ma-2",attrs:{label:"","text-color":"white",color:e.chipColor(e.searchResponse.checkIn)}},[t(u.Z,{attrs:{left:""}},[e._v(" mdi-bag-checked ")]),e._v(" 報到狀態 "+e._s(e.searchResponse.checkIn)+" ")],1),t(a.Z,{directives:[{name:"show",rawName:"v-show",value:e.searchResponse.checkIn,expression:"searchResponse.checkIn"}],staticClass:"ma-2",attrs:{label:"","text-color":"white",color:e.chipColor(!e.searchResponse.checkIn_visitor_in)}},[t(u.Z,{attrs:{left:""}},[e._v(" mdi-account-multiple ")]),e._v(" 訪客狀態 "+e._s(e.searchResponse.checkIn_visitor_in)+" ")],1)],1),t($.Z,{attrs:{align:"center",justify:"center",length:""}},[t(l.Z,{ref:"form",attrs:{"lazy-validation":""},on:{submit:function(t){return t.preventDefault(),e.findUser.apply(null,arguments)}}},[t(A.Z,{attrs:{disabled:"",label:"學號",required:"",type:"number",counter:"",maxlength:"9"},model:{value:e.userEditForm.id,callback:function(t){e.$set(e.userEditForm,"id",t)},expression:"userEditForm.id"}}),t(A.Z,{attrs:{label:"姓名",required:""},model:{value:e.userEditForm.name,callback:function(t){e.$set(e.userEditForm,"name",t)},expression:"userEditForm.name"}}),t(x,{attrs:{row:""},model:{value:e.userEditForm.dorm,callback:function(t){e.$set(e.userEditForm,"dorm",t)},expression:"userEditForm.dorm"}},[t(k,{attrs:{label:"曉日 / Sun",value:"sun"}}),t(k,{attrs:{label:"皓月 / Moon",value:"moon"}}),t(k,{attrs:{label:"繁星 / Star",value:"star"}}),t(k,{attrs:{label:"辰曦 / Morn",value:"morn"}})],1),t(A.Z,{attrs:{label:"房床號（e.q. 310-1）",required:""},model:{value:e.userEditForm.room,callback:function(t){e.$set(e.userEditForm,"room",t)},expression:"userEditForm.room"}}),t(i.Z,{directives:[{name:"show",rawName:"v-show",value:!e.searchUserExist,expression:"!searchUserExist"}],staticClass:"mr-4",attrs:{color:"#87C1A2",disabled:""===e.userEditForm.dorm||""===e.userEditForm.room||""===e.userEditForm.name},on:{click:function(t){return e.editUser("a")}}},[e._v("新增 / Add")]),t(i.Z,{directives:[{name:"show",rawName:"v-show",value:e.searchUserExist,expression:"searchUserExist"}],staticClass:"mr-4",attrs:{color:"#87C1A2"},on:{click:function(t){return e.editUser("e")}}},[e._v("更改 / Edit")]),t(i.Z,{directives:[{name:"show",rawName:"v-show",value:e.searchUserExist,expression:"searchUserExist"}],staticClass:"mr-4",attrs:{color:"red"},on:{click:function(t){return e.editUser("d")}}},[e._v("刪除 / Delete")]),t(i.Z,{directives:[{name:"show",rawName:"v-show",value:e.searchResponse.checkIn,expression:"searchResponse.checkIn"}],staticClass:"mr-4",attrs:{color:"orange"},on:{click:function(t){return e.editUser("dc")}}},[e._v("取消報到")])],1)],1)],1),t($.Z,{attrs:{align:"center",justify:"center",length:""}},[t("br")]),t($.Z,{attrs:{align:"center",justify:"center",length:""}},[t("br")])],1)],1)],1),t(c.Z,{directives:[{name:"show",rawName:"v-show",value:e.initOverlay,expression:"initOverlay"}]},[t(d.Z,{attrs:{indeterminate:"",size:"64"}})],1)],1)},V=[],R=(s(7658),s(8630)),U=s(6603);const B=s(9669);var O=s(1181),D={name:"Home",data(){return{initOverlay:!0,window_height:100,window_width:100,overlay:!1,isAdmin:!1,isTrueAdmin:!1,searchId:"",isSearch:!1,searchUserExist:!1,firstSearch:!1,searchResponse:{},userEditForm:{id:"",name:"",dorm:"",room:""}}},components:{About:R.Z,Announcement:U.Z},methods:{verify_admin(){let e=this;e.initOverlay=!0,B({method:"post",url:O.apiurl+"/admin/verify",headers:{Authorization:e.$cookie.get("token")}}).then((function(t){e.initOverlay=!1,console.log(t.data),e.initOverlay=!1,200===t.data.code?(console.log("You can access!"),console.log(t.data),"admin"===t.data.message.rule&&(e.isTrueAdmin=!0),e.isAdmin=!0):console.log(t.data),403===t.data.code&&(alert("You bad bad :("),e.$router.push("/logout"))})).catch((function(t){403===t.response.status?e.$router.push("/logout"):alert(t)}))},getUserDataInit(e){this.userEditForm={id:"",name:"",dorm:"",room:""},this.userEditForm.id=e.id,this.userEditForm.name=e.name,this.userEditForm.dorm=e.dormO,this.userEditForm.room=e.room},editUser(e){let t=this;if(t.isSearch)return console.log("Already searching"),"";t.initOverlay=!0,t.isSearch=!0,t.searchResponse={status:"Searching..."},t.searchUserExist=!1;let s=t.searchId;B({method:"post",url:O.apiurl+"/admin/edit_user",headers:{Authorization:t.$cookie.get("token")},data:{id:t.userEditForm.id,name:t.userEditForm.name,dorm:t.userEditForm.dorm,room:t.userEditForm.room,action:e}}).then((function(e){t.initOverlay=!1,console.log(e.data),t.initOverlay=!1,200===e.data.code?(t.searchResponse=e.data.message,t.getUserDataInit(e.data.message),t.searchUserExist=!0,t.searchId="",t.isSearch=!1):console.log(e.data),403===e.data.code&&(t.getUserDataInit({id:s,name:"",dormO:"",room:""}),t.searchId="",t.isSearch=!1)})).catch((function(e){403===e.response.status?t.$router.push("/logout"):alert(e)}))},findUser(){let e=this;if(e.isSearch)return console.log("Already searching"),"";e.initOverlay=!0,e.isSearch=!0,e.firstSearch=!0,e.searchResponse={status:"Searching..."},e.searchUserExist=!1;let t=e.searchId;B({method:"post",url:O.apiurl+"/admin/get_user_data",headers:{Authorization:e.$cookie.get("token")},data:{id:e.searchId}}).then((function(s){e.initOverlay=!1,console.log(s.data),e.initOverlay=!1,200===s.data.code?(e.searchResponse=s.data.message,e.getUserDataInit(s.data.message),e.searchUserExist=!0,e.searchId="",e.isSearch=!1):console.log(s.data),403===s.data.code&&(e.getUserDataInit({id:t,name:"",dormO:"",room:""}),e.searchId="",e.isSearch=!1)})).catch((function(t){403===t.response.status?e.$router.push("/logout"):alert(t)}))},chipColor(e){return e?"blue":"pink"}},mounted:function(){this.$cookie.get("token")?(this.loginStatus=!0,this.verify_admin()):this.$router.push("/login"),this.window_height=window.innerHeight,this.window_width=window.innerWidth}},N=D,j=s(1001),z=(0,j.Z)(N,F,V,!1,null,"369d6bc0",null),G=z.exports},6904:function(e,t,s){s(7658);var i=s(4987),r=s(4609),a=s(380);t["Z"]=(0,i.Z)(r.Z,(0,a.J)("form")).extend({name:"v-form",provide(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:()=>({inputs:[],watchers:[],errorBag:{}}),watch:{errorBag:{handler(e){const t=Object.values(e).includes(!0);this.$emit("input",!t)},deep:!0,immediate:!0}},methods:{watchInput(e){const t=e=>e.$watch("hasError",(t=>{this.$set(this.errorBag,e._uid,t)}),{immediate:!0}),s={_uid:e._uid,valid:()=>{},shouldValidate:()=>{}};return this.lazyValidation?s.shouldValidate=e.$watch("shouldValidate",(i=>{i&&(this.errorBag.hasOwnProperty(e._uid)||(s.valid=t(e)))})):s.valid=t(e),s},validate(){return 0===this.inputs.filter((e=>!e.validate(!0))).length},reset(){this.inputs.forEach((e=>e.reset())),this.resetErrorBag()},resetErrorBag(){this.lazyValidation&&setTimeout((()=>{this.errorBag={}}),0)},resetValidation(){this.inputs.forEach((e=>e.resetValidation())),this.resetErrorBag()},register(e){this.inputs.push(e),this.watchers.push(this.watchInput(e))},unregister(e){const t=this.inputs.find((t=>t._uid===e._uid));if(!t)return;const s=this.watchers.find((e=>e._uid===t._uid));s&&(s.valid(),s.shouldValidate()),this.watchers=this.watchers.filter((e=>e._uid!==t._uid)),this.inputs=this.inputs.filter((e=>e._uid!==t._uid)),this.$delete(this.errorBag,t._uid)}},render(e){return e("form",{staticClass:"v-form",attrs:{novalidate:!0,...this.attrs$},on:{submit:e=>this.$emit("submit",e)}},this.$slots.default)}})},8236:function(e,t,s){s.d(t,{Z:function(){return n}});s(7658);var i=s(8914),r=s(3276),a=s(6470),o=s(4987),n=(0,o.Z)(i.Z,r.Z,a.Z).extend({name:"v-overlay",props:{absolute:Boolean,color:{type:String,default:"#212121"},dark:{type:Boolean,default:!0},opacity:{type:[Number,String],default:.46},value:{default:!0},zIndex:{type:[Number,String],default:5}},computed:{__scrim(){const e=this.setBackgroundColor(this.color,{staticClass:"v-overlay__scrim",style:{opacity:this.computedOpacity}});return this.$createElement("div",e)},classes(){return{"v-overlay--absolute":this.absolute,"v-overlay--active":this.isActive,...this.themeClasses}},computedOpacity(){return Number(this.isActive?this.opacity:0)},styles(){return{zIndex:this.zIndex}}},methods:{genContent(){return this.$createElement("div",{staticClass:"v-overlay__content"},this.$slots.default)}},render(e){const t=[this.__scrim];return this.isActive&&t.push(this.genContent()),e("div",{staticClass:"v-overlay",on:this.$listeners,class:this.classes,style:this.styles},t)}})},1734:function(e,t,s){s(7658);var i=s(3176),r=s(144);t["Z"]=r.ZP.extend({name:"rippleable",directives:{ripple:i.Z},props:{ripple:{type:[Boolean,Object],default:!0}},methods:{genRipple(e={}){return this.ripple?(e.staticClass="v-input--selection-controls__ripple",e.directives=e.directives||[],e.directives.push({name:"ripple",value:{center:!0}}),this.$createElement("div",e)):null}}})},911:function(e,t,s){s.d(t,{X:function(){return n}});s(7658);var i=s(3316),r=s(1734),a=s(564),o=s(4987);function n(e){e.preventDefault()}t["Z"]=(0,o.Z)(i.Z,r.Z,a.Z).extend({name:"selectable",model:{prop:"inputValue",event:"change"},props:{id:String,inputValue:null,falseValue:null,trueValue:null,multiple:{type:Boolean,default:null},label:String},data(){return{hasColor:this.inputValue,lazyValue:this.inputValue}},computed:{computedColor(){if(this.isActive)return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"},isMultiple(){return!0===this.multiple||null===this.multiple&&Array.isArray(this.internalValue)},isActive(){const e=this.value,t=this.internalValue;return this.isMultiple?!!Array.isArray(t)&&t.some((t=>this.valueComparator(t,e))):void 0===this.trueValue||void 0===this.falseValue?e?this.valueComparator(e,t):Boolean(t):this.valueComparator(t,this.trueValue)},isDirty(){return this.isActive},rippleState(){return this.isDisabled||this.validationState?this.validationState:void 0}},watch:{inputValue(e){this.lazyValue=e,this.hasColor=e}},methods:{genLabel(){const e=i.Z.options.methods.genLabel.call(this);return e?(e.data.on={click:n},e):e},genInput(e,t){return this.$createElement("input",{attrs:Object.assign({"aria-checked":this.isActive.toString(),disabled:this.isDisabled,id:this.computedId,role:e,type:e},t),domProps:{value:this.value,checked:this.isActive},on:{blur:this.onBlur,change:this.onChange,focus:this.onFocus,keydown:this.onKeydown,click:n},ref:"input"})},onClick(e){this.onChange(),this.$emit("click",e)},onChange(){if(!this.isInteractive)return;const e=this.value;let t=this.internalValue;if(this.isMultiple){Array.isArray(t)||(t=[]);const s=t.length;t=t.filter((t=>!this.valueComparator(t,e))),t.length===s&&t.push(e)}else t=void 0!==this.trueValue&&void 0!==this.falseValue?this.valueComparator(t,this.trueValue)?this.falseValue:this.trueValue:e?this.valueComparator(t,e)?null:e:!t;this.validate(!0,t),this.internalValue=t,this.hasColor=t},onFocus(e){this.isFocused=!0,this.$emit("focus",e)},onBlur(e){this.isFocused=!1,this.$emit("blur",e)},onKeydown(e){}}})},7393:function(){}}]);
//# sourceMappingURL=747.c747210c.js.map