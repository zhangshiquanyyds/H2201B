<template>
	<div>
		<el-dialog title="分配权限" :visible.sync="rolejurisdictiondialogFormVisible">
			<el-tree
  :props="props"
  :load="loadNode"
	:data="$store.state.role.distributionlist"
  lazy
  show-checkbox
  @check-change="handleCheckChange">
</el-tree>
  <div slot="footer" class="dialog-footer">
    <el-button @click="dialogFormVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
  </div>
</el-dialog>
 </div>
</template>

<script>
export default {
	data () {
		return {
     rolejurisdictiondialogFormVisible:false,
				props: {
          label: 'name',
          children: 'zones'
        },
		}
	},
	methods: {
    show(id){
			this.rolejurisdictiondialogFormVisible=true
			this.$store.state.role.jurisdictionId=id
		}
	},
	created () {

	},
	mounted () {
		this.$store.dispatch('role/distribution')
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
