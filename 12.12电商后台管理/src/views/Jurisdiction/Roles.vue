<template>
	<div>
		<!-- <h1>角色列表</h1> -->
		<el-card>
			<el-button type="primary" @click="AddRoles">添加角色</el-button>
			 <el-table
    :data="roleslist"
    style="width: 100%">
    <el-table-column type="expand">
      <!-- <template slot-scope="props">
        <el-form label-position="left" inline class="demo-table-expand">
          <el-form-item label="商品名称">
            <span>{{ props.row.name }}</span>
          </el-form-item>
          <el-form-item label="所属店铺">
            <span>{{ props.row.shop }}</span>
          </el-form-item>
          <el-form-item label="商品 ID">
            <span>{{ props.row.id }}</span>
          </el-form-item>
          <el-form-item label="店铺 ID">
            <span>{{ props.row.shopId }}</span>
          </el-form-item>
          <el-form-item label="商品分类">
            <span>{{ props.row.category }}</span>
          </el-form-item>
          <el-form-item label="店铺地址">
            <span>{{ props.row.address }}</span>
          </el-form-item>
          <el-form-item label="商品描述">
            <span>{{ props.row.desc }}</span>
          </el-form-item>
        </el-form>
      </template> -->
    </el-table-column>
    <el-table-column
      label="#"
      type="index">
    </el-table-column>
    <el-table-column
      label="角色名称"
      prop="roleName">
    </el-table-column>
    <el-table-column
      label="角色描述"
      prop="roleDesc">
    </el-table-column>
		 <el-table-column label="操作">
			<template slot-scope="scope">
				<el-button type="primary" size="mini" icon="el-icon-edit" @click="edit(scope.row)">编辑</el-button>
			<el-button type="danger"  size="mini" icon="el-icon-delete" @click="del(scope.row)">删除</el-button>
			<el-button type="warning" size="mini" icon="el-icon-s-tools" @click="jurisdiction">分配权限</el-button>
			</template>
			
    </el-table-column>
  </el-table>
		</el-card>

		<!--  使用权限列表添加编辑模态框组件-->
   <AddUndataRoles v-if=" RolesVisible" ref="AddUndataRoles" @add="Add" @Undata="UndataRoles"></AddUndataRoles>
	<!--  使用权限列表树状图模态框组件-->
   <AddJurisdition v-if="JurisdtionVisible" ref="AddJurisdition"></AddJurisdition>
 </div>
</template>

<script>
import AddUndataRoles from './AddUndataRoles' /**引入权限列表添加编辑模态框组件*/
import AddJurisdition from './AddJurisdition' /**引入权限列表树状图模态框组件*/
import {getRoles,addRoles,editRoles,delRoles} from '@/api/Jurisdiction/rolesapi'
import {STATUS} from '../../../untils/constatus.js' /**引入状态码*/
export default {
	components:{
		/**注册权限列表添加编辑模态框组件*/
    AddUndataRoles,
	  AddJurisdition
	},
	data () {
		return {
				roleslist:[],/**权限列表数据*/
        RolesVisible:false, /**控制权限组件状态*/
        JurisdtionVisible:false /**控制权限树状组件状态*/
		}	
	},
	methods: {

    /**点击添加*/ 
		AddRoles(){
       this.RolesVisible=true
			 this.$nextTick(() => {
				this.$refs.AddUndataRoles.info() /**调用子组件info方法*/
		   })
		},
		/**确定添加*/
		Add(obj){
					if(obj){
						/**调用添加接口*/
						console.log(obj);
							addRoles(obj).then(res=>{
								console.log(res);
								let {msg,status}=res.data.meta
								if(status===STATUS.SUCCESS){
										// this.getlist() /**调用渲染页面*/
										 this.$message({
                     type: 'success',
                      message: msg
                  });
								}
							})

							this.roleslist.push({...obj,id:new Date().getTime()})
							this.RolesVisible=false
							this.$message({
             message: '添加成功',
              type: 'success'
             });
					}
					 
			},
			/**点击编辑*/
			edit(row){
				this.RolesVisible=true
			 this.$nextTick(() => {
				this.$refs.AddUndataRoles.UndateRoles(row) /**调用子组件UndateRoles方法把当前行数据传到子组件*/
		   })
			},
			/**确定修改*/
			UndataRoles(obj){
				/**调用修改接口*/
						editRoles(obj,obj.id).then(res=>{
								console.log(res);
								let {msg,status}=res.data.meta
								if(status===STATUS.SUCCESS){
										// this.getlist() /**调用渲染页面*/
										 this.$message({
                     type: 'success',
                      message: msg
                  });
								}
							})

					this.roleslist.forEach(item => {
										if(item.id==this.editid){
												item.roleName=obj.roleName
												item.roleDesc=obj.roleDesc
										}
								});
								 this.$message({
                     message: '修改成功',
                     type: 'success'
                     });
			},
			/**点击删除*/
			del(row){
				this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
         /**调用删除接口*/
				delRoles(row.id).then(res=>{
					console.log(res);
					let {msg,status}=res.data.meta
								if(status===STATUS.SUCCESS){
										// this.getlist() /**调用渲染页面*/
										 this.$message({
                     type: 'success',
                      message: msg
                  });
								}
				})

					this.roleslist=this.roleslist.filter(i=>i.id!=row.id)
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
			},
			/**调用渲染页面接口*/
			getlist(){
				getRoles().then(res=>{
					console.log(res);
				})
			},
			/**点击分配权限*/
			jurisdiction(){
				this.JurisdtionVisible=true
				this.$nextTick(()=>{
					this.$refs.AddJurisdition.show()
				})
        this.$http.apiPost('/tree').then(res=>{
						console.log(res);
						this.$nextTick(()=>{
					  this.$refs.AddJurisdition.gettree(res.data.data)
				    })
		    })

			}
	},
	created () {
		this.getlist()
		this.$http.apiPost('/roles').then(res=>{
						console.log(res);
						this.roleslist=res.data.data
		})
	},
	mounted () {

	},
	computed: {

	},
	watch: {
			dialogFormVisible(newvalue){
				if(!newvalue){
						this.editid=-1
						this.ruleForm={}
				}
			}
	},
}
</script>

<style lang='scss' scoped>
</style>
