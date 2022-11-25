<template>
  <div>
    <!-- <h1>管理员页面</h1> -->
    <el-table
      :data="list"
      style="width: 100%">
      <el-table-column
        type='index'
        label="#">
      </el-table-column>
       <el-table-column
        prop="create_time"
        label="注册时间">
      </el-table-column>
      <el-table-column
        prop="user_name"
        label="用户姓名">
      </el-table-column>
      <el-table-column
        prop="city"
        label="地址">
      </el-table-column>
      <el-table-column
        prop="admin"
        label="权限">
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
import axios from 'axios'
export default {
  data() {
    return {
      list:[],
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
        `https://elm.cangdu.org/bos/orders?offset=${this.params.pagenum *
          this.params.pagesize}&limit=${
          this.params.pagesize
        }&restaurant_id=undefined`
      ).then(res => {
        this.list = res.data;
        console.log(this.list);
      });
    }
  },
  created() {
    axios({
      url: "https://elm.cangdu.org/admin/all?offset=0&limit=20",
      method: "GET"
    }).then(res => {
      console.log(res);
      this.list = res.data.data;
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
