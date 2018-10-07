import React, { Component } from 'react';
import {
    Text, StyleSheet, Image,
    View,
} from 'react-native';
import MovieTextDetail from './MovieTextDetail';

class MovieIcon extends Component {
    state = {}
    render() {
        return (
            <View style={styles.container}>
                <Image
                    style={styles.image}
                    source={{ uri: `https://image.tmdb.org/t/p/w500${this.props.item.poster_path}` }}
                />
                <View style={styles.textdetail}>
                    <MovieTextDetail item={this.props.item} />
                </View>

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
        paddingHorizontal: 8,
        alignItems: 'center',
    },
    image: {
        width: 120,
        height: 195,
    },
    textdetail: {
        backgroundColor: '#33334d',
        width: 200,
        elevation: 10,
        justifyContent: 'center',
    },
})

export default MovieIcon;