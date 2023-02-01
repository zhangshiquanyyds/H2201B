<template>
  <div>
    <button @click="add">点击存储到本地</button>
    <Child3/>
 </div>
</template>

<script>
import Child3 from "@/components/Child3.vue";
export default {
  provide: {
    name: "宋增杰",
  },
  components: {
    Child3,
  },
  data() {
    return {
      list: ["张三", "李四"],
    };
  },
  methods: {
    // v-model实现组件传值

    /**本地存储 */
    add() {
      localStorage.setItem("list", JSON.stringify(this.list));
      JSON.parse(localStorage.getItem("list")); //通过get来取数据
    },
    // $parent和$children,不是响应式的，不经常使用
    // $parent: 在父组件中可以获取所有子组件的实例,
    // $children: 在子组件中可以获取所有父组件的实例,

    // $attrs用于多级组件嵌套传值,
  },
  created() {},
  mounted() {},

  computed: {},
  watch: {},
};
</script>

<style lang='scss' scoped>
</style>
