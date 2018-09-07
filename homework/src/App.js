import React, { Component } from 'react';
import {
  Text,
  View,
} from 'react-native';
import Logo from './Logo';
import ListMatch from './ListMatch';

class App extends Component {
  state = {}
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        <Logo />
        <ListMatch />
      </View>
    );
  }
}

export default App;

