<template>
  <div>
    <h2>我是home子路由</h2>
    <router-link to="/childchild">点击展开我的子路由页面</router-link>
    <router-view></router-view>
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
