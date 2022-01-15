import Post from "../post/Post";
import React, { useState, useEffect } from "react";
import "./posts.css";
import ArticlesDataService from "../../services/articles";

const Posts = (props) => {
  const [articles, setArticles] = useState([]);

  const [page_no, setPage] = useState([]);

  useEffect(() => {
    retrieveArticles();
    setPage(0);
  }, []);

  const retrieveArticles = () => {
    ArticlesDataService.getAll(page_no)
      .then((response) => {
        // console.log(response.data);
        setArticles(response.data.articles);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div>
      {articles.map((articles, i) => {
        return (
          <div>
            <Post
              title={articles.title}
              passimage={articles.image}
              content={articles.content}
              link={articles.link}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Posts;
