import QuestionsDAO from "../dao/questionsDAO.js";

export default class QuestionsController {
  static async apiGetQuestions(req, res, next) {
    const QuestionsPerPage = req.query.QuestionsPerPage
      ? parseInt(req.query.QuestionsPerPage, 10)
      : 20;
    const page = req.query.page ? parseInt(req.query.page, 10) : 0;

    let filters = {};
    if (req.query.cuisine) {
      filters.cuisine = req.query.cuisine;
    } else if (req.query.zipcode) {
      filters.zipcode = req.query.zipcode;
    } else if (req.query.name) {
      filters.name = req.query.name;
    }

    const { questionsList, totalNumQuestions } =
      await QuestionsDAO.getQuestions({
        filters,
        page,
        QuestionsPerPage,
      });

    let response = {
      questions: questionsList,
      page: page,
      filters: filters,
      entries_per_page: QuestionsPerPage,
      total_results: totalNumQuestions,
    };
    res.json(response);
  }
  static async apiGetQuestionsById(req, res, next) {
    try {
      let id = req.params.id || {};
      let questions = await QuestionsDAO.getQuestionsByID(id);
      if (!questions) {
        res.status(404).json({ error: "Not found" });
        return;
      }
      res.json(questions);
    } catch (e) {
      console.log(`api, ${e}`);
      res.status(500).json({ error: e });
    }
  }

  //   static async apiGetQuestionsCuisines(req, res, next) {
  //     try {
  //       let cuisines = await QuestionsDAO.getCuisines();
  //       res.json(cuisines);
  //     } catch (e) {
  //       console.log(`api, ${e}`);
  //       res.status(500).json({ error: e });
  //     }
  //   }
}
