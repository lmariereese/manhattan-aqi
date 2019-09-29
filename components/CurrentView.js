import React, { Component } from 'react';
import Constants from 'expo-constants';
import { View, Text, StyleSheet, Button } from 'react-native';
import { connect } from 'react-redux';
import {getPollutionThunk} from '../reducers/PollutionReducer';
import {getWeatherThunk} from '../reducers/WeatherReducer';
import TopBar from './TopBar';
import AqiBar from './AqiBar';
import HumidityBar from './HumidityBar';
import {circleStyle} from './StyleFuncs';


class AppScreen extends React.Component {
  componentDidMount () {
    this.props.getPollution()
    this.props.getWeather()
  }

  // _onPressButton () {
  //   this.props.getPollution()
  //   this.props.getWeather()
  // }

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
          <View style={styles.buttonView}>
            <Button
              onPress={this._onPressButton}
              title="Reload"
              color="#a7c0cd"
            />
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
    backgroundColor: '#546e7a',
    padding: 16,
  },
  sectionHeading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 16,
    padding: 8,
    backgroundColor: '#eceff1',
    // borderLeftWidth: 1,
    // borderRightWidth: 1,
    // borderLeftColor: '#a7c0cd',
    // borderRightColor: '#a7c0cd',
  },
  sectionContainer: {
    flex: .9,
    backgroundColor: '#eceff1',
    alignItems: 'center',
    // borderLeftWidth: 1,
    // borderRightWidth: 1,
    // borderLeftColor: '#a7c0cd',
    // borderRightColor: '#a7c0cd',
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
  },
  buttonView: {
    backgroundColor: '#29434e',
    color: 'white',
    marginTop: 16,
    borderColor: '#a7c0cd',
    borderWidth: 1
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
