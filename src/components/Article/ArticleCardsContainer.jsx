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
    return reduxArticles.map((article) => (
      <ArticleCard key={article.title} {...article} />
    ));
  };
  return (
    <section className="section-articles">
      {!reduxArticles?.length ? (
        <div className="loader"> &nbsp;</div>
      ) : (
        renderArticles()
      )}
    </section>
  );
};

export default Article;
