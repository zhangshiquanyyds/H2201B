<template>
	<div>
		<el-card>
				<div class="header">
				<span><i class="el-icon-info" style="color:#409eff;margin-right: 5px;"></i> 当前审批中 0 本月审批通过 1 本月审批驳回 0</span>
				<div>
        <el-button type="primary">流程设置</el-button>

				</div>
			</div>
		</el-card>
		<el-card>
			<el-table
    ref="multipleTable"
    :data="$store.state.approval.Approvallist"
    tooltip-effect="dark"
    style="width: 100%"
    >
    <el-table-column
      type="selection"
      width="50">
    </el-table-column>
    <el-table-column
      type="index"
      width="55"
			label="序号">
    </el-table-column>
    <el-table-column
      label="审批类型"
			sortable
		prop="processName">

    </el-table-column>
    <el-table-column
      prop="username"
			sortable
      label="审批人">
    </el-table-column>
    <el-table-column
      prop="procCurrNodeUserName"
      label="当前审批人"
			sortable
      show-overflow-tooltip>
    </el-table-column>
    <el-table-column
      prop="timeOfEntry"
      label="审批发起时间"
			sortable
      show-overflow-tooltip>
    </el-table-column>
    <el-table-column
      prop="processName"
      label="审批状态"
			sortable
      show-overflow-tooltip>
    </el-table-column>
    <el-table-column
      label="操作"
      show-overflow-tooltip>
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
				params:{
				year: 2018,
				page: 1,
				total: 0,
				pageSize: 10
				}

		}
	},
	methods: {

	},
	created () {
    this.$store.dispatch('approval/Approvallist',this.params)
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
