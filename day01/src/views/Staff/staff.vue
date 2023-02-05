<template>
	<div>
		<!-- <h1>员工页面</h1> -->
		<el-card class="box-card">
			<div class="header">
				<span><i class="el-icon-info" style="color:#409eff;margin-right: 5px;"></i>共{{$store.state.staff.total}}条记录</span>
				<div>
        <el-button type="danger">简单表头导出</el-button>
        <el-button type="info">复杂表头导出</el-button>
        <el-button type="success" @click="$router.push('/excel')">excel导入</el-button>
        <el-button type="primary" disabled>新增员工</el-button>
				</div>
			</div>
		</el-card>
		<el-card>
			<el-table
    :data="$store.state.staff.tableData"
    style="width: 100%">
    <el-table-column
      label="序号"
			type="index"
      width="60">
    </el-table-column>
    <el-table-column
      label="姓名"
			prop="username"
      >
    </el-table-column>
    <el-table-column
      label="头像"
			prop="staffPhoto"
      >
		<template slot-scope="scope">
			<img :src="scope.row.staffPhoto" alt="" class="ig">
		</template>
    </el-table-column>
    <el-table-column
      label="手机号"
			prop="mobile"
      >
    </el-table-column>
    <el-table-column
      label="工号"
			prop="workNumber"
      >
    </el-table-column>
    <el-table-column
      label="聘用形式"
			prop="formOfEmployment"
      >
			<template slot-scope="scope">
			{{scope.row.formOfEmployment==1?'正式':'非正式'}}
		</template>
    </el-table-column>
    <el-table-column
      label="部门"
			prop="departmentName"
      >
    </el-table-column>
    <el-table-column
      label="入职时间"
			prop="timeOfEntry"
      >
    </el-table-column>
    <el-table-column
      label="账户状态"
			prop="enableState"
      >
			<template slot-scope="scope">
			<el-switch
  v-model="value"
  :active-color="scope.row.enableState==1?'#13ce66':'#ff4949'">
</el-switch>

		</template>
    </el-table-column>
    <el-table-column label="操作" width="230">
      <template slot-scope="scope">
        <!-- <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">编辑</el-button> -->
        <el-button
          size="mini"
          type="text"
					@click="$router.push(`/loginaccount/${scope.row.id}`)"
          >查看</el-button>
					<el-button
          size="mini"
          type="text"
          >转正</el-button>
					<el-button
          size="mini"
          type="text"
          >调岗</el-button>
					<el-button
          size="mini"
          type="text"
          >离职</el-button>
					<el-button
          size="mini"
          type="text"
          >角色</el-button>
					<el-button
          size="mini"
          type="text"
					style="color:#ccc"
          >删除</el-button>
      </template>
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
	size:10,
	page:1,
	total:0
}
		}
	},
	methods: {
		getlist(){
			this.$store.dispatch('staff/list',this.params)
		}
	},
	created () {
this.getlist()
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
    width: 10%;
    text-align: center;
    height: 40px;
    line-height: 40px;
    border: 1px solid #409eff;
    background: #e6f7ff;
  }
}
.ig {
  width: 100%;
  height: 80px;
}
</style>
