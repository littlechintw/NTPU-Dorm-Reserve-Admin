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
          <v-row align="center" justify="center" length>
            <h3>新增 / 編輯 / 刪除前先輸入學號搜尋確認狀態</h3>
          </v-row>
          <v-row align="center" justify="center" length><br /></v-row>
          <v-row align="center" justify="center" length>
            <v-form ref="form" v-on:submit.prevent="findUser" lazy-validation>
              <v-text-field v-model="searchId" label="帳號 / Account" required type="number" maxlength="9" counter>
              </v-text-field>
              <v-btn :disabled="searchId.length !== 9" color="#87C1A2" class="mr-4" @click="findUser">搜尋 / Search
              </v-btn>
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

          <div v-show="firstSearch">
            <v-row align="center" justify="center" length v-show="searchUserExist">
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
            <v-row align="center" justify="center" length>
              <v-form ref="form" v-on:submit.prevent="findUser" lazy-validation>
                <v-text-field v-model="userEditForm.id" disabled label="學號" required type="number" counter
                  maxlength="9"></v-text-field>
                <v-text-field v-model="userEditForm.name" label="姓名" required></v-text-field>
                <v-radio-group v-model="userEditForm.dorm" row>
                  <v-radio label="曉日 / Sun" value="sun"></v-radio>
                  <v-radio label="皓月 / Moon" value="moon"></v-radio>
                  <v-radio label="繁星 / Star" value="star"></v-radio>
                  <v-radio label="辰曦 / Morn" value="morn"></v-radio>
                </v-radio-group>
                <v-text-field v-model="userEditForm.room" label="房床號（e.q. 310-1）" required></v-text-field>
                <v-btn color="#87C1A2" class="mr-4" @click="editUser('a')" v-show="!searchUserExist"
                  :disabled="userEditForm.dorm === '' || userEditForm.room === '' || userEditForm.name === ''">新增 / Add</v-btn>
                <v-btn color="#87C1A2" class="mr-4" @click="editUser('e')" v-show="searchUserExist">更改 / Edit</v-btn>
                <v-btn color="red" class="mr-4" @click="editUser('d')" v-show="searchUserExist">刪除 / Delete</v-btn>
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
      initOverlay: true,
      window_height: 100,
      window_width: 100,
      overlay: false,
      isAdmin: false,
      isTrueAdmin: false,

      searchId: "",
      isSearch: false,
      searchUserExist: false,
      firstSearch: false,
      searchResponse: {},

      userEditForm: {
        "id": "",
        "name": "",
        "dorm": "",
        "room": "",
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
      this.userEditForm = {
        "id": "",
        "name": "",
        "dorm": "",
        "room": "",
      }
      this.userEditForm.id = data.id;
      this.userEditForm.name = data.name
      this.userEditForm.dorm = data.dormO
      this.userEditForm.room = data.room
    },
  //   { "checkIn": true, "checkIn_bill": "1", "checkIn_card": "123", "checkIn_parking": "1", "checkIn_time":
  // "2022-08-21 17:57:32", "checkIn_visitor_end": "2022-08-21 17:57:32", "checkIn_visitor_id": "A123456789",
  //   "checkIn_visitor_in": false, "checkIn_visitor_phone": "0988888888", "checkIn_visitor_start": "2022-08-21
  // 17: 57: 32", "dorm": "morn", "error": false, "health": "1", "health_phone": "0983122627", "health_rule1": false,
  // "health_rule2": false, "id": "410885045", "name": "YC", "reserve_event_id": "9/1 09~12", "reserve_parking": "
  // 878hj", "reserve_time": "2022 - 08 - 21 17: 57: 32", "reserved": true, "room": "310 - 1" }
    editUser(func) {
      let self = this;
      if (self.isSearch) {
        console.log("Already searching");
        return ""
      }
      self.initOverlay = true;
      self.isSearch = true
      self.searchResponse = { "status": "Searching..." }
      self.searchUserExist = false
      let idTmp = self.searchId
      axios({
        method: 'post',
        url: config.apiurl + "/admin/edit_user",
        headers: {
          'Authorization': self.$cookie.get("token"),
        },
        data: {
          id: self.userEditForm.id,
          name: self.userEditForm.name,
          dorm: self.userEditForm.dorm,
          room: self.userEditForm.room,
          action: func
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
            self.searchUserExist = true
            self.searchId = ""
            self.isSearch = false
          } else {
            console.log(response.data)
          }
          if (response.data.code === 403) {
            self.getUserDataInit({
              "id": idTmp,
              "name": "",
              "dormO": "",
              "room": "",
            })
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
      if (self.isSearch) {
        console.log("Already searching");
        return ""
      }
      self.initOverlay = true;
      self.isSearch = true
      self.firstSearch = true
      self.searchResponse = {"status": "Searching..."}
      self.searchUserExist = false
      let idTmp = self.searchId
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
            self.searchUserExist = true
            self.searchId = ""
            self.isSearch = false
          } else {
            console.log(response.data)
          }
          if (response.data.code === 403) {
            self.getUserDataInit({
              "id": idTmp,
              "name": "",
              "dormO": "",
              "room": "",
            })
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