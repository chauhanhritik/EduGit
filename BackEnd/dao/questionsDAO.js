let questions; //holds reference to questions database

export default class QuestionsDAO {
  //to be used to connect to database
  static async injectDB(conn) {
    //how we initially connect to database and the funtion to be called as soon as the server starts
    if (questions) {
      //as soon as the server starts we should get a reference to the databse
      return;
    }
    try {
      // if the reference to the databse is not found then we make it ourselves
      questions = await conn.db(process.env.EDUGIT_NS).collection("Questions");
    } catch (e) {
      console.log(`unable to connect to database. Error : ${e}`);
    }
  }

  static async getQuestions({
    filters = null,
    page = 0,
    questionsPerPage = 20,
  } = {}) {
    let query;
    if (filters) {
      if ("name" in filters) {
        query = { $text: { $search: filters["name"] } };
      }
    }

    let cursor;

    try {
      cursor = await questions.find(query);
    } catch (e) {
      console.error(`Unable to issue find command, ${e}`);
      return { questionsList: [], totalNumQuestions: 0 };
    }

    const displayCursor = cursor
      .limit(questionsPerPage)
      .skip(questionsPerPage * page);

    try {
      const questionsList = await displayCursor.toArray();
      const totalNumQuestions = await questions.countDocuments(query);

      return { questionsList, totalNumQuestions };
    } catch (e) {
      console.error(
        `Unable to convert cursor to array or problem counting documents, ${e}`
      );
      return { questionsList: [], totalNumQuestions: 0 };
    }
  }
}
