<template>
 <div id="tmpl">
     <div class="navBar">
       <h1>logo</h1>
       <ul>
         <li  @click="isShowAbout"></li>
         <li></li>
         <li @click="showLogin">
           <span v-show='!isLogin'></span>
           <img :src="loginData.avatar_url" alt="" v-show="isLogin" @click="showDetailLogin">
         </li>
       </ul>
     </div>
 </div>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";
export default {
  data() {
    return {};
  },
  created() {},
  computed: {
    ...mapGetters("home", ["isLogin", "loginData", "isShowMeau"])
  },
  methods: {
    ...mapMutations("home", ["isShowAbout", "changeShowMeau"]),
    showLogin() {
      if (!this.isLogin) {
        this.$router.push("/login");
      } else {
      }
    },
    showDetailLogin() {
      // console.log(111);
      this.changeShowMeau();
    }
  }
};
</script>

<style lang="scss">
.navBar {
  position: fixed;
  width: 100%;
  height: 50px;
  background-color: rgba(7, 17, 27, 0.8);
  h1 {
    float: left;
    font-size: 0px;
    width: 140px;
    height: 50px;
    background: url("../../assets/logo.png");
  }
  ul {
    float: right;
    padding-top: 10px;
    li {
      float: left;
      width: 30px;
      height: 30px;
      margin-right: 10px;
    }
    li:nth-of-type(1) {
      background: url("../../assets/about.png");
    }
    li:nth-of-type(2) {
      background: url("../../assets/tell.png");
    }
    li:nth-of-type(3) {
      span {
        display: inline-block;
        width: 100%;
        height: 100%;
        background: url("../../assets/login.png");
      }
      img {
        display: inline-block;
        width: 100%;
        height: 100%;
        border-radius: 50%;
      }
    }
  }
}
</style>
