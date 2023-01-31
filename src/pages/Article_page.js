import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import Navbar from '../components/Navbar';

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
      <h1>{article.title}</h1>
      <p>{article.intro}</p>
      <p>{article.author}</p>
      <p>{article.date}</p>

      <ReactMarkdown children={article.content} />
    </div>
  );
};

export default Article_page;
