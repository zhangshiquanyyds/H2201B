<!-- eslint-disable no-empty -->
<template>
	<div>
		<el-dialog :title="$store.state.role.addoreditId==-1 ? '新建角色':'编辑角色'" :visible.sync="roledialogFormVisible" :before-close="change">
  <el-form :model="form">
    <el-form-item label="角色名称" :label-width="formLabelWidth">
      <el-input v-model="form.name" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="角色描述" :label-width="formLabelWidth">
      <el-input v-model="form.description" autocomplete="off"></el-input>
    </el-form-item>
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="roledialogFormVisible = false">取 消</el-button>
    <el-button type="primary" @click="addrole">确 定</el-button>
  </div>
</el-dialog>
 </div>
</template>

<script>
import {roleadd,roleedit,roledel} from '@/api/company/role.js'
export default {
	data () {
		return {
			roledialogFormVisible: false,
        form: {
          name: '',
          description:""
        },
        formLabelWidth: '120px',
				params:{
				page:1,
	pagesize:11,
	total:0
      },
		}
	},
	methods: {
		show(){
			this.roledialogFormVisible=true
		},
		roledit(obj){
			this.roledialogFormVisible=true
			this.form.name=obj.name
			this.form.description=obj.description
		},
		addrole(){
			if(this.$store.state.role.addoreditId==-1){
        this.roledialogFormVisible = false
			roleadd(this.form).then(res=>{
				console.log(res);
				if(res.status==200){
					this.$message({
          message: res.data.data.message,
          type: 'success'
        });
        this.$store.dispatch('role/list',this.params)
				}
			})
			}else{
				roleedit(this.form,this.$store.state.role.addoreditId).then(res=>{
					console.log(res);
					this.roledialogFormVisible = false
					if(res.status==200){
					this.$message({
          message: res.data.message,
          type: 'success'
        });
        this.$store.dispatch('role/list',this.params)
				}
				})

			}

		},
		delrole(id){
			console.log(11);
			roledel(id).then(res=>{
				console.log(res);
				if(res.status==200){
					this.$message({
          message: res.data.message,
          type: 'success'
        });
        this.$store.dispatch('role/list',this.params)
				}
			})
		},
		/**关闭模态框进行操作*/
		change(){
			this.roledialogFormVisible = false
			this.$store.state.role.addoreditId=-1
			this.form={}
		}
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
