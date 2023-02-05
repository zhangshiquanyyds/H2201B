<template>
	<div>
<el-card>
			<div style="display: flex;">
				<div style="width:10%;padding-left: 50px;" >部门</div><el-checkbox-group style="width:90%" v-model="checkList1">
       <el-checkbox :label="item.name" v-for="item in $store.state.socialsecurity.departmentlist.depts" :key="item.id"></el-checkbox>
       </el-checkbox-group>
			</div><br><br>
			<slot name="default1"></slot>
			<slot name="default2"></slot>
		</el-card>
 </div>
</template>

<script>
export default {
	data () {
		return {
checkList1: [],
		}
	},
	methods: {

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
