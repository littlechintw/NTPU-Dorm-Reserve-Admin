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
      <v-row>
        <v-col cols="12">
          <v-row align="center" justify="center" length><br /></v-row>

          <v-row align="center" justify="center" length>
            <v-btn outlined class="mr-4" :href="downloadHref" target="_blank" @click="csv">下載 csv</v-btn>
          </v-row>
          
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
      downloadHref: "",
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
    csvDownloadUrlMaker() {
      // /admin/access / csv / <random>/<sessionCode>
      let random_num = Math.floor(Math.random() * 1000000);
      this.downloadHref = config.apiurl + "/admin/access/csv/" + random_num + "/" + this.$cookie.get("token");
    }
  },
  mounted: function () {
    if (this.$cookie.get("token")) {
      this.loginStatus = true;
      this.verify_admin();
      this.csvDownloadUrlMaker();
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