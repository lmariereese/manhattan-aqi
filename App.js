import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import {createStore, applyMiddleware} from 'redux';
import reducers from './reducers';
import thunkMiddleware from 'redux-thunk';
import CurrentView from './components/CurrentView';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { Provider as StoreProvider } from 'react-redux';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#29434e',
    background: '#eceff1',
  },
};

class App extends React.Component {
  render() {
    const store = createStore(reducers, applyMiddleware(thunkMiddleware));
    return (
      <StoreProvider store={store}>
        <PaperProvider theme={theme}>
          <CurrentView />
        </PaperProvider>
      </StoreProvider>
    );
  }
}

export default App;
