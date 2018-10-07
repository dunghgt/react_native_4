import React, { Component } from 'react';
import {
    Text, FlatList, StyleSheet,
    View, ActivityIndicator,
} from 'react-native';

import axios from 'axios';
import MovieItem from '../components/MovieItem';



class ListMovieScreen extends Component {
    state = {
        data: [],
        loading: true,
    }

    renderItem = (data) => {
        return <MovieItem
            item={data.item}
            navigation={this.props.navigation} />
    }

    componentWillMount() {
        axios.get('https://api.themoviedb.org/3/discover/movie?api_key=52eaefd76a882f94dc07a72e967afccd&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1')
            .then((res) => this.setState({
                data: res.data.results,
                loading: false
            }))
            .catch((err) => console.log(err))
    }

    render() {
        return (
            <View style={styles.container}>
                {this.state.loading
                    ? <ActivityIndicator />
                    : <FlatList
                        data={this.state.data}
                        renderItem={this.renderItem}
                        keyExtractor={(item) => {
                            return item.id
                        }}
                        numColumns={3}
                    />
                }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#29293d',
        paddingTop: 20,
    }
})

export default ListMovieScreen;

