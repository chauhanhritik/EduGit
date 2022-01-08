let users; //holds reference to users database

export default class UsersDAO {
  //to be used to connect to database
  static async injectDB(conn) {
    //how we initially connect to database and the funtion to be called as soon as the server starts
    if (users) {
      //as soon as the server starts we should get a reference to the databse
      return;
    }
    try {
      // if the reference to the databse is not found then we make it ourselves
      users = await conn.db(process.env.EDUGIT_NS).collection("Users");
    } catch (e) {
      console.log(`unable to connect to database. Error : ${e}`);
    }
  }

  static async getUser({
    filters = null,
    // page = 0,
    // questionsPerPage = 20,
  } = {}) {
    let query;
    if (filters) {
      if ("username" in filters && "password" in filters) {
        query = {
          UserName: { $eq: filters["username"] },
          Password: { $eq: filters["password"] },
        };
      } else return 0;
    }

    let cursor;

    try {
      cursor = await users.find(query);
    } catch (e) {
      console.error(`Unable to issue find command, ${e}`);
      return 0;
    }

    const displayCursor = cursor;
    //   .limit(questionsPerPage)
    //   .skip(questionsPerPage * page);

    try {
      // const questionsList = await displayCursor.toArray();
      // const totalNumQuestions = await questions.countDocuments(query);
      const userData = displayCursor.toArray();
      return userData;
    } catch (e) {
      console.error(
        `Unable to convert cursor to array or problem counting documents, ${e}`
      );
      return (userData = 0);
    }
  }

  static async addUser(username, password, email) {
    try {
      const registerDoc = {
        Username: username,
        Password: password,
        Email: email,
      };

      return await users.insert(registerDoc);
    } catch (e) {
      console.error(`Unable to post review: ${e}`);
      return { error: e };
    }
  }
}
