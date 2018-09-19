import React, { Component } from 'react';
import {
    Text,
    View,
    Image,
    StyleSheet,
} from 'react-native';

import { timeConvert, imageConvert } from './Convert.js';

class DayItems extends Component {
    state = {}

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>{timeConvert(this.props.day.dt)}</Text>
                <View style={styles.temp}>
                    <Text style={styles.text}>{Math.floor(this.props.day.temp.day - 273)}</Text>
                    <Image
                        style={styles.image}
                        source={imageConvert(this.props.day.weather[0].main)} />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: '5%',
        marginVertical: '3%',
        paddingHorizontal: '2%',
        paddingBottom: 10,
        backgroundColor: '#2E2B3D',
        borderRadius: 5,
        alignItems: 'center',
    },
    temp: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    text: {
        color: 'white',
        fontSize: 20,
        marginRight: '3%',
    },
    image: {
        height: 50,
        width: 50,
    }
})
export default DayItems;