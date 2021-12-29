//all routes to be defined here
import express from "express";
import QuestionsCtrl from "./questions.controller.js";

const router = express.Router();

router.route("/").get(QuestionsCtrl.apiGetQuestions);

export default router;
