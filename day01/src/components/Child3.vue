<template>
  <div>
    <h1>我是子组件3</h1>
    <h1>{{name}}</h1>
 </div>
</template>

<script>
export default {
  inject: ["name"], //接收provide传来的值
  data() {
    return {};
  },
  methods: {},
  created() {},
  mounted() {},
  components: {},
  computed: {},
  watch: {},
};
</script>

<style lang='scss' scoped>
</style>
