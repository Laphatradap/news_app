import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchArticles } from "../../store/article/actions";
import { getArticles } from "../../store/article/selectors";
import ArticleCard from "./ArticleCard";

const Article = () => {
  const dispatch = useDispatch();
  const reduxArticles = useSelector(getArticles);

  useEffect(() => {
    dispatch(fetchArticles());
  }, [dispatch]);

  const renderArticles = () => {
    return reduxArticles.map((article, index) => (
      <ArticleCard key={index} {...article} />
    ));
  };
  return (
    <div className="section-articles">
      {!reduxArticles ? (
        <div className="loader"> &nbsp;</div>
      ) : (
        <>{renderArticles()}</>
      )}
    </div>
  );
};

export default Article;
