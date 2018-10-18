/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { createSwitchNavigator, createBottomTabNavigator } from 'react-navigation'
import firebase from 'react-native-firebase'
import Icon from 'react-native-vector-icons/FontAwesome'

import LoginScreen from './Loginscreen';
import SplashScreen from './SplashScreen'
import HomeScreen from './HomeScreen'

import TabMenu from './TapMenu'
import TabOrder from './TapOrder'
import TabHistory from './TapHistory'
import TabInfo from './TabInfo'
import { primaryColorGreen } from '../styles';


const BottomTabNavigator = createBottomTabNavigator({
  Menu: TabMenu,
  Order: TabOrder,
  History: TabHistory,
  Info: TabInfo
},
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Menu') {
          iconName = "cutlery";
        } else if (routeName === 'Order') {
          iconName = `shopping-cart`;
        } else if (routeName === 'History') {
          iconName = `history`;
        } else if (routeName === 'Info') {
          iconName = `info-circle`;
        }
        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <Icon name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: primaryColorGreen,
      inactiveTintColor: 'gray',
      style: {
        backgroundColor: 'white'
      }
    },
  }
)

const SwitchNavigation = createSwitchNavigator({
  SplashScreen: SplashScreen,
  LoginScreen: LoginScreen,
  HomeScreen: BottomTabNavigator
})



export default class App extends Component {
  // componentDidMount() {
  //   console.log(firebase)
  // }

  render() {
    return (
      <SwitchNavigation />
      //<LoginScreen />
    );
  }
}
