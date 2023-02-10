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
          <v-data-table :headers="headers" :items="serverAdmin_member" class="elevation-1" :items-per-page="50" hide-default-footer>
            <!-- <template v-slot:item.id="{ item }">
              <v-text-field v-model="item.name" label="名稱" required></v-text-field>
            </template>
            <template v-slot:item.passwd="{ item }">
              <v-text-field v-model="item.sun" label="密碼" required></v-text-field>
            </template>
            <template v-slot:item.dorm="{ item }">
              <v-text-field v-model="item.sun" label="種類" required></v-text-field>
            </template> -->
            <template v-slot:item.del="{ item }">
              <v-btn class="mr-4" @click="delete_member(item.id)" icon v-show="item.id!=410885045">
                <v-icon>mdi-delete</v-icon>
              </v-btn>
            </template>
          </v-data-table>
        </template>
      </v-row>
      <v-row align="center" justify="center" length><br /></v-row>
      <!-- <v-row align="center" justify="center" length>
        <v-btn color="#" outlined class="mr-4" @click="insert_member">新增項目</v-btn>
        <v-btn color="#87C1A2" class="mr-4" @click="update_events">更新</v-btn>
      </v-row> -->
      <v-row align="center" justify="center" length><br /></v-row>
      <v-row align="center" justify="center" length>
        <v-card width="300px">
          <v-card-title>
            <span class="headline">新增使用者</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                  <v-text-field v-model="new_member.id" label="ID" required></v-text-field>
                  <v-text-field v-model="new_member.passwd" label="密碼" disabled required></v-text-field>
                  <!-- <v-text-field v-model="new_member.dorm" label="種類" required></v-text-field> -->
                  <v-combobox v-model="new_member.dorm" :items="dormList" label="種類"></v-combobox>
                  <p>admin 為完整管理員權限</p>
                  <p>master 僅報到權限，適合櫃檯使用</p>
              </v-row>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text @click="insert_member">新增</v-btn>
          </v-card-actions>
        </v-card>
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
      serverAdmin_member: [],
      headers: [
        {
          text: 'ID',
          align: 'start',
          sortable: false,
          value: 'id',
        },
        { text: '密碼', sortable: false, value: 'passwd' },
        { text: '種類', sortable: false, value: 'dorm' },
        { text: '刪除', sortable: false, value: 'del' },
      ],
      new_member: {
        id: "",
        passwd: "",
        dorm: "",
      },
      dormList: [
        "admin",
        "master",
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
    new_passwd() {
      let passwd = "";
      let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      for (let i = 0; i < 15; i++) {
        passwd += possible.charAt(Math.floor(Math.random() * possible.length));
      }
      return passwd;
    },
    get_admin_member() {
      this.new_member = {
        id: "",
        passwd: this.new_passwd(),
        dorm: "",
      };
      let self = this;
      self.initOverlay = true;
      axios({
        method: 'get',
        url: config.apiurl + "/admin/read_admin_member",
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
            self.serverAdmin_member = response.data.message;
            console.log(self.serverAdmin_member)
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
    insert_member() {
      if (this.new_member.id === "" || this.new_member.passwd === "" || this.new_member.dorm === "") {
        alert("請輸入完整資料");
        return;
      }
      if (this.new_member.dorm !== "admin" && this.new_member.dorm !== "master") {
        alert("種類錯誤");
        return;
      }
      let self = this;
      self.initOverlay = true;
      axios({
        method: 'post',
        url: config.apiurl + "/admin/edit_admin_member",
        headers: {
          'Authorization': self.$cookie.get("token"),
        },
        data: {
          member:{
            id: self.new_member.id,
            passwd: self.new_member.passwd,
            dorm: self.new_member.dorm,
          },
          action: 'add'
        },
      })
        .then(function (response) {
          self.initOverlay = false;
          console.log(response.data);
          self.initOverlay = false;
          if (response.data.code === 200) {
            console.log('You can access!')
            console.log(response.data)
            alert("新增成功");
            self.get_admin_member();
          } else {
            console.log(response.data)
            alert(response.data.message);
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
    delete_member(id) {
      let self = this;
      self.initOverlay = true;
      axios({
        method: 'post',
        url: config.apiurl + "/admin/edit_admin_member",
        headers: {
          'Authorization': self.$cookie.get("token"),
        },
        data: {
          member:{
            id: id,
          },
          action: 'delete'
        },
      })
        .then(function (response) {
          self.initOverlay = false;
          console.log(response.data);
          self.initOverlay = false;
          if (response.data.code === 200) {
            console.log('You can access!')
            console.log(response.data)
            alert("刪除成功");
            self.get_admin_member();
          } else {
            console.log(response.data)
            alert(response.data.message);
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
      this.get_admin_member();
      this.new_member.passwd = this.new_passwd();
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