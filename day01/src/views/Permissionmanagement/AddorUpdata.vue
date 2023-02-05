<!-- eslint-disable no-empty -->
<template>
	<div>
		<el-dialog :title="$store.state.jurisdiction.addorupdataId==-1 ? '新填权限点':'编辑权限点'" :visible.sync="jurisdictiondialogFormVisible" :before-close="change">
  <el-form :model="form">
    <el-form-item label="权限名称" :label-width="formLabelWidth">
      <el-input v-model="form.name" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="权限标识" :label-width="formLabelWidth">
      <el-input v-model="form.code" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="权限描述" :label-width="formLabelWidth">
      <el-input v-model="form.description" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="开关" :label-width="formLabelWidth">
      <el-switch
  v-model="form.enVisible">
</el-switch>
    </el-form-item>
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="jurisdictiondialogFormVisible = false">取 消</el-button>
    <el-button type="primary" @click="addjurisdiction">确 定</el-button>
  </div>
</el-dialog>
 </div>
</template>

<script>
import {addjurisdiction,editjurisdiction,deljurisdiction} from '@/api/jurisdiction'
export default {
	data () {
		return {
			jurisdictiondialogFormVisible: false,
        form: {
          name: '',
          description:"",
					code:'',
					pid:'',
					enVisible: false,
					type: 1
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
			this.jurisdictiondialogFormVisible=true
		},
		jurisdictionedit(obj){
			this.jurisdictiondialogFormVisible=true
			this.$store.state.jurisdiction.addorupdataId=obj.id
			this.form.name=obj.name
			this.form.description=obj.description
			this.form.code=obj.code
			this.form.enVisible=obj.enVisible
		},
		addjurisdiction(){
			if(this.$store.state.jurisdiction.addorupdataId==-1){
        this.jurisdictiondialogFormVisible = false
			addjurisdiction(this.form).then(res=>{
				console.log(res);
				if(res.status==200){
					this.$message({
          message: res.data.message,
          type: 'success'
        });
        this.$store.dispatch('jurisdiction/jurisdictionlist',this.params)
				}
			})
			}
			else{
				editjurisdiction(this.form,this.$store.state.jurisdiction.addorupdataId).then(res=>{
					console.log(res);
					this.jurisdictiondialogFormVisible = false
					if(res.status==200){
					this.$message({
          message: res.data.message,
          type: 'success'
        });
        this.$store.dispatch('jurisdiction/jurisdictionlist',this.params)
				}
				})

			}

		},
		deljurisdiction(id){
				this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
        deljurisdiction(id).then(res=>{
				console.log(res);
				if(res.status==200){
					this.$message({
          message: res.data.message,
          type: 'success'
        });
        this.$store.dispatch('jurisdiction/jurisdictionlist',this.params)
				}
			})
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });

		},
		/**关闭模态框进行操作*/
		change(){
			this.jurisdictiondialogFormVisible = false
			this.$store.state.jurisdiction.addorupdataId=-1
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
