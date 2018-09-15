import React, { Component } from 'react';
import {
    Text, TouchableOpacity,
    View,
} from 'react-native';
import CardItem from './CardItem';

class CakeTouch extends Component {
    state = {}
    render() {
        return (
            <TouchableOpacity
                onPress={() => this.props.navigation.navigate('CardDetail', {
                    card: this.props.card
                })}>
                <CardItem
                    card={this.props.card}
                    navigation={this.props.navigation} />
            </TouchableOpacity>
        );
    }
}

export default CakeTouch;