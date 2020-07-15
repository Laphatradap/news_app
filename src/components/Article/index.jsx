import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchArticles } from "../../store/article/actions";
import { getArticles } from "../../store/article/selectors";

const Article = () => {
  const dispatch = useDispatch();
  const reduxArticles = useSelector(getArticles);
  console.log("OUTPUT: Article -> reduxArticles", reduxArticles);

  useEffect(() => {
    dispatch(fetchArticles());
  }, [dispatch]);
  return <div>hello</div>;
};

export default Article;
