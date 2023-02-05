<template>
	<div>
		<!-- <h1>公司信息页面</h1> -->
		<div class="title"><i class="el-alert__icon el-icon-info"></i> 对公司名称、公司地址、营业执照、公司地区的更新，将使得公司资料被重新审核，请谨慎修改</div>
		<div>
			<p>公司名称 <el-input
  placeholder="江苏传智博客教育科技股份有限公司"
	style="width:400px;"
  :disabled="true">
</el-input></p><br/>
			<p>公司地址 <el-input
  placeholder="北京市昌平区建材城西路金燕龙办公楼一层"
  style="width:400px;"
  :disabled="true">
</el-input></p><br/>
			<p>邮箱 <el-input
  placeholder="北京市昌平区建材城西路金燕龙办公楼一层"
  style="width:400px;"
  :disabled="true">
</el-input></p><br/>
			<p>备注 <el-input
  type="textarea"
  :rows="2"
  placeholder="请输入内容"
	:disabled="true"
	style="width:400px;"
  v-model="textarea">
</el-input></p>
		</div>
 </div>
</template>

<script>
export default {
	data () {
		return {
    textarea:''//文本域
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
.title {
  width: 100%;
  height: 30px;
  line-height: 30px;
  margin: 10px;
  background: #f4f4f5;
  padding: 5px;
  border-radius: 10px;
  color: rgba(0, 0, 0, 0.322);
}
</style>
