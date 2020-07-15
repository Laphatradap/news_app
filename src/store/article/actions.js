import axios from "axios";

export const articlesFetched = (articles) => {
  return {
    type: "ARTICLES_FETCHED",
    articles,
  };
};

export const fetchArticles = () => async (dispatch, getState) => {
  const articles = getState().articles;
  if (!articles.length) {
    try {
      const response = await axios.get(`https://newsapi.org/v2/everything?q=football&from=2020-07-09&sortBy=publishedAt&apiKey=${process.env.REACT_APP_API_KEY}
      `);
      dispatch(articlesFetched(response.data.articles));
    } catch (error) {
      console.log(error);
    }
  }
};
