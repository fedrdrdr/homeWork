import React from 'react';

import { Link } from "react-router-dom"
function Pokemon({ el }) {

  return (
    <Link to={`pokemons/${el.name}`}>
      <li className='flexP'>

        <div className='flex pok border'>
          <p>{el.name}</p>
        </div>

      </li>
    </Link>
  );
}

export default Pokemon;
