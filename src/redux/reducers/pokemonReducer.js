const initialState = {
  pokemonList:[],
  pokemon:{},
  url:'https://pokeapi.co/api/v2/pokemon?limit=12&offset=0',
}

const pokemonReducer = (state = initialState, action) => {
 console.log('action.payload',action.payload);

  switch (action.type) {
    case 'INIT_POKEMONS':

      return {
        ...state,
        pokemonList: action.payload
      }
      case 'INIT_POKEMON':

      return {
        ...state,
        pokemon: action.payload
      }

      case "NEXT_URL":
        return {
          ...state,
        url:action.payload
      }
      case "PREV_URL":
        return {
          ...state,
        url:action.payload
      }

    default:
      return state
  }
}

export default pokemonReducer
