import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import { NavLink } from 'react-router-dom';
import Article_card from '../components/Article_card';
import Navbar from '../components/Navbar';
import routes from '../config/routes';
import '../style/articles.css';

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

    return articlesArray
      .sort(function (a, b) {
        return b.article.timestamp - a.article.timestamp;
      })
      .map((article) => (
        <li className="article-container">
          <NavLink to={`${routes.ARTICLE_PAGE}${article.id}`}>
            <Article_card
              id={article.id}
              title={article.article.title}
              author={article.article.author}
              date={article.article.date}
              intro={
                article.article.intro <= 160
                  ? article.article.intro
                  : article.article.intro.slice(0, 160) + ' ...'
              }
            />
          </NavLink>
        </li>
      ));
  };

  return (
    <div>
      <Navbar />
      <h1>Articles</h1>
      <ul>{articlesDisplayer()}</ul>
      <ReactMarkdown children="## Heading level 2" />
    </div>
  );
};

export default Articles;
