import http from "@/untils/httpRequest.js"
// 部门数据接口
function attendanceslist(data) {
	return http({
		url: http.apis("/attendances"),
		method: "GET",
		data
	})
}

export {
	attendanceslist
}
