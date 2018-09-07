import React, { Component } from 'react';
import {
    Text,
    View,
    Image
} from 'react-native';

class Country extends Component {
    state = {}
    render() {
        return (
            <View style={{ flexDirection: this.props.direction, justifyContent: 'space-around', flex: 1 }}>
                <Text style={{ fontSize: 15, color: 'white' }}>{this.props.team}</Text>
                <Image
                    style={{ width: 25, height: 15 }}
                    source={{ uri: this.props.flag }}
                />
            </View>
        );
    }
}

export default Country;