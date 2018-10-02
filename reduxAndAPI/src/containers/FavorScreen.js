import React, { Component } from 'react';
import {
    Text, FlatList,
    View,
} from 'react-native';
import MovieIcon from '../components/MovieIcon';

import { connect } from 'react-redux';

class FavorScreen extends Component {
    state = {}

    renderItem = (data) => <MovieIcon item={data.item} bgColor={'#ff751a'} />

    render() {
        console.log(this.props.data)
        return (
            <View>
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

export default connect(mapStateToProps)(FavorScreen);