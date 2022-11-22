<template>
  <div>
    <h1>首页</h1>
 </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {};
  },
  methods: {},
  created() {
    axios({
      url:"https://cangdu.org/manage/static/js/manifest.dcee10e3d0ac2ad34379.js",
      method:'get',
    }).then((res)=>{
      console.log(res);
    })
  },
  mounted() {},
  components: {},
  computed: {},
  watch: {}
};
</script>

<style lang='scss' scoped>
</style>
