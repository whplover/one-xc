<template>
 <div id="tmpl">
     <nav-bar></nav-bar>
     <div class="navItem">
       <ul>
         <li>全部</li>
         <li>精华</li>
         <li>分享</li>
         <li>问题</li>
         <li>招聘</li>
         <li>客户端测试</li>
       </ul>
     </div>
     <div class="ctn">
       <ul>
         <li v-for="(item,index) in itemData" :key="index">
           <li-item :item = "item"></li-item>
         </li>
       </ul>
       <div class="toTop"></div>
     </div>
     <about v-if="isAbout"></about>
 </div>
</template>

<script>
import navBar from "@/components/home/navBar.vue";
import liItem from "@/components/home/liItem.vue";
import about from "@/components/home/about.vue";

import { mapState, mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      // itemData: ""
    };
  },
  created() {
    this.getData("all", 1);
  },
  computed: {
    ...mapState("home", ["isAbout"]),
    ...mapGetters("home", ["itemData"])
  },
  methods: {
    ...mapActions("home", ["getItemData"]),
    getData(tabType, pageCount) {
      this.$http
        .get(`https://cnodejs.org/api/v1/topics/?tab=${tabType}&page=1`)
        .then(res => {
          this.getItemData(res.data.data);
        });
    }
  },
  components: {
    navBar,
    liItem,
    about
  }
};
</script>

<style lang='scss'>
.navItem {
  position: fixed;
  top: 50px;
  width: 100%;
  height: 36px;
  background-color: rgba(7, 17, 27, 0.8);
  margin-top: 1px;
  color: #fff;
  ul {
    li {
      margin-left: 15px;
      float: left;
      line-height: 36px;
    }
  }
}
.ctn {
  padding-top: 90px;
}
</style>
