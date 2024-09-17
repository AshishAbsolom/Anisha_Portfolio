// src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">home</Link></li>
          <li><Link to="/projects">projects</Link></li>
          <li><Link to="/about">about me</Link></li>
          <li><Link to="/contact">contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
