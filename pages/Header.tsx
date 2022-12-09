
import React from 'react';
import Link from 'next/link';

function Header() {
  return (
    <div id="Header">
      <header id="Header-header">
        <Link href="/">Home</Link>
        <Link href="/description">Description</Link>
        <Link href="/demo">Demo</Link>
      </header>
    </div>
  );
};

export default Header;
