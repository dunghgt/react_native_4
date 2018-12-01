import React, { Component } from 'react';
import {
  Text, TouchableOpacity,
  View, Image,
} from 'react-native';

import { Provider } from 'react-redux'
// import { createStore } from 'redux'
// import rootReducer from '../reducers'
import { PersistGate } from 'redux-persist/integration/react'
import configureStore from '../configureStore'


import { createStackNavigator } from 'react-navigation';
import ScheduleScreen from './ScheduleScreen.js';
import AddTaskScreen from './AddTaskScreen.js';
import { calendarHighlight } from '../styles.js';

const { store, persistor } = configureStore()

const Navigator = createStackNavigator({
  Schedule: {
    screen: ScheduleScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Schedule',
      headerStyle: {
        borderBottomWidth: 0,
        elevation: 0,
      },
      headerTintColor: 'gray',
      headerTitleStyle: {
        fontWeight: 'bold',
        fontSize: 22,
      },
      headerRight:
        <TouchableOpacity onPress={() => navigation.navigate('AddTask')}>
          <Image

            style={{ height: 30, width: 30, marginEnd: 10 }}
            source={{ uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAADPSURBVGhD7dZBCsIwEIXhgFtFvIDgAVx5GO8jXsWFQ8pE6UaT6KJdCq48iQfQCqmoFEppq1N5H8wqocwPpVQBAABIRES9OE5G+RiTDsJRtzDvp5Hxt3y08Uk46haESIMQaRAiDUKkQYg0CGnL4y+W+TCrOprt/D3EnYvulc16s5uEVeohssPXhb4/bhVWqQchjU1jIcd+9n6fqk7E/vKx0LXoXtlkz1mGVX4Dn19pECINQqRBiDQIkQYh0vxNCG3tWLOn5xi3CEcAAADQDqXu1SdrzcOGeTsAAAAASUVORK5CYII=' }} />
        </TouchableOpacity>
    })
  },
  AddTask: {
    screen: AddTaskScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Add new task',
      headerStyle: {
        borderBottomWidth: 0,
        elevation: 0,
      },
      headerTintColor: 'gray',
      headerTitleStyle: {
        fontWeight: 'bold',
        fontSize: 22,
      },
      headerRight:
        <TouchableOpacity onPress={navigation.getParam('add')}>
          <Text style={{
            marginEnd: 10,
            color: calendarHighlight,
            fontWeight: 'bold',
            fontSize: 18,
          }
          }> Done</Text >
        </TouchableOpacity >,
      headerLeft:
        <TouchableOpacity onPress={() => navigation.navigate('Schedule')}>
          <Image
            style={{ height: 30, width: 30, marginEnd: 10 }}
            source={{ uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAEKSURBVGhD7dMxagJBFMbxVbHyBhZpLTyFEMhF0tva7QkCaSwk2CQ2WUd2tDPu8wS5QBrrXECw0cksvkJlTev35PvBwLLzivmzswlRtTRN6/poUwihNsvlxeWyc15+Pr10dMuOY0QxnnkJJ+tDt224EhHiV3nTEXzl/1AVEa/Yxvuvto5h+y8iW6wedAwbI1AwAgUjUDACBSNQMAIFI1DcRUQpHvjVfMT7ctmKB9+fRrhcfk1FlLIsa5QHPw8pDvGqPeuIHc4XvRizvZOY1SNjEDEGFWNQMQYVY1AxBhVjUDEG1bUYl6+fdMSO6hiZ6LYtlzHOy0C37JnOpet8MYyrPxp9N/U10e0lyR+GznmkkPcJ3wAAAABJRU5ErkJggg==' }} />
        </TouchableOpacity>
    })
  }
})

// const store = createStore(rootReducer)

class App extends Component {
  state = {}
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Navigator />
        </PersistGate>
      </Provider >

    );
  }
}

export default App;