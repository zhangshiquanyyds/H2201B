<template>
  <div>
    <!-- <h1>用户列表页面</h1> -->
     <el-table
      :data="list"
      style="width: 100%">
      <el-table-column
        type='index'
        label="#"
        width="180">
      </el-table-column>
       <el-table-column
        prop="registe_time"
        label="注册时间"
        width="180">
      </el-table-column>
      <el-table-column
        prop="username"
        label="用户姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="city"
        label="注册地址">
      </el-table-column>
    </el-table>
     <!-- 分页器 -->
 <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :page-size="params.pagesize"
      layout="total, prev, pager, next"
      :total="69841">
    </el-pagination>
 </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      list: [],
      newlist: [],
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
        `https://elm.cangdu.org/v1/users/list?offset=${
          this.params.pagenum*this.params.pagesize
        }&limit=${this.params.pagesize}`
      ).then(res => {
        this.list = res.data;
        console.log(this.list);
      });
    }
  },
  created() {
    axios({
      url: "https://elm.cangdu.org/v1/users/list",
      method: "GET"
    }).then(res => {
      this.list = res.data;
      this.newlist = res.data;
      console.log(this.list);
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
