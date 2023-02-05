import http from "@/untils/httpRequest.js"

function stafflist(data) {
	return http({
		url: http.apis("/sys/user"),
		method: "GET",
		data
	})
}

function staffdetails(id) {
	console.log(id);
	return http({
		url: http.apis("/sys/user/" + id),
		method: "GET",
	})
}

function userInfo(data) {
	return http({
		url: http.apis(`/sys/user/${data}`),
		method: "get"
	})
}

function job(data) {
	return http({
		url: http.apis(`/employees/${data}/jobs`),
		method: "get"
	})
}
export {
	stafflist,
	staffdetails,
	userInfo,
	job
}
