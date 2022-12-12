<template>
	<div class="app">
		 <el-container>
    <el-aside :width="isCollapse==false?'200px':'60px'">
			<el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      background-color="#333744"
      text-color="#fff"
      active-text-color="#ffd04b"
			:collapse="isCollapse"
			router>
      <el-submenu :index="item.path" v-for="(item,index) in menuslist" :key="index">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>{{item.authName}}</span>
        </template>
				 <el-menu-item :index="'/'+ele.path" v-for="(ele,index) in item.children" :key="index">{{ele.authName}}</el-menu-item>
      </el-submenu>
    </el-menu>
		</el-aside>
    <el-main>
				<div class="headers">
			<div class="left">
				<i class="el-icon-s-fold" @click="isCollapse=!isCollapse"></i>
       <img src="狗.jpg" alt="" class="ig">
			电商后台管理系统
			</div>
			<button class="btn" @click="out">退出登录</button>
		</div>
		<div class="right">
			<el-breadcrumb separator-class="el-icon-arrow-right">
  <el-breadcrumb-item :to="{ path: '/welcome' }">首页</el-breadcrumb-item>
  <el-breadcrumb-item v-for="(item,index) in breadList" :key="index">{{item}}</el-breadcrumb-item>
</el-breadcrumb>
       <router-view></router-view>
		</div>
		
		</el-main>
  </el-container>
 </div>
</template>

<script>
import {removeToken} from '../../../untils/auth.js'
export default {
	data () {
		return {
			isCollapse:false,
			menuslist:[],
		}
	},
	methods: {
				// 退出登录
				out(){
					removeToken()
					this.$router.push('/login')
				}
	},
	created () {
				this.$http.apiPost('/menus').then(res=>{
						console.log(res);
						this.menuslist=res.data.data
				})
	},
	mounted () {

	},
	components: {

	},
	computed: {
		//监听路由信息
		breadList(){
			return this.$route.meta || []
		}
	},
	watch: {

	},
}
</script>

<style lang='scss' scoped>
* {
  padding: 0;
  margin: 0;
}
.ig {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  margin: 0 10px;
}
.headers {
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding: 0 10px;
  width: 100%;
  height: 60px;
  background: #333744;
  color: #fff;
  line-height: 60px;
  margin: 0;
}
.left {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.app {
  width: 100vw;
  height: 100vh;
}
.el-menu-vertical-demo {
  width: 100%;
  height: 100vh;
}
.btn {
  width: 100px;
  height: 50px;
  border-radius: 10px;
  border: 0;
  margin-right: 10px;
}
.right {
  box-sizing: border-box;
  padding: 10px;
}
</style>
