import React, { Component } from 'react';
import {
    Text, Image, StyleSheet, Dimensions,
    View, TouchableOpacity,
} from 'react-native';

class MovieItem extends Component {
    state = {}

    render() {
        return (
            <TouchableOpacity
                style={styles.container}
                onPress={() => this.props.navigation.navigate('ReviewMovie', {
                    item: this.props.item,
                })}
            >
                <Image
                    style={styles.image}
                    source={{
                        uri: `https://image.tmdb.org/t/p/w500${this.props.item.poster_path}`
                    }}
                />
                <Text style={styles.title}>{this.props.item.title}</Text>
                <Text style={styles.vote}>Vote Average: {this.props.item.vote_average}</Text>
            </TouchableOpacity >
        );
    }
}

export default MovieItem;

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width / 2 - 20,
        margin: 10,
        alignItems: 'center'
    },
    image: {
        width: 133,
        height: 200,
        borderRadius: 3,
    },
    title: {
        fontSize: 15,
        marginVertical: 5,
        color: 'white',
    },
    vote: {
        fontSize: 13,
        color: 'white',
    }
})