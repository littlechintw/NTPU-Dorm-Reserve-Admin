"use strict";(self["webpackChunkntpu_dorm_check_in"]=self["webpackChunkntpu_dorm_check_in"]||[]).push([[986],{7986:function(e,t,s){s.r(t),s.d(t,{default:function(){return M}});var i=s(7179),n=s(3058),a=s(1050);const l=(0,a.Ji)("v-card__actions"),r=(0,a.Ji)("v-card__subtitle"),o=(0,a.Ji)("v-card__text"),h=(0,a.Ji)("v-card__title");n.Z;var d=s(4437),c=(s(7658),s(6883)),u=s(5251),m=s(2653);const p={...c.l,offsetY:!0,offsetOverflow:!0,transition:!1};var g=c.Z.extend({name:"v-autocomplete",props:{autoSelectFirst:{type:Boolean,default:!1},filter:{type:Function,default:(e,t,s)=>s.toLocaleLowerCase().indexOf(t.toLocaleLowerCase())>-1},hideNoData:Boolean,menuProps:{type:c.Z.options.props.menuProps.type,default:()=>p},noFilter:Boolean,searchInput:{type:String}},data(){return{lazySearch:this.searchInput}},computed:{classes(){return{...c.Z.options.computed.classes.call(this),"v-autocomplete":!0,"v-autocomplete--is-selecting-index":this.selectedIndex>-1}},computedItems(){return this.filteredItems},selectedValues(){return this.selectedItems.map((e=>this.getValue(e)))},hasDisplayedItems(){return this.hideSelected?this.filteredItems.some((e=>!this.hasItem(e))):this.filteredItems.length>0},currentRange(){return null==this.selectedItem?0:String(this.getText(this.selectedItem)).length},filteredItems(){return!this.isSearching||this.noFilter||null==this.internalSearch?this.allItems:this.allItems.filter((e=>{const t=(0,a.qF)(e,this.itemText),s=null!=t?String(t):"";return this.filter(e,String(this.internalSearch),s)}))},internalSearch:{get(){return this.lazySearch},set(e){this.lazySearch!==e&&(this.lazySearch=e,this.$emit("update:search-input",e))}},isAnyValueAllowed(){return!1},isDirty(){return this.searchIsDirty||this.selectedItems.length>0},isSearching(){return this.multiple&&this.searchIsDirty||this.searchIsDirty&&this.internalSearch!==this.getText(this.selectedItem)},menuCanShow(){return!!this.isFocused&&(this.hasDisplayedItems||!this.hideNoData)},$_menuProps(){const e=c.Z.options.computed.$_menuProps.call(this);return e.contentClass=`v-autocomplete__content ${e.contentClass||""}`.trim(),{...p,...e}},searchIsDirty(){return null!=this.internalSearch&&""!==this.internalSearch},selectedItem(){return this.multiple?null:this.selectedItems.find((e=>this.valueComparator(this.getValue(e),this.getValue(this.internalValue))))},listData(){const e=c.Z.options.computed.listData.call(this);return e.props={...e.props,items:this.virtualizedItems,noFilter:this.noFilter||!this.isSearching||!this.filteredItems.length,searchInput:this.internalSearch},e}},watch:{filteredItems:"onFilteredItemsChanged",internalValue:"setSearch",isFocused(e){e?(document.addEventListener("copy",this.onCopy),this.$refs.input&&this.$refs.input.select()):(document.removeEventListener("copy",this.onCopy),this.blur(),this.updateSelf())},isMenuActive(e){!e&&this.hasSlot&&(this.lazySearch=null)},items(e,t){t&&t.length||!this.hideNoData||!this.isFocused||this.isMenuActive||!e.length||this.activateMenu()},searchInput(e){this.lazySearch=e},internalSearch:"onInternalSearchChanged",itemText:"updateSelf"},created(){this.setSearch()},destroyed(){document.removeEventListener("copy",this.onCopy)},methods:{onFilteredItemsChanged(e,t){if(e!==t){if(!this.autoSelectFirst){const s=t[this.$refs.menu.listIndex];s?this.setMenuIndex(e.findIndex((e=>e===s))):this.setMenuIndex(-1),this.$emit("update:list-index",this.$refs.menu.listIndex)}this.$nextTick((()=>{this.internalSearch&&(1===e.length||this.autoSelectFirst)&&(this.$refs.menu.getTiles(),this.autoSelectFirst&&e.length&&(this.setMenuIndex(0),this.$emit("update:list-index",this.$refs.menu.listIndex)))}))}},onInternalSearchChanged(){this.updateMenuDimensions()},updateMenuDimensions(){this.isMenuActive&&this.$refs.menu&&this.$refs.menu.updateDimensions()},changeSelectedIndex(e){this.searchIsDirty||(this.multiple&&e===a.Do.left?-1===this.selectedIndex?this.selectedIndex=this.selectedItems.length-1:this.selectedIndex--:this.multiple&&e===a.Do.right?this.selectedIndex>=this.selectedItems.length-1?this.selectedIndex=-1:this.selectedIndex++:e!==a.Do.backspace&&e!==a.Do["delete"]||this.deleteCurrentItem())},deleteCurrentItem(){const e=this.selectedIndex,t=this.selectedItems[e];if(!this.isInteractive||this.getDisabled(t))return;const s=this.selectedItems.length-1;if(-1===this.selectedIndex&&0!==s)return void(this.selectedIndex=s);const i=this.selectedItems.length,n=e!==i-1?e:e-1,a=this.selectedItems[n];a?this.selectItem(t):this.setValue(this.multiple?[]:null),this.selectedIndex=n},clearableCallback(){this.internalSearch=null,c.Z.options.methods.clearableCallback.call(this)},genInput(){const e=u.Z.options.methods.genInput.call(this);return e.data=(0,m.ZP)(e.data,{attrs:{"aria-activedescendant":(0,a.vO)(this.$refs.menu,"activeTile.id"),autocomplete:(0,a.vO)(e.data,"attrs.autocomplete","off")},domProps:{value:this.internalSearch}}),e},genInputSlot(){const e=c.Z.options.methods.genInputSlot.call(this);return e.data.attrs.role="combobox",e},genSelections(){return this.hasSlot||this.multiple?c.Z.options.methods.genSelections.call(this):[]},onClick(e){this.isInteractive&&(this.selectedIndex>-1?this.selectedIndex=-1:this.onFocus(),this.isAppendInner(e.target)||this.activateMenu())},onInput(e){if(this.selectedIndex>-1||!e.target)return;const t=e.target,s=t.value;t.value&&this.activateMenu(),this.multiple||""!==s||this.deleteCurrentItem(),this.internalSearch=s,this.badInput=t.validity&&t.validity.badInput},onKeyDown(e){const t=e.keyCode;!e.ctrlKey&&[a.Do.home,a.Do.end].includes(t)||c.Z.options.methods.onKeyDown.call(this,e),this.changeSelectedIndex(t)},onSpaceDown(e){},onTabDown(e){c.Z.options.methods.onTabDown.call(this,e),this.updateSelf()},onUpDown(e){e.preventDefault(),this.activateMenu()},selectItem(e){c.Z.options.methods.selectItem.call(this,e),this.setSearch()},setSelectedItems(){c.Z.options.methods.setSelectedItems.call(this),this.isFocused||this.setSearch()},setSearch(){this.$nextTick((()=>{this.multiple&&this.internalSearch&&this.isMenuActive||(this.internalSearch=!this.selectedItems.length||this.multiple||this.hasSlot?null:this.getText(this.selectedItem))}))},updateSelf(){(this.searchIsDirty||this.internalValue)&&(this.multiple||this.valueComparator(this.internalSearch,this.getValue(this.internalValue))||this.setSearch())},hasItem(e){return this.selectedValues.indexOf(this.getValue(e))>-1},onCopy(e){var t,s;if(-1===this.selectedIndex)return;const i=this.selectedItems[this.selectedIndex],n=this.getText(i);null===(t=e.clipboardData)||void 0===t||t.setData("text/plain",n),null===(s=e.clipboardData)||void 0===s||s.setData("text/vnd.vuetify.autocomplete.item+plain",n),e.preventDefault()}}}),v=g.extend({name:"v-combobox",props:{delimiters:{type:Array,default:()=>[]},returnObject:{type:Boolean,default:!0}},data:()=>({editingIndex:-1}),computed:{computedCounterValue(){return this.multiple?this.selectedItems.length:(this.internalSearch||"").toString().length},hasSlot(){return c.Z.options.computed.hasSlot.call(this)||this.multiple},isAnyValueAllowed(){return!0},menuCanShow(){return!!this.isFocused&&(this.hasDisplayedItems||!!this.$slots["no-data"]&&!this.hideNoData)},searchIsDirty(){return null!=this.internalSearch}},methods:{onInternalSearchChanged(e){if(e&&this.multiple&&this.delimiters.length){const t=this.delimiters.find((t=>e.endsWith(t)));null!=t&&(this.internalSearch=e.slice(0,e.length-t.length),this.updateTags())}this.updateMenuDimensions()},genInput(){const e=g.options.methods.genInput.call(this);return delete e.data.attrs.name,e.data.on.paste=this.onPaste,e},genChipSelection(e,t){const s=c.Z.options.methods.genChipSelection.call(this,e,t);return this.multiple&&(s.componentOptions.listeners={...s.componentOptions.listeners,dblclick:()=>{this.editingIndex=t,this.internalSearch=this.getText(e),this.selectedIndex=-1}}),s},onChipInput(e){c.Z.options.methods.onChipInput.call(this,e),this.editingIndex=-1},onEnterDown(e){e.preventDefault(),this.getMenuIndex()>-1||this.$nextTick(this.updateSelf)},onKeyDown(e){const t=e.keyCode;!e.ctrlKey&&[a.Do.home,a.Do.end].includes(t)||c.Z.options.methods.onKeyDown.call(this,e),this.multiple&&t===a.Do.left&&0===this.$refs.input.selectionStart?this.updateSelf():t===a.Do.enter&&this.onEnterDown(e),this.changeSelectedIndex(t)},onTabDown(e){if(this.multiple&&this.internalSearch&&-1===this.getMenuIndex())return e.preventDefault(),e.stopPropagation(),this.updateTags();g.options.methods.onTabDown.call(this,e)},selectItem(e){this.editingIndex>-1?this.updateEditing():(g.options.methods.selectItem.call(this,e),this.internalSearch&&this.multiple&&this.getText(e).toLocaleLowerCase().includes(this.internalSearch.toLocaleLowerCase())&&(this.internalSearch=null))},setSelectedItems(){null==this.internalValue||""===this.internalValue?this.selectedItems=[]:this.selectedItems=this.multiple?this.internalValue:[this.internalValue]},setValue(e){c.Z.options.methods.setValue.call(this,void 0===e?this.internalSearch:e)},updateEditing(){const e=this.internalValue.slice(),t=this.selectedItems.findIndex((e=>this.getText(e)===this.internalSearch));if(t>-1){const s="object"===typeof e[t]?Object.assign({},e[t]):e[t];e.splice(t,1),e.push(s)}else e[this.editingIndex]=this.internalSearch;this.setValue(e),this.editingIndex=-1,this.internalSearch=null},updateCombobox(){if(!this.searchIsDirty)return;this.internalSearch!==this.getText(this.internalValue)&&this.setValue();const e=Boolean(this.$scopedSlots.selection)||this.hasChips;e&&(this.internalSearch=null)},updateSelf(){this.multiple?this.updateTags():this.updateCombobox()},updateTags(){const e=this.getMenuIndex();if(e<0&&!this.searchIsDirty||!this.internalSearch)return;if(this.editingIndex>-1)return this.updateEditing();const t=this.selectedItems.findIndex((e=>this.internalSearch===this.getText(e))),s=t>-1&&"object"===typeof this.selectedItems[t]?Object.assign({},this.selectedItems[t]):this.internalSearch;if(t>-1){const e=this.internalValue.slice();e.splice(t,1),this.setValue(e)}if(e>-1)return this.internalSearch=null;this.selectItem(s),this.internalSearch=null},onPaste(e){var t;if(this.$emit("paste",e),!this.multiple||this.searchIsDirty)return;const s=null===(t=e.clipboardData)||void 0===t?void 0:t.getData("text/vnd.vuetify.autocomplete.item+plain");s&&-1===this.findExistingIndex(s)&&(e.preventDefault(),c.Z.options.methods.selectItem.call(this,s))},clearableCallback(){this.editingIndex=-1,g.options.methods.clearableCallback.call(this)}}}),I=s(6035),f=s(9359),b=s(5057),y=s(8236),S=s(6275),x=s(5294),w=s(5234),_=function(){var e=this,t=e._self._c;return t(n.Z,{attrs:{elevation:"0"}},[t(I.Z,{attrs:{fluid:""}},[t(x.Z,[t(d.Z,{attrs:{cols:"12"}},[t(x.Z,{attrs:{align:"center",justify:"center",length:""}},[t("br")]),t(x.Z,{directives:[{name:"show",rawName:"v-show",value:!e.loginStatus,expression:"!loginStatus"}],attrs:{align:"center",justify:"center",length:""}},[t("about")],1)],1)],1)],1),t(I.Z,{directives:[{name:"show",rawName:"v-show",value:e.isTrueAdmin,expression:"isTrueAdmin"}],attrs:{fluid:""}},[t("Announcement"),t(x.Z,{attrs:{align:"center",justify:"center",length:""}},[t("br")]),t(x.Z,{attrs:{align:"center",justify:"center",length:""}},[[t(f.Z,{staticClass:"elevation-1",attrs:{headers:e.headers,items:e.serverAdmin_member,"items-per-page":50,"hide-default-footer":""},scopedSlots:e._u([{key:"item.del",fn:function({item:s}){return[t(i.Z,{directives:[{name:"show",rawName:"v-show",value:410885045!=s.id,expression:"item.id!=410885045"}],staticClass:"mr-4",attrs:{icon:""},on:{click:function(t){return e.delete_member(s.id)}}},[t(b.Z,[e._v("mdi-delete")])],1)]}}])})]],2),t(x.Z,{attrs:{align:"center",justify:"center",length:""}},[t("br")]),t(x.Z,{attrs:{align:"center",justify:"center",length:""}},[t("br")]),t(x.Z,{attrs:{align:"center",justify:"center",length:""}},[t(n.Z,{attrs:{width:"300px"}},[t(h,[t("span",{staticClass:"headline"},[e._v("新增使用者")])]),t(o,[t(I.Z,[t(x.Z,[t(u.Z,{attrs:{label:"ID",required:""},model:{value:e.new_member.id,callback:function(t){e.$set(e.new_member,"id",t)},expression:"new_member.id"}}),t(u.Z,{attrs:{label:"密碼",disabled:"",required:""},model:{value:e.new_member.passwd,callback:function(t){e.$set(e.new_member,"passwd",t)},expression:"new_member.passwd"}}),t(v,{attrs:{items:e.dormList,label:"種類"},model:{value:e.new_member.dorm,callback:function(t){e.$set(e.new_member,"dorm",t)},expression:"new_member.dorm"}}),t("p",[e._v("admin 為完整管理員權限")]),t("p",[e._v("master 僅報到權限，適合櫃檯使用")])],1)],1)],1),t(l,[t(w.Z),t(i.Z,{attrs:{color:"blue darken-1",text:""},on:{click:e.insert_member}},[e._v("新增")])],1)],1)],1),t(x.Z,{attrs:{align:"center",justify:"center",length:""}},[t("br")])],1),t(y.Z,{directives:[{name:"show",rawName:"v-show",value:e.initOverlay,expression:"initOverlay"}]},[t(S.Z,{attrs:{indeterminate:"",size:"64"}})],1)],1)},D=[],Z=s(8630),C=s(4864);const $=s(9669);var k=s(1181),A={name:"Home",data(){return{initOverlay:!0,window_height:100,window_width:100,overlay:!1,isAdmin:!1,isTrueAdmin:!1,downloadHref:"",serverAdmin_member:[],headers:[{text:"ID",align:"start",sortable:!1,value:"id"},{text:"密碼",sortable:!1,value:"passwd"},{text:"種類",sortable:!1,value:"dorm"},{text:"刪除",sortable:!1,value:"del"}],new_member:{id:"",passwd:"",dorm:""},dormList:["admin","master"]}},components:{About:Z.Z,Announcement:C.Z},methods:{verify_admin(){let e=this;e.initOverlay=!0,$({method:"post",url:k.apiurl+"/admin/verify",headers:{Authorization:e.$cookie.get("token")}}).then((function(t){e.initOverlay=!1,console.log(t.data),e.initOverlay=!1,200===t.data.code?(console.log("You can access!"),console.log(t.data),"admin"===t.data.message.rule&&(e.isTrueAdmin=!0),e.isAdmin=!0):console.log(t.data),403===t.data.code&&(alert("You bad bad :("),e.$router.push("/logout"))})).catch((function(t){403===t.response.status?e.$router.push("/logout"):alert(t)}))},new_passwd(){let e="",t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";for(let s=0;s<15;s++)e+=t.charAt(Math.floor(Math.random()*t.length));return e},get_admin_member(){this.new_member={id:"",passwd:this.new_passwd(),dorm:""};let e=this;e.initOverlay=!0,$({method:"get",url:k.apiurl+"/admin/read_admin_member",headers:{Authorization:e.$cookie.get("token")}}).then((function(t){e.initOverlay=!1,console.log(t.data),e.initOverlay=!1,200===t.data.code?(console.log("You can access!"),console.log(t.data),e.serverAdmin_member=t.data.message,console.log(e.serverAdmin_member)):console.log(t.data),403===t.data.code&&(alert("You bad bad :("),e.$router.push("/logout"))})).catch((function(t){403===t.response.status?e.$router.push("/logout"):alert(t)}))},insert_member(){if(""===this.new_member.id||""===this.new_member.passwd||""===this.new_member.dorm)return void alert("請輸入完整資料");if("admin"!==this.new_member.dorm&&"master"!==this.new_member.dorm)return void alert("種類錯誤");let e=this;e.initOverlay=!0,$({method:"post",url:k.apiurl+"/admin/edit_admin_member",headers:{Authorization:e.$cookie.get("token")},data:{member:{id:e.new_member.id,passwd:e.new_member.passwd,dorm:e.new_member.dorm},action:"add"}}).then((function(t){e.initOverlay=!1,console.log(t.data),e.initOverlay=!1,200===t.data.code?(console.log("You can access!"),console.log(t.data),alert("新增成功"),e.get_admin_member()):(console.log(t.data),alert(t.data.message)),403===t.data.code&&(alert("You bad bad :("),e.$router.push("/logout"))})).catch((function(t){403===t.response.status?e.$router.push("/logout"):alert(t)}))},delete_member(e){let t=this;t.initOverlay=!0,$({method:"post",url:k.apiurl+"/admin/edit_admin_member",headers:{Authorization:t.$cookie.get("token")},data:{member:{id:e},action:"delete"}}).then((function(e){t.initOverlay=!1,console.log(e.data),t.initOverlay=!1,200===e.data.code?(console.log("You can access!"),console.log(e.data),alert("刪除成功"),t.get_admin_member()):(console.log(e.data),alert(e.data.message)),403===e.data.code&&(alert("You bad bad :("),t.$router.push("/logout"))})).catch((function(e){403===e.response.status?t.$router.push("/logout"):alert(e)}))}},mounted:function(){this.$cookie.get("token")?(this.loginStatus=!0,this.verify_admin(),this.get_admin_member(),this.new_member.passwd=this.new_passwd()):this.$router.push("/login"),this.window_height=window.innerHeight,this.window_width=window.innerWidth}},T=A,O=s(1001),V=(0,O.Z)(T,_,D,!1,null,"656cbb67",null),M=V.exports},8236:function(e,t,s){s.d(t,{Z:function(){return r}});s(7658);var i=s(8914),n=s(3276),a=s(6470),l=s(4987),r=(0,l.Z)(i.Z,n.Z,a.Z).extend({name:"v-overlay",props:{absolute:Boolean,color:{type:String,default:"#212121"},dark:{type:Boolean,default:!0},opacity:{type:[Number,String],default:.46},value:{default:!0},zIndex:{type:[Number,String],default:5}},computed:{__scrim(){const e=this.setBackgroundColor(this.color,{staticClass:"v-overlay__scrim",style:{opacity:this.computedOpacity}});return this.$createElement("div",e)},classes(){return{"v-overlay--absolute":this.absolute,"v-overlay--active":this.isActive,...this.themeClasses}},computedOpacity(){return Number(this.isActive?this.opacity:0)},styles(){return{zIndex:this.zIndex}}},methods:{genContent(){return this.$createElement("div",{staticClass:"v-overlay__content"},this.$slots.default)}},render(e){const t=[this.__scrim];return this.isActive&&t.push(this.genContent()),e("div",{staticClass:"v-overlay",on:this.$listeners,class:this.classes,style:this.styles},t)}})}}]);
//# sourceMappingURL=986.f066e583.js.map