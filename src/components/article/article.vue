<template>
 <div class="article">
     
     <!-- <div class="title">
         <div class="back" @click="backTo"></div>
         <h3>主题主题主题主题</h3>
         <div class="home" @click="goHome"></div>
     </div> -->
      <subHeader :mainTitle = "title"></subHeader>
 </div>
</template>

<script>
import subHeader from "@/components/common/subHeader.vue";
export default {
  data() {
    return {
      title: "article详情页"
    };
  },
  methods: {
    backTo() {
      this.$router.back();
    },
    goHome() {
      this.$router.push("/");
    }
  },
  components: {
    subHeader
  }
};
</script>

<style lang="scss">
.article {
  .title {
    width: 100%;
    position: fixed;
    height: 50px;
    background-color: rgba(7, 17, 27, 0.8);
    padding-top: 5px;
    .back {
      width: 38px;
      height: 40px;
      background: url("../../assets/back.png") center center;
      float: left;
    }
    h3 {
      position: absolute;
      color: #fff;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }
    .home {
      width: 40px;
      height: 40px;
      float: right;
      background: url("../../assets/home.png") center top;
    }
  }
}
</style>
