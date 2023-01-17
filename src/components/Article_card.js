import React from 'react';

const Article_card = (props) => {
  return (
    <li>
      <h3>{props.title}</h3>
      <h4>{props.author}</h4>
      <p>{props.date}</p>
      <p>{props.content}</p>
    </li>
  );
};

export default Article_card;
