import http from "../http-common";

class QuestionDataService {
  getAll(page = 0) {
    let str = `?page=${page}`;
    return http.get(str);
  }
}

export default new QuestionDataService();
