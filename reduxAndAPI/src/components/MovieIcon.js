import React, { Component } from 'react';
import {
    Text, StyleSheet, Image,
    View,
} from 'react-native';

class MovieIcon extends Component {
    state = {}
    render() {
        return (
            <View style={styles.container}>
                <Image
                    style={styles.image}
                    source={{ uri: `https://image.tmdb.org/t/p/w500${this.props.item.poster_path}` }}
                />
                <View style={[styles.textdetail, { backgroundColor: this.props.bgColor }]}>
                    <Text style={styles.title}>{this.props.item.original_title}</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <View>
                            <Text style={styles.vote}>{this.props.item.vote_average}</Text>
                            <Text style={styles.textvote}>Ratings</Text>
                        </View>
                        <View style={{ marginLeft: 24 }}>
                            <Text style={styles.vote}>{this.props.item.popularity}</Text>
                            <Text style={styles.textvote}>Popularity</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', marginVertical: 5 }}>
                        <Text style={styles.release}>Release date:</Text>
                        <Text style={styles.releasedate}>{this.props.item.release_date}</Text>
                    </View>
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
        height: 180,
    },
    textdetail: {
        padding: 6,
        width: 200,
        height: 150,
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