import Axios from 'axios';

const gotPollution = (pollution) => ({
  type: 'GOT_POLLUTION',
  pollution: pollution
});

export const getPollutionThunk = () => async (dispatch) => {
  const {data} = await Axios.get('https://manhattan-aqi.herokuapp.com/api/pollution/mostrecent')
  dispatch(gotPollution(data));
}

export default function PollutionReducer (state = [], action) {
  console.log('REDUCER ACTION before switch', action)
  switch (action.type) {
    case 'GOT_POLLUTION':
    console.log('IN THE REDUCER: ', action.pollution)
      return [...action.pollution];
    default:
    console.log('DEFAULT STATe IN REDUCER, and heres action', action);
      return state;
  }
}
