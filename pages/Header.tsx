
import React from 'react';
import { Link } from 'react-router-dom';

import "./Header.scss";

function Header() {
  return (
    <div id="Header">
      <header id="Header-header">
        <Link to="/sorter-demo.ts">Home</Link>
        <Link to="/sorter-demo.ts/description">Description</Link>
        <Link to="/sorter-demo.ts/demo">Demo</Link>
      </header>
    </div>
  );
}

export default Header;
