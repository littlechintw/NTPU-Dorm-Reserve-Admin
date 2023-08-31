<template>
  <v-container fluid>
    <!-- <div v-for="(item, index) in urlList" :key="index" :value="index">
      <a :href="item.url">{{ item.title }}</a><br />
    </div> -->

    <v-select v-model="selectedOption" label="選單 / Menu" :items="urlList" item-text="title" item-value="url"
      @change="handleOptionChange" outlined></v-select>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      window_height: 100,
      window_width: 100,
      selectedOption: null,
      urlList: [
        {
          url: '/admin',
          title: '報到頁面',
        },
        {
          url: '/reserve_list',
          title: '預約總表',
        },
        {
          url: '/edit_user',
          title: '新增 / 編輯 / 刪除使用者',
        },
        {
          url: '/events',
          title: '編輯報到列表',
        },
        {
          url: '/adminmember',
          title: '管理者帳號',
        },
        {
          url: '/status',
          title: '現在預約 / 報到狀態',
        },
        {
          url: '/config',
          title: '系統開放時間設定',
        },
        {
          url: '/studentsExcelUpload',
          title: '宿生資料 Excel 上傳',
        },
      ],
      items: [
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me 2' },
      ],
    };
  },
  methods: {
    handleOptionChange() {
      if (this.selectedOption) {
        window.location.href = this.selectedOption;
      }
    },
  },
  mounted: function () {
    this.window_height = window.innerHeight;
    this.window_width = window.innerWidth;

    const currentURLPath = window.location.pathname;

    // Find the matching option in urlList
    const matchedOption = this.urlList.find(option => option.url === currentURLPath);

    // Set the matched option as selectedOption
    if (matchedOption) {
      this.selectedOption = matchedOption;
    }
  },
};
</script>

<style>
.intext {
  padding-left: 30px;
}

red {
  color: red;
}

table,
td {
  border: 1px solid #333;
}
</style>
