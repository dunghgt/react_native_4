import React, { Component } from 'react';
import {
    Text, Dimensions, FlatList,
    View, StyleSheet,
    TouchableOpacity
} from 'react-native';
import TouchUnit from './TouchUnit';

const data = [
    {
        id: 0,
        text: 'Milimeter',
        color: '#ff8000'
    },
    {
        id: 1,
        text: 'Centimeter',
        color: '#ffa64d'
    },
    {
        id: 2,
        text: 'Decimeter',
        color: '#ff8000'
    },
    {
        id: 3,
        text: 'Meter',
        color: '#ffa64d'
    }
]

class Type extends Component {
    state = {}

    renderItem = ({ item }) => {
        return <TouchUnit item={item} />
    }

    render() {
        return (
            <View>

                <FlatList
                    data={data}
                    renderItem={this.renderItem}
                    keyExtractor={(item) => item.id.toString()}
                />
            </View>
        );
    }
}


export default Type;