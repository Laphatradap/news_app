import React from "react";
import noImage from "../../assets/no-img-landscape-text.png";

const ArticleCard = (props) => {
  const { author, description, publishedAt, title, url, urlToImage } = props;
  return (
    <>
      <div className="article__card">
        <div className="article-info">
          <img
            className="article-image"
            src={urlToImage || noImage}
            alt="news"
          />
          <div className="article-info__title heading-primary">{title}</div>
          {!author ? (
            <div className="article-info__author heading-secondary">
              Anonymous
            </div>
          ) : (
            <div className="article-info__author heading-secondary">
              {author}
            </div>
          )}
          <div className="article-info__publishedAt paragraph">
            {publishedAt.substring(0, 10)}
          </div>
          <div className="article-info__description paragraph">
            {description}
          </div>
          <a href={url}>read more...</a>
        </div>
      </div>
    </>
  );
};

export default ArticleCard;
