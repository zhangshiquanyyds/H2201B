<template>
	<div id="app">
		<div class="log">
				<el-form ref="form" :model="form" label-width="80px">
  <el-form-item label="用户名">
    <el-input v-model="form.username"></el-input>
  </el-form-item>
  <el-form-item label="密码">
    <el-input v-model="form.password"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="onSubmit">立即创建</el-button>
    <el-button>取消</el-button>
  </el-form-item>
</el-form>
<div class="tu">
		<img src="狗.jpg" alt="">
</div>
		</div>
 </div>
</template>

<script>
import {setToken} from '../../../untils/auth.js'
export default {
	data () {
		return {
				form:{
					username:'',
					password:''
				}
		}
	},
	methods: {
   onSubmit(){	
				// this.$http({method:"post",data:this.form,url:this.$http.addUrl("/login")}).then((res)=>{
				// 	console.log(res);
				// })
			// post 有时候会传递json数据格式或者表单数据形式
			
				this.$http.apiPost('/login',this.form,"post").then(res=>{
						console.log(res);
						let {token,username}=res.data.data
						if(res.data.mata.status===200){
                     setToken(token)
										  this.$notify({
                       title: '登录成功',
                       message: '欢迎登录'+username,
                       type: 'success'
                        });
									this.$router.replace('/welcome')//删除历史记录不能后退
						}else{
							this.$notify.error({
                 title: '登录失败',
                  message: res.data.mata.msg
                });
						}
				})
				
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
#app {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-image: url("@/assets/狗.jpg");
  background-size: 33% 100%;
}
.log {
  position: relative;
  box-sizing: border-box;
  padding: 200px 50px;
  width: 550px;
  height: 500px;
  background: #fff;
  opacity: 0.8;
}
.tu {
  position: absolute;
  top: -50px;
  left: 36%;

  width: 150px;
  height: 150px;
  border-radius: 50%;
}
.tu img {
  border-radius: 50%;
  width: 100%;
  height: 100%;
}
</style>
