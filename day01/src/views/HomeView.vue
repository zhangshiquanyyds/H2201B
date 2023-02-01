<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <Child :list="title"  @updata="emit"/>
    <h1>{{msg}}</h1>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import Child from "@/components/Child.vue";

export default {
  name: "HomeView",
  components: {
    HelloWorld,
    Child,
  },
  data() {
    return {
      title: "我是父组件传来的值",
      msg: "",
    };
  },
  methods: {
    emit(val) {
      console.log(val);
      this.msg = val;
    },
  },
};
</script>
