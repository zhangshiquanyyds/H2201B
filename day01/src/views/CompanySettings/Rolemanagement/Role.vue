<template>
	<div>
		<!-- <h1>角色管理页面</h1> -->
		<el-button type="primary" @click="addrole">新添角色</el-button>
		<el-table
    :data="$store.state.role.tableData"
    border
    style="width: 100%">
    <el-table-column
      type="index"
      label="序号"
      width="80">
    </el-table-column>
    <el-table-column
      prop="name"
      label="名称"
      >
    </el-table-column>
    <el-table-column
      prop="description"
      label="描述">
    </el-table-column>
		<el-table-column label="操作" width="330">
      <template slot-scope="scope">
				<el-button
				type="success"
				@click="assper(scope.row.id)"
         >分配权限</el-button>
        <el-button
				type="primary"
				@click="edit(scope.row)"
         >编辑</el-button>
        <el-button
          type="danger"
					@click="del(scope.row.id)"
          >删除</el-button>

      </template>
    </el-table-column>
  </el-table>

	<adddialogTableVisible v-if="roledialogFormVisible" ref="addrole"  />
	<roledistribution  v-if="roledistributiondialogFormVisible" ref="roledistribution"  />
 </div>
</template>

<script>
import adddialogTableVisible from './AddorUpdata.vue'
import roledistribution from './permission.vue'
export default {
	components: {
		roledistribution,
    adddialogTableVisible
	},
	data () {
		return {
			params:{
				page:1,
	pagesize:11,
	total:0
      },
     roledialogFormVisible:false,/**添加和编辑模态框*/
		roledistributiondialogFormVisible:false /**分配权限模态框*/
		}
	},
	methods: {
		addrole(){
			this.roledialogFormVisible=true
			this.$nextTick(() => {
				this.$refs.addrole.show()
			})
		},
		edit(row){
			this.roledialogFormVisible=true
			this.$store.state.role.addoreditId=row.id
			this.$nextTick(() => {
				this.$refs.addrole.roledit(row)
			})
		},
		del(id){
		 this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
				this.$nextTick(() => {
				this.$refs.addrole.delrole(id)
		    })
          // this.$message({
          //   type: 'success',
          //   message: '删除成功!'
          // });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
		},
		assper(id){
			this.roledistributiondialogFormVisible=true
		   this.$nextTick(() => {
				this.$refs.roledistribution.show(id)
			})
		}
	},
	created () {

	},
	mounted () {
		console.log(this.params);
		this.$store.dispatch('role/list',this.params )
	},

	computed: {

	},
	watch: {

	},
}
</script>

<style lang='scss' scoped>
</style>
