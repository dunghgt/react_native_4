import React, { Component } from 'react';
import {
  Text,
  View,
} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import ListMovieScreen from './ListMovieScreen';
import ReviewMovieScreen from './ReviewMovieScreen';
import FavorScreen from './FavorScreen';

// import { Provider } from 'react-redux';
// import { createStore } from 'redux';
// import rootReducer from '../reducers';

// const store = createStore(rootReducer)

const Navigation = createStackNavigator({
  ListMovie: {
    screen: ListMovieScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'List Movie Trending',
      headerStyle: {
        backgroundColor: '#cc0052',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontSize: 20,
        fontWeight: 'bold',
      },
    })
  },
  ReviewMovie: {
    screen: ReviewMovieScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Movie Trending Overview',
      headerStyle: {
        backgroundColor: '#cc0052',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontSize: 20,
        fontWeight: 'bold',
      },
    })
  },
  FavorMovie: {
    screen: FavorScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Favorite Movie',
      headerStyle: {
        backgroundColor: '#cc0052',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontSize: 20,
        fontWeight: 'bold',
      },
    })
  }
})

class App extends Component {
  state = {}
  render() {
    return (
      // <Provider store={store}>
      <View style={{ flex: 1 }}>
        <Navigation />
      </View>
      // </Provider>
    );
  }
}

export default App;