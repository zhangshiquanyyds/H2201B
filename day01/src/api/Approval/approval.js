import http from "@/untils/httpRequest.js"

function Approvallist(data) {
	return http({
		url: http.apis(`/user/process/instance/${data.page}/${data.pageSize}`),
		method: "PUT",
	})
}
export {
	Approvallist
}
