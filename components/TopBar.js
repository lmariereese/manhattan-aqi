import * as React from 'react';
import { Appbar } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';

class RefreshIcon extends React.Component {
  render() {
    return (
      <Ionicons name="md-refresh" />
    );
  }
}

export default class TopBar extends React.Component {
  render() {
    return (
      <Appbar.Header >
        <Appbar.Content
          title="Manhattan AQI"
        />
        <Appbar.Action title="Refresh" />
      </Appbar.Header>
    );
  }
}
