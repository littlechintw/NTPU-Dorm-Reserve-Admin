<template>
  <div>
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

        <br /><br />
        <h1>所有資料刪除</h1>
        <h3>這個功能會刪除所有報到資料，極為危險，請謹慎使用。</h3>
        <br /><br />

        <v-btn class="mx-2" color="red" @click="overlay = true">我要刪除所有資料</v-btn>

        <v-overlay v-model="overlay" contained class="align-center justify-center">
          <v-card width="window_width * 0.7">
            <h1 class="ma-2">你確定你可以使用這個功能？</h1>
            <h3 class="ma-2">這個功能會刪除所有報到資料，極為危險，請謹慎使用。</h3>
            <v-btn class="ma-2" color="red" @click="delete_all_data_api">
              確定
            </v-btn>
            <v-btn class="ma-2" color="success" @click="overlay = false">
              取消
            </v-btn>
          </v-card>
        </v-overlay>


        <br /><br />
      </v-container>
    </v-card>
  </div>
</template>

<script>
import About from "../components/About";
import Announcement from "../components/Announcement.vue";
const axios = require("axios");
var config = require("../../config.json");
import { read, utils } from 'xlsx';

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
      alertMsg: "",

      overlay: false,
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
    delete_all_data_api() {
      let self = this;
      self.initOverlay = true;
      axios({
        method: 'post',
        url: config.apiurl + "/admin/delete_all_data",
        headers: {
          'Authorization': self.$cookie.get("token"),
        },
      })
        .then(function (response) {
          self.initOverlay = false;
          console.log(response.data);
          self.initOverlay = false;
          if (response.data.code === 200) {
            self.overlay = false;
            alert("已成功清除")
          }
          if (response.data.code === 403) {
            alert("You bad bad :(");
            self.$router.push("/logout");
          }
          if (response.data.code !== 200 && response.data.code !== 403) {
            alert("刪除失敗")
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
