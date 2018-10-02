import React, { Component } from 'react';
import {
    Text, StyleSheet, Image, TouchableOpacity,
    View, TextInput, Button
} from 'react-native';
import MovieIcon from '../components/MovieIcon';

import { connect } from 'react-redux';
import { addFavorList } from '../actions';

class ReviewMovieScreen extends Component {
    state = {}

    // componentDidMount() {
    //     this.props.navigation.setParams({ add: this._onPressAddFavor });
    // }

    _onPressAddFavor = () => {
        this.props.addFavorList({
            id: this.props.navigation.getParam("item").id,
            original_title: this.props.navigation.getParam("item").original_title,
            poster_path: this.props.navigation.getParam("item").poster_path,
            vote_average: this.props.navigation.getParam("item").vote_average,
            vote_count: this.props.navigation.getParam("item").vote_count,
            popularity: this.props.navigation.getParam("item").popularity
        })
        this.props.navigation.navigate('FavorMovie')


    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={this._onPressAddFavor}
                >
                    <Text style={styles.textbutton}>Add Favorite</Text>
                </TouchableOpacity>
                <MovieIcon
                    item={this.props.navigation.getParam("item")}
                    bgColor={'#1f1f14'}
                />
                <View style={styles.container2}>
                    <Text style={styles.textoverview}>Overview:</Text>
                    <Text style={styles.textoverview}>{this.props.navigation.getParam("item").overview}</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#1a0008',
        flex: 1,
    },
    button: {
        alignItems: 'flex-end',
        marginTop: 10,
    },
    textbutton: {
        backgroundColor: '#e60073',
        color: 'white',
        padding: 10,
        margin: 10,
        fontSize: 18,
        fontWeight: 'bold',
        borderRadius: 10,
    },
    container2: {
        margin: 10,
        padding: 8,
        backgroundColor: '#1f1f14',
        borderRadius: 10,
    },
    textoverview: {
        fontSize: 15,
        color: 'white',
        marginVertical: 5,
    }
})



export default connect(null, { addFavorList })(ReviewMovieScreen);
