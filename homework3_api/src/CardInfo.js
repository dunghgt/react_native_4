import React, { Component } from 'react';
import {
    Text, StyleSheet, Dimensions,
    View,
} from 'react-native';

class CardInfo extends Component {
    state = {}
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>ID: {this.props.card.id}</Text>
                <Text style={styles.text}>Name: {this.props.card.name}</Text>
                <Text style={styles.text}>Hp: {this.props.card.hp}</Text>
                <Text style={styles.text}>Artist: {this.props.card.artist}</Text>
                <Text style={styles.text}>Types: {this.props.card.types}</Text>
                <Text style={styles.text}>Set: {this.props.card.set}</Text>
                <Text style={styles.text}>Subtype: {this.props.card.subtype}</Text>
                <Text style={styles.text}>Supertype: {this.props.card.supertype}</Text>
            </View>
        );
    }
}

export default CardInfo;

const styles = StyleSheet.create({
    container: {
        margin: '5%',
        width: Dimensions.get('window').width / 2 - 20,
    },
    text: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#b35900',
        marginBottom: '3%',
    }
})