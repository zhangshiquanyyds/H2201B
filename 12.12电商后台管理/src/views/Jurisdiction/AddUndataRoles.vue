<template>
  <div>
	<el-dialog :title="editid==-1?'添加角色':'编辑角色'" :visible.sync="RolesVisible">
	<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
  <el-form-item label="角色名称" prop="roleName">
    <el-input v-model="ruleForm.roleName"></el-input>
  </el-form-item>
  <el-form-item label="角色描述" prop="roleDesc">
    <el-input v-model="ruleForm.roleDesc"></el-input>
  </el-form-item>
 

</el-form>

  <div slot="footer" class="dialog-footer">
    <el-button @click="RolesVisible = false">取 消</el-button>
    <el-button type="primary" @click="AddRoles('ruleForm')">确 定</el-button>
  </div>
</el-dialog>
 </div>
</template>

<script>
export default {
  data () {
	return {
         RolesVisible: false,
          ruleForm: {
							roleName:"",
							roleDesc:""
					},
					 rules: {
          roleName: [
            { required: true, message: '请输入角色名称', trigger: 'blur' },
            { min: 2, max: 8, message: '角色名称长度在 2 到 8 个字符之间', trigger: 'blur' }
          ],
          roleDesc: [
            { required: true, message: '请输入角色描述', trigger: 'blur' },
            { min: 1, max: 15, message: '角色描述长度在 1 到 15 个字符之间', trigger: 'blur' }
          ],
					 },
        formLabelWidth: '120px',
				editid:-1
	}
  },
  methods: {
			/**添加弹出模态框*/
	   info(){
		    this.RolesVisible=true
	   },
	   /**修改回填*/
	   UndateRoles(obj){
				this.RolesVisible=true
				this.editid=obj.id
				this.ruleForm=obj
		},
		/**添加把要添加的东西传给父组件*/
	   AddRoles(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
						if(this.editid==-1){
							this.$emit('add',this.ruleForm)
						}else{
							//确定编辑
							this.$emit('Undata',this.ruleForm)
						}
						 this.RolesVisible=false
						  this.ruleForm={}
          } else {
            console.log('error submit!!');
            return false;
          }
        });
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
}
</script>

<style lang='scss' scoped>
</style>
