import React, { Component } from 'react';
import {
    Text, FlatList,
    View, StyleSheet,
} from 'react-native';

class ListOfTypes extends Component {
    state = {}

    renderItem = (data) => <Text style={styles.textSize}>{data.item}</Text>

    render() {
        return (
            <View>
                <FlatList
                    style={styles.container}
                    data={this.props.data}
                    renderItem={this.renderItem}
                    keyExtractor={(item) => item} />
            </View>
        );
    }
}

export default ListOfTypes;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        marginHorizontal: 20,
        marginTop: 10,
        borderRadius: 5,
        padding: 20
    },
    textSize: {
        fontSize: 15,
        fontWeight: "bold",
        color: "#e60073",
        margin: 3,
    }
})