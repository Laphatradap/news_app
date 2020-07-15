import React from "react";
import noImage from "../../assets/no-img-landscape-text.png";

const ArticleCard = (props) => {
  const {
    author,
    // content,
    description,
    publishedAt,
    source,
    title,
    url,
    urlToImage,
  } = props;
  return (
    <>
      <div className="heading-primary">{title}</div>
      {/* <div className="paragraph">{content}</div> */}
      <div className="paragraph">{author}</div>
      <div className="paragraph">{description}</div>
      <div className="paragraph">{publishedAt}</div>
      <div className="paragraph">{source.id}</div>
      <a href={url}>read more...</a>
      {!urlToImage ? (
        <img src={noImage} alt="item not found" />
      ) : (
        <img src={urlToImage} alt="news" />
      )}
    </>
  );
};

export default ArticleCard;

// author: null
// ​​
// content: "NEW YORK--(BUSINESS WIRE)--College footballs 2021 recruiting class will be the most unique in the modern history of the talent chase because on both sides of the equation -- the players and the coach… [+7128 chars]"
// ​​
// description: "NEW YORK--(BUSINESS WIRE)--Sports Illustrated unveils 1,000-plus candidates for 2020 SI All-American high school football team"
// ​​
// publishedAt: "2020-07-15T11:09:49Z"
// ​​
// source: Object { id: null, name: "Business Wire" }
// ​​
// title: "Sports Illustrated Unveils 1,000 Candidates for 2020 SI All-American High School Football Team"
// ​​
// url: "https://www.businesswire.com/news/home/20200715005301/en/Sports-Illustrated-Unveils-1000-Candidates-2020-SI"
// ​​
// urlToImage: "https://mms.businesswire.com/media/20200715005301/en/805539/23/SI-All-American-hires.jpg"
