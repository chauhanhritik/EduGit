import http from "../http-common";

class UserDataService {
  getAll(username, password) {
    // console.log(`${page}`);
    var str = "users?username=" + username + "&password=" + password;
    return http.get(str);
  }
}

export default new UserDataService();
