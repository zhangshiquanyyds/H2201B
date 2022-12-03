<template>
  <div>
      <h1>home页面</h1>
      <router-link to="/child">点击展开子路由页面</router-link>
      <div>
        <router-view>
        </router-view>
      </div>
 </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {},
  created() {},
  mounted() {},
  components: {},
  computed: {},
  watch: {}
};
</script>

<style lang='scss' scoped>
</style>
