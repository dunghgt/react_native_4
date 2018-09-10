import React, { Component } from 'react';
import {
    Text, TouchableOpacity,
    View,
} from 'react-native';
import Cake from './Cake';

class CakeTouch extends Component {
    state = {}
    render() {
        return (
            <TouchableOpacity
                onPress={() => this.props.navigation.navigate('CakeDetail', {
                    cake: this.props.cake
                })}>
                <Cake
                    cake={this.props.cake}
                    navigation={this.props.navigation} />
            </TouchableOpacity>
        );
    }
}

export default CakeTouch;