
import React from 'react';
import { Link } from 'react-router-dom';

import "./Header.scss";

function Header() {
  return (
    <div id="Header">
      <header id="Header-header">
        <Link to="/">Home</Link>
        <Link to="/description">Description</Link>
        <Link to="/demo">Demo</Link>
      </header>
    </div>
  );
}

export default Header;
