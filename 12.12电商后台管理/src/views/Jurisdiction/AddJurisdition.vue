<template>
  <div>

<el-dialog title="分配权限" :visible.sync="JurisdtionVisible">
		<el-tree
  :data="treelist"
  show-checkbox
  node-key="id"
  :default-expanded-keys="[2, 3]"
  :default-checked-keys="[5]"
  :props="defaultProps">
    </el-tree>
  <div slot="footer" class="dialog-footer">
    <el-button @click="JurisdtionVisible = false">取 消</el-button>
    <el-button type="primary" @click="JurisdtionVisible = false">确 定</el-button>
  </div>
</el-dialog>
 </div>
</template>

<script>
export default {
  data () {
	return {
			JurisdtionVisible:false,
			treelist:[],
			defaultProps: {
          children: 'children',
          label: 'authName'
    }
	}
  },
  methods: {
			show(){
				this.JurisdtionVisible=true
			},
			gettree(arr){
				this.treelist=arr
				console.log(arr);
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
