<template>
	<div>
		<!-- <h1>计薪设置页面</h1> -->
		<el-form :label-position="labelPosition" label-width="120px" :model="form">
  <el-form-item label="对应社保自然月">
  <el-select v-model="form.value" clearable placeholder="请选择">
    <el-option
      label="当月"
      value="当月">
    </el-option>
    <el-option
      label="次月"
      value="次月">
    </el-option>
  </el-select>
  </el-form-item>
  <el-form-item label="社保数据来源">
    <el-input
  placeholder="社保模块"
  v-model="form.security"
	style="width:220px;"
  :disabled="true">
</el-input>
  </el-form-item>
  <el-form-item label="考勤数据来源">
    <el-input
  placeholder="考勤模块"
  v-model="form.attendance"
	style="width:220px;"
  :disabled="true">
</el-input>
  </el-form-item>
</el-form>
 </div>
</template>

<script>
export default {
	data () {
		return {
			labelPosition: 'right',
        form: {
          value: '当月',
          security: '',
          attendance: ''
        }
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
