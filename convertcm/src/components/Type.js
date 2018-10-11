import React, { Component } from 'react';
import {
    Text, Dimensions, FlatList,
    View, StyleSheet,
    TouchableOpacity
} from 'react-native';
import TouchUnit from './TouchUnit';

import { data } from '../data.json'

class Type extends Component {
    state = {}

    renderItem = ({ item }) => {
        return <TouchUnit item={item} column={this.props.column} />
    }

    render() {
        return (
            <View>
                <FlatList
                    data={data[this.props.indexData]}
                    renderItem={this.renderItem}
                    keyExtractor={(item) => item.id.toString()}
                />
            </View>
        );
    }
}


export default Type;