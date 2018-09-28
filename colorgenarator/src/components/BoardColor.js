import React, { Component } from 'react';
import {
    Text,
    View,
} from 'react-native';

import { connect } from 'react-redux'

class BoardColor extends Component {
    state = {}
    render() {
        return (
            <View style={{
                flex: 1,
                elevation: 4,
                backgroundColor: `rgb(${this.props.dataColor[0].number}, ${this.props.dataColor[1].number}, ${this.props.dataColor[2].number})`
            }}></View>
        );
    }
}

const mapStateToProps = ({ dataColor }) => ({ dataColor })
export default connect(mapStateToProps)(BoardColor);