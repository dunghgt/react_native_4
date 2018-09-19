import React, { Component } from 'react';
import {
    Text, StyleSheet,
    View,
} from 'react-native';

import { timeConvert } from './Convert.js';

class CurrentDay extends Component {
    state = {}
    render() {

        return (
            <View style={styles.container}>
                <Text style={styles.city}>{this.props.day.city.name}</Text>
                <Text style={styles.date}>{timeConvert(this.props.day.list[0].dt)}</Text>
            </View>
        );
    }
}

export default CurrentDay;

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',

    },
    city: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white'
    },
    date: {
        fontSize: 20,
        color: 'white'
    }
})