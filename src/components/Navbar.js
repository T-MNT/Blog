import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../config/routes';
import '../style/navbar.css';

const Navbar = () => {
  return (
    <div className="nav-container">
      <nav>
        <h1>TECHBLOG</h1>
        <ul>
          <li>
            <NavLink to={routes.HOME}>Accueil</NavLink>
          </li>
          <li>
            <NavLink to={routes.ARTICLES}>Tous les articles</NavLink>
          </li>
          <li>
            <NavLink to={routes.ADD_ARTICLE}>Créer un article</NavLink>
          </li>
        </ul>
      </nav>
      <div className="logo-container" />
    </div>
  );
};

export default Navbar;
