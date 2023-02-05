import http from "@/untils/httpRequest.js"

function wageslist(data) {
	return http({
		url: http.apis("/salarys/list"),
		method: "POST",
		data
	})
}
export {
	wageslist
}
