import http from "@/untils/httpRequest.js"
/***列表数据接口 */
function rolelist(data) {
	return http({
		url: http.apis("/sys/role"),
		method: "GET",
		data
	})
}
/***添加接口 */
function roleadd(data) {
	return http({
		url: http.apis("/sys/role"),
		method: "POST",
		data
	})
}
/***分配权限接口 */
function rolepermission() {
	return http({
		url: http.apis("/sys/permission"),
		method: "GET",
	})
}
/***编辑接口 */
function roleedit(data, id) {
	return http({
		url: http.apis("/sys/role/" + id),
		method: "PUT",
		data
	})
}
/***编辑接口 */
function roledel(id) {
	return http({
		url: http.apis("/sys/role/" + id),
		method: "DELETE",
	})
}
export {
	rolelist,
	roleadd,
	rolepermission,
	roleedit,
	roledel
}
