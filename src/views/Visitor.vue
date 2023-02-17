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
  <!-- <v-row align="center" justify="center" length>
    {{ status }}
  </v-row> -->
  <v-container v-show="isTrueAdmin" fluid>
    <Announcement />
    <v-row align="center" justify="center" length><br /></v-row>
    <v-row align="center" justify="center" length>
      <h1>宿舍內訪客</h1>
    </v-row>
    <v-row align="center" justify="center" length>
        <v-data-table :headers="headers" :items="status" class="elevation-1" hide-default-footer
          items-per-page=100></v-data-table>
    </v-row>
    <v-row align="center" justify="center" length>
      <br />
    </v-row>
  </v-container>


    <v-overlay v-if="initOverlay">
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
      downloadHref: "",
      status: [],
      headers: [
        { text: "宿舍", value: "dorm" },
        { text: "姓名", value: "name" },
        { text: "學號", value: "user" }, 
        { text: "訪客身分證", value: "visitor_id" },
        { text: "訪客電話", value: "visitor_phone" },
        { text: "訪客開始時間", value: "visitor_start" },
      ],
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
    get_visitor_status() {
      console.log('Status Check!')
      let self = this;
      self.initOverlay = true;
      axios({
        method: 'get',
        url: config.apiurl + "/api/visitor_inside",
        headers: {
          'Authorization': self.$cookie.get("token"),
        },
      })
        .then(function (response) {
          // console.log(response.data);
          if (response.status === 200) {
            self.status = response.data.message;
            self.initOverlay = false;
            console.log(self.status)
          } else {
            console.log(response.data)
          }
          if (response.status === 403) {
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
  },
  mounted: function () {
    if (this.$cookie.get("token")) {
      this.loginStatus = true;
      this.verify_admin();
      this.get_visitor_status();
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