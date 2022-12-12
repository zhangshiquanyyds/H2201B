<template>
  <div>

<el-dialog title="分配角色" :visible.sync="RolesVisible">
		当前的用户: {{username}}       <br><br>
		当前的角色:   {{role_name}}      <br><br>
		分配新角色:
   <el-select v-model="value" placeholder="请选择">
    <el-option
      v-for="item in usersroles"
      :key="item.id"
      :label="item.roleName"
      :value="item.roleDesc">
    </el-option>
  </el-select>
  <div slot="footer" class="dialog-footer">
    <el-button @click="RolesVisible = false">取 消</el-button>
    <el-button type="primary" @click="RolesVisible = false">确 定</el-button>
  </div>
</el-dialog>
 </div>
</template>

<script>
export default {
  data () {
	return {
			RolesVisible:false,
			role_name:'',
			username:'',
			usersroles:[],/**分配角色下拉数据*/
			value:''
	}
  },
  methods: {
			show(row){
				this.RolesVisible=true
				this.username=row.username
				this.role_name=row.role_name
			},
			getlist(arr){
				this.usersroles=arr
				
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
