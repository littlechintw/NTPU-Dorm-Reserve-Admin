<template>
  <v-card elevation="0">
    <!-- 輸入表單 -->
    <v-container fluid>
      <v-row>
        <v-col cols="12">
          <v-row align="center" justify="center" length><br /></v-row>
          <v-row v-show="!loginStatus" align="center" justify="center" length>
            <about />
          </v-row>

        </v-col>
      </v-row>
    </v-container>

    <v-container v-show="isTrueAdmin" fluid>
      <Announcement />
    </v-container>

    <v-container v-show="isAdmin" fluid>
      <v-row>
        <v-col cols="12">
          <!-- <v-row align="center" justify="center" length><br /></v-row> -->
          <!-- <v-row align="center" justify="center" length>
            <h2>Yes, you can access me</h2>
          </v-row>
          <v-row align="center" justify="center" length><br /></v-row> -->
          <v-row align="center" justify="center" length>
            掃描報到 QRCode 或是輸入學號。
            掃 QRCode 前，指標要點到下方輸入框喔！
          </v-row>
          <v-row align="center" justify="center" length>
            <v-form ref="form" v-on:submit.prevent="findUser" lazy-validation>
              <v-text-field v-model="searchId" label="帳號 / Account" required></v-text-field>
              <v-btn :disabled="searchId === ''" color="#87C1A2" class="mr-4" @click="findUser">搜尋 / 訪客離開</v-btn>
            </v-form>
          </v-row>
          <v-row align="center" justify="center" length
            v-show="searchResponse.alert !== null && searchResponse.alert !== ''"><br />
          </v-row>
          <v-row align="center" justify="center" length>
            <h3 style="background-color: red; color: white; width: 100%; text-align: center">{{
            searchResponse.alert }}</h3>
          </v-row>
          <v-row align="center" justify="center" length><br /></v-row>
          <!-- <v-row align="center" justify="center" length>
            {{ searchResponse }}
          </v-row> -->

          <div v-show="searchUserExist">
            <v-row align="center" justify="center" length>
              <!-- If checkIn is true show blue, or show pink -->

              <v-chip class="ma-2" label text-color="white" :color="chipColor(searchResponse.reserved)">
                <v-icon left>
                  mdi-calendar-check
                </v-icon>
                預約狀態 {{ searchResponse.reserved }}
              </v-chip>
              <v-chip class="ma-2" label text-color="white" :color="chipColor(searchResponse.checkIn)">
                <v-icon left>
                  mdi-bag-checked
                </v-icon>
                報到狀態 {{ searchResponse.checkIn }}
              </v-chip>
              <v-chip class="ma-2" label text-color="white" :color="chipColor(!searchResponse.checkIn_visitor_in)"
                v-show="searchResponse.checkIn">
                <v-icon left>
                  mdi-account-multiple
                </v-icon>
                訪客狀態 {{ searchResponse.checkIn_visitor_in }}
              </v-chip>
            </v-row>
            <!-- <v-row align="center" justify="center" length>
            姓名 / Name: {{ searchResponse.name }}
          </v-row> -->
            <v-row align="center" justify="center" length>
              <v-simple-table dense>
                <template v-slot:default>
                  <!-- <thead>
                  <tr>
                    <th class="text-left">
                      Title
                    </th>
                    <th class="text-left">
                      Data
                    </th>
                  </tr>
                </thead> -->
                  <tbody>
                    <tr v-for="item in searchUserData" :key="item.title">
                      <td>{{ item.title }}</td>
                      <td>{{ item.data }}</td>
                    </tr>
                  </tbody>
                </template>
              </v-simple-table>
            </v-row>
            <!-- { "checkIn": true, "checkIn_bill": "1", "checkIn_card": "123", "checkIn_parking": "1", "checkIn_time":
          "2022-08-21 17:57:32", "checkIn_visitor_end": "2022-08-21 17:57:32", "checkIn_visitor_id": "A123456789",
          "checkIn_visitor_in": false, "checkIn_visitor_phone": "0988888888", "checkIn_visitor_start": "2022-08-21
          17:57:32", "dorm": "morn", "error": false, "health": "1", "health_phone": "0983122627", "health_rule1": false,
          "health_rule2": false, "id": "410885045", "name": "YC", "reserve_event_id": "9/1 09~12", "reserve_parking": "
          878hj", "reserve_time": "2022-08-21 17:57:32", "reserved": true, "room": "310-1" } -->
            <v-row align="center" justify="center" length><br /></v-row>
            <v-row align="center" justify="center" length>
              <v-divider></v-divider>
            </v-row>
            <v-row align="center" justify="center" length><br /></v-row>
            <v-row align="center" justify="center" length>
              <h2>報到手續</h2>
            </v-row>
            <v-row align="center" justify="center" length><br /></v-row>
            <!-- <v-row align="center" justify="center" length>
            <v-switch v-model="userCheckinForm.bill" :label="`確認繳費狀態: ${userCheckinForm.bill.toString()}`"></v-switch>
          </v-row> -->
            <v-row align="center" justify="center" length>
              <v-form ref="form" v-on:submit.prevent="findUser" lazy-validation>
                <h4 v-show="searchResponse.reserve_parking !== '無' && searchResponse.reserved" style="color: red">
                  看到此行請給予停車優惠券並選取
                </h4>
                <v-switch v-model="userCheckinForm.parking" :label="`停車優惠券: ${userCheckinForm.parking.toString()}`"
                  v-show="searchResponse.reserve_parking !== '無' && searchResponse.reserved">
                </v-switch>
                <v-switch v-model="userCheckinForm.bill" :label="`確認繳費狀態: ${userCheckinForm.bill.toString()}`">
                </v-switch>
                <v-text-field v-model="userCheckinForm.card" label="臨時卡" required type="number" counter maxlength="5">
                </v-text-field>
                <v-switch v-model="userCheckinForm.visitor" :label="`訪客: ${userCheckinForm.visitor.toString()}`"
                  :disabled="(searchResponse.checkIn === true) && (searchResponse.checkIn_visitor_id !== null)">
                </v-switch>
                <v-text-field v-show="userCheckinForm.visitor" v-model="userCheckinForm.visitorData.id" label="訪客身分證"
                  required counter maxlength="10"
                  :disabled="(searchResponse.checkIn === true) && (searchResponse.checkIn_visitor_id !== null)">
                </v-text-field>
                <v-text-field v-show="userCheckinForm.visitor" v-model="userCheckinForm.visitorData.phone" label="訪客手機"
                  required type="number" counter maxlength="10"
                  :disabled="(searchResponse.checkIn === true) && (searchResponse.checkIn_visitor_id !== null)">
                </v-text-field>
                <v-btn color="#87C1A2" class="mr-4" @click="checkIn"
                  :disabled="userCheckinForm.visitor && (userCheckinForm.visitorData.id.length !== 10 || userCheckinForm.visitorData.phone.length !== 10)">
                  報到 / 更改</v-btn>
              </v-form>
            </v-row>
          </div>
          <v-row align="center" justify="center" length><br /></v-row>
          <v-row align="center" justify="center" length><br /></v-row>
        </v-col>
      </v-row>
    </v-container>

    <v-overlay v-show="initOverlay">
      <v-progress-circular indeterminate size="64"> </v-progress-circular>
    </v-overlay>
  </v-card>
</template>

<script>
import About from "../components/About";
import Announcement from "../components/Announcement.vue";
const axios = require("axios");
var config = require("../../config.json");
// let Base64 = require("js-base64").Base64;

export default {
  name: "Home",
  data() {
    return {
      e13: 1,
      initOverlay: true,
      window_height: 100,
      window_width: 100,
      overlay: false,
      isAdmin: false,
      isTrueAdmin: false,

      searchId: "",
      isSearch: false,
      searchUserExist: false,
      searchResponse: {},
      searchUserData: [],

      userCheckinForm: {
        "id": "",
        "parking": false,
        "bill": false,
        "card": "",
        "visitor": false,
        "visitorData": {
          "id": "",
          "phone": ""
        }
      }
    };
  },
  components: {
    About,
    Announcement,
  },
  methods: {
    verify_admin() {
      let self = this;
      self.initOverlay = true;
      axios({
        method: 'post',
        url: config.apiurl + "/admin/verify",
        headers: {
          'Authorization': self.$cookie.get("token"),
        },
      })
        .then(function (response) {
          self.initOverlay = false;
          console.log(response.data);
          self.initOverlay = false;
          if (response.data.code === 200) {
            console.log('You can access!')
            console.log(response.data)
            if (response.data.message.rule === "admin") {
              self.isTrueAdmin = true;
            }
            self.isAdmin = true
          } else {
            console.log(response.data)
          }
          if (response.data.code === 403) {
            alert("You bad bad :(");
            self.$router.push("/logout");
          }
        })
        .catch(function (error) {
          if (error.response.status === 403) {
            self.$router.push("/logout");
          }
          else {
            alert(error);
          }
        });
    },
    getUserDataInit(data) {
      this.userCheckinForm = {
        "id": "",
        "parking": false,
        "bill": false,
        "card": "",
        "visitor": false,
        "visitorData": {
          "id": "",
          "phone": ""
        }
      }
      this.userCheckinForm.id = data.id;

      if (data.checkIn_parking === "1")
        this.userCheckinForm.parking = true;

      if (data.checkIn_bill === "1")
        this.userCheckinForm.bill = true;

      if (data.checkIn_card !== undefined)
        this.userCheckinForm.card = data.checkIn_card;

      if (data.checkIn === true && data.checkIn_visitor_id !== null) {
        this.userCheckinForm.visitor = true;
        this.userCheckinForm.visitorData.id = data.checkIn_visitor_id;
        this.userCheckinForm.visitorData.phone = data.checkIn_visitor_phone;
      }
      console.log(this.userCheckinForm);
    },
    makeUserDataTableData(data) {
      let tableData = []
      // for (let key in data) {
      //   tableData.push({
      //     title: key,
      //     data: data[key],
      //   })
      // }

      tableData.push({ title: "學號", data: data.id })
      tableData.push({ title: "姓名", data: data.name })
      tableData.push({ title: "宿舍", data: data.dorm + " " + data.room })
      tableData.push({ title: "預計報到時間", data: data.reserve_event })
      if (data.reserve_parking === 'no') data.reserve_parking = '無'
      tableData.push({ title: "停車優惠券", data: data.reserve_parking })
      if (data.checkIn === true) {
        if (data.checkIn_parking === "1") data.checkIn_parking = "已領取"
        else data.checkIn_parking = "未領取"
        if (data.checkIn_bill === "1") data.checkIn_bill = "已繳費"
        else data.checkIn_bill = "未繳費"
        
        tableData.push({ title: "報到資料登錄時間", data: data.checkIn_time })
        tableData.push({ title: "優惠券領取", data: data.checkIn_parking })
        tableData.push({ title: "繳費證明", data: data.checkIn_bill })
        tableData.push({ title: "臨時卡編號", data: data.checkIn_card })
        tableData.push({ title: "訪客身分證", data: data.checkIn_visitor_id })
        tableData.push({ title: "訪客電話", data: data.checkIn_visitor_phone })
        tableData.push({ title: "訪客開始時間", data: data.checkIn_visitor_start })
        tableData.push({ title: "訪客結束時間", data: data.checkIn_visitor_end })
      }
      return tableData
    },
  //   { "checkIn": true, "checkIn_bill": "1", "checkIn_card": "123", "checkIn_parking": "1", "checkIn_time":
  // "2022-08-21 17:57:32", "checkIn_visitor_end": "2022-08-21 17:57:32", "checkIn_visitor_id": "A123456789",
  //   "checkIn_visitor_in": false, "checkIn_visitor_phone": "0988888888", "checkIn_visitor_start": "2022-08-21
  // 17: 57: 32", "dorm": "morn", "error": false, "health": "1", "health_phone": "0983122627", "health_rule1": false,
  // "health_rule2": false, "id": "410885045", "name": "YC", "reserve_event_id": "9/1 09~12", "reserve_parking": "
  // 878hj", "reserve_time": "2022 - 08 - 21 17: 57: 32", "reserved": true, "room": "310 - 1" }
    checkIn() {
      let self = this;
      if (self.isSearch) {
        console.log("Already searching");
        return ""
      }
      self.initOverlay = true;
      self.isSearch = true
      self.searchResponse = { "status": "Searching..." }
      self.searchUserExist = false
      axios({
        method: 'post',
        url: config.apiurl + "/admin/edit_user_data",
        headers: {
          'Authorization': self.$cookie.get("token"),
        },
        data: {
          id: self.userCheckinForm.id,
          parking: self.userCheckinForm.parking,
          bill: self.userCheckinForm.bill,
          card: self.userCheckinForm.card,
          visitor: self.userCheckinForm.visitor,
          visitorId: self.userCheckinForm.visitorData.id,
          visitorPhone: self.userCheckinForm.visitorData.phone,
        },
      })
        .then(function (response) {
          self.initOverlay = false;
          console.log(response.data);
          self.initOverlay = false;
          if (response.data.code === 200) {
            // console.log(response.data)
            self.searchResponse = response.data.message
            self.getUserDataInit(response.data.message)
            self.searchUserData = self.makeUserDataTableData(response.data.message)
            self.alertText = response.data.message.alert
            self.searchUserExist = true
            self.searchId = ""
            self.isSearch = false
          } else {
            console.log(response.data)
          }
          if (response.data.code === 403) {
            alert("Who's this user?");
            self.searchId = ""
            self.isSearch = false
            // self.$router.push("/logout");
          }
        })
        .catch(function (error) {
          if (error.response.status === 403) {
            self.$router.push("/logout");
          }
          else {
            alert(error);
          }
        });
    },
    findUser() {
      let self = this;
      if (self.searchId.length > 15) {
        return ""
      }
      if (self.isSearch) {
        console.log("Already searching");
        return ""
      }
      self.initOverlay = true;
      self.isSearch = true
      self.searchResponse = {"status": "Searching..."}
      self.searchUserExist = false
      axios({
        method: 'post',
        url: config.apiurl + "/admin/get_user_data",
        headers: {
          'Authorization': self.$cookie.get("token"),
        },
        data: {
          id: self.searchId,
        },
      })
        .then(function (response) {
          self.initOverlay = false;
          console.log(response.data);
          self.initOverlay = false;
          if (response.data.code === 200) {
            // console.log(response.data)
            self.searchResponse = response.data.message
            self.getUserDataInit(response.data.message)
            self.searchUserData = self.makeUserDataTableData(response.data.message)
            self.searchUserExist = true
            self.searchId = ""
            self.isSearch = false
          } else {
            console.log(response.data)
          }
          if (response.data.code === 403) {
            alert("Who's this user?");
            self.searchId = ""
            self.isSearch = false
            // self.$router.push("/logout");
          }
        })
        .catch(function (error) {
          if (error.response.status === 403) {
            self.$router.push("/logout");
          }
          else {
            alert(error);
          }
        });
    },
    chipColor(boolValue) {
      if (boolValue) {
        return "blue"
      } else {
        return "pink"
      }
    },
  },
  mounted: function () {
    if (this.$cookie.get("token")) {
      this.loginStatus = true;
      this.verify_admin();
    }
    else {
      this.$router.push("/login");
    }
    this.window_height = window.innerHeight;
    this.window_width = window.innerWidth;
  },
};
</script>

<style scoped>
@keyframes hue {
  from {
    filter: hue-rotate(0);
  }

  to {
    filter: hue-rotate(-360deg);
  }
}
.rainbow-text {
  display: inline-block;
  position: relative;
  font-weight: 500;
  color: transparent;
  animation: hue 1.5s linear infinite;
  background-image: linear-gradient(to right bottom, rgb(255, 0, 0), rgb(255, 128, 0), rgb(255, 255, 0), rgb(0, 255, 0), rgb(0, 255, 128), rgb(0, 255, 255), rgb(0, 128, 255), rgb(0, 0, 255), rgb(128, 0, 255), rgb(255, 0, 255), rgb(255, 0, 128));
  -webkit-background-clip: text;
}
</style>