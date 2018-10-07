import React, { Component } from 'react';
import {
    Text, FlatList,
    View, TouchableOpacity,
} from 'react-native';
import MovieIcon from '../components/MovieIcon';

import { connect } from 'react-redux';
import { delFavorList } from '../actions/index'

class FavorScreen extends Component {
    state = {}

    delItem = (item) => {
        this.props.delFavorList({
            id: item.id
        })
    }

    renderItem = (data) => {
        return <TouchableOpacity
            onPress={() => this.props.navigation.navigate('ReviewMovie', {
                item: data.item,
            })}
            onLongPress={() => this.delItem(data.item)}>
            <MovieIcon item={data.item} />
        </TouchableOpacity>

    }


    render() {
        return (
            <View style={{ backgroundColor: '#29293d', flex: 1 }}>
                <FlatList
                    data={this.props.data}
                    renderItem={this.renderItem}
                    keyExtractor={(item) => (item.id.toString())}
                />
            </View>
        );
    }
}

const mapStateToProps = ({ data }) => ({ data })

export default connect(mapStateToProps, { delFavorList })(FavorScreen);