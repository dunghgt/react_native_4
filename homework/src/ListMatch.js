import React, { Component } from 'react';
import {
    Text,
    View,
    FlatList
} from 'react-native';

import { data } from './database.json';
import Match from './Match';

class ListMatch extends Component {
    state = {}

    renderItem = ({ item }) => <Match match={item} />

    render() {
        return (
            <View>
                <FlatList
                    data={data}
                    renderItem={this.renderItem} />
            </View>
        );
    }
}

export default ListMatch;