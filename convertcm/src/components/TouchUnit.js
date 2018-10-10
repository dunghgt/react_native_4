import React, { Component } from 'react';
import {
    Text, Dimensions, FlatList,
    View, StyleSheet,
    TouchableOpacity
} from 'react-native';

import { connect } from 'react-redux'
import { convertNumber } from '../actions/index'
import { choiceUnit } from '../actions/index'

class TouchUnit extends Component {
    state = {}
    render() {
        return (
            <View style={[styles.container, { backgroundColor: this.props.item.color }]}>
                <TouchableOpacity
                    onPress={() => {
                        this.props.choiceUnit({ index: this.props.item.id })
                    }}>
                    <Text style={[styles.text, { color: this.props.choice[this.props.item.id].value ? 'red' : 'white' }]}>{this.props.item.text}</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width / 2,
        paddingStart: 40,
        paddingVertical: 10,
    },
    text: {
        fontSize: 20,
        fontWeight: '400'
    }
})

const mapStateToProps = ({ choice }) => ({ choice })
export default connect(mapStateToProps, { choiceUnit })(TouchUnit);