<template>
  <div>
	<!-- 对话框 -->

<el-dialog :title="editID==-1?'添加用户':'编辑用户'" :visible.sync="addundataVisible">
  
		<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
  <el-form-item label="用户名" prop="username">
    <el-input v-model="ruleForm.username" :disabled="editID!=-1?true:false"></el-input>
  </el-form-item>
  <el-form-item label="密码" prop="password" v-if="editID==-1">
    <el-input v-model="ruleForm.password" ></el-input>
  </el-form-item>
  <el-form-item label="邮箱" prop="email">
    <el-input v-model="ruleForm.email"></el-input>
  </el-form-item>
  <el-form-item label="电话" prop="mobile">
    <el-input v-model="ruleForm.mobile"></el-input>
  </el-form-item>
</el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="dialogFormVisible = false">取 消</el-button>
    <el-button type="primary" @click="adduser('ruleForm')">确 定</el-button>
  </div>
</el-dialog>
 </div>
</template>

<script>
export default {
  data () {
	return {
//添加模态框
			 ruleForm: {
          username: '',
          password: '',
          email: '',
          mobile: '',
        },
        rules: {
          username: [
            { required: true, message: '请输入用户名称', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '请输入用户密码', trigger: 'blur' },
            { min: 3, max: 8, message: '长度在 3 到 8 个字符', trigger: 'blur' }
          ],
          email: [
            { required: true, message: '请输入邮箱', trigger: 'blur' },
            { min: 3, max: 18, message: '长度在 3 到 18 个字符', trigger: 'blur' }
          ],
          mobile: [
            { required: true, message: '请输入电话', trigger: 'blur' },
            { min: 3, max: 11, message: '长度在 3 到 11 个字符', trigger: 'blur' }
          ],
        },
		    addundataVisible: false,
        formLabelWidth: '120px',
        editID:-1,
	}
  },
  methods: {
	/**控制模态框*/
			init(){
					this.addundataVisible=true
			},

			 adduser(formName) {
            this.$refs[formName].validate((valid) => {
             if (valid) {
								if(this.editID==-1){
                  this.$emit('add',this.ruleForm)
								}else{
									this.$emit('undata',this.ruleForm)
								}
								this.ruleForm={}//添加之后模态框文本框置空
							    this.addundataVisible=false
              } else {
                 console.log('error submit!!');
                 return false;
               }
              });
      },
	  edituser(obj){
		   this.editID=obj.id
		   this.addundataVisible=true
				this.ruleForm=obj
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
