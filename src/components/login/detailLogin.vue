<template>
 <div class="detailLogin">
     <ul>
         <li @click="myIndex">我的主页</li>
         <li @click="publish">发布文章</li>
         <li>我的收藏</li>
         <li @click="loginOut">退出登录</li>
     </ul>
 </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  data() {
    return {};
  },
  methods: {
    ...mapMutations("home", ["loginOut", "changeShowMeau"]),
    myIndex() {
      this.$router.push("/myindex");
      this.changeShowMeau();
    },
    publish() {
      this.$router.push("/publish");
      this.changeShowMeau();
    }
  }
};
</script>

<style lang="scss">
.detailLogin {
  width: 100%;
  height: 200px;
  position: fixed;
  background-color: rgba(7, 17, 27, 0.8);
  top: 51px;
  ul {
    width: 100%;
    li {
      width: 80%;
      height: 50px;
      color: #fff;
      line-height: 50px;
      text-align: center;
      border-bottom: 1px solid #475669;
      margin: 0 auto;
    }
  }
}
</style>
