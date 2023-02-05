import http from "@/untils/httpRequest.js"
// 社保城市公积金城市数据接口
function citylist(data) {
	return http({
		url: http.apis("/sys/city"),
		method: "GET",
		data
	})
}

function socialsecurityslist(data) {
	console.log(data);
	return http({
		url: http.apis("/social_securitys/list"),
		method: "POST",
		data
	})
}
export {
	citylist,
	socialsecurityslist
}
