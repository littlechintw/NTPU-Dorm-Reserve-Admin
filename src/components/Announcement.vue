<template>
  <v-container fluid>
    <a href="/reserve_list">預約總表</a>
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
