import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    Image,
    TextInput,
} from 'react-native';
import { Button } from 'react-native-elements'
import { backgroundColor, primaryColorBrown, primaryColorRed, primaryColorGreen } from '../styles'
import firebase from 'react-native-firebase'
class LoginScreen extends Component {
    state = {
        email: '',
        password: '',
        isSigningIn: false,
        isSigningUp: false
    }
    renderLogo = () => (
        <View style={styles.logoStyleView}>
            <Image
                style={styles.imgStyle}
                resizeMode='contain'
                source={require('../../imgs/logo_app.jpg')}
            />
        </View>

    )

    renderLogin = () => (
        <View>
            <View>
                <View style={{ flexDirection: 'row' }}>
                    <Image
                        style={styles.loginImg}
                        //resizeMode='contain'
                        source={require('../../imgs/ic_email.png')}
                        keyboardType={'email-address'}
                    />
                    <Text style={styles.txtInput}>Email</Text>
                </View>
                <TextInput onChangeText={(email) => this.setState({ email })} />
            </View>
            <View style={{ marginTop: 10 }}>
                <View style={{ flexDirection: 'row' }}>
                    <Image
                        style={styles.loginImg}
                        //resizeMode='contain'
                        source={require('../../imgs/ic_password.png')}

                    />
                    <Text style={styles.txtInput}>Password</Text>
                </View>
                <TextInput
                    secureTextEntry={true}
                    onChangeText={(password) => this.setState({ password })}
                />
            </View>
        </View>
    )

    onSignIn = () => {

        if (this.state.email === '') {
            this.setState({ err: 'Pls enter email' })
            return
        }
        if (this.state.password === '') {
            this.setState({ err: 'Pls enter password' })
            return
        }

        this.setState({ isSigningIn: true })

        firebase.auth().signInAndRetrieveDataWithEmailAndPassword(this.state.email, this.state.password)
            .then(res => {
                this.setState({
                    err: '',
                    isSigningIn: false
                })
            })
            .catch(err => this.setState({
                err: err.toString(),
                isSigningIn: false
            }))
    }

    onSignUp = () => {

        if (this.state.email === '') {
            this.setState({ err: 'Pls enter email' })
            return
        }
        if (this.state.password === '') {
            this.setState({ err: 'Pls enter password' })
            return
        }

        this.setState({ isSigningUp: true })

        firebase.auth().createUserAndRetrieveDataWithEmailAndPassword(this.state.email, this.state.password)
            .then(res => {
                this.setState({
                    err: '',
                    isSigningUp: false
                })
            })
            .catch(err => this.setState({
                err: err.toString(),
                isSigningUp: false
            }))
    }

    renderSignUp = () => (
        <View style={{ flexDirection: 'row' }}>
            <View style={styles.buttonStyle}>
                <Button
                    title='Sign Up'
                    buttonStyle={{
                        backgroundColor: primaryColorGreen,
                        width: 100,
                        height: 45,
                        borderWidth: 0,
                        borderRadius: 16,
                        marginTop: 60,
                    }}
                    onPress={this.onSignUp}
                    loading={this.state.isSigningUp}
                    loadingProps={{ size: 'large', color: 'rgba(111, 202, 186, 1)' }}
                />
            </View>
            <View style={styles.buttonStyle}>
                <Button
                    title='Sign In'
                    buttonStyle={{
                        backgroundColor: primaryColorRed,
                        width: 100,
                        height: 45,
                        borderWidth: 0,
                        borderRadius: 16,
                        marginTop: 60,
                    }}
                    onPress={this.onSignIn}
                    loading={this.state.isSigningIn}
                    loadingProps={{ size: 'large', color: 'rgba(111, 202, 186, 1)' }}
                />
            </View>
        </View>
    )
    renderError = () => (
        <Text style={{ color: 'red' }}>{this.state.err}</Text>
    )
    render() {
        return (
            <View style={styles.container}>
                {this.renderLogo()}
                {this.renderLogin()}
                {this.renderError()}
                {this.renderSignUp()}
            </View>

        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        justifyContent: 'center',
        backgroundColor: backgroundColor,
    },
    logoStyleView: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    imgStyle: {
        height: 250,
        width: 250,
    },
    loginStyleView: {
        backgroundColor: backgroundColor,
    },
    loginImg: {
        height: 16,
        width: 16,
        marginStart: 10
    },
    txtInput: {
        color: primaryColorBrown,
        marginStart: 10
    },
    buttonStyle: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
export default LoginScreen;