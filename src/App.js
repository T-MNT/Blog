import { Route, Routes } from 'react-router-dom';
import routes from './config/routes';
import Home from './pages/Home';
import Articles from './pages/Articles';
import Add_article from './pages/Add_article';

function App() {
  return (
    <>
      <Routes>
        <Route path={routes.HOME} element={<Home />} />
        <Route path={routes.ARTICLES} element={<Articles />} />
        <Route path={routes.ADD_ARTICLE} element={<Add_article />} />
      </Routes>
    </>
  );
}

export default App;
