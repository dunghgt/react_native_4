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
                <Text style={{ fontSize: 18, color: 'white' }}>{this.props.team}</Text>
                <Image
                    style={{ width: 30, height: 20 }}
                    source={{ uri: this.props.flag }}
                />
            </View>
        );
    }
}

export default Country;