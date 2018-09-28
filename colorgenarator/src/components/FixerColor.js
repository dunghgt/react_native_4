import React, { Component } from 'react';
import {
    Text, StyleSheet,
    View,
} from 'react-native';
import SliderColor from './SliderColor';

import { connect } from 'react-redux'

class FixerColor extends Component {
    state = {}

    renderItem = ({ item }) => <SliderColor item={item} />

    render() {
        return (
            < View >
                <Text style={styles.color}>
                    rgb ({this.props.dataColor[0].number}, {this.props.dataColor[1].number}, {this.props.dataColor[2].number})
                </Text>
                <View style={styles.slidercontainer}>
                    <SliderColor color='red' id={0} />
                    <SliderColor color='green' id={1} />
                    <SliderColor color='blue' id={2} />
                </View>
            </View >
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    color: {
        padding: 20,
        backgroundColor: '#f2f2f2',
        fontSize: 20,
        fontWeight: '400',
    },
    slidercontainer: {
        marginTop: 20,
        marginBottom: 40
    }
})

const mapStateToProps = ({ dataColor }) => ({ dataColor })
export default connect(mapStateToProps)(FixerColor);