//all routes to be defined here
import express from "express";
import UsersCtrl from "./users.controller.js";

const router = express.Router();

router.route("/").get(UsersCtrl.apiGetUser);
router.route("/register").post(UsersCtrl.apiRegisterUser);

export default router;
