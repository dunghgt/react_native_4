import React, { Component } from 'react';
import {
    Text, TextInput, StyleSheet,
    View,
    TouchableOpacity,
} from 'react-native';

class Search extends Component {
    state = {
        text: '',
    }
    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    style={styles.input}
                    onChangeText={(text) => this.setState({ text })}
                    value={this.state.text}
                />

                <View>
                    <Text style={styles.text}>Search</Text>
                </View>

            </View>
        );
    }
}

export default Search;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        margin: '5%',
    },
    input: {
        height: 40,
        width: 235,
        borderColor: 'gray',
        borderWidth: 1,
        backgroundColor: 'white',
        borderRadius: 10,
    },
    text: {

        marginLeft: 10,
        fontSize: 20,
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 6,
    }
})