import React, { useEffect } from 'react';
import { useHistory, useParams } from 'react-router'
import { useDispatch, useSelector } from 'react-redux';

function PokemonInfo() {
  const { id } = useParams()
  const history = useHistory()
  const dispatch = useDispatch()
  const pokState = useSelector(store => store.pokemonReducer.pokemon)

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then(res => res.json())
      .then(data => dispatch({ type: 'INIT_POKEMON', payload: data }))
  }, [dispatch, id])

  console.log('pokState', pokState)
  let a = []
  for (let obj in pokState?.sprites) {
    if (typeof pokState?.sprites[obj] === 'string') { a.push(pokState?.sprites[obj]) }
  }


  return (
    <div className='flex '>
      <p className='border indent'>{pokState.name}</p>
      <img src={pokState?.sprites?.other['official-artwork']?.front_default} alt='ups' width='300' />
      <p>{pokState.weight}</p>
      <ul className='listpoks'>
        {a.map(el => <li ><img className='anPok' src={el} alt='ups' /></li>)}
      </ul>
      <button onClick={() => history.goBack()} className="indent">Go back!</button>
    </div>
  );
}

export default PokemonInfo;
