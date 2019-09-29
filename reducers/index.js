import {combineReducers} from 'redux';
import PollutionReducer from './PollutionReducer';
import WeatherReducer from './WeatherReducer'


export default combineReducers({
  pollution: PollutionReducer,
  weather: WeatherReducer
});
