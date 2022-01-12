import axios from "axios";

export default axios.create({
  // baseURL: "http://localhost:5000/api/v1/",
  baseURL:
    "https://us-east-1.aws.data.mongodb-api.com/app/edugit-mlfzi/endpoint/",
  headers: {
    "Content-type": "application/json",
  },
});
