import React, { Component } from 'react';
import {
    Text, TouchableOpacity, TextInput,
    View, StyleSheet, Alert,
} from 'react-native';
import { connect } from 'react-redux'

class LoginScreen extends Component {
    state = {
        userName: '',
        password: ''
    }

    userName = () => {
        return <View>
            <Text>User name:</Text>
            <TextInput
                style={styles.textInput}
                onChangeText={(userName) => this.setState({ userName })}
                value={this.state.userName}
                underlineColorAndroid={'transparent'}
            />
        </View>
    }

    password = () => {
        return <View>
            <Text>password:</Text>
            <TextInput
                style={styles.textInput}
                onChangeText={(password) => this.setState({ password })}
                value={this.state.password}
                underlineColorAndroid={'transparent'}
                secureTextEntry={true}
            />
        </View>
    }

    _login = () => {
        if (this.props.users.filter(item => item.userName == this.state.userName).length === 0) {
            return Alert.alert('User name not exist')
        }
        if (this.props.users.filter(item => item.userName == this.state.userName)[0].password !== this.state.password) {
            return Alert.alert('Password Incorrect')
        }
        this.props.navigation.navigate('userList')
    }

    loginButton = () => {
        return <TouchableOpacity
            style={styles.button}
            onPress={this._login}
        >
            <Text style={styles.textButton}>Login</Text>
        </TouchableOpacity>
    }

    render() {
        return (
            <View style={styles.container}>
                {this.userName()}
                {this.password()}
                {this.loginButton()}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 30,
        marginHorizontal: 10
    },
    textInput: {
        height: 40,
        marginHorizontal: 20,
        marginVertical: 10,
        borderColor: 'gray',
        borderWidth: 1
    },
    button: {
        backgroundColor: 'orange',
        width: 100,
        height: 40,
        alignSelf: 'center',
        borderRadius: 10,
        alignItems: 'center',
        marginVertical: 20
    },
    textButton: {
        alignSelf: 'center',
        color: 'white',
        borderRadius: 10,
        fontSize: 18,
    }
})

const mapStateToProps = ({ users }) => ({ users })
export default connect(mapStateToProps)(LoginScreen);