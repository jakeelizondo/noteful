import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <h1>
        <Link to="/">Noteful</Link>
      </h1>
    </header>
  );
}
