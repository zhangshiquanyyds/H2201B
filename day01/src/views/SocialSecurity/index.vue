<template>
	<div>
		<!-- <h1>社保页面</h1> -->
		<el-card>
				<div class="header">
				<span><i class="el-icon-info" style="color:#409eff;margin-right: 5px;"></i> 本月：社保在缴 公积金在缴 增员 减员 入职 离职</span>
				<div>
        <el-button type="danger">历史归档</el-button>
        <el-button type="primary">202002报表</el-button>
				</div>
			</div>
		</el-card>

	<Department>
		<template #default1>
       <div style="display: flex;">
				<div style="width:10%;padding-left: 50px;" >社保城市</div><el-checkbox-group style="width:90%" v-model="checkList2">
       <el-checkbox :label="item.name" v-for="item in $store.state.socialsecurity.citylist" :key="item.id"></el-checkbox>
       </el-checkbox-group>
			</div><br><br>
		</template>
		<template #default2>
      <div style="display: flex;">
				<div style="width:10%;padding-left: 50px;" >公积金城市</div><el-checkbox-group style="width:90%" v-model="checkList3">
       <el-checkbox :label="item.name" v-for="item in $store.state.socialsecurity.citylist" :key="item.id"></el-checkbox>
       </el-checkbox-group>
			</div>
		</template>
		</Department>
	<el-card>
	<el-table
    ref="multipleTable"
    :data="$store.state.socialsecurity.socialsecurityslist"
    tooltip-effect="dark"
    style="width: 100%"
    >
    <el-table-column
      type="index"
      width="55"
			label="序号">
    </el-table-column>
    <el-table-column
      prop="username"
			sortable
      label="姓名">
    </el-table-column>
    <el-table-column
      prop="mobile"
			sortable
      label="手机">
    </el-table-column>
    <el-table-column
      prop="participatingInTheCityId"
      label="工号"
			sortable
      show-overflow-tooltip>
    </el-table-column>
    <el-table-column
      prop="workNumber"
      label="部门"
			sortable>
    </el-table-column>
    <el-table-column
      prop="timeOfEntry"
      label="入职时间"
			sortable>
    </el-table-column>
    <el-table-column
      prop="timeOfEntry"
      label="离职时间"
			sortable>
    </el-table-column>
    <el-table-column
      prop="providentFundCity"
      label="社保城市"
			>
    </el-table-column>
    <el-table-column
      prop="participatingInTheCity"
      label="公积金城市"
			>
    </el-table-column>
    <el-table-column
      prop="participatingInTheCity"
      label="公积金城市"
			>
    </el-table-column>
    <el-table-column
      prop="socialSecurityBase"
      label="社保基数"
			>
    </el-table-column>
    <el-table-column
      prop="providentFundBase"
      label="公积金基数"
			>
			<el-button type="text">查看详情</el-button>
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
				params:{
					page: 1,
					pageSize: 10,
					total: 0
				},

			checkList2: [],
			checkList3: []
		}
	},
	methods: {

	},
	created () {

	},
	mounted () {
		this.$store.dispatch('socialsecurity/citylist')
		this.$store.dispatch('socialsecurity/departmentlist')
		this.$store.dispatch('socialsecurity/socialsecurityslist',this.params)
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
    width: 40%;
    text-align: center;
    height: 40px;
    line-height: 40px;
    border: 1px solid #409eff;
    background: #e6f7ff;
  }
}
.departmentlist {
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  li {
    display: flex;
    flex: 13%;
    margin: auto;
  }
}
</style>
