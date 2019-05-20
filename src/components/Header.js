import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <nav>
        <Link to="/Red">Red</Link>
        <Link to="/Blue">Blue</Link>
        <Link to="/Green">Green</Link>
      </nav>
    </header>
  );
}
