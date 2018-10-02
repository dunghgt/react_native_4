import React, { Component } from 'react';
import {
  Text, TouchableOpacity, Image,
  View,
} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import ListMovieScreen from './ListMovieScreen';
import ReviewMovieScreen from './ReviewMovieScreen';
import FavorScreen from './FavorScreen';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from '../reducers';

const store = createStore(rootReducer)

const Navigation = createStackNavigator({
  ListMovie: {
    screen: ListMovieScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Movie Trending',
      headerStyle: {
        backgroundColor: '#cc0052',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontSize: 20,
        fontWeight: 'bold',
      },
      headerRight:
        <TouchableOpacity onPress={() => navigation.navigate('FavorMovie')}>
          <Text style={{
            fontSize: 18,
            fontWeight: 'bold',
            color: '#f2f2f2',
            marginEnd: 10,
          }}>
            List Favorite
          </Text>
        </TouchableOpacity>
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
      headerLeft:
        <TouchableOpacity onPress={() => navigation.navigate('ListMovie')}>
          <Image
            style={{ height: 30, width: 30, marginEnd: 10 }}
            source={{ uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAEKSURBVGhD7dMxagJBFMbxVbHyBhZpLTyFEMhF0tva7QkCaSwk2CQ2WUd2tDPu8wS5QBrrXECw0cksvkJlTev35PvBwLLzivmzswlRtTRN6/poUwihNsvlxeWyc15+Pr10dMuOY0QxnnkJJ+tDt224EhHiV3nTEXzl/1AVEa/Yxvuvto5h+y8iW6wedAwbI1AwAgUjUDACBSNQMAIFI1DcRUQpHvjVfMT7ctmKB9+fRrhcfk1FlLIsa5QHPw8pDvGqPeuIHc4XvRizvZOY1SNjEDEGFWNQMQYVY1AxBhVjUDEG1bUYl6+fdMSO6hiZ6LYtlzHOy0C37JnOpet8MYyrPxp9N/U10e0lyR+GznmkkPcJ3wAAAABJRU5ErkJggg==' }} />
        </TouchableOpacity>
    })
  }
})

class App extends Component {
  state = {}
  render() {
    return (
      <Provider store={store}>
        <View style={{ flex: 1 }}>
          <Navigation />
        </View>
      </Provider>
    );
  }
}

export default App;