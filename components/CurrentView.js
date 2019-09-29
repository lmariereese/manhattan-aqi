import React, { Component } from 'react';
import Constants from 'expo-constants';
import { View, TextInput, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import {getPollutionThunk} from '../reducers/PollutionReducer';
import {getWeatherThunk} from '../reducers/WeatherReducer';

function getColor (aqi) {
  // if (typeof aqi === 'string') aqi = Number(aqi);
  if (aqi >= 0 && aqi <= 50) return 'green';
  if (aqi >= 51 && aqi <= 100) return 'yellow';
  if (aqi >= 101 && aqi <= 150) return 'orange';
  if (aqi >= 151 && aqi <= 200) return 'red';
  if (aqi >= 201 && aqi <= 300) return 'purple';
  if (aqi >= 301 && aqi <= 500) return 'maroon';
}

class AppScreen extends React.Component {
  componentDidMount () {
    this.props.getPollution()
    this.props.getWeather()
  }

  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>
          {(this.props.pollution.length) ? this.props.pollution[0].aqi : undefined}
        </Text>
        <Text style={styles.paragraph}>
          {(this.props.weather.length) ? this.props.weather[0].humidity : undefined}
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

const mapStateToProps = (state) => ({
  pollution: state.pollution,
  weather: state.weather
})

const mapDispatchToProps = (dispatch) => ({
  getPollution: () => dispatch(getPollutionThunk()),
  getWeather: () => dispatch(getWeatherThunk())
})


export default connect(mapStateToProps, mapDispatchToProps)(AppScreen);
