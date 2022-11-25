<template>
  <div>
    <el-row>
  <el-col :span="5">
     <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      background-color="#003a72"
      text-color="#fff"
      router
      active-text-color="#ffd04b">
      <el-menu-item index="/home">首页</el-menu-item>
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-s-cooperation"></i>
          <span>数据管理</span>
        </template>
         <el-menu-item index="/user">用户列表</el-menu-item>
         <el-menu-item index="/business">商家列表</el-menu-item>
         <el-menu-item index="/food">食品列表</el-menu-item>
         <el-menu-item index="/order">订单列表</el-menu-item>
         <el-menu-item index="/administrators">管理员列表</el-menu-item>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-circle-plus-outline"></i>
          <span>添加数据</span>
        </template>
         <el-menu-item index="/shops/:id">添加商铺</el-menu-item>
         <el-menu-item index="/commodity">添加商品</el-menu-item>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-platform-eleme"></i>
          <span>图表</span>
        </template>
         <el-menu-item index="/distribution">用户分布</el-menu-item>
      </el-submenu>
      <el-submenu index="4">
        <template slot="title">
          <i class="el-icon-edit"></i>
          <span>编辑</span>
        </template>
         <el-menu-item index="/edit">文本编辑</el-menu-item>
      </el-submenu>
      <el-submenu index="5">
        <template slot="title">
          <i class="el-icon-s-tools"></i>
          <span>设置</span>
        </template>
         <el-menu-item index="/admin">管理员设置</el-menu-item>
      </el-submenu>
      <el-submenu index="6">
        <template slot="title">
          <i class="el-icon-notebook-1"></i>
          <span>说明</span>
        </template>
         <el-menu-item index="/explain">说明</el-menu-item>
      </el-submenu>

    </el-menu>
  </el-col>
  <el-col :span="19">
    <el-breadcrumb separator="/">
  <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
  <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
  <el-breadcrumb-item>活动列表</el-breadcrumb-item>
  <el-breadcrumb-item>活动详情</el-breadcrumb-item>
</el-breadcrumb>
    <router-view></router-view>
  </el-col>
</el-row>
        
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
