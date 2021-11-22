const initialState = {
  messages:[]
}

const chatReducer = (state = initialState, action) => {
 console.log('action.payload',action.payload);

  switch (action.type) {
    case 'INIT_MESSAGES':

      return {
        ...state,
        pokemonList: action.payload
      }
      case 'SEND':

      return {
        ...state,
        messages: [...state.messages, action.payload.message]
      }


 

    default:
      return state
  }
}

export default chatReducer
