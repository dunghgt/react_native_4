import React, { Component } from 'react';
import {
    Text, StyleSheet, TouchableOpacity,
    View,
} from 'react-native';

import { tempConvert } from './Convert.js';

class CurrentTemp extends Component {
    state = {
        doC: true,
        C: 'white',
        F: 'gray'
    }

    onclick(cel) {
        if (cel === 'C') {
            this.setState({ doC: true, C: 'white', F: 'gray' })
        } else {
            this.setState({ doC: false, C: 'gray', F: 'white' })
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.num}>{tempConvert(this.state.doC, this.props.day.list[0].temp.day)}</Text>
                <View style={styles.cf}>
                    <TouchableOpacity
                        onPress={() => this.onclick('C')}
                    >
                        <Text style={[styles.text, { color: this.state.C }]}>oC</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => this.onclick('F')}
                    >
                        <Text style={[styles.text, { color: this.state.F }]}>oF</Text>
                    </TouchableOpacity>


                </View>
            </View>
        );
    }
}

export default CurrentTemp;

const styles = StyleSheet.create({
    container: {
        marginTop: '12%',
    },
    num: {
        fontSize: 80,
        fontWeight: 'bold',
        color: 'white',
    },
    cf: {
        flexDirection: 'row',
        marginLeft: 12
    },
    text: {
        fontSize: 20,
        fontWeight: '100',
        margin: '4%'
    }
})