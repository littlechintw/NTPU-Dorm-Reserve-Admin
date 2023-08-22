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
          <v-row align="center" justify="center" length>
            <v-btn outlined color="#B5563E" class="mr-4" @click="updateStatus">更新已登入資訊</v-btn>
          </v-row>
          <v-row align="center" justify="center" length><br /></v-row>
          <v-row align="center" justify="center" length>
            <v-form ref="form" v-model="valid" v-on:submit.prevent="search" lazy-validation>
              <v-text-field v-model="searchStuid" label="學號 / Student ID" type="number" required></v-text-field>
              <v-row align="center" justify="center" length>
                <v-btn color="#87C1A2" class="mr-4" @click="search">搜尋</v-btn>
                <v-btn color="pink" outlined class="mr-4" @click="search_clean">清空</v-btn>
              </v-row>
            </v-form>
          </v-row>
          <v-row align="center" justify="center" length><br /></v-row>
          <v-row align="center" justify="center" length><br /></v-row>

          <v-row align="center" justify="center" length>
            <v-data-table :headers="headers" :items="statusData" class="elevation-1">
              <!-- <template v-slot:item.calories="{ item }">
                <v-chip :color="getColor(item.calories)" dark>
                  {{ item.calories }}
                </v-chip>
              </template> -->
              <template v-slot:item.d="{ item }">
                <h3 style="color: #2b7a78">{{ item.d }}</h3>
              </template>

              <!-- <template v-slot:item.p="{ item }">
                <h3 v-show="item.p === 'n'" style="color: #2b7a78">❌</h3>
                <h3 v-show="item.p !== 'n'" style="color: #2b7a78">
                  {{ item.p }}
                </h3>
              </template>

              <template v-slot:item.h="{ item }">
                <h3 v-show="item.h === '0'" style="color: #2b7a78">❌</h3>
                <h3 v-show="item.h !== '0'" style="color: #2b7a78">✔️</h3>
              </template> -->

              <template v-slot:item.c="{ item }">
                <h3 v-show="item.c === 'n'" style="color: #2b7a78">❌</h3>
                <h3 v-show="item.c !== 'n'" style="color: #2b7a78">✔️</h3>
              </template>

              <template v-slot:item.vi="{ item }">
                <h3 v-show="item.vi === 'n'" style="color: #2b7a78">❌</h3>
                <h3 v-show="item.vi !== 'n'" style="color: #2b7a78">✔️</h3>
              </template>

              <template v-slot:item.de="{ item }">
                <!-- <v-btn
                  dark
                  color="#B5563E"
                  class="mr-4"
                  @click="recordDelete(item.s)"
                  >刪除</v-btn
                > -->
                <v-menu offset-y>
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn outlined color="#B5563E" class="mr-4" v-bind="attrs" v-on="on">
                      確認刪除這個預約？
                    </v-btn>
                  </template>
                  <v-list>
                    <v-list-item @click="recordDelete(item)">
                      <v-list-item-title> 按下去就刪除了 </v-list-item-title>
                    </v-list-item>
                  </v-list>
                </v-menu>
              </template>
            </v-data-table>
          </v-row>
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
      downloadHref: "",

      headers: [
        { text: "日期", value: "d" },
        { text: "學號", value: "s" },
        { text: "棟別", value: "b" },
        // { text: "停車券", value: "p" },
        // { text: "是否健康", value: "h" },
        { text: "報到", value: "c" },
        // { text: "訪客是否在宿舍", value: "vi" },
        // { text: "訪客開始時間", value: "vs" },
        { text: "刪除", value: "de" },
      ],

      statusData: [],
      tmpStatusData: [],
      searchStuid: "",
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
    updateStatus() {
      let self = this;
      self.initOverlay = true;
      axios({
        method: 'post',
        url: config.apiurl + "/admin/reserve_status",
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
            self.statusData = response.data.message;
            self.tmpStatusData = response.data.message;
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
    recordDelete(item) {
      let self = this;
      self.initOverlay = true;
      axios({
        method: 'post',
        url: config.apiurl + "/admin/reserve_delete",
        headers: {
          'Authorization': self.$cookie.get("token"),
        },
        data: {
          id: item.s,
        },
      })
        .then(function (response) {
          self.initOverlay = false;
          console.log(response.data);
          self.initOverlay = false;
          if (response.data.code === 200) {
            console.log('You can access!')
            console.log(response.data)
            self.updateStatus();
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
    search() {
      console.log('Search');
      this.statusData = []
      if (this.searchStuid === "") {
        this.statusData = this.tmpStatusData;
        return;
      }
      for (let i = 0; i < this.tmpStatusData.length; i++) {
        if (this.tmpStatusData[i].s === this.searchStuid) {
          console.log(this.tmpStatusData[i]);
          this.statusData.push(this.tmpStatusData[i]);
          console.log(this.statusData)
          return;
        }
      }
    },
    search_clean() {
      console.log('Clean');
      this.searchStuid = "";
      this.statusData = this.tmpStatusData;
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