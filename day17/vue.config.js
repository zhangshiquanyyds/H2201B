const {
	defineConfig
} = require("@vue/cli-service")
let target = process.env.VUE_APP_MOCK_ENABLE === 'true' ? 'http://localhost:8090' : process.env.VUE_APP_CONSOLE_URL
console.log(target);
module.exports = defineConfig({
	transpileDependencies: true,
	// 根目录
	publicPath: "./",
	// 默认关闭生产环境的资源
	productionSourceMap: false,
	// 打包时文件夹名称
	outputDir: "Bag",
	// 放置打包时静态资源文件生成存放位置
	assetsDir: "assets",
	// 本地环境代理位置
	devServer: {
		// 端口号
		port: "8080",
		// 开发运行时域名， 设置成 '0.0.0.0'， 在同一个局域网下， 如果你的项目在运行， 同时可以通过你的http: //ip:port/..访问你的项目
		host: "localhost",
		//默认启动项目是否打开浏览器
		open: true,
		// 是否启用https
		https: false,
		proxy: {
			[process.env.VUE_APP_BASE_API]: { // 代理标识, 如果出现了这个就代表需要代理
				// 默认开启代理模式
				changeOrigin: true,
				// 如果是http接口 需要配置参数
				secure: false,
				// 代理地址
				target,
				pathRewrite: {
					["^" + process.env.VUE_APP_BASE_API]: '' // 重写路由, 把想替换掉的路由地址替换为空或者别的
				}
			}
		},
	}
})
