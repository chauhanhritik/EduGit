import http from "../http-common";

class QuestionDataService {
  getAll(page) {
    // console.log(`${page}`);
    var str = "?page=" + page;
    return http.get(str);
  }
}

export default new QuestionDataService();
