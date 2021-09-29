import { combineReducers } from 'redux'
import weatherReducer from './weatherReducer'
import todoReducer from './todoReducer'
import pokemonReducer from './pokemonReducer'
const rootReducer = combineReducers({
  weatherReducer,
  todoReducer,
  pokemonReducer,
})

export default rootReducer
