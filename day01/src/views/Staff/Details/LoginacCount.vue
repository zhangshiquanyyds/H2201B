<template>
	<div>
		<!-- <h1>登录账户设置</h1> -->
		<el-form ref="form" :model="form" label-width="180px" style="margin-top: 20px">
  <el-form-item label="姓名:">
    <el-input v-model="$store.state.staff.staffdetailslist.username" style="width:300px;"></el-input>
  </el-form-item>
  <el-form-item label="新密码:">
    <el-input v-model="$store.state.staff.staffdetailslist.password" style="width:300px;"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary">更新</el-button>
  </el-form-item>
</el-form>
 </div>
</template>

<script>
export default {
	data () {
		return {

		}
	},
	methods: {

	},
	created() {

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
.a {
  margin-top: 10px;
}
</style>
