<template>
 <div class="about">
     <div class="wrap">
         <h3>关于组件</h3>
     </div>
     <div class="aboutHidde" @click="isShowAbout"></div>
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
.about {
  position: fixed;

  width: 100%;
  height: 100%;
  background-color: rgba(7, 17, 27, 0.3);
  z-index: 100;
  top: 0;

  .wrap {
    width: 280px;
    height: 300px;
    background-color: rgba(7, 17, 27, 0.8);
    position: absolute;
    top: 200px;
    left: 50%;
    transform: translateX(-50%);
    h3 {
      color: #fff;
    }
  }
  .aboutHidde {
    width: 100%;
    height: 100%;
  }
}
</style>
