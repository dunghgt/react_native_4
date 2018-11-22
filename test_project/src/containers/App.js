import React, { Component } from 'react';
import {
    Text, TouchableOpacity,
    View,
} from 'react-native';
import RegisterScreen from './RegisterScreen';
import UserListScreen from './UserListScreen';
import { createStackNavigator, createAppContainer } from "react-navigation";


import { Provider } from 'react-redux'
import { createStore } from 'redux'

import rootReducer from '../reducers'
import LoginScreen from './LoginScreen';
const store = createStore(rootReducer)

const Navigation = createStackNavigator({
    register: {
        screen: RegisterScreen,
        navigationOptions: ({ navigation }) => ({
            title: 'Register',
            headerTitleStyle: {
                fontSize: 20,
                fontWeight: 'bold',
            },
            headerRight:
                <TouchableOpacity onPress={() => navigation.navigate('login')}>
                    <Text style={{
                        fontSize: 18,
                        fontWeight: 'bold',
                        color: '#e60073',
                        marginEnd: 20,
                    }}>
                        Login
                    </Text>
                </TouchableOpacity >
        })
    },
    userList: {
        screen: UserListScreen,
        navigationOptions: ({ navigation }) => ({
            title: 'User list',
            headerTitleStyle: {
                fontSize: 20,
                fontWeight: 'bold',
            },
        })
    },
    login: {
        screen: LoginScreen,
        navigationOptions: ({ navigation }) => ({
            title: 'Login',
            headerTitleStyle: {
                fontSize: 20,
                fontWeight: 'bold',
            },
        })
    }
})

const App123 = createAppContainer(Navigation);

class App extends Component {
    state = {}
    render() {
        return (
            <Provider style={{ flex: 1 }} store={store}>
                <App123 />
            </Provider>
        );
    }
}

export default App;