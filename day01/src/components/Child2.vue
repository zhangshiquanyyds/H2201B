<template>
  <div>
    <h1>我是子组件2</h1>
    <button @click="add">点我传给子组件1</button>
 </div>
</template>

<script>
export default {
  data() {
    return {
      title: "我是子组件2传来的值",
    };
  },
  methods: {
    add() {
      this.$bus.$emit("add", this.title);
    },
  },
  created() {},
  mounted() {},
  components: {},
  computed: {},
  watch: {},
};
</script>

<style lang='scss' scoped>
</style>
