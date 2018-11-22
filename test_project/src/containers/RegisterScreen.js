import React, { Component } from 'react';
import {
  Text, TextInput, StyleSheet, Alert,
  View, TouchableOpacity
} from 'react-native';

import { connect } from 'react-redux'
import { addUser } from '../actions'

class RegisterScreen extends Component {
  state = {
    userName: '',
    fullName: '',
    password: '',
    email: '',
    confirmPassword: '',
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

  fullName = () => {
    return <View>
      <Text>Full name:</Text>
      <TextInput
        style={styles.textInput}
        onChangeText={(fullName) => this.setState({ fullName })}
        value={this.state.fullName}
        underlineColorAndroid={'transparent'}
      />
    </View>
  }

  email = () => {
    return <View>
      <Text>Email:</Text>
      <TextInput
        style={styles.textInput}
        onChangeText={(email) => this.setState({ email })}
        value={this.state.email}
        underlineColorAndroid={'transparent'}
        textContentType={"emailAddress"}
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

  confirmPassword = () => {
    return <View>
      <Text>Confirm password:</Text>
      <TextInput
        style={styles.textInput}
        onChangeText={(confirmPassword) => this.setState({ confirmPassword })}
        value={this.state.confirmPassword}
        underlineColorAndroid={'transparent'}
        secureTextEntry={true}
      />
    </View>
  }

  buttonRegister = () => {
    return <TouchableOpacity
      style={styles.button}
      onPress={() => this._addUser()}
    >
      <Text style={styles.textButton}>Register</Text>
    </TouchableOpacity>
  }

  _addUser = () => {
    if (this.props.users.filter(item => item.userName == this.state.userName).length !== 0) {
      return Alert.alert('User name exist')
    }
    if (this.state.userName == '' || this.state.password == '') {
      return Alert.alert('User name and password are not blank')
    }
    if (this.state.password.length < 6) {
      return Alert.alert('password too short!')
    }
    if (this.state.password != this.state.confirmPassword) {
      return Alert.alert('confirm password not correct')
    }

    this.props.addUser({
      userName: this.state.userName,
      fullName: this.state.fullName,
      email: this.state.email,
      password: this.state.password
    })

    this.props.navigation.navigate('userList')
  }

  render() {
    return (
      <View style={styles.container}>
        {this.userName()}
        {this.fullName()}
        {this.email()}
        {this.password()}
        {this.confirmPassword()}
        {this.buttonRegister()}
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
export default connect(mapStateToProps, { addUser })(RegisterScreen);