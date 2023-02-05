import http from "@/untils/httpRequest.js"

function login(data) {
	return http({
		url: http.apis("/sys/login"),
		method: "POST",
		data
	})
}
export {
	login
}
