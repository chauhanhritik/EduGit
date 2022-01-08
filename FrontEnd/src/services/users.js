import http from "../http-common";

class UserDataService {
  getAll(username, password) {
    // console.log(`${page}`);
    var str = "users?username=" + username + "&password=" + password;
    return http.get(str);
  }

  registerUser(data) {
    return http.post("/users/register", data);
  }
}

export default new UserDataService();
