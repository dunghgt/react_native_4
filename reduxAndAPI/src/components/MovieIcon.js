import React, { Component } from 'react';
import {
    Text, StyleSheet, Image,
    View,
} from 'react-native';

class MovieIcon extends Component {
    state = {}
    render() {
        return (
            <View style={[styles.container, { backgroundColor: this.props.bgColor }]}>
                <View style={styles.textdetail}>
                    <Text style={styles.title}>Title: {this.props.item.original_title}</Text>
                    <Text style={styles.vote}>Vote average: {this.props.item.vote_average}</Text>
                    <Text style={styles.vote}>Vote count: {this.props.item.vote_count}</Text>
                    <Text style={styles.vote}>Popularity: {this.props.item.popularity}</Text>
                </View>
                <Image
                    style={styles.image}
                    source={{ uri: `https://image.tmdb.org/t/p/w500${this.props.item.poster_path}` }}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginTop: 15,
        marginBottom: 10,
        marginHorizontal: 10,
        padding: 8,
        borderRadius: 10,
    },
    textdetail: {
        width: 230,
    },
    title: {
        fontSize: 18,
        color: 'white',
    },
    vote: {
        fontSize: 15,
        color: 'white',
    },
    image: {
        width: 80,
        height: 120,

    },
})

export default MovieIcon;