import React, { Component } from 'react';
import Constants from 'expo-constants';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import {getPollutionThunk} from '../reducers/PollutionReducer';
import {getWeatherThunk} from '../reducers/WeatherReducer';
import TopBar from './TopBar';
import AqiBar from './AqiBar';
import HumidityBar from './HumidityBar';

function getColorAqi (aqi) {
  if (!aqi) return '#e2f1f8';
  if (aqi >= 0 && aqi <= 50) return '#66BB6A'; // green
  if (aqi >= 51 && aqi <= 100) return '#FFF176'; // yellow
  if (aqi >= 101 && aqi <= 150) return '#FFA726'; // orange
  if (aqi >= 151 && aqi <= 200) return '#EF5350'; // red
  if (aqi >= 201 && aqi <= 300) return '#9C27B0'; // purple
  if (aqi >= 301 && aqi <= 500) return '#880E4F'; // maroon
}

function getColorHumidity (humidity) {
  if (!humidity) return '#e2f1f8';
  if (humidity >= 0 && humidity <= 20) return '#B3E5FC';
  if (humidity >= 21 && humidity <= 40) return '#4FC3F7';
  if (humidity >= 41 && humidity <= 60) return '#03A9F4';
  if (humidity >= 61 && humidity <= 80) return '#0288D1';
  if (humidity >= 81 && humidity <= 100) return '#01579B';
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
      <View style={{flex: 1}}>
        <TopBar />
        {/* <View>
          <Text>
            Today
          </Text>
        </View> */}
        <View style={styles.container}>

          <Text style={styles.sectionHeading}>
              AQI
          </Text>
          <View style={styles.sectionContainer}>
            <View style={styles.circleContainer}>
              <View style={circleStyle(this.props.pollution)}>
                <Text style={styles.circleText}>
                  {(this.props.pollution.length) ? this.props.pollution[0].aqi : undefined}
                </Text>
              </View>
            </View>
          </View>
          <AqiBar />

          <Text style={styles.sectionHeading}>
              Humidity
          </Text>
          <View style={styles.sectionContainer}>
            <View style={styles.circleContainer}>
              <View style={circleStyle(this.props.weather)}>
                <Text style={styles.circleText}>
                  {(this.props.weather.length) ? `${this.props.weather[0].humidity}%` : undefined}
                </Text>
              </View>
            </View>
          </View>
          <HumidityBar />
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
    backgroundColor: '#546e7a',
    padding: 16,
  },
  sectionHeading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 16,
    padding: 8,
    backgroundColor: '#eceff1',
  },
  sectionContainer: {
    flex: .9,
    backgroundColor: '#eceff1',
    alignItems: 'center',
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
    // margin: 10
  },
  circleText: {
    textAlign: 'center',
    margin: 32,
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
