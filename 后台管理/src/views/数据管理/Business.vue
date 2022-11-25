<template>
  <div>
    <!-- <h1>商家管理页面</h1> -->
    <el-table
    :data="list"
    style="width: 100%">
    <el-table-column type="expand">
      <template slot-scope="props">
        <el-form label-position="left" inline class="demo-table-expand">
    
        </el-form>
      </template>
    </el-table-column>
    <el-table-column
      label="店铺名称"
      prop="name">
    </el-table-column>
    <el-table-column
      label="店铺地址"
      prop="address">
    </el-table-column>
    <el-table-column
      label="店铺介绍"
      prop="description"
      width='100px'>
    </el-table-column>
    <el-table-column
      label="操作"
      >
      <template slot-scope="scope">
       <el-button type="primary" size='mini' @click="edit(scope.row,scope.$index)">编辑</el-button>
       <el-button type="primary" size='mini' @click="$router.push(`/shops/${scope.row.id}`)">添加商品</el-button>
       <el-button type="danger" size='mini' @click="del(scope.$index)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
  <!-- 分页器 -->
 <el-pagination
      @current-change="handleCurrentChange"
      :page-size="params.pagesize"
      layout="total, prev, pager, next"
      :total="newlist.length*20">
    </el-pagination>
<el-dialog title="修改店铺信息" :visible.sync="dialogFormVisible">


  <el-form ref="form" :model="form" label-width="80px">
   <el-form-item label="店铺名称">
    <el-input v-model="form.name"></el-input>
   </el-form-item>
   <el-form-item label="详细地址">
    <el-input v-model="form.address"></el-input>
   </el-form-item>
   <el-form-item label="商品介绍">
    <el-input v-model="form.title"></el-input>
   </el-form-item>
   <el-form-item label="联系电话">
    <el-input v-model="form.phone"></el-input>
   </el-form-item>
   <el-form-item label="店铺分类">
     <el-cascader  v-model="form.category"  clearable></el-cascader>
   </el-form-item>
   <el-form-item label="商品图片">
     <img  class="ig" :src="form.image" alt="">
   </el-form-item>
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="dialogFormVisible = false">取 消</el-button>
    <el-button type="primary" @click="add">确 定</el-button>
  </div>
</el-dialog>

 </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      list: [],
      newlist: [],
      dialogFormVisible: false,
      form: {
        name: "",
        address: "",
        phone: "",
        title: "",
        category: [],
        image: ""
      },
      formLabelWidth: "120px",
      editId: -1,
      params: {
        pagesize: 20,
        pagenum: 1
      }
    };
  },
  methods: {
    edit(row, index) {
      this.dialogFormVisible = true;
      // this.editId = row.id;
      this.editId = index;
      this.form.name = row.name;
      this.form.address = row.address;
      this.form.phone = row.phone;
      this.form.title = row.description;
      this.form.category = row.category;
      this.form.image = row.image_path;
    },
    add() {
      // axios({
      //   url: "https://elm.cangdu.org/shopping/updateshop?id="+this.editId,
      //   method: "post"
      // }).then(res => {
      //   console.log(res);
      // });

      this.dialogFormVisible = false;
      this.list[this.editId].name = this.form.name;
      this.list[this.editId].address = this.form.address;
      this.list[this.editId].phone = this.form.phone;
      this.list[this.editId].description = this.form.title;
      this.$message({
        message: "编辑成功",
        type: "success"
      });
    },
    del(index) {
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.list.splice(index, 1);
          this.$message({
            type: "success",
            message: "删除成功!"
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    handleCurrentChange(val) {
      this.params.pagenum = val;
      this.getlist();
    },
    // 分页请求
    getlist() {
      axios(
        `https://elm.cangdu.org/shopping/restaurants?latitude=34.74725&longitude=113.624931&offset=${
          this.params.pagenum*this.params.pagesize
        }&limit=${this.params.pagesize}`
      ).then(res => {
        this.list = res.data;
      });
    }
  },
  created() {
    axios({
      url:
        "https://elm.cangdu.org/shopping/restaurants?latitude=34.74725&longitude=113.624931&offset=0&limit=20",
      method: "GET"
    }).then(res => {
      this.list = res.data;
      this.newlist = res.data;
      this.getlist();
    });
  },
  mounted() {},
  components: {},
  computed: {},
  watch: {}
};
</script>

<style lang='scss' scoped>
.ig {
  width: 100px;
  height: 100px;
}
</style>
