import React, { Component } from 'react';
import {
    Text, StyleSheet,
    View, Image,
} from 'react-native';

class Cake extends Component {
    state = {}
    render() {
        return (
            <View style={[styles.cake, { backgroundColor: this.props.cake.bgcolor }]}>
                <Image
                    style={{
                        height: 100,
                        width: 100,
                        margin: 25
                    }}
                    source={{ uri: this.props.cake.image }} />
                <Text style={styles.cakename}>{this.props.cake.title}</Text>
            </View >
        );
    }
}

export default Cake;

styles = StyleSheet.create({
    cake: {
        flexDirection: "row",
        backgroundColor: "#f46388",
        marginHorizontal: 20,
        marginTop: 10,
        borderRadius: 5,
        alignItems: "center",
    },
    cakename: {
        fontSize: 25,
        fontWeight: "bold",
        color: "white",
    }
})