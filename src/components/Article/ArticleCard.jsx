import React from "react";
import noImage from "../../assets/no-img-landscape-text.png";

const ArticleCard = (props) => {
  const { author, description, publishedAt, title, url, urlToImage } = props;
  return (
    <div className="article__card">
      <div className="article-info">
        <img className="article-image" src={urlToImage || noImage} alt="news" />
        <h1 className="article-info__title heading-primary">{title}</h1>
        {!author ? (
          <h1 className="article-info__author heading-secondary">
            Anonymous
          </h1>
        ) : (
          <h2 className="article-info__author heading-secondary">{author}</h2>
        )}
        <h2 className="article-info__publishedAt paragraph">
          {publishedAt.substring(0, 10)}
        </h2>
        <p className="article-info__description paragraph">{description}</p>
        <a href={url} target="_blank" rel="noopener noreferrer">
          Read more... >
        </a>
      </div>
    </div>
  );
};

export default ArticleCard;
