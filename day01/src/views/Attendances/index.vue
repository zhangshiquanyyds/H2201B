<template>
	<div>
		<el-card>
				<div class="header">
				<span><i class="el-icon-info" style="color:#409eff;margin-right: 5px;"></i> 有 0 条考勤审批尚未处理</span>
				<div>
					<el-button type="danger">导入</el-button>
					<el-button type="warning">提醒</el-button>
					<el-button type="danger">设置</el-button>
        <el-button>历史归档</el-button>
        <el-button type="primary">203003报表</el-button>
				</div>
			</div>
		</el-card>
		<Department>
			<template #default1>
				<div  style="display: flex;">
			<div style="width:10%;padding-left: 50px;" >考勤状态:</div><el-radio-group v-model="radio">
    <el-radio label="正常"></el-radio>
    <el-radio label="旷工"></el-radio>
    <el-radio label="事假"></el-radio>
    <el-radio label="调休"></el-radio>
    <el-radio label="迟到"></el-radio>
    <el-radio label="早退"></el-radio>
      </el-radio-group>
				</div>
			</template>
		</Department>
	<el-card>
			<el-table
			:data="$store.state.attendance.attendanceslist"
			border
       style="width: 100%">
			<el-table-column
			label="序号"
			type="index"
				width="50">
			</el-table-column>
			<el-table-column
       prop="username"
       label="姓名">
			</el-table-column>
			<el-table-column
       prop="workNumber"
       label="工号">
			</el-table-column>
			<el-table-column
       prop="departmentName"
       label="部门">
			</el-table-column>
			<el-table-column
       prop="mobile"
       label="手机">
			</el-table-column>
				<el-table-column
       label="3/1">
			旷工
			</el-table-column>
				<el-table-column
       label="3/2">
					旷工
				</el-table-column>
				<el-table-column
       label="3/3">
					旷工
					</el-table-column>
				<el-table-column
       label="3/1">
					旷工
        </el-table-column>
				<el-table-column
        label="3/4">
					旷工
       </el-table-column>
					<el-table-column
        label="3/5">
					旷工
				</el-table-column>
				<el-table-column
        label="3/6">
			旷工
			</el-table-column>
				<el-table-column
					label="3/7">
			旷工
			</el-table-column>
				<el-table-column
         label="3/8">
					旷工
         </el-table-column>
   </el-table>
	</el-card>
 </div>
</template>

<script>
import Department from '@/components/department.vue'
export default {
	data () {
		return {
			radio:'',
			params:{
				page: 1,
				pagesize: 10,
				total: 0
			}
		}
	},
	methods: {

	},
	created () {

	},
	mounted () {
this.$store.dispatch('socialsecurity/departmentlist')
this.$store.dispatch('attendance/attendanceslist',this.params)
	},
	components: {
Department,
	},
	computed: {

	},
	watch: {

	},
}
</script>

<style lang='scss' scoped>
.header {
  height: 50px;
  line-height: 50px;
  display: flex;
  justify-content: space-between;
  span {
    display: inline-block;
    width: 30%;
    text-align: center;
    height: 40px;
    line-height: 40px;
    border: 1px solid #409eff;
    background: #e6f7ff;
  }
}
</style>
