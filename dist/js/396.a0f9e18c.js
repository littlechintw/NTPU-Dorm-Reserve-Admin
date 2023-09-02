"use strict";(self["webpackChunkntpu_dorm_check_in"]=self["webpackChunkntpu_dorm_check_in"]||[]).push([[396],{4838:function(e,t,s){s.r(t),s.d(t,{default:function(){return b}});var n=s(7179),o=s(3058),r=s(4944),i=s(4437),a=s(6035),l=s(9359),u=s(5294),d=function(){var e=this,t=e._self._c;return t("div",[t(o.Z,{attrs:{elevation:"0"}},[t(a.Z,{attrs:{fluid:""}},[t(u.Z,[t(i.Z,{attrs:{cols:"12"}},[t(u.Z,{attrs:{align:"center",justify:"center",length:""}},[t("br")]),t(u.Z,{directives:[{name:"show",rawName:"v-show",value:!e.loginStatus,expression:"!loginStatus"}],attrs:{align:"center",justify:"center",length:""}},[t("about")],1)],1)],1)],1),t(a.Z,{directives:[{name:"show",rawName:"v-show",value:e.isTrueAdmin,expression:"isTrueAdmin"}],attrs:{fluid:""}},[t("Announcement"),t("br"),t("br"),t("h1",[e._v("宿生資料 Excel 上傳")]),t("h3",[e._v("使用 Excel 上傳，將會自動刪除所有宿生資料，並且新增此份宿生資料。")]),t("a",{attrs:{href:"/NTPU_Dorm_Example.xlsx"}},[e._v("下載範例 Excel 檔案")]),t("br"),t("br"),t("input",{attrs:{type:"file",accept:".xlsx"},on:{change:e.handleFileUpload}}),t("div",{directives:[{name:"show",rawName:"v-show",value:e.newFile,expression:"newFile"}]},[t("br"),t("h4",[e._v("本資料總人數："+e._s(e.insertStudentNum.all))]),t("h4",[e._v("曉日："+e._s(e.insertStudentNum.sun))]),t("h4",[e._v("皓月："+e._s(e.insertStudentNum.moon))]),t("h4",[e._v("繁星："+e._s(e.insertStudentNum.star))]),t("h4",[e._v("辰曦："+e._s(e.insertStudentNum.morn))]),t("br"),t(n.Z,{directives:[{name:"show",rawName:"v-show",value:!e.uploadConfirm,expression:"!uploadConfirm"}],staticClass:"mx-2",attrs:{color:"#87A1A2"},on:{click:function(t){e.uploadConfirm=!0}}},[e._v(" 上傳資料 ")]),t("h3",{directives:[{name:"show",rawName:"v-show",value:e.uploadConfirm,expression:"uploadConfirm"}],staticStyle:{color:"red"}},[e._v("點選＂確認資料上傳＂按鈕才會開始動作，此動作將會刪除所有資料，並須等待一段時間，如顯示上傳失敗，請務必檢查內容，並重新上傳。 ")]),t(n.Z,{directives:[{name:"show",rawName:"v-show",value:e.uploadConfirm,expression:"uploadConfirm"}],staticClass:"mx-2",attrs:{color:"#87C1A2"},on:{click:e.upload_all_member}},[e._v("確認資料上傳")]),t(n.Z,{directives:[{name:"show",rawName:"v-show",value:e.uploadConfirm,expression:"uploadConfirm"}],staticClass:"mx-2",attrs:{color:"pink"},on:{click:function(t){e.uploadConfirm=!1}}},[e._v("取消")]),t("h3",{staticStyle:{color:"red"}},[e._v(e._s(e.alertMsg))]),t("br"),t("br"),t(u.Z,{attrs:{align:"center",justify:"center",length:""}},[[t(l.Z,{staticClass:"elevation-1",attrs:{headers:e.headers,items:e.insertStudentList,"items-per-page":2e3,"hide-default-footer":""},scopedSlots:e._u([{key:"item.dorm",fn:function({item:s}){return["sun"==s.dorm?t(r.Z,{attrs:{color:"blue",outlined:""}},[e._v(" 曉日 ")]):e._e(),"moon"==s.dorm?t(r.Z,{attrs:{color:"pink",outlined:""}},[e._v(" 皓月 ")]):e._e(),"star"==s.dorm?t(r.Z,{attrs:{color:"purple",outlined:""}},[e._v(" 繁星 ")]):e._e(),"morn"==s.dorm?t(r.Z,{attrs:{color:"green",outlined:""}},[e._v(" 辰曦 ")]):e._e()]}}])})]],2)],1),t("br"),t("br")],1)],1)],1)},h=[],c=(s(7658),s(8630)),m=s(6603),_=s(7869);const p=s(9669);var v=s(1181),f={name:"Home",data(){return{initOverlay:!0,window_height:100,window_width:100,overlay:!1,isAdmin:!1,isTrueAdmin:!1,headers:[{text:"宿舍",value:"dorm"},{text:"學號",value:"id"},{text:"姓名",value:"name"},{text:"床號",value:"bed"}],insertStudentList:[],insertStudentNum:{all:0,sun:0,moon:0,star:0,morn:0},newFile:!1,uploadConfirm:!1,alertMsg:""}},components:{About:c.Z,Announcement:m.Z},methods:{verify_admin(){let e=this;e.initOverlay=!0,p({method:"post",url:v.apiurl+"/admin/verify",headers:{Authorization:e.$cookie.get("token")}}).then((function(t){e.initOverlay=!1,console.log(t.data),e.initOverlay=!1,200===t.data.code?(console.log("You can access!"),console.log(t.data),"admin"===t.data.message.rule&&(e.isTrueAdmin=!0),e.isAdmin=!0):console.log(t.data),403===t.data.code&&(alert("You bad bad :("),e.$router.push("/logout"))})).catch((function(t){403===t.response.status?e.$router.push("/logout"):alert(t)}))},worksheet_process(e,t){const s=t[0],n=["StudentID","Name","Bed"],o=[-1,-1,-1];for(let r=0;r<s.length;r++){const e=s[r];for(let t=0;t<n.length;t++){const s=n[t];e==s&&(o[t]=r)}}for(let r=0;r<o.length;r++){const e=o[r];if(-1==e)return void alert("Excel 格式錯誤，請檢查欄位名稱是否正確，載入資料將不完整。")}for(let r=1;r<t.length;r++){const s=t[r],n={dorm:e,id:s[o[0]],name:s[o[1]],bed:s[o[2]]};this.insertStudentList.push(n)}},handleFileUpload(e){this.newFile=!0,this.insertStudentList=[];const t=e.target.files[0],s=new FileReader;s.onload=e=>{const t=new Uint8Array(e.target.result),s=(0,_.read)(t,{type:"array"}),n=s.Sheets["SUN"],o=s.Sheets["MOON"],r=s.Sheets["STAR"],i=s.Sheets["MORN"];this.worksheet_process("sun",_.utils.sheet_to_json(n,{header:1})),this.worksheet_process("moon",_.utils.sheet_to_json(o,{header:1})),this.worksheet_process("star",_.utils.sheet_to_json(r,{header:1})),this.worksheet_process("morn",_.utils.sheet_to_json(i,{header:1})),this.insertStudentNum.all=this.insertStudentList.length,this.insertStudentNum.sun=this.insertStudentList.filter((e=>"sun"==e.dorm)).length,this.insertStudentNum.moon=this.insertStudentList.filter((e=>"moon"==e.dorm)).length,this.insertStudentNum.star=this.insertStudentList.filter((e=>"star"==e.dorm)).length,this.insertStudentNum.morn=this.insertStudentList.filter((e=>"morn"==e.dorm)).length,console.log(jsonData)},s.readAsArrayBuffer(t)},upload_all_member(){this.alertMsg="";let e=this;p({method:"post",url:v.apiurl+"/admin/upload_all_member",headers:{Authorization:e.$cookie.get("token")},data:{member:this.insertStudentList}}).then((function(t){200===t.data.code?(console.log("You can access!"),"success"==t.data.message.status?alert("上傳成功！"):(alert("上傳失敗，請檢查資料是否正確，並且重新上傳。"),e.alertMsg=t.data.message.errMsg,alert(t.data.message.errMsg))):console.log(t.data),403===t.data.code&&(alert("You bad bad :("),e.$router.push("/logout"))})).catch((function(t){403===t.response.status?e.$router.push("/logout"):alert(t)}))}},mounted:function(){this.$cookie.get("token")?(this.loginStatus=!0,this.verify_admin(),this.csvDownloadUrlMaker()):this.$router.push("/login"),this.window_height=window.innerHeight,this.window_width=window.innerWidth}},g=f,w=s(1001),S=(0,w.Z)(g,d,h,!1,null,null,null),b=S.exports}}]);
//# sourceMappingURL=396.a0f9e18c.js.map