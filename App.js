import React from 'react';
import {Provider} from 'react-redux';
import { StyleSheet, Text, View } from 'react-native';
// import CurrentAQI from './client/components/CurrentAQI';


// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Oh hey</Text>
//     </View>
//   );
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Text>AQI is</Text>
        </View>
      </Provider>
    )
  }
}

// const mapStateToProps = (state) => ({
//   aqi: state.current.aqi,
//   color: state.current.color
// });

// // const mapDispatchToProps = (dispatch) => ({

// // });

// export default connect(mapStateToProps)(App);
