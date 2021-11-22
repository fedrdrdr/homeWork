import { combineReducers } from 'redux'
import weatherReducer from './weatherReducer'
import todoReducer from './todoReducer'
import pokemonReducer from './pokemonReducer'
import chatReducer from './chatReducer'
const rootReducer = combineReducers({
  weatherReducer,
  todoReducer,
  pokemonReducer,
  chatReducer,
})

export default rootReducer
