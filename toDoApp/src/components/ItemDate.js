import React, { Component } from 'react';
import {
    Text, StyleSheet,
    View,
} from 'react-native';

class ItemDate extends Component {
    state = {}
    render() {
        const dayOfWeek = this.props.date.split(' ')[0]
        // const date = this.props.date.substring(0, this.props.date.indexOf(' '))
        const date = this.props.date.substring(this.props.date.indexOf(' ') + 1)
        return (
            <View style={styles.container}>
                <Text style={styles.dayOfWeek}>{dayOfWeek}</Text>
                <Text style={styles.dateText}>{date}</Text>
            </View>
        );
    }
}

export default ItemDate;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingHorizontal: 20,
        marginVertical: 5,
        alignItems: 'baseline',
    },
    dayOfWeek: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    dateText: {
        height: 20,
        fontSize: 12,
        marginHorizontal: 20,
        color: 'gray',
    }
})