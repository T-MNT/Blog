import axios from 'axios';
import { React, useState, useEffect } from 'react';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import Navbar from '../components/Navbar';
import '../style/add_article.css';
import { storage } from '../config/firebase';
import { ref, uploadBytes } from 'firebase/storage';
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Add_article = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [intro, setIntro] = useState('');
  const [images, setImages] = useState([]);
  const [imgPreviewer, setImgPreviewer] = useState('');
  const [url, setUrl] = useState([]);
  const [content, setContent] = useState('');

  const convertImgToMarkdown = (e) => {
    setContent(e);
    var regexValue = new RegExp('(img\\d+)', 'ig');
    var regexValue2 = new RegExp('(img\\d+)', 'i');
    let matchedArray = e.match(regexValue) ? e.match(regexValue) : [];
    let urlIndex = [];
    for (let i = 0; i < matchedArray.length; i++) {
      urlIndex.push(matchedArray[i].split('g')[1]);
      console.log(urlIndex);
    }
    let newText;

    for (let i = 0; i < images.length; i++) {
      newText = e.replace(regexValue2, `![${images[i].name}](urlValue)`);
    }

    let imgTagRegex = new RegExp('(urlValue)', 'i');

    for (let i = 0; i < urlIndex.length; i++) {
      newText = newText.replace(imgTagRegex, url[urlIndex[i]]);
    }

    setContent(newText);
  };

  const addImageAndUrlToStates = (e) => {
    let imagesArray = images;
    let UrlArray = url;

    imagesArray.push(e);
    UrlArray.push(URL.createObjectURL(e));
    console.log(imagesArray);
    console.log(UrlArray);
    setImages(imagesArray);
    setUrl(UrlArray);

    let imgPreview = url.map((img) => (
      <li>
        <p>{url.indexOf(img)}</p>
        <img src={img} />
      </li>
    ));
    setImgPreviewer(imgPreview);
  };

  const sendArticle = (e) => {
    e.preventDefault();

    const article = {
      title: title,
      author: author,
      intro: intro,
      content: content,
      date: new Date().toLocaleDateString().toString(),
      timestamp: Date.now(),
    };

    for (let i = 0; i < images.length; i++) {
      const imageRef = ref(storage, `images/${title}/${images[i].name}`);
      uploadBytes(imageRef, images[i]).then(alert('image uploadée'));
    }

    axios.post(
      'https://blog-b64f2-default-rtdb.europe-west1.firebasedatabase.app/Articles.json',
      article
    );
  };

  return (
    <div>
      <Navbar />
      <div className="add_article">
        <form onSubmit={(e) => sendArticle(e)}>
          <div id="input0">
            <label>Titre</label>
            <div className="input-icon">
              <input
                type="text"
                maxLength={80}
                onChange={(e) => setTitle(e.target.value)}
              />
              <div
                className="unshow-icon"
                onClick={() =>
                  (document.getElementById('input0').style.display = 'none')
                }
              >
                <FontAwesomeIcon icon={faEyeSlash} />
              </div>
            </div>
          </div>

          <div id="input1">
            <label>Introduction</label>
            <div className="input-icon">
              <textarea
                type="text"
                maxLength={540}
                onChange={(e) => setIntro(e.target.value)}
                id="intro_input"
              />
              <div
                className="unshow-icon"
                onClick={() =>
                  (document.getElementById('input1').style.display = 'none')
                }
              >
                <FontAwesomeIcon icon={faEyeSlash} />
              </div>
            </div>
          </div>

          <div id="input2">
            <label>Auteur</label>
            <div className="input-icon">
              <input
                type="text"
                maxLength={36}
                onChange={(e) => setAuthor(e.target.value)}
              />
              <div
                className="unshow-icon"
                onClick={() =>
                  (document.getElementById('input2').style.display = 'none')
                }
              >
                <FontAwesomeIcon icon={faEyeSlash} />
              </div>
            </div>
          </div>

          <div id="input3">
            <label>Ajouter images</label>
            <div className="input-icon">
              <input
                type="file"
                title=""
                accept="image/png, image/jpeg"
                onChange={(e) => addImageAndUrlToStates(e.target.files[0])}
              />
              <div
                className="unshow-icon"
                onClick={() =>
                  (document.getElementById('input3').style.display = 'none')
                }
              >
                <FontAwesomeIcon icon={faEyeSlash} />
              </div>
            </div>

            <ul className="img-preview-list">{imgPreviewer}</ul>
          </div>

          <label>Article</label>
          <textarea
            id="content"
            onChange={(e) => convertImgToMarkdown(e.target.value)}
          />

          <input type="submit" value="Valider" />
        </form>
        <div className="preview">
          <div className="article">
            {/* <div className="article-img" /> */}
            <div className="intro">
              <h1>{title}</h1>
              <p className="intro-text">{intro}</p>
              <div className="author-date-container">
                <p>
                  {author
                    ? 'Ecrit par ' +
                      author +
                      ' le ' +
                      new Date().toLocaleDateString().toString()
                    : null}
                </p>
              </div>
            </div>
            <ReactMarkdown children={content} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Add_article;
