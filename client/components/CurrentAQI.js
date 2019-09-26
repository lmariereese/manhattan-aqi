import React from 'react';
import {connect} from 'react-redux';
import {getCurrentAqi} from '../reducers/current';
import { StyleSheet, Text, View } from 'react-native';

// none of this works yet
class CurrentAQI extends React.Component {
  render () {
    return (
      <Text>AQI: {this.props.aqi}</Text>
    )
  }
}

const mapStateToProps = (state) => ({
  aqi: state.current.aqi,
  color: state.current.color
});

// const mapDispatchToProps = (dispatch) => ({

// });

export default connect(mapStateToProps)(CurrentAQI);
