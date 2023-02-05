import http from "@/untils/httpRequest.js"

function jurisdictionlist() {
	return http({
		url: http.apis("/sys/permission"),
		method: "GET",
	})
}

function addjurisdiction(data) {
	return http({
		url: http.apis("/sys/permission"),
		method: "POST",
		data
	})
}

function editjurisdiction(data, id) {
	return http({
		url: http.apis("/sys/permission/" + id),
		method: "PUT",
		data
	})
}

function deljurisdiction(id) {
	return http({
		url: http.apis("/sys/permission/" + id),
		method: "DELETE"
	})
}

export {
	jurisdictionlist,
	addjurisdiction,
	editjurisdiction,
	deljurisdiction
}
