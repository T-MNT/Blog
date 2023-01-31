import React from 'react';
import '../style/article_card.css';

const Article_card = (props) => {
  return (
    <li>
      <h3>{props.title}</h3>
      <p>{props.intro}</p>
      <h4>{props.author}</h4>
      <p>{props.date}</p>
      <p>{props.content}</p>
    </li>
  );
};

export default Article_card;
