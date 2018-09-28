import React, { Component } from 'react';
import {
  Text, StyleSheet,
  View,
} from 'react-native';
import FixerColor from '../components/FixerColor';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from '../reducers';
import BoardColor from '../components/BoardColor';

const store = createStore(rootReducer)

class App extends Component {
  state = {}
  render() {
    return (
      <Provider store={store}>
        <View style={styles.flex1}>
          <BoardColor style={styles.flex1} />
          <FixerColor style={styles.flex1} />
        </View>
      </Provider >
    );
  }
}

const styles = StyleSheet.create({
  flex1: {
    flex: 1,
  }
})


export default App;

