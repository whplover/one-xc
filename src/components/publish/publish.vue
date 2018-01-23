<template>
 <div class="publish">
     <sub-header :mainTitle = "title"></sub-header>
 </div>
</template>

<script>
import subHeader from "@/components/common/subHeader.vue";
export default {
  data() {
    return {
      title: "新建文章"
    };
  },
  methods: {},
  components: {
    subHeader
  }
};
</script>

<style scoped>

</style>
