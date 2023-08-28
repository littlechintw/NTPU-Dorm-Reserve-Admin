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
        <h1>宿生資料 Excel 上傳</h1>
        <h3>使用 Excel 上傳，將會自動刪除所有宿生資料，並且新增此份宿生資料。</h3>
        <a href="/NTPU_Dorm_Example.xlsx">下載範例 Excel 檔案</a>
        <br /><br />

        <input type="file" @change="handleFileUpload" accept=".xlsx" />

        <div v-show="newFile">
          <br />
          <h4>本資料總人數：{{ insertStudentNum.all }}</h4>
          <h4>曉日：{{ insertStudentNum.sun }}</h4>
          <h4>皓月：{{ insertStudentNum.moon }}</h4>
          <h4>繁星：{{ insertStudentNum.star }}</h4>
          <h4>辰曦：{{ insertStudentNum.morn }}</h4>

          <br />
          <v-btn class="mx-2" color="#87A1A2" v-show="!uploadConfirm" @click="uploadConfirm = true">
            上傳資料
          </v-btn>
          <h3 v-show="uploadConfirm" style="color: red">點選＂確認資料上傳＂按鈕才會開始動作，此動作將會刪除所有資料，並須等待一段時間，如顯示上傳失敗，請務必檢查內容，並重新上傳。
          </h3>
          <v-btn class="mx-2" color="#87C1A2" v-show="uploadConfirm" @click="upload_all_member">確認資料上傳</v-btn>
          <v-btn class="mx-2" color="pink" v-show="uploadConfirm" @click="uploadConfirm = false">取消</v-btn>
          <h3 style="color: red;">{{ alertMsg }}</h3>

          <br /><br />
          <v-row align="center" justify="center" length>
            <template>
              <v-data-table :headers="headers" :items="insertStudentList" class="elevation-1" :items-per-page="2000"
                hide-default-footer>
                <!-- <template v-slot:item.id="{ item }">
              <v-text-field v-model="item.name" label="名稱" required></v-text-field>
            </template>
            <template v-slot:item.passwd="{ item }">
              <v-text-field v-model="item.sun" label="密碼" required></v-text-field>
            </template>
            <template v-slot:item.dorm="{ item }">
              <v-text-field v-model="item.sun" label="種類" required></v-text-field>
            </template> -->
                <template v-slot:item.dorm="{ item }">
                  <v-chip color="blue" outlined v-if="item.dorm == 'sun'">
                    曉日
                  </v-chip>
                  <v-chip color="pink" outlined v-if="item.dorm == 'moon'">
                    皓月
                  </v-chip>
                  <v-chip color="purple" outlined v-if="item.dorm == 'star'">
                    繁星
                  </v-chip>
                  <v-chip color="green" outlined v-if="item.dorm == 'morn'">
                    辰曦
                  </v-chip>
                </template>

              </v-data-table>
            </template>
          </v-row>
        </div>

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
      headers: [
        { text: '宿舍', value: 'dorm' },
        { text: '學號', value: 'id' },
        { text: '姓名', value: 'name' },
        { text: '床號', value: 'bed' },
      ],
      insertStudentList: [],
      insertStudentNum: {
        'all': 0,
        'sun': 0,
        'moon': 0,
        'star': 0,
        'morn': 0,
      },
      newFile: false,
      uploadConfirm: false,
      alertMsg: "",
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
    worksheet_process(building, jsonData) {
      // Get first row to know the index of item
      const firstRow = jsonData[0];
      const index = ['StudentID', 'Name', 'Bed']
      const indexList = [-1, -1, -1]

      for (let i = 0; i < firstRow.length; i++) {
        const item = firstRow[i];
        for (let j = 0; j < index.length; j++) {
          const indexItem = index[j];
          if (item == indexItem) {
            indexList[j] = i
          }
        }
      }

      for (let i = 0; i < indexList.length; i++) {
        const item = indexList[i];
        if (item == -1) {
          alert("Excel 格式錯誤，請檢查欄位名稱是否正確，載入資料將不完整。")
          return
        }
      }

      for (let i = 1; i < jsonData.length; i++) {
        const student = jsonData[i];
        const studentInfo = {
          dorm: building,
          id: student[indexList[0]],
          name: student[indexList[1]],
          bed: student[indexList[2]],
        }
        this.insertStudentList.push(studentInfo)
      }
    },

    handleFileUpload(event) {
      this.newFile = true
      this.insertStudentList = []
      const file = event.target.files[0];
      const reader = new FileReader();

      reader.onload = (e) => {
        const data = new Uint8Array(e.target.result);
        const workbook = read(data, { type: 'array' });
        const sun_worksheet = workbook.Sheets['SUN'];
        const moon_worksheet = workbook.Sheets['MOON'];
        const star_worksheet = workbook.Sheets['STAR'];
        const morn_worksheet = workbook.Sheets['MORN'];

        // const jsonData = utils.sheet_to_json(sun_worksheet, { header: 1 });
        this.worksheet_process("sun", utils.sheet_to_json(sun_worksheet, { header: 1 }));
        this.worksheet_process("moon", utils.sheet_to_json(moon_worksheet, { header: 1 }));
        this.worksheet_process("star", utils.sheet_to_json(star_worksheet, { header: 1 }));
        this.worksheet_process("morn", utils.sheet_to_json(morn_worksheet, { header: 1 }));

        this.insertStudentNum.all = this.insertStudentList.length
        this.insertStudentNum.sun = this.insertStudentList.filter(item => item.dorm == "sun").length
        this.insertStudentNum.moon = this.insertStudentList.filter(item => item.dorm == "moon").length
        this.insertStudentNum.star = this.insertStudentList.filter(item => item.dorm == "star").length
        this.insertStudentNum.morn = this.insertStudentList.filter(item => item.dorm == "morn").length

        // Process the jsonData as required
        console.log(jsonData);
      };

      reader.readAsArrayBuffer(file);
    },

    upload_all_member() {
      this.alertMsg = ""
      let self = this;
      axios({
        method: 'post',
        url: config.apiurl + "/admin/upload_all_member",
        headers: {
          'Authorization': self.$cookie.get("token"),
        },
        data: {
          member: this.insertStudentList
        },
      })
        .then(function (response) {
          if (response.data.code === 200) {
            console.log('You can access!')
            if (response.data.message.status == "success") {
              alert("上傳成功！")
            }
            else {
              alert("上傳失敗，請檢查資料是否正確，並且重新上傳。")
              self.alertMsg = response.data.message.errMsg
              alert(response.data.message.errMsg)
            }
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
