<template>
  <v-container fluid>
    <a href="/admin">報到頁面</a><br />
    <a href="/reserve_list">預約總表</a><br />
    <a href="/edit_user">新增 / 編輯 / 刪除使用者</a><br />
    <a href="/events">編輯報到時間</a><br />
    <a href="/config">伺服器設定</a><br />
    <a href="/adminmember">管理者帳號</a><br />
    <a href="/status">現在預約 / 報到狀態</a><br />
    <a href="/visitor">宿舍內訪客</a><br />
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      window_height: 100,
      window_width: 100,
    };
  },
  mounted: function () {
    this.window_height = window.innerHeight;
    this.window_width = window.innerWidth;
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
