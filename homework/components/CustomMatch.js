import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import Country from './Country';


class CustomMatch extends Component {
    state = {}
    render() {
        return (
            <View style={styles.match}>
                <Text style={styles.date}>{this.props.time}</Text>
                <View style={styles.textrow}>
                    <Country team={this.props.team1} flag={this.props.flag1} direction='row' />
                    <Country team={this.props.team2} flag={this.props.flag2} direction='row-reverse' />
                </View>
            </View>
        );
    }
}

export default CustomMatch;

const styles = StyleSheet.create({
    match: {

        alignItems: 'center',
        backgroundColor: 'green',
        width: '90%',
        margin: '2%',
        borderRadius: 10,
        flex: 1,
    },
    date: {
        marginTop: '2%',
        marginBottom: '5%',
        color: 'white'
    },
    textrow: {
        flexDirection: 'row',
    },
})