import UsersDAO from "../dao/usersDAO.js";

export default class UsersController {
  static async apiGetUser(req, res, next) {
    let filters = {};
    if (req.query.username) {
      filters.username = req.query.username;
    }
    if (req.query.password) {
      filters.password = req.query.password;
    }

    const UserData = await UsersDAO.getUser({
      filters,
    });

    let response = {
      User: UserData,
    };
    res.json(response);
  }
  // static async apiGetQuestionsById(req, res, next) {
  //   try {
  //     let id = req.params.id || {};
  //     let questions = await UsersDAO.getQuestionsByID(id);
  //     if (!questions) {
  //       res.status(404).json({ error: "Not found" });
  //       return;
  //     }
  //     res.json(questions);
  //   } catch (e) {
  //     console.log(`api, ${e}`);
  //     res.status(500).json({ error: e });
  //   }
  // }
}
