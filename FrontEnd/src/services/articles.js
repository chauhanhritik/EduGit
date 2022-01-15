import http from "../http-common";

class QuestionDataService {
  getAll(page) {
    var str = "articles?page=" + page;
    return http.get(str);
  }
}

export default new QuestionDataService();
