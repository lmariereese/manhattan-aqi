import * as React from 'react';
import {View} from 'react-native';

export default class HumidityBar extends React.Component {
  render () {
    return (
      <View style={{flex: 0.1, flexDirection: 'row'}}>
        <View style={{backgroundColor: '#B3E5FC', flex: 1}} />
        <View style={{backgroundColor: '#4FC3F7', flex: 1}} />
        <View style={{backgroundColor: '#03A9F4', flex: 1}} />
        <View style={{backgroundColor: '#0288D1', flex: 1}} />
        <View style={{backgroundColor: '#01579B', flex: 1}} />
      </View>
    )
  }
}
