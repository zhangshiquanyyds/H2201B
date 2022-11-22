<template>
  <div>
    <!-- <h1>食品管理页面</h1> -->
    <el-table
    :data="footlist"
    style="width: 100%">
    <el-table-column type="expand">
      <template slot-scope="props">
        <el-form label-position="left" inline class="demo-table-expand">
    
        </el-form>
      </template>
    </el-table-column>
    <el-table-column
      label="食品名称"
      prop="name">
    </el-table-column>
    <el-table-column
      label="食品介绍"
      prop="description">
    </el-table-column>
    <el-table-column
      label="评分"
      prop="rating"
      width='100px'>
    </el-table-column>
    <el-table-column
      label="操作">
      <template slot-scope="scope">
       <el-button type="primary">编辑</el-button>
       <el-button type="danger">删除</el-button>
      </template>
    </el-table-column>

  </el-table>
  <!-- 分页器 -->
 <el-pagination
     @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :page-size="params.pagesize"
      layout="total, prev, pager, next"
      :total="213123">
    </el-pagination>
    
 </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      footlist: [],
      params: {
        pagesize: 20,
        pagenum: 1
      }
    };
  },
  methods: {
    handleSizeChange(val) {
      this.params.pagesize = val;
    },
    handleCurrentChange(val) {
      this.params.pagenum = val;
      this.getlist();
    },
    // 分页请求
    getlist() {
      axios(
        `https://elm.cangdu.org/shopping/v2/foods?${this.params.pagenum *
          this.params.pagesize}&limit=${
          this.params.pagesize
        }&restaurant_id=undefined`
      ).then(res => {
        console.log(res);
        this.footlist = res;
        console.log(this.footlist);
      });
    }
  },
  created() {
    axios({
      url:
        "https://elm.cangdu.org/shopping/v2/foods?offset=0&limit=20&restaurant_id=undefined",
      method: "GET"
    }).then(res => {
      console.log(res);
      this.footlist = res.data;
      // this.getlist();
    });
  },
  mounted() {},
  components: {},
  computed: {},
  watch: {}
};
</script>

<style lang='scss' scoped>
</style>
