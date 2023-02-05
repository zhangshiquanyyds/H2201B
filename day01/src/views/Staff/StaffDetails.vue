<template>
	<div>
		<el-card>
<el-menu
  :default-active="activeIndex2"
  class="el-menu-demo"
  mode="horizontal"
  text-color="#000"
  active-text-color="#4a7bfb"
	router>
  <el-menu-item index="/loginaccount/:id">登录账户设置</el-menu-item>
  <el-menu-item index="/personaldetails">个人详情</el-menu-item>
  <el-menu-item index="/positioninfo">岗位信息</el-menu-item>
</el-menu>
	<router-view></router-view>
		</el-card>

 </div>
</template>

<script>

export default {
	data () {
		return {
			activeIndex2:"/loginaccount/:id"
		}
	},
	methods: {

	},
	created () {
   this.$store.commit('staff/getdetails', this.$route.params.id)
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
