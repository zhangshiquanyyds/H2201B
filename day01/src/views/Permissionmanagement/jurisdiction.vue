<template>
	<div>
		<!-- <h1>权限管理</h1> -->
		<el-card>
			<el-button type="primary" style="float: right" @click="addjurisdiction">添加权限</el-button>
		</el-card>
<el-table
    :data="$store.state.jurisdiction.jurisdictionlists"
    style="width: 100%;margin-bottom: 20px;"
    row-key="id"
    border
    default-expand-all
    :tree-props="{children: 'children', hasChildren: 'hasChildren'}">
    <el-table-column
      prop="name"
      label="名称">
    </el-table-column>
    <el-table-column
      prop="code"
      label="标识">
    </el-table-column>
    <el-table-column
      prop="description"
      label="描述">
    </el-table-column>
    <el-table-column
      label="操作">
			<template slot-scope="scope">
				<el-button type="text">添加</el-button>
          <el-button type="text" @click="edit(scope.row)">编辑</el-button>
					<el-button type="text" @click="del(scope.row.id)">删除</el-button>

			</template>
    </el-table-column>
  </el-table>

	<Jurisdiction ref="jurisdictiondialog" />
 </div>
</template>

<script>
import Jurisdiction from './AddorUpdata'
export default {
	data () {
		return {
      jurisdictiondialogFormVisible:false
		}
	},
	methods: {
		addjurisdiction(){
				this.jurisdictiondialogFormVisible=true
				this.$nextTick(() => {
					this.$refs.jurisdictiondialog.show()
				})
		},
		edit(row){
			console.log(row);
     this.jurisdictiondialogFormVisible=true
				this.$nextTick(() => {
					this.$refs.jurisdictiondialog.jurisdictionedit(row)
				})
		},
		del(id){
			this.$nextTick(() => {
					this.$refs.jurisdictiondialog.deljurisdiction(id)
				})
		}
	},
	created () {

	},
	mounted () {
			this.$store.dispatch('jurisdiction/jurisdictionlist')
	},
	components: {
Jurisdiction,
	},
	computed: {

	},
	watch: {

	},
}
</script>

<style lang='scss' scoped>
</style>
