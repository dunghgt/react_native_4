import React, { Component } from 'react';
import {
    Text, StyleSheet, Image, TouchableOpacity, ScrollView,
    View, TextInput, Button, Dimensions, ImageBackground,
} from 'react-native';
import MovieIcon from '../components/MovieIcon';

import { connect } from 'react-redux';
import { addFavorList } from '../actions';
import MovieTextDetail from '../components/MovieTextDetail';

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
            popularity: this.props.navigation.getParam("item").popularity,
            release_date: this.props.navigation.getParam("item").release_date,
            backdrop_path: this.props.navigation.getParam("item").backdrop_path,
            overview: this.props.navigation.getParam("item").overview
        })
        this.props.navigation.navigate('FavorMovie')


    }

    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <ImageBackground
                        style={styles.imagebg}
                        source={{ uri: `https://image.tmdb.org/t/p/w500${this.props.navigation.getParam("item").backdrop_path}` }}
                    >
                        <Image
                            style={styles.image}
                            source={{ uri: `https://image.tmdb.org/t/p/w500${this.props.navigation.getParam("item").poster_path}` }}
                        />
                    </ImageBackground>
                    <View style={styles.textdetail}>
                        <MovieTextDetail item={this.props.navigation.getParam("item")} />
                    </View>
                    <View style={styles.button}>
                        <TouchableOpacity
                            onPress={this._onPressAddFavor}
                        >
                            <Text style={styles.textbutton}>Add Favorite</Text>
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.overview}>Story line</Text>
                    <Text style={styles.textoverview}>{this.props.navigation.getParam("item").overview}</Text>
                </View>
            </ScrollView>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#29293d',
        flex: 1,
        paddingBottom: 40
    },
    button: {
        alignItems: 'center',
        marginHorizontal: 20,
        borderTopWidth: 1,
        borderTopColor: '#52527a',
        borderBottomWidth: 1,
        borderBottomColor: '#52527a',
        padding: 10
    },
    textbutton: {
        backgroundColor: '#e60073',
        color: '#f2f2f2',
        padding: 5,
        fontSize: 18,
        fontWeight: 'bold',
        borderRadius: 10,
    },
    textdetail: {
        paddingLeft: 145,
        height: 150,
    },
    overview: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#f2f2f2',
        marginVertical: 8,
        marginHorizontal: 18,
    },
    textoverview: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#d9d9d9',
        marginHorizontal: 18,
    },
    imagebg: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').width / 3 * 2,
        paddingBottom: 100
    },
    image: {
        width: 120,
        height: 200,
        marginTop: 180,
        marginHorizontal: 20,
        borderRadius: 2,
    },

})



export default connect(null, { addFavorList })(ReviewMovieScreen);
