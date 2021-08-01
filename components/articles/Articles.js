import React from "react";
import Article from "./article/Article";
import styles from "../../styles/Articles.module.css";

const articles = ({ apiData }) => {
  return (
    <div className={styles.flex}>
      {apiData.articles.map((article, index) => {
        return <Article article={article} key={index} />;
      })}
    </div>
  );
};

export default articles;
