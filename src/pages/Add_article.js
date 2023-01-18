import axios from 'axios';
import React, { useState } from 'react';
import Navbar from '../components/Navbar';

const Add_article = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [content, setContent] = useState('');

  const sendArticle = (e) => {
    e.preventDefault();

    const article = {
      title: title,
      author: author,
      content: content,
      date: new Date().toLocaleDateString().toString(),
      timestamp: Date.now(),
    };

    axios.post(
      'https://blog-b64f2-default-rtdb.europe-west1.firebasedatabase.app/Articles.json',
      article
    );
  };

  return (
    <div>
      <Navbar />
      <h1>Créer un nouvel article.</h1>

      <form onSubmit={(e) => sendArticle(e)}>
        <label>Titre</label>
        <input
          type="text"
          maxLength={80}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Auteur</label>
        <input
          type="text"
          maxLength={36}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <label>Article</label>
        <textarea onChange={(e) => setContent(e.target.value)} />

        <input type="submit" value="Valider" />
      </form>
    </div>
  );
};

export default Add_article;
