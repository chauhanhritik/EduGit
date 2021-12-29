//  MAIN SERVER CODE
import express from "express";
import cors from "cors";
import questions from "./api/questions.route.js";

const app = express(); //to be used to make our server

app.use(cors()); //cors to be used by express
app.use(express.json()); //includes body parser as well unlike the older versions

app.use("/api/v1/questions", questions);
app.use("*", (req, res) => res.status(404).json({ error: "not found" }));

export default app;
