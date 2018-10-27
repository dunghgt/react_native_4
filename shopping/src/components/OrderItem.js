import React, { Component } from 'react';
import {
    Text, StyleSheet,
    View, TouchableOpacity,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome'
import { primaryColorGreen, primaryColorBrown } from '../styles';

import { connect } from 'react-redux'
import { delOrder } from '../actions/index'

class OrderItem extends Component {
    state = {}

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity
                    onPress={() => this.props.delOrder({
                        name: this.props.item.name
                    })}
                >
                    <Icon style={styles.icon} name='trash' size={25} color={primaryColorGreen} />
                </TouchableOpacity>
                <Text style={styles.number}>
                    {this.props.item.amount}
                </Text>
                <Text style={styles.name}>
                    {this.props.item.name}
                </Text>
                <Text style={styles.price}>
                    {`${this.props.item.unitPrice * this.props.item.amount}$`}
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 3
    },
    icon: {
        marginStart: 7,
    },
    number: {
        fontWeight: 'bold',
        color: primaryColorBrown,
        marginHorizontal: 16,
        fontSize: 18
    },
    name: {
        flex: 1,
        color: primaryColorBrown,
        marginHorizontal: 16,
    },
    price: {
        fontWeight: 'bold',
        color: primaryColorGreen,
        fontSize: 18,
        marginHorizontal: 7
    }

})
export default connect(null, { delOrder })(OrderItem);