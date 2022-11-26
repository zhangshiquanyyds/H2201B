<template>
  <div>
    {{msg}}
    <span v-bind:title="msgess">
          鼠标悬停几秒查看提示信息
    </span>
    <div>
      <ul><li v-for="(item,index) in list" :key="index">{{item.name}}
        </li></ul>
        <button @click="xg">修改</button>

        <input type="text" @change="chang" v-model="inputvalue">

        <p>{{inputvalue}}</p>
    </div>
 </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "wqehdsa",
      msgess: "页面创建于" + new Date().toLocaleString(),
      list: [{ name: "小米" }, { name: "小打" }, { name: "小小" }],
      inputvalue:''
    };
  },
  methods: {
    xg() {
      this.list[0].name = "1111";
    },
    chang(e){
        console.log(e.target.value);
    }
  },
  created() {},
  mounted() {},
  components: {},
  computed: {},
  watch: {}
};
</script>

<style lang='scss' scoped>
</style>

