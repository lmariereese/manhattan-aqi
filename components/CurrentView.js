import React, { Component } from 'react';
import Constants from 'expo-constants';
import { View, TextInput, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import {getPollutionThunk} from '../reducers/PollutionReducer';
import {getWeatherThunk} from '../reducers/WeatherReducer';

function getColorAqi (aqi) {
  if (!aqi) return 'grey';
  if (aqi >= 0 && aqi <= 50) return '#66BB6A'; // green
  if (aqi >= 51 && aqi <= 100) return 'yellow';
  if (aqi >= 101 && aqi <= 150) return 'orange';
  if (aqi >= 151 && aqi <= 200) return 'red';
  if (aqi >= 201 && aqi <= 300) return 'purple';
  if (aqi >= 301 && aqi <= 500) return 'maroon';
}

function getColorHumidity (humidity) {
  if (!humidity) return 'grey';
  if (humidity >= 0 && humidity <= 20) return '#B3E5FC';
  if (humidity >= 21 && humidity <= 40) return '#81D4FA';
  if (humidity >= 41 && humidity <= 60) return '#4FC3F7';
  if (humidity >= 61 && humidity <= 80) return '#29B6F6';
  if (humidity >= 81 && humidity <= 100) return '#03A9F4';
}

function circleStyle (data) {
  let color;
  if (!data.length) {
    color = getColorAqi();
  } else if (data[0].hasOwnProperty('aqi')) {
    color = getColorAqi(data[0].aqi);
  } else {
    color = getColorHumidity(data[0].humidity);
  }
  return {
    width: 100,
    height: 100,
    borderRadius: 100/2,
    backgroundColor: color,
    textAlign: 'center'
  }
}

class AppScreen extends React.Component {
  componentDidMount () {
    this.props.getPollution()
    this.props.getWeather()
  }

  render () {
    return (
      <View style={styles.container}>
        <View style={styles.circleContainer}>
          <Text style={styles.paragraph}>
            AQI
          </Text>
          <View style={circleStyle(this.props.pollution)}>
            <Text style={styles.circleText}>
              {(this.props.pollution.length) ? this.props.pollution[0].aqi : undefined}
            </Text>
          </View>
        </View>

        <View style={styles.circleContainer}>
          <Text style={styles.paragraph}>
            Humidity
          </Text>
          <View style={circleStyle(this.props.weather)}>
            <Text style={styles.paragraph}>
              {(this.props.weather.length) ? this.props.weather[0].humidity : undefined}
            </Text>
          </View>
        </View>
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
  circleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10
  },
  circleText: {
    textAlign: 'center',
    margin: 25,
    fontSize: 18,
    fontWeight: 'bold'
  }
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
