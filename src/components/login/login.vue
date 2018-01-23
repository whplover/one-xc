<template>
 <div class="login">
     <subHeader :mainTitle="title"></subHeader>
     <div class="logo"></div>
     <p>
         请到CNode中文网,将设置选项中的AccessToken字符串拷贝到输入框中
         ,并点击登录,完成用户验证.(30天内免登陆).
         
     </p>
     <input type="text" id="login" placeholder="在此输入token" ref="token" value="51c843de-f369-4d58-89af-dce284738e82">
      <button id="btn" @click="login">登录</button>

 </div>
</template>

<script>
import subHeader from "@/components/common/subHeader.vue";
import { mapActions, mapGetters, mapMutations } from "vuex";
export default {
  data() {
    return {
      title: "登录页面"
    };
  },
  created() {},
  computed: {
    ...mapGetters("home", ["isLogin"])
  },
  methods: {
    ...mapActions("home", ["getLoginData"]),
    login() {
      const token = "51c843de-f369-4d58-89af-dce284738e82";

      this.$http
        .post("https://cnodejs.org/api/v1/accesstoken", {
          accesstoken: token
        })
        .then(res => {
          // console.log(JSON.parse(res.data));
          this.getLoginData(res.data);
          this.$router.push("/");
        });
    }
  },
  components: {
    subHeader
  }
};
</script>

<style lang='scss'>
.login {
  overflow: hidden;
  .logo {
    width: 80%;
    height: 80px;
    margin: 100px 30px auto;
    background: url("../../assets/logo.png") no-repeat center center;
  }
  p {
    width: 80%;
    margin: 0 auto;
  }
  #login {
    width: 80%;
    height: 40px;
    display: block;
    margin: 30px auto;
  }
  #btn {
    width: 80px;
    height: 50px;
    display: block;
    margin: 0 auto;
  }
}
</style>
