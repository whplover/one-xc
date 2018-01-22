<template>
  <div class="liItem">
        <p>制定-分享-1天前</p>
        <div class="title">
              
            <router-link :to="'/article/'+id" class="titles">{{item.title}}</router-link>
            <div class="pic">
                <img :src="item.author.avatar_url" alt="">
                <p>{{item.author.loginname}}</p>
            </div>
        </div>
        <div class="itemFooter">
            <img src="../../assets/footer.png" alt="">
        </div>
    </div>
</template>

<script>
// import { mapState, mapActions, mapGetters } from "vuex";

export default {
  data() {
    return {
      id: 123
    };
  },
  props: ["item"],
  computed: {
    // ...mapGetters("home", ["itemData"])
  },
  methods: {}
};
</script>

<style lang="scss">
.liItem {
  border-bottom: 1px solid rgba(7, 17, 27, 0.8);
  height: 100px;
  width: 100%;
  padding-top: 10px;
  & > p {
    font-size: 14px;
    margin-left: 10px;
  }
  .title {
    height: 60px;
    .titles {
      float: left;
      width: 70%;
      padding: 10px 0;
      margin-left: 10px;
      font-size: 14px;
    }
    .pic {
      float: right;
      margin-right: 20px;
      width: 46px;
      img {
        margin-top: 5px;
        width: 46px;
        height: 46px;
        border-radius: 100%;
      }
      p {
        width: 100%;
        text-align: center;
        font-size: 12px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
  }
  .itemFooter {
    margin-left: 10px;
  }
}
</style>
