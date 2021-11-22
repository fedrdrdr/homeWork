// import { GET_CARDS, DEL_CARD, UPD_CARD } from "../actionTypes/actionTypes"

const initialState = {
  town: 'Санкт-Петербург',
  townTemp: '',
  townName: '',
  townDescription: '',
  townImg: '',
  mapList: [],

}

const weatherReducer = (state = initialState, action) => {


  switch (action.type) {
    case 'INIT_FORECAST_OF_WEATHER':

      return {
        ...state,
        townTemp: action.payload.main.temp,
        townName: action.payload.name,
        townDescription: action.payload.weather[0].description,
        townImg: action.payload.weather[0].icon,
      }
    case 'INIT_FORECAST_OF_WEATHER_FOR_5_DAYS':

      return {
        ...state,
        mapList: action.payload.list
        
      }

    case 'SET_TOWN':
      return {
        ...state,
        town: action.payload,

      }

    default:
      return state
  }
}

export default weatherReducer
