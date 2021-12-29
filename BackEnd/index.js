import app from "./server.js";
import mongodb from "mongodb";
import dotenv from "dotenv";
import QuestionssDAO from "./dao/questionsDAO.js";

//configuiring dotenv for use
dotenv.config();
const MongoClient = mongodb.MongoClient;

const port = process.env.PORT || 8000; // if the port(5000 in this one) from dotenv file cant be accesed then access 8000

MongoClient.connect(process.env.EDUGIT_DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  //   poolsize: 50, //max no of users at a time
  wtimeout: 2500, //timeout after 2500 ms
  //   useNewUrlParse: true,
})

  .then(async (client) => {
    await QuestionssDAO.injectDB(client);
    app.listen(port, () => {
      console.log(`listening on the port ${port}`);
    });
  })

  .catch((err) => {
    //if connection fails
    console.error(err.stack);
    process.exit(1);
  });

// --   AND WE ARE DONE WITH THE DATABASE AND HAVE STARTED OUR WEB SERVER  --
