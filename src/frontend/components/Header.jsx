import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header className="header">
    <div className="header-container container">
      <Link className="logo" to="/">FrcGustavo</Link>
      <nav className="nav">
        <Link className="btn btn-secondary" to="/">Home</Link>
        <Link className="btn btn-secondary" to="/blog">Blog</Link>
      </nav>
    </div>
  </header>
);

export default Header;
