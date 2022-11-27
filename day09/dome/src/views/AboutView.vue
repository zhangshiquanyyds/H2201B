<template>
<div class="box">
<div class="todo">
        <div class="headers">
            <div></div>
            <div>
                <img src="note.75134fb0.svg" alt="" class="ig">
            </div>
            <div class="title">To-DolIST</div>
            <div></div>
        </div>
        <h1>~ Today I need to ~</h1>
        <div class="inputs">
            <input type="text" placeholder="Add new todo..." id="inp" v-model="value" @keydown.13="Add">
            <span class="span1"><span class="span2" id="add" @click="add">Submit</span></span>
        </div>
        <ul id="list1">
            <li v-for="(item,index) in $store.state.list" :key="index">
                <div>
                  <input type="checkbox" name="" id="" v-model="item.status">
                    <span>{{item.title}}</span>
                </div>
                <span @click="del(index)">X</span>
            </li>
        </ul>
        <div id="bottom-title">
            <!-- <span>Congrat, you have no more tasks to do</span> -->
        </div>
        <div id="bottom">
            <span style="font-size: 12px;" id="bottom-span"> {{$store.state.list.length}}item left</span>
            <button :class="Index==0?'btn':''" @click="change(0)">All</button>
            <button :class="Index==1?'btn':''" @click="change(1)">Active</button>
            <button :class="Index==2?'btn':''" @click="change(2)">Completed</button>
            <button :class="Index==3?'btn':''" @click="change(3)">Clar Completed</button>
        </div>
    </div>
</div>
  
</template>

<script>
export default {
  data() {
    return {
      value: "",
      Index:0,
    };
  },
  methods: {
    //点击添加
    add() {
      if (this.value == "") {
        alert("不能为空");
      } else {
        this.$store.commit("add", {
          status: false,
          title: this.value
        });
        this.value = "";
      }
    },
    //回车事件
    Add() {
      if (this.value == "") {
        alert("不能为空");
      } else {
        this.$store.commit("add", {
          status: true,
          title: this.value
        });
        this.value = "";
      }
    },
    // 删除
    del(index) {
      this.$store.commit("del", index);
    },
    change(i) {
      this.Index = i;
      this.$store.commit('change',i)
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
.box {
  width: 100vw;
  height: 100vh;
  background: #ffb7b3;
}
.todo {
  width: 440px;
  background: #fff;
  border-radius: 10px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 30px 40px 20px;
  box-sizing: border-box;
}

.headers {
  width: 360px;
  height: 88px;
  display: flex;
}

.headers div {
  flex: 1;
}

.headers .title {
  background: #fe7345;
  color: #fff;
  width: 60px;
  height: 30px;
  line-height: 30px;
  margin: auto 0;
  padding: 5.25px 16.8px 3.15px;
  border-radius: 20% 5% 20% 5%/5% 20% 25% 20%;
  transform: rotate(3deg);
  /*倾斜*/
  /* font-weight: lighter; */
}

.ig {
  width: 80px;
  height: 80px;
}

h1 {
  text-align: center;
  font-size: 18px;
  margin: 20px 0 18px;
}

.inputs {
  width: 100%;
  height: 31px;
  display: flex;
  padding: 0 20px;
  box-sizing: border-box;
}

.inputs input {
  width: 233px;
  height: 29px;
  border: 0;
  border-bottom: 2px dashed #fe7345;
  margin-right: 5px;
  outline: none;
}

.inputs .span1 {
  position: relative;
  display: inline-block;
  width: 71px;
  height: 40px;
  background: #000;
  transform: rotate(4deg);
  border-radius: 5px;
  background: #fe7345;
  background-image: url(data:image/png;base64,R0lGODlhBAAEAIABAAAAAAAAACH/C1hNUCBEYXRhWE1QPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS4wLWMwNjEgNjQuMTQwOTQ5LCAyMDEwLzEyLzA3LTEwOjU3OjAxICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M1LjEgV2luZG93cyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo5NUY1OENCRDdDMDYxMUUyOTEzMEE1MEM5QzM0NDVBMyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo5NUY1OENCRTdDMDYxMUUyOTEzMEE1MEM5QzM0NDVBMyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjk1RjU4Q0JCN0MwNjExRTI5MTMwQTUwQzlDMzQ0NUEzIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjk1RjU4Q0JDN0MwNjExRTI5MTMwQTUwQzlDMzQ0NUEzIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+Af/+/fz7+vn49/b19PPy8fDv7u3s6+rp6Ofm5eTj4uHg397d3Nva2djX1tXU09LR0M/OzczLysnIx8bFxMPCwcC/vr28u7q5uLe2tbSzsrGwr66trKuqqainpqWko6KhoJ+enZybmpmYl5aVlJOSkZCPjo2Mi4qJiIeGhYSDgoGAf359fHt6eXh3dnV0c3JxcG9ubWxramloZ2ZlZGNiYWBfXl1cW1pZWFdWVVRTUlFQT05NTEtKSUhHRkVEQ0JBQD8+PTw7Ojk4NzY1NDMyMTAvLi0sKyopKCcmJSQjIiEgHx4dHBsaGRgXFhUUExIREA8ODQwLCgkIBwYFBAMCAQAAIfkEAQAAAQAsAAAAAAQABAAAAgYEEpdoeQUAOw==);
}

.inputs .span2 {
  position: absolute;
  top: 0;
  left: 0;
  display: inline-block;
  width: 69px;
  height: 30px;
  text-align: center;
  line-height: 35px;
  font-size: 16.5px;
  background: #fff;

  border-radius: 5px;
  border: 2px solid #494a4b;
}

#bottom-title {
  position: fixed;
  bottom: 20px;
}

#bottom-title span {
  font-size: 13px;
  color: #a9a6a7;
  margin-left: 40px;
}

ul {
  margin-bottom: 60px;
}

li {
  display: flex;
  justify-content: space-between;
}

.active {
  background: orange;
  text-decoration: line-through;
  color: #fff;
}

button {
  box-sizing: border-box;
  border: 0;
  padding: 0 8px;
  background: #fff;
  height: 20px;
}

.btn {
  background: #fe7345;
  color: #fff;
  border-radius: 4px;
}
</style>
