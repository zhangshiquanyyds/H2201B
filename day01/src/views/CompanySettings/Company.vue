<template>
	<div>
		<!-- <h1>公司设置</h1> -->
		<el-card>
			<el-menu
  :default-active="activeIndex2"
  class="el-menu-demo"
  mode="horizontal"
  background-color="#fff"
  text-color="#000"
  active-text-color="#5384fd"
	router>
  <el-menu-item index="/role">角色管理</el-menu-item>
  <el-menu-item index="/information">公司信息</el-menu-item>
	</el-menu>
	<router-view></router-view>
		</el-card>

 </div>
</template>

<script>

export default {
	data () {
		return {
   activeIndex2:'/role'
		}
	},
	methods: {

	},
	created () {

	},
	mounted () {

	},
	components: {

	},
	computed: {

	},
	watch: {

	},
}
</script>

<style lang='scss' scoped>
</style>
