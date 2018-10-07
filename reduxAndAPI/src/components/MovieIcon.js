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
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#f2f2f2',
        marginBottom: 6,
    },
    vote: {
        fontSize: 18,
        color: '#ff8000',
    },
    textvote: {
        fontSize: 15,
        color: '#e6e6e6'
    },
    release: {
        fontSize: 15,
        fontWeight: '600',
        color: '#f2f2f2'
    },
    releasedate: {
        fontSize: 14,
        color: '#e6e6e6',
        marginLeft: 5
    }
})

export default MovieIcon;