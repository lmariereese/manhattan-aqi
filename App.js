import React from 'react';
import {Provider} from 'react-redux';
import store from './client/store';
import {getCurrentAqi} from './client/reducers/current';
import { StyleSheet, Text, View } from 'react-native';
import Axios from 'axios';


export default function App() {
  async function test() {
    const {data} = await Axios.get('http://api.airvisual.com/v2/city?city=Manhattan&state=New York&country=USA&key=4a03b929-87e5-47c5-a7e2-5a203095e1c9')
    console.log(data.data.current.pollution.aqius);
  }
  // getCurrentAqi()
  // console.log('hiiiii', getCurrentAqi());
  test();
  return (
    <View style={styles.container}>
      <Text>Oh hey</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

// export default class App extends React.Component {
//   render() {
//     return (
//       <Provider store={store}>
//         <View style={styles.container}>
//           <Text>Oh hey</Text>
//         </View>
//       </Provider>
//     )
//   }
// }

