import { Route, Routes } from 'react-router-dom';
import routes from './config/routes';
import Home from './pages/Home';
import Articles from './pages/Articles';
import Add_article from './pages/Add_article';
import './style/app.css';
import Article_page from './pages/Article_page';

function App() {
  return (
    <>
      <Routes>
        <Route path={routes.HOME} element={<Home />} />
        <Route path={routes.ARTICLES} element={<Articles />} />
        <Route path={routes.ARTICLE_PAGE} element={<Article_page />} />
        <Route path={routes.ADD_ARTICLE} element={<Add_article />} />
      </Routes>
    </>
  );
}

export default App;
