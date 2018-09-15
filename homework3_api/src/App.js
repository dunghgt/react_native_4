import React, { Component } from 'react';
import {
  Text,
  View,
} from 'react-native';
import CardList from './CardList';
import CardDetail from './CardDetail';

import { createStackNavigator } from 'react-navigation';

const Navigation = createStackNavigator({
  CardList: {
    screen: CardList,
    navigationOptions: ({ navigation }) => {
      return {
        title: 'Card List',
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontSize: 20,
          fontWeight: 'bold',
        },
      }
    }
  },
  CardDetail: {
    screen: CardDetail,
    navigationOptions: ({ navigation }) => {
      return {
        title: navigation.getParam('card').name,
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontSize: 20,
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

export default App; <CardList />