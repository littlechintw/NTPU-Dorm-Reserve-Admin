<template>
  <v-card elevation="0">
    <v-container fluid>
      <v-row>
        <v-col cols="12">
          <v-row align="center" justify="center" length><br /></v-row>
          <v-row align="center" justify="center" length>
            <h1>床位抽選</h1>
          </v-row>
          <v-row align="center" justify="center" length><br /></v-row>
          <v-row align="center" justify="center" length>
            <v-textarea clearable clear-icon="mdi-close-circle" label="抽取學號" v-model="itemList"
              style="max-width: 300px">
            </v-textarea>
          </v-row>
          <v-row align="center" justify="center" length>
            <v-text-field v-model="itemCount" label="抽取數量" type="number" required
              style="max-width: 100px; padding-right: 30px;"></v-text-field>
            <v-btn @click="startLoad" color="yellow">抽選</v-btn>
          </v-row>
          <v-row align="center" justify="center" length>
            <v-textarea clearable clear-icon="mdi-close-circle" label="中籤學號" v-model="resultList"
              style="max-width: 300px">
            </v-textarea>
          </v-row>
          <v-row align="center" justify="center" length><br /></v-row>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      itemList: "",
      itemCount: 1,
      resultList: "",
    };
  },
  components: {
  },
  methods: {
    async startLoad() {
      var idList;
      for (var i = 0;i < 50;i++) {
        idList = this.itemList.split(/\r?\n/);
        this.resultList = this.listToStr(this.selectRandomItem(idList, this.itemCount));
        await this.sleep(i**2 / 10);
      }
      alert("抽選完成!");
    },
    sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    },
    selectRandomItem(list, number) {
      var result = [];
      for (var i = 0; i < number; i++) {
        var index = Math.floor(Math.random() * list.length);
        result.push(list[index]);
        list.splice(index, 1);
      }
      return result;
    },
    listToStr(list) {
      var result = "";
      for (var i = 0; i < list.length; i++) {
        result += list[i] + "\n";
      }
      return result;
    },
    
  },
  mounted: function () {
  },
};
</script>
