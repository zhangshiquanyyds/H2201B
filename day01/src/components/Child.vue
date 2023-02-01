<template>
  <div>
    <h1>我是子组件1</h1>
    <h1>{{list}}</h1>
    <button @click="emit">修改父组件的数据</button>
    <h2>{{title}}</h2>
 </div>
</template>

<script>
export default {
  props: ["list"],
  data() {
    return {
      msg: "我是子组件传过来的数据",
      title: "",
    };
  },
  methods: {
    emit() {
      this.$emit("updata", this.msg);
    },
  },
  created() {},
  mounted() {
    this.$bus.$on("add", (value) => {
      console.log(value);
      this.title = value;
    });
  },
  components: {},
  computed: {},
  watch: {},
};
</script>

<style lang='scss' scoped>
</style>
