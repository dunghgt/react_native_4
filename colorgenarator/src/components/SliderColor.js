import React, { Component } from 'react';
import {
    Text, Dimensions,
    View,
} from 'react-native';
import { Slider } from 'react-native-elements'

import { connect } from 'react-redux'
import { setColor } from '../actions'

class SliderColor extends Component {
    state = {}

    render() {
        return (
            <View style={{
                flex: 1,
                justifyContent: 'center',
                marginVertical: 30,
                marginHorizontal: 25
            }}>
                <Text style={{
                    marginStart: 6 + (Dimensions.get('window').width - 80) / 255 * this.props.dataColor[this.props.id].number,
                }}>
                    {this.props.dataColor[this.props.id].number}
                </Text>
                <Slider
                    style={{
                        width: Dimensions.get('window').width - 50,
                        paddingTop: 0,
                    }}
                    maximumValue={255}
                    step={1}
                    value={this.props.dataColor[this.props.id].number}
                    onValueChange={val => this.props.setColor({
                        id: this.props.id,
                        number: val
                    })
                    }
                    minimumTrackTintColor={this.props.color}
                    maximumTrackTintColor='#d9d9d9'
                    thumbTintColor={this.props.color}

                />
            </View >
        );
    }
}

const mapStateToProps = ({ dataColor }) => ({ dataColor })
export default connect(mapStateToProps, { setColor })(SliderColor);