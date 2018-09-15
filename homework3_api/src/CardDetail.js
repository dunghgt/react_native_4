import React, { Component } from 'react';
import {
    Text, StyleSheet,
    View,
} from 'react-native';
import CardItem from './CardItem';
import CardInfo from './CardInfo';

class CardDetail extends Component {
    state = {}
    render() {
        return (
            <View style={{ flexDirection: "row", }}>
                <CardItem style={styles.item} card={this.props.navigation.getParam('card')} />
                <CardInfo card={this.props.navigation.getParam('card')} />
            </View>
        );
    }
}

export default CardDetail;

const styles = StyleSheet.create({
    item: {
        marginLeft: "50%",
    }
})