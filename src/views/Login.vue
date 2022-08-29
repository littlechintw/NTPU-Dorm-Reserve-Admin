<template>
  <v-card elevation="0">
    <v-container fluid>
      <v-row>
        <v-col cols="12">
          <v-row align="center" justify="center" length><br /></v-row>
          <v-row align="center" justify="center" length><br /></v-row>
          <div v-show="formShow">
            <v-row align="center" justify="center" length>
              <h3>請登入後台帳號</h3>
            </v-row>
            <v-row align="center" justify="center" length>
              <v-form
                ref="form"
                v-model="valid"
                v-on:submit.prevent="validate"
                lazy-validation
              >
                <v-text-field
                  v-model="stuid"
                  :rules="stuidRules"
                  label="帳號 / Account"
                  required
                ></v-text-field>
                <v-text-field
                  v-model="pwd"
                  :rules="pwdRules"
                  label="密碼 / Password"
                  type="password"
                  required
                ></v-text-field>
                <v-btn
                  :disabled="!valid"
                  color="#87C1A2"
                  class="mr-4"
                  @click="validate"
                  >登入 / Login</v-btn
                >
              </v-form>
            </v-row>
            <v-row align="center" justify="center" length>
              <br />
            </v-row>
          </div>
          <div v-show="formLoadingShow">
            <v-row align="center" justify="center" length><br /></v-row>
            <v-row align="center" justify="center" length>
              <v-progress-circular
                indeterminate
                color="amber"
              ></v-progress-circular>
            </v-row>
          </div>
          <br />
          <v-row
            align="center"
            justify="center"
            length
            style="background-color: #17252a; color: white; zoom: 1.3"
          >
            {{ tipsText }}
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
const axios = require("axios");
var config = require("../../config.json");

export default {
  name: "Home",
  data() {
    return {
      valid: false,
      stuid: "",
      stuidRules: [
        (v) => !!v || "請輸入帳號",
      ],
      pwd: "",
      pwdRules: [(v) => !!v || "請輸入密碼"],
      formShow: true,
      formLoadingShow: false,
      tipsText: "",
    };
  },
  components: {},
  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        this.formShow = false;
        this.formLoadingShow = true;
        this.tipsText = "";
        let self = this;
        axios
          .post(config.apiurl + "/admin/login", {
            id: this.stuid,
            pwd: this.pwd,
          })
          .then(function (response) {
            console.log(response.data);
            if (response.data.code !== 200) {
              self.formShow = true;
              self.formLoadingShow = false;
              self.tipsText = response.data.message;
            } else {
              self.$cookie.set("token", response.data.session, 1);
              self.$router.push("/admin");
              location.reload();
            }
          })
          .catch(function (error) {
            alert(error);
          });
      }
    },
  },
  mounted: function () {
    if (this.$cookie.get("token")) {
      this.$router.push("/admin");
    }
  },
};
</script>
