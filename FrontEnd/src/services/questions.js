import http from "../http-common";

class QuestionDataService {
  getAll(page) {
    // console.log(`${page}`);
    return http.get(`page=${page}`);
  }
}

export default new QuestionDataService();
