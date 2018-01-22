<template>
 <div id="tmpl">
     <div class="navBar">
       <h1>logo</h1>
       <ul>
         <li  @click="isShowAbout"></li>
         <li></li>
         <li></li>
       </ul>
     </div>
 </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  data() {
    return {};
  },
  methods: {
    ...mapMutations("home", ["isShowAbout"])
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
      background: url("../../assets/login.png");
    }
  }
}
</style>
