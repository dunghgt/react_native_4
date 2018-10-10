import React, { Component } from 'react';
import {
    Text, TextInput, Dimensions,
    View, StyleSheet,
} from 'react-native';

class Input extends Component {
    state = {}
    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    style={styles.textinput}
                    textAlign={'center'}
                    underlineColorAndroid={'#ff8000'}
                    onChangeText={(text) => this.setState({ text })}
                    value={this.state.text}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width / 2,
    },
    textinput: {
        marginHorizontal: 20,
        marginVertical: 10,
        height: 60,
        fontSize: 24,
        color: 'black',
        width: Dimensions.get('window').width / 2 - 40,
    }
})

export default Input;