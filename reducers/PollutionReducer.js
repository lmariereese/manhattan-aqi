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
  switch (action.type) {
    case 'GOT_POLLUTION':
      return [...action.pollution];
    default:
      return state;
  }
}
