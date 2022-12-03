<template>
  <div>
    <my-list class="lists">
      <template #top>
          <h2>{{list1.title}}</h2>
      </template>
      <template #con>
       <ul>
        <li>{{list1.name1}}</li>
        <li>{{list1.name2}}</li>
        <li>{{list1.name3}}</li>
        <li>{{list1.name4}}</li>
      </ul>
      </template>
    </my-list>
    <my-list class="lists">
      <template #top>
          <h2>{{list2.title}}</h2>
      </template>
      <template #con>
       <ul>
        <li>{{list2.name1}}</li>
        <li>{{list2.name2}}</li>
        <li>{{list2.name3}}</li>
        <li>{{list2.name4}}</li>
      </ul>
      </template>
    </my-list>
    <my-list class="lists">
      <template #top >
          <h2>{{list3.title}}</h2>
      </template>
      <template #con>
       <ul>
        <li>{{list3.name1}}</li>
        <li>{{list3.name2}}</li>
        <li>{{list3.name3}}</li>
        <li>{{list3.name4}}</li>
      </ul>
      </template>
    </my-list>
 </div>
</template>

<script>
import data from "../../moke/list.json";
import myList from "../components/myList";
export default {
  data() {
    return {
      list1: [],
      list2: [],
      list3: []
    };
  },
  methods: {},
  created() {
    this.list1 = data.data[0];
    this.list2 = data.data[1];
    this.list3 = data.data[2];
    console.log(data.data);
  },
  mounted() {},
  components: {
    myList
  },
  computed: {},
  watch: {}
};
</script>

<style lang='scss' scoped>
.lists {
  color: #fff;
  width: 300px;
  height: 300px;
  background: blueviolet;
  float: left;
  margin: 0 20px;
}
h2 {
  background: pink;
}
</style>
