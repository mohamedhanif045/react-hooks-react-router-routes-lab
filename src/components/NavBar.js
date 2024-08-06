import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css'; // Ensure this import is correct

const NavBar = () => {
  return (
    <nav className="navbar">
      <NavLink exact to="/">Home</NavLink>
      <NavLink to="/movies">Movies</NavLink>
      <NavLink to="/directors">Directors</NavLink>
      <NavLink to="/actors">Actors</NavLink>
    </nav>
  );
};

export default NavBar;
