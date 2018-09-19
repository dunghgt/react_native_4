import React, { Component } from 'react';
import {
    Text, Image, StyleSheet,
    View,
} from 'react-native';

import { imageConvert } from './Convert.js';

class CurrentImage extends Component {
    state = {}

    render() {
        return (
            <View>
                <Image
                    style={styles.image}
                    source={imageConvert(this.props.day.list[0].weather[0].main)}
                />
                <Text style={styles.status}>{this.props.day.list[0].weather[0].description}</Text>
            </View>

        );
    }
}

export default CurrentImage;

const styles = StyleSheet.create({
    image: {
        height: 150,
        width: 150,
    },
    status: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
        marginLeft: 14
    }
})