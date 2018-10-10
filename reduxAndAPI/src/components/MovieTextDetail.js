import React, { Component } from 'react';
import {
    Text, StyleSheet,
    View,
} from 'react-native';

class MovieTextDetail extends Component {
    state = {}
    render() {
        return (
            <View style={styles.textdetail}>
                <Text
                    style={styles.title}
                    numberOfLines={2}>
                    {this.props.item.original_title}
                </Text>
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
                    <Text style={styles.relesase}>Release date:</Text>
                    <Text style={styles.relesasedate}>{this.props.item.release_date}</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    textdetail: {
        marginTop: 6,
        padding: 12,
        marginEnd: 20,
        height: 135,
        justifyContent: 'center',
    },
    title: {
        fontSize: 18,
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
    relesase: {
        fontSize: 15,
        fontWeight: '600',
        color: '#f2f2f2'
    },
    relesasedate: {
        fontSize: 14,
        color: '#e6e6e6',
        marginLeft: 5
    }
})

export default MovieTextDetail;
