<template>
	<div>
		<!-- <h1>津贴设置页面</h1> -->
		<el-form  label-width="120px" :model="form">
  <el-form-item label="通用方案">
     <el-input
  v-model="form.security"
	style="width:320px;">
</el-input>
  </el-form-item>
  <el-form-item label="备注">
    <el-input
  v-model="form.security"
	style="width:320px;">
</el-input>
  </el-form-item>
  <el-form-item label="津贴名称">
<div style="margin-bottom: 10px;">
<el-input
	placeholder="交通补贴"
  v-model="form.traffic"
	style="width:220px;">
</el-input>
 <el-select v-model="form.value" clearable placeholder="请选择">
    <el-option
      label="每出勤日"
      value="每出勤日">
    </el-option>
    <el-option
      label="每月固定"
      value="每月固定">
    </el-option>
  </el-select>
	<el-input
  v-model="form.one"
	style="width:220px;">
</el-input>
</div>
<div  style="margin-bottom: 10px;">
<el-input
	placeholder="通讯补贴"
  v-model="form.communication"
	style="width:220px;">
</el-input>
 <el-select v-model="form.value" clearable placeholder="请选择">
    <el-option
      label="每出勤日"
      value="每出勤日">
    </el-option>
    <el-option
      label="每月固定"
      value="每月固定">
    </el-option>
  </el-select>
	<el-input
  v-model="form.one"
	style="width:220px;">
</el-input>
</div>
<div  style="margin-bottom: 10px;">
<el-input
	placeholder="午餐补助"
	:disabled="true"
	style="width:220px;">
</el-input>
 <el-select v-model="form.value" clearable placeholder="请选择">
    <el-option
      label="每出勤日"
      value="每出勤日">
    </el-option>
    <el-option
      label="每月固定"
      value="每月固定">
    </el-option>
  </el-select>
	<el-input
  v-model="form.one"
	style="width:220px;">
</el-input>
</div>
<div style="margin-bottom: 10px;">
	<el-input
	placeholder="住房补助"
	:disabled="true"
	style="width:220px;">
</el-input>
 <el-select v-model="form.value" clearable placeholder="请选择">
    <el-option
      label="每出勤日"
      value="每出勤日">
    </el-option>
    <el-option
      label="每月固定"
      value="每月固定">
    </el-option>
  </el-select>
	<el-input
  v-model="form.one"
	style="width:220px;">
</el-input>
</div>
  </el-form-item>

<el-form-item label="适用计税方式">
    <el-radio-group v-model="form.Taxation">
      <el-radio label="税前"></el-radio>
      <el-radio label="税后"></el-radio>
    </el-radio-group>
  </el-form-item>

<el-form-item>
    <el-button type="primary">提交</el-button>
    <el-button>重置</el-button>
  </el-form-item>
</el-form>
 </div>
</template>

<script>
export default {
	data () {
		return {
 form: {
          traffic: '',
					communication:"",
					Taxation:"税前",
					value:"每出勤日",
					one:'2.1'
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
.a {
}
</style>
