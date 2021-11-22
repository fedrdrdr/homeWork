import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux'

function Weather() {
  const inputValue = useRef('Санкт-Петербург')
  const dispatch = useDispatch()
  const state = useSelector(store => store.weatherReducer)


  useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${state.town}&lang=ru&appid=b4d49ef7e0db59a09e5e2022ee21c56e&lang={ru}`)
      .then(res => res.json())

      .then(data => {
        dispatch({ type: 'INIT_FORECAST_OF_WEATHER', payload: data });
        return fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${state.town}&lang=ru&appid=b4d49ef7e0db59a09e5e2022ee21c56e`)
        .then(response => response.json())
        .then(data2 => dispatch({ type: 'INIT_FORECAST_OF_WEATHER_FOR_5_DAYS', payload: data2 }))
      }
      )
  }, [state.town, dispatch])

  // useEffect(() => {
  //   fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${state2.town2}&lang=ru&appid=b4d49ef7e0db59a09e5e2022ee21c56e`)
  //     .then(response => response.json())
  //     .then(data2 => dispatch({ type: 'INIT_FORECAST_OF_WEATHER_FOR_5_DAYS', payload: data2 }))
  // }, [state2.town2])

  function onClickHandler(e) {
    e.preventDefault()
    dispatch({
      type: 'SET_TOWN',
      payload: inputValue.current.value
    })
  }

  function onKeyHandler(e) {
    if (e.key === "Enter") {
    dispatch({
      type: 'SET_TOWN',
      payload: inputValue.current.value
    })
  }
  }

  return (
    <>
      <div className='container'>
        {
          state
            ?
            <>
              стамбул
              <div className='wrapper'>
                <div>Сейчас в городе</div>
                <input onKeyDown={onKeyHandler} defaultValue={inputValue.current} ref={inputValue} type="text" />
                <button onClick={onClickHandler}>?</button>
                <div>{Math.round(state.townTemp - 273) + ' ℃'} </div>
                <div>{state.townName}</div>
                <div>{state.townDescription}</div>
                <img src={`http://openweathermap.org/img/w/${state.townImg}.png`} alt='ups' />
              </div>
            </>
            : 'Ошибка не сервере'
        }
      </div>
      {
        state
          ?
          <>
            <div className='weatherFor5'>
              <h2>Прогноз погоды на 5 дней</h2>
              <ul className='weatherList' >
              {state.mapList.filter((el, index) => index%8===0).map(el => {
                return <li key={el.dt_txt}>
                  <div>{el.dt_txt.slice(6, 11)}</div>
                  <div>{`${Math.round(el.main.temp - 273)}℃`}</div>
                  <div>{el.weather[0].description}</div>
                  <img src={`http://openweathermap.org/img/w/${el.weather[0].icon}.png`} alt='ups' />
                </li>
              })
                
                }
                
              </ul>
              {/* <ul className='weatherList'>
                {fetchData2.list.filter((el, index) => index % 8 === 0).map(el => {
                  return <li key={el.dt_txt}>

                    <div>{el.dt_txt.slice(6, 11)}</div>
                    <div>{`${Math.round(el.main.temp - 273)}℃`}</div>
                    <div>{el.weather[0].description}</div>
                    <img src={`http://openweathermap.org/img/w/${el.weather[0].icon}.png`} alt='ups' />
                  </li>
                })
                }
              </ul> */}
            </div>
          </>
          : 'Ошибка не сервере'
      }

    </>
  );
}

export default Weather;
