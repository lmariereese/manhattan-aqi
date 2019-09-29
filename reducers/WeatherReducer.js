import Axios from 'axios';

const gotWeather = (weather) => ({
  type: 'GOT_WEATHER',
  weather: weather
})

export const getWeatherThunk = () => async (dispatch) => {
  const {data} = await Axios.get('https://manhattan-aqi.herokuapp.com/api/weather/mostrecent')
  dispatch(gotWeather(data));
}

const WeatherReducer = (state = [], action) => {
  switch (action.type) {
    case 'GOT_WEATHER':
      return action.weather;
    default:
      return state
  }
}

export default WeatherReducer
