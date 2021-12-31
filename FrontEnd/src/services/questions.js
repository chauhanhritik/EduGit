import http from "../http-common";

class QuestionDataService {
  getAll(page) {
    // console.log(`${page}`);
    var str = "questions?page=" + page;
    return http.get(str);
  }
}

export default new QuestionDataService();
