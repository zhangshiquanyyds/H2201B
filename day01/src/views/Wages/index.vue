<template>
	<div>
		<!-- <h1>工资页面</h1> -->
		<el-card>
				<div class="header">
				<span><i class="el-icon-info" style="color:#409eff;margin-right: 5px;"></i> 本月0：入职 0 离职 0 调薪 0 未定薪 0</span>
				<div>
					<el-button type="danger" @click="$router.push('/setting')">设置</el-button>
        <el-button type="primary">203003报表</el-button>
				</div>
			</div>
		</el-card>

		<el-card>
		<div style="display: flex;">
				<div style="width:10%;padding-left: 50px;" >聘用形式:</div><el-checkbox-group style="width:90%" v-model="params.approvalsStateChecks">
       <el-checkbox label="在职"></el-checkbox>
       <el-checkbox label="离职"></el-checkbox>
       </el-checkbox-group>
			</div><br><br>
			<div style="display: flex;">
				<div style="width:10%;padding-left: 50px;" >员工状态:</div><el-checkbox-group style="width:90%" v-model="params.approvalsTypeChecks">
       <el-checkbox label="正式"></el-checkbox>
       <el-checkbox label="非正式"></el-checkbox>
       </el-checkbox-group>
			</div><br><br>
		<div style="display: flex;">
				<div style="width:10%;padding-left: 50px;" >部门:</div><el-checkbox-group style="width:90%" v-model="params.departmentChecks">
       <el-checkbox :label="item.name" v-for="item in $store.state.socialsecurity.departmentlist.depts" :key="item.id"></el-checkbox>
       </el-checkbox-group>
			</div><br><br>
		</el-card>
		<el-card>
		<el-table
    :data="$store.state.wages.wageslist"
    stripe
    style="width: 100%">
    <el-table-column
      type="index"
      label="序号"
      width="80">
    </el-table-column>
    <el-table-column
      prop="username"
      label="姓名">
    </el-table-column>
    <el-table-column
      prop="mobile"
      label="手机号">
    </el-table-column>
    <el-table-column
      prop="workNumber"
      label="工号">
    </el-table-column>
    <el-table-column
      label="聘用形式">
			未知
    </el-table-column>
    <el-table-column
      prop="departmentName"
      label="部门">
    </el-table-column>
    <el-table-column
      prop="timeOfEntry"
      label="入职时间">
    </el-table-column>
    <el-table-column
      prop="currentBasicSalary"
      label="工资基数">
    </el-table-column>
    <el-table-column
      label="津贴方案">
			通用方案
    </el-table-column>
    <el-table-column
      label="操作">
			<el-button type="primary" size="mini">调薪</el-button>
			<el-button type="text">查看</el-button>
    </el-table-column>
  </el-table>
		</el-card>

 </div>
</template>

<script>
export default {
	data () {
		return {
			checkList1:[],
			checkList2:[],
			checkList3:[],
			params:{
				total: 0,
				page: 1,
				pageSize: 10,
				approvalsStateChecks: [],
				approvalsTypeChecks: [],
				departmentChecks: []
			}
		}
	},
	methods: {

	},
	created () {

	},
	mounted () {
		this.$store.dispatch('socialsecurity/departmentlist')
		this.$store.dispatch('wages/wageslist',this.params)
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
.header {
  height: 50px;
  line-height: 50px;
  display: flex;
  justify-content: space-between;
  span {
    display: inline-block;
    width: 40%;
    text-align: center;
    height: 40px;
    line-height: 40px;
    border: 1px solid #409eff;
    background: #e6f7ff;
  }
}
</style>
