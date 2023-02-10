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
      <v-row align="center" justify="center" length><br /></v-row>
      <v-row align="center" justify="center" length>
        <template>
          <v-data-table :headers="headers" :items="serverEvents" class="elevation-1" :items-per-page="50" hide-default-footer>
            <template v-slot:item.name="{ item }">
              <v-text-field v-model="item.name" label="名稱" required></v-text-field>
            </template>
            <template v-slot:item.sun="{ item }">
              <v-text-field v-model="item.sun" label="上限人數" type="number" counter="4" required></v-text-field>
            </template>
            <template v-slot:item.moon="{ item }">
              <v-text-field v-model="item.moon" label="上限人數" type="number" counter="4" required></v-text-field>
            </template>
            <template v-slot:item.star="{ item }">
              <v-text-field v-model="item.star" label="上限人數" type="number" counter="4" required></v-text-field>
            </template>
            <template v-slot:item.morn="{ item }">
              <v-text-field v-model="item.morn" label="上限人數" type="number" counter="4" required></v-text-field>
            </template>
            <template v-slot:item.del="{ item }">
              <v-btn class="mr-4" @click="delete_event(item.id)" icon>
                <v-icon>mdi-delete</v-icon>
              </v-btn>
            </template>
          </v-data-table>
        </template>
      </v-row>
      <v-row align="center" justify="center" length><br /></v-row>
      <v-row align="center" justify="center" length>
        <v-btn color="#" outlined class="mr-4" @click="insert_events">新增項目</v-btn>
        <v-btn color="#87C1A2" class="mr-4" @click="update_events">更新</v-btn>
      </v-row>
      <v-row align="center" justify="center" length><br /></v-row>
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
      serverEvents: [],
      headers: [
        {
          text: 'ID',
          align: 'start',
          sortable: false,
          value: 'id',
        },
        { text: '名稱', sortable: false, value: 'name' },
        { text: '曉日', sortable: false, value: 'sun' },
        { text: '皓月', sortable: false, value: 'moon' },
        { text: '繁星', sortable: false, value: 'star' },
        { text: '辰曦', sortable: false, value: 'morn' },
        { text: '刪除', sortable: false, value: 'del' },
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
    get_events() {
      let self = this;
      self.initOverlay = true;
      axios({
        method: 'get',
        url: config.apiurl + "/admin/read_events",
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
            self.serverEvents = response.data.message;
            console.log(self.serverEvents)
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
    new_id() {
      // Generate a new id with 5 characters
      let id = "";
      let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      for (let i = 0; i < 5; i++) {
        id += possible.charAt(Math.floor(Math.random() * possible.length));
      }
      if (this.id_exist(id)) {
        return this.new_id();
      }
      return id;
    },
    id_exist(id) {
      let self = this;
      for (let i = 0; i < self.serverEvents.length; i++) {
        if (self.serverEvents[i].id === id) {
          return true;
        }
      }
      return false;
    },
    insert_events() {
      this.serverEvents.push({
        id: this.new_id(),
        name: "",
        sun: "",
        moon: "",
        star: "",
        morn: "",
      })
    },
    delete_event(id) {
      console.log(id)
      let self = this;
      for (let i = 0; i < self.serverEvents.length; i++) {
        if (self.serverEvents[i].id === id) {
          self.serverEvents.splice(i, 1);
          return;
        }
      }
    },
    update_events() {
      // Check all filed not empty and not duplicate
      let self = this;

      var checkFlag = true;
      for (let i = 0; i < self.serverEvents.length; i++) {
        if (self.serverEvents[i].id === "" || self.serverEvents[i].name === "" || self.serverEvents[i].sun === "" || self.serverEvents[i].moon === "" || self.serverEvents[i].star === "" || self.serverEvents[i].morn === "") {
          checkFlag = false;
          break;
        }
      }
      if (!checkFlag) {
        alert("請確認所有欄位皆已填寫");
        return;
      }

      self.initOverlay = true;
      axios({
        method: 'post',
        url: config.apiurl + "/admin/write_events",
        headers: {
          'Authorization': self.$cookie.get("token"),
        },
        data: {
          events: self.serverEvents,
        },
      })
        .then(function (response) {
          self.initOverlay = false;
          console.log(response.data);
          self.initOverlay = false;
          if (response.data.code === 200) {
            console.log('You can access!')
            console.log(response.data)
            alert("更新成功");
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
  },
  mounted: function () {
    if (this.$cookie.get("token")) {
      this.loginStatus = true;
      this.verify_admin();
      this.get_events();
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