import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reducers from './reducers';
import thunkMiddleware from 'redux-thunk';
import PollutionView from './components/PollutionView';
// import * as React from 'react';
// import {store, getPollutionThunk} from './store'; // lyndsey maybe this doesn't need to be desctructured

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

class App extends React.Component {
  render() {
    const store = createStore(reducers, applyMiddleware(thunkMiddleware));
    return (
      <Provider store={store}>
        <View style={{flex: 1}}>
          <PollutionView />
        </View>
      </Provider>
      // <View style={styles.container}>
      //   <Text style={styles.paragraph}>
      //     "Here's some text!"
      //   </Text>
      //   <Card>
      //     <AssetExample />
      //   </Card>
      // </View>
    );
  }
}

export default App;
