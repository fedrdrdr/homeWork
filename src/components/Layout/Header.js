import React from 'react';
import { Link } from 'react-router-dom';
import Counter from '../Counter/Counter';

function Header() {
  return (
    <header className='header'>
      <Counter />
      <Link to ='/'>
        <h1>multi-page <br/> react <br/> application</h1>
      </Link>
      <img src="logo_fedrdrdr.png" width='200' alt="" />
    </header>
  );
}

export default Header;
