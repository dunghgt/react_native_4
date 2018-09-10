import React, { Component } from 'react';
import {
  Text,
  View,
} from 'react-native';

import { createStackNavigator } from 'react-navigation';

import CakeListScreen from './CakeListScreen';
import CakeDetailScreen from './CakeDetailScreen';

const Navigation = createStackNavigator({
  CakeList: {
    screen: CakeListScreen,
    navigationOptions: ({ navigation }) => {
      return {
        title: 'Cakes',
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontSize: 30,
          fontWeight: 'bold',
        },
      }
    }
  },
  CakeDetail: {
    screen: CakeDetailScreen,
    navigationOptions: ({ navigation }) => {
      return {
        title: navigation.getParam('cake').title,
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontSize: 30,
          fontWeight: 'bold',
        },
      }
    }
  }
})

class App extends Component {

  state = {}
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Navigation />
      </View>
    );
  }
}

export default App; 