
import React from 'react';
import Link from 'next/link';

// import "./Header.scss";

function Header() {
  return (
    <div id="Header">
      <header id="Header-header">
        <Link href="/sorter-demo.ts">Home</Link>
        <Link href="/sorter-demo.ts/description">Description</Link>
        <Link href="/sorter-demo.ts/demo">Demo</Link>
      </header>
    </div>
  );
};

export default Header;
