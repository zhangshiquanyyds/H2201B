<template>
  <div>
    <el-button type="primary" @click="dialogFormVisible = true">新建</el-button>
    <el-calendar>
  <!-- 这里使用的是 2.5 slot 语法，对于新项目请使用 2.6 slot 语法-->
  <template
    slot="dateCell"
    slot-scope="{date, data}">
    <p :class="data.isSelected ? 'is-selected' : ''">
      {{ data.day.split('-').slice(1).join('-') }} {{ data.isSelected ? '✔️' : ''}}
    </p>
    <ul>
      <li @dblclick="change(item,index)" :class="item.status=='已完成'?'active':'deactive'" v-for="(item,index) in $store.state.list" :key="index" v-show="item.datevalue==data.day" > {{item.title}}</li>
    </ul>
  </template>
</el-calendar>
<!-- 添加对话框 -->
<el-dialog :title="editid==-1?'新建事件':'编辑事件'" :visible.sync="dialogFormVisible">
  <el-form :model="form">
    <el-form-item label="事件名称" :label-width="formLabelWidth">
      <el-input v-model="form.title" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="日期选择" :label-width="formLabelWidth">
       <el-date-picker
      v-model="form.datevalue"
      type="date"
      placeholder="选择日期">
    </el-date-picker>
    </el-form-item>

       <el-form-item label="事件状态" :label-width="formLabelWidth">
    <el-radio-group v-model="form.status">
      <el-radio label="已完成"></el-radio>
      <el-radio label="未完成"></el-radio>
    </el-radio-group>
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
export default {
  data() {
    return {
      form: {
        title: "",
        datevalue: "", //日期
        status: ""
      },
      dialogFormVisible: false,
      formLabelWidth: "120px",
      editid: -1
    };
  },
  methods: {
    add() {
      if (this.editid == -1) {
        this.dialogFormVisible = false;
        this.get();
        this.$store.commit("add", this.form);
      } else {
        this.get();
        this.$store.commit("xgadd", { ...this.form, index: this.editid });
        this.editid = -1;
        this.dialogFormVisible = false;
      }
      this.form.title = "";
      this.form.datevalue = "";
      this.form.status = "";
    },
    // 数字补0判断
    get() {
      let str = this.form.datevalue
        .toLocaleString()
        .split(" ")[0]
        .split("/")
        .join("-");
      if (str.length < 10) {
        let newtime = this.insertStr(str, 8, "0");
        this.form.datevalue = newtime;
      } else {
        this.form.datevalue = str;
      }
    },
    // 数字补0
    insertStr(source, start, newStr) {
      return source.slice(0, start) + newStr + source.slice(start);
    },
    // 双击修改
    change(item, index) {
      // 数据回填
      this.editid = index;
      this.dialogFormVisible = true;
      this.form.title = item.title;
      this.form.datevalue = item.datevalue;
      this.form.status = item.status;
    }
  },
  created() {},
  mounted() {},
  components: {},
  computed: {},
  watch: {}
};
</script>

<style lang='scss' scoped>
ul li {
  width: 100px;
  height: 30px;
  line-height: 30px;
  background: orange;
  color: #fff;
  border-radius: 15px;
  text-indent: 1em;
  margin-bottom: 5px;
}
.active {
  background: orange;
}
.deactive {
  background: red;
}
</style>
