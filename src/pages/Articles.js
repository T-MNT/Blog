import axios from 'axios';
import React, { useEffect, useState } from 'react';

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
    let articlesArray = [];

    for (let key in articles) {
      let article = {
        id: key,
        article: articles[key],
      };

      articlesArray.push(article);
    }

    // return (
    //     articlesArray.map((article) => )
    // )

    console.log(articlesArray);
  };

  articlesDisplayer();

  return (
    <div>
      <h1>Articles</h1>
    </div>
  );
};

export default Articles;
