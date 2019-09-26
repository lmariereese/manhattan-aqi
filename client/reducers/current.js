import Axios from 'axios';
// action types
const GOT_AQI = "GOT_CURRENT_AQI";

// action creators
const gotCurrentAqi = (aqi) => ({
  type: GOT_AQI,
  aqi
});

// thunks
export const getCurrentAqi = () => async (dispatch) => {
  const {data} = await Axios.get('http://api.airvisual.com/v2/city?city=Manhattan&state=New York&country=USA&key=4a03b929-87e5-47c5-a7e2-5a203095e1c9');
  console.log(data.data.current.pollution.aqius);
  // dispatch(gotCurrentAqi(data.));
}
// export const getCurrentAqi = () => (dispatch) => {
//   let test;
//   fetch('http://api.airvisual.com/v2/city?city=Manhattan&state=New York&country=USA&key=4a03b929-87e5-47c5-a7e2-5a203095e1c9')
//   .then(result => {
//     return result.json();
//   })
//   .then(json => {
//     console.log('JSON FORMAT', json)
//     test = json;
//     return json;
//   })
//   .catch(err => {
//     console.error(err);
//   });
//   console.log(test.data);
//   console.log('hey')
//   dispatch(gotCurrentAqi(test.data.current.pollution.aqius));
// }

// Get the color associated with each AQI level
function getColor (aqi) {
  // if (typeof aqi === 'string') aqi = Number(aqi);
  if (aqi >= 0 && aqi <= 50) return 'green';
  if (aqi >= 51 && aqi <= 100) return 'yellow';
  if (aqi >= 101 && aqi <= 150) return 'orange';
  if (aqi >= 151 && aqi <= 200) return 'red';
  if (aqi >= 201 && aqi <= 300) return 'purple';
  if (aqi >= 301 && aqi <= 500) return 'maroon';
}

export default function currentAqiReducer (state = {}, action) {
  switch (action.type) {
    case GOT_AQI:
      console.log(action.aqi)
      return action.aqi;
      // return Object.assign({}, state, {
      //   aqi: action.aqi,
      //   color: getColor(action.aqi)
      // });
    default:
      return state;
  }
}
