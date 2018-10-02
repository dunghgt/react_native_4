import React, { Component } from 'react';
import {
    Text,
    View,
} from 'react-native';
import MovieIcon from '../components/MovieIcon';

import { connect } from 'react-redux';

class FavorScreen extends Component {
    state = {}
    render() {
        console.log(this.props.data)
        return (
            <View>
                {/* <MovieIcon item={this.props.data} bgColor={'navy'} /> */}
            </View>
        );
    }
}

// const mapStateToProps = ({ data }) => ({ data })

export default FavorScreen;