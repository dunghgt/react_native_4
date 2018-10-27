import React, { Component } from 'react';
import {
    Text,
    View,
} from 'react-native';

import { connect } from 'react-redux'
import { primaryColorRed } from '../styles';

class OrderTabNoti extends Component {
    state = {}

    totalOrder = () => {
        let totalOrder = 0
        this.props.orders.map(item => totalOrder += item.amount)
        return totalOrder
    }

    render() {
        return (
            this.totalOrder() == 0
                ? null
                : <View style={{
                    position: 'absolute',
                    backgroundColor: primaryColorRed,
                    borderRadius: 10,
                    width: 20,
                    height: 20,
                    justifyContent: 'center',
                    alignItems: 'center',
                    left: 15
                }}>
                    <Text style={{ color: 'white', fontSize: 12 }}>
                        {this.totalOrder()}
                    </Text>
                </View>
        );
    }
}
mapStatetoProps = ({ orders }) => ({ orders })
export default connect(mapStatetoProps)(OrderTabNoti);