import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Article_card from '../components/Article_card';

const Articles = () => {
  const [articles, setArticles] = useState();

  useEffect(() => {
    axios
      .get(
        'https://blog-b64f2-default-rtdb.europe-west1.firebasedatabase.app/Articles.json'
      )
      .then((res) => setArticles(res.data));
  }, []);

  const articlesDisplayer = () => {
    ///Convert state articles to an array///

    let articlesArray = [];

    for (let key in articles) {
      let article = {
        id: key,
        article: articles[key],
      };

      articlesArray.push(article);
    }

    ///////////Display Articles/////////////

    return articlesArray.map((article) => (
      <Article_card
        title={article.article.title}
        author={article.article.author}
        date={article.article.date}
        content={article.article.content}
      />
    ));
  };

  return (
    <div>
      <h1>Articles</h1>
      <ul>{articlesDisplayer()}</ul>
    </div>
  );
};

export default Articles;
