import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Pokemon from './Pokemon';

function PokemonList() {
  const dispatch = useDispatch()
  const state = useSelector(store => store.pokemonReducer.pokemonList)
  const stateUrl = useSelector(store => store.pokemonReducer.url)


  function nextUrl() {
    dispatch({
      type: 'NEXT_URL',
      payload: state.next
    }
    )
  }
  function prevUrl() {
    dispatch({
      type: 'PREV_URL',
      payload: state.next
    }
    )
  }
  useEffect(() => {
    fetch(stateUrl)
      .then(res => res.json())
      .then(data => dispatch({ type: 'INIT_POKEMONS', payload: data }))

  }, [dispatch, stateUrl])

  return (
    <>
      {
        state.results
          ?
          <ul className='flexP '>
            {state.results.map(el => <Pokemon el={el} key={el.name} />)}
          </ul>
          : <p>dsf</p>

      }
      <div className='flex margin'>
        {
          state.next
            ? <button onClick={nextUrl}>next</button>
            : <p>next</p>
        }
        {
          state.previous
            ? <button onClick={prevUrl}>prev</button>
            : <p>prev</p>
        }
      </div>
    </>
  );
}

export default PokemonList;
