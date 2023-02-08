import React from 'react';
import '../style/article_card.css';

const Article_card = (props) => {
  return (
    <div>
      <div className="article-img-container" />
      <div className="card-text-container">
        <h3>{props.title}</h3>
        <p>{props.intro}</p>
        <div className="author-date-container">
          <h4>{props.author}</h4>
          <p>{props.date}</p>
        </div>

        <p>{props.content}</p>
      </div>
    </div>
  );
};

export default Article_card;
