<template>
 <div class="subHeader">
     
     <div class="title">
         <div class="back" @click="backTo"></div>
         <h3>{{mainTitle}}</h3>
         <div class="home" @click="goHome"></div>
     </div>


 </div>
</template>

<script>
export default {
  props: ["mainTitle"],
  data() {
    return {};
  },
  methods: {
    backTo() {
      this.$router.back();
    },
    goHome() {
      this.$router.push("/");
    }
  }
};
</script>

<style lang="scss">
.subHeader {
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
