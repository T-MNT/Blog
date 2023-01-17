import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../config/routes';

const Navbar = () => {
  return (
    <nav>
      <h1>Blog</h1>
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
  );
};

export default Navbar;
