import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import Navbar from '../components/Navbar';
import '../style/article_page.css';

const Article_page = () => {
  let articleId = window.location.href.split(':id')[1];
  const [article, setArticle] = useState({});

  useEffect(() => {
    axios
      .get(
        `https://blog-b64f2-default-rtdb.europe-west1.firebasedatabase.app/Articles/${articleId}.json`
      )
      .then((res) => setArticle(res.data));
  }, []);

  return (
    <div>
      <Navbar />
      <div className="article_page">
        <div className="article">
          <div className="article-img" />
          <div className="intro">
            <h1>{article.title}</h1>
            <p className="intro-text">{article.intro}</p>
            <div className="author-date-container">
              <p>Ecrit par {article.author}</p>
              <p>le {article.date}</p>
            </div>
          </div>
          <ReactMarkdown children={article.content} />
        </div>
        <div className="sidebar" />
      </div>
    </div>
  );
};

export default Article_page;
