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

  static async apiRegisterUser(req, res, next) {
    try {
      const username = req.body.username;
      const password = req.body.password;
      const email = req.body.email;

      const ReviewResponse = await UsersDAO.addUser(username, password, email);
      res.json({ status: "success" });
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  }
}
