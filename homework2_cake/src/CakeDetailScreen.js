import React, { Component } from 'react';
import {
    Text,
    View,
} from 'react-native';
import Cake from './Cake';
import ListOfTypes from './ListOfTypes';

class CakeDetailScreen extends Component {
    state = {}
    render() {
        return (
            <View>
                <Cake cake={this.props.navigation.getParam('cake')} />
                <ListOfTypes data={this.props.navigation.getParam('cake').types} />

            </View>
        );
    }
}

export default CakeDetailScreen;