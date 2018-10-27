import React, { Component } from 'react';
import {
    Text, StyleSheet, TouchableOpacity,
    View, FlatList,
} from 'react-native';

import { backgroundColor, commonStyles, primaryColorBrown } from '../styles'
import OrderItem from '../components/OrderItem';

import { connect } from 'react-redux'

class TapOrder extends Component {
    state = {}

    renderTitle = () => <Text style={commonStyles.screenTitle}>Order</Text>

    renderOrders = () => <FlatList
        style={{ flexGrow: 0 }}
        data={this.props.orders}
        renderItem={({ item }) => <OrderItem item={item} />}
        keyExtractor={item => item.name}
        showsHorizontalScrollIndicator={false}
    />


    totalPrice = () => {
        let totalPrice = 0
        this.props.orders.map(item => totalPrice += item.amount * item.unitPrice)
        return totalPrice
    }

    renderTotal = () => <View>
        <View style={styles.line} />
        <View style={{ flexDirection: 'row' }}>
            <Text style={[commonStyles.screenTitle, { flex: 1 }]}>Total</Text>
            <Text style={[commonStyles.screenTitle]}>{this.totalPrice()}$</Text>
        </View>
    </View>

    confirmOrder = () => {

    }

    renderConfirm = () => <TouchableOpacity style={[commonStyles.button, {
        position: 'absolute',
        bottom: 16,
        alignSelf: 'center'
    }]}
        onPress={this.confirmOrder}>
        <Text style={{ color: 'white' }}>Confirm</Text>
    </TouchableOpacity>

    render() {
        return (
            <View style={commonStyles.screenContainer}>
                {this.renderTitle()}
                {this.renderOrders()}
                {this.renderTotal()}
                {this.renderConfirm()}
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: backgroundColor,
        flex: 1
    },
    line: {
        borderTopWidth: 1,
        borderTopColor: primaryColorBrown,
        marginHorizontal: 7,
        marginTop: 10,
    },

})

const mapStateToProps = ({ orders }) => ({ orders })

export default connect(mapStateToProps)(TapOrder);