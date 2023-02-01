<template>
  <div>
    <Child/>
    <Child2/>
 </div>
</template>

<script>
import Child from "@/components/Child.vue";
import Child2 from "@/components/Child2.vue";
export default {
  components: {
    Child,
    Child2,
  },
  data() {
    return {};
  },
  methods: {},
  created() {},
  mounted() {},
  computed: {},
  watch: {},
};
</script>

<style lang='scss' scoped>
</style>
