<template>
	<div>
		<!-- <h1>用户列表</h1> -->
		<el-card class="box-card">
  <el-input style="width:500px" placeholder="请输入内容" v-model="value" class="input-with-select">
    <el-button slot="append" icon="el-icon-search" @click="search"></el-button>
  </el-input>
	<el-button type="primary" style="margin-left: 15px;" @click="addUser">添加用户</el-button>
<el-table
    :data="userslist"
    style="width: 100%">
    <el-table-column
      label="#"
      width="60"
			type="index">
    </el-table-column>
    <el-table-column
      label="姓名"
			prop="username">
    </el-table-column>
    <el-table-column
      label="邮箱"
			prop="email">
    </el-table-column>
    <el-table-column
      label="电话"
			prop="mobile">
    </el-table-column>
    <el-table-column
      label="角色"
			prop="role_name">
    </el-table-column>
    <el-table-column
      label="状态"
			prop="mg_state">
			<template slot-scope="scope">
					<el-switch
  v-model="scope.row.mg_state"
  active-color="#409eff"
  inactive-color="#dcdfe6">
</el-switch>
			</template>
    </el-table-column>

    <el-table-column label="操作">
		<template slot-scope="scope">
			<el-button type="primary" size="mini" icon="el-icon-edit" @click="edit(scope.row)"></el-button>
			<el-button type="danger"  size="mini" icon="el-icon-delete" @click="del(scope.row.id)"></el-button>
			<el-button type="warning" size="mini" icon="el-icon-s-tools" @click="jurisdtion(scope.row)"></el-button>
		</template>
			
    </el-table-column>
  </el-table>

</el-card>

   <AddUndataUser v-if="addundataVisible"  ref="AddUndataUservisible" @add="add"  @undata="undatauser"></AddUndataUser>

  <Addroles v-if="RolesVisible" ref="Addroles"></Addroles>
 </div>
</template>

<script>
import AddUndataUser from '../User/AddUndataUser' /**引入添加编辑模态框组件*/
import Addroles from '../User/AddRoles' /**引入分配角色模态框组件*/
import {getUser,addUser,editUser,delUser,searchUser} from '@/api/User/userapi.js'/**引入用户列表接口封装*/
import {STATUS} from '../../../untils/constatus.js' /**引入状态码*/
export default {
components: {
AddUndataUser,
Addroles
	},
	data () {
		return {
			value:"",
			userslist:[],
			cobalist:[],
			addundataVisible:false,/**控制添加修改模态框组件的显示*/
			RolesVisible:false,/**控制分配角色模态框组件的显示*/
			params:{
					pagenum:1,
					pagesize:5,
					query:''
			}
		}
	},
	methods: {
		/**点击添加*/
		addUser(){
				this.addundataVisible=true
				this.$nextTick(() => {
					this.$refs.AddUndataUservisible.init()/**调用子组件实例上面的方法*/
				})
		},
		/**确定添加*/
	add(obj){
		if(obj){
			// 调用添加接口
				  addUser(obj).then(res=>{
						const {msg,status}=res.data.meta
						console.log(res);
				     if(status===STATUS.SUCCESS){
						      // this.getlist() /**调用渲染页面*/
									 this.$message({
                  type: 'success',
                  message: msg
                  });
						}
           })
    this.userslist.push({...obj,id:new Date().getTime()})//添加到userlist
		 this.addundataVisible=false//关闭模态框
		// this.$message({
    //       message: '恭喜你，添加成功',
    //       type: 'success'
    //     });
		}
	},
	/**点击修改*/
	edit(row){
		  this.addundataVisible=true
			this.$nextTick(() => {
					this.$refs.AddUndataUservisible.edituser(row)/**调用子组件实例上面的方法*/
				})
	},
	/**确定修改*/
	undatauser(obj){
     /**调用修改接口*/
		    editUser(obj,obj.id).then(res=>{
			 const {msg,status}=res.data.meta  
				     if(status===STATUS.SUCCESS){
						      // this.getlist()
									 this.$message({
                  type: 'success',
                  message: msg
                  });
						}
		     })

			this.userslist.forEach(i => {
					if(i.id==obj.id){
						i.email=obj.email
						i.mobile=obj.mobile
					}
			});
			 this.addundataVisible=false//关闭模态框
			// 		this.$message({
      //     message: '修改成功',
      //     type: 'success'
      //   });
	  },
    //搜索
    search(){
      if(this.value!=''){
		/**调用搜索接口*/ 
		     searchUser(this.value).then(res=>{
					console.log(res);
		    })

        this.userslist=this.cobalist.filter((item) => {
          return item.username.includes(this.value)
        })
      }else{
				this.userslist= this.cobalist
			}
    },
    // 删除
    del(id){
			this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
			/**调用删除接口*/
       delUser(id).then(res=>{
						const {msg,status}=res.data.meta
				     if(status===STATUS.SUCCESS){
						      this.getlist()
									 this.$message({
                  type: 'success',
                  message: msg
                  });
						}
        })
					this.userslist= this.userslist.filter(i=>i.id!=id)
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
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },


	  /**页面渲染*/
	  getlist(){
		   getUser().then(res=>{
						const {msg,status}=res.data.meta
				   if(status===STATUS.SUCCESS){
						  const {users}=res.data.data
								this.userslist=users
						    this.cobalist=users
									 this.$message({
                type: 'success',
                  message: msg
                  });
						}
           })
	  },
	  /**点击分配角色*/
	  jurisdtion(row){
       this.RolesVisible=true
			  this.$nextTick(() => {
					this.$refs.Addroles.show(row)/**调用子组件实例上面的方法*/
				})
				/**角色分配数据请求*/
				this.$http.apiPost('/userroles').then(res=>{
					  console.log(res);
					  this.$nextTick(() => {
					      this.$refs.Addroles.getlist(res.data.data)/**调用子组件实例上面的方法*/
				    })
						
				})
	  }
	},
	created () {
        this.getlist()/**调用渲染页面*/

				// this.$http.apiPost('/users').then(res=>{
				// 	  console.log(res);
				// 		this.userslist=res.data.data.users
				// 		this.cobalist=res.data.data.users
				// })
				
	},
	mounted () {

	},
	
	computed: {
      
	},
	watch: {
      dialogFormVisible(newvalue){
          if(!newvalue){
              this.editID=-1
            this.ruleForm={}
          }
      }
	},
}
</script>

<style lang='scss' scoped>
.box-card {
  margin-top: 10px;
}
</style>
