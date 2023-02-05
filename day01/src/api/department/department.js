import http from "@/untils/httpRequest.js"
// 部门数据接口
function departmentlist(data) {
	return http({
		url: http.apis("/company/department"),
		method: "GET",
		data
	})
}

export {
	departmentlist
}
