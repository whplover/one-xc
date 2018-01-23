<template>
 <div class="myIndex">
     <subHeader :mainTitle="loginData.loginname"></subHeader>
 </div>
</template>

<script>
import subHeader from "../common/subHeader.vue";
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      title: ""
    };
  },
  computed: {
    ...mapGetters("home", ["loginData"])
  },
  methods: {},
  components: {
    subHeader
  }
};
</script>

<style scoped>

</style>
