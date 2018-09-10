import React, { Component } from 'react';
import {
    Text, FlatList,
    View,
} from 'react-native';
import Cake from './Cake';

import { data } from './database.json';
import CakeTouch from './CakeTouch';

class CakeListScreen extends Component {
    state = {}

    renderItem = (data) => <CakeTouch
        cake={data.item}
        navigation={this.props.navigation} />

    render() {
        return (
            <View>
                <FlatList
                    data={data}
                    renderItem={this.renderItem}
                    keyExtractor={(item) => item} />
            </View>
        );
    }
}

export default CakeListScreen;