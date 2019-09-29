import * as React from 'react';
import {View} from 'react-native';

export default class AqiBar extends React.Component {
  render () {
    return (
      <View style={{flex: 0.1, flexDirection: 'row'}}>
        <View style={{backgroundColor: '#66BB6A', flex: 1}} />
        <View style={{backgroundColor: '#FFF176', flex: 1}} />
        <View style={{backgroundColor: '#FFA726', flex: 1}} />
        <View style={{backgroundColor: '#EF5350', flex: 1}} />
        <View style={{backgroundColor: '#9C27B0', flex: 1}} />
        <View style={{backgroundColor: '#880E4F', flex: 1}} />
      </View>
    )
  }
}
