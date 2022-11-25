<template>
  <div>
    <!-- <h1>订单管理页面</h1> -->
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
      label="订单 ID"
      prop="id">
    </el-table-column>
    <el-table-column
      label="总价格"
      prop="total_amount">
    </el-table-column>
    <el-table-column
      label="订单状态"
      prop="status_bar"
      width='100px'>
      <template slot-scope="scope">
        <span>{{scope.row.status_bar.title}}</span>
      </template>
    </el-table-column>
  </el-table>
  <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :page-size="params.pagesize"
      layout="total, prev, pager, next"
      :total="400">
    </el-pagination>
 </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      list: [],
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
        `https://elm.cangdu.org/admin/all?offset=${this.params.pagenum *
          this.params.pagesize}&limit=${
          this.params.pagesize
        }&restaurant_id=undefined`
      ).then(res => {
        this.list = res.data;
      });
    }
  },
  created() {
    axios({
      url:
        "https://elm.cangdu.org/bos/orders?offset=0&limit=20&restaurant_id=undefined",
      method: "GET"
    }).then(res => {
      this.list = res.data;
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
</style>
