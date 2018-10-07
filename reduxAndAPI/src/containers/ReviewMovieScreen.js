import React, { Component } from 'react';
import {
    Text, StyleSheet, Image, TouchableOpacity, ScrollView,
    View, TextInput, Button, Dimensions, ImageBackground,
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
                        <Text
                            style={styles.title}
                            numberOfLines={2}>
                            {this.props.navigation.getParam("item").original_title}
                        </Text>
                        <View style={{ flexDirection: 'row' }}>
                            <View>
                                <Text style={styles.vote}>{this.props.navigation.getParam("item").vote_average}</Text>
                                <Text style={styles.textvote}>Ratings</Text>
                            </View>
                            <View style={{ marginLeft: 24 }}>
                                <Text style={styles.vote}>{this.props.navigation.getParam("item").popularity}</Text>
                                <Text style={styles.textvote}>Popularity</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', marginVertical: 5 }}>
                            <Text style={styles.relesase}>Release date:</Text>
                            <Text style={styles.relesasedate}>{this.props.navigation.getParam("item").release_date}</Text>
                        </View>
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
    textdetail: {
        marginVertical: 14,
        paddingLeft: 140,
        marginHorizontal: 20,
        height: 135,
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



export default connect(null, { addFavorList })(ReviewMovieScreen);
