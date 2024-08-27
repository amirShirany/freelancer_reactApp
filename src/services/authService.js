import http from "./httpService"

export function getOtp(data) {
  // for example ---> data phoneNumber : 09137983097
  return http.post("/user/get-otp", data).then(({ data }) => data.data) // promise
}

export function checkOtp(data) {
  return http.post("/user/check-otp", data).then(({ data }) => data.data)
}

export function completeProfile(data) {
  return http.post("/user/complete-profile", data).then(({ data }) => data.data)
}

export function getUser() {
  return http.get("/user/profile").then(({ data }) => data.data)
}

export function logoutApi() {
  return http.post("/user/logout").then(({ data }) => data.data)
}

export function getUsersApi() {
  return http.get("/admin/user/list").then(({ data }) => data.data)
}

export function changeUserStatusApi({ userId, data }) {
  // data => {status:0, 1, 2}
  return http
    .patch(`/admin/user/verify/${userId}`, data)
    .then(({ data }) => data.data)
}
