import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import Country from './Country';


class Match extends Component {
    state = {}
    render() {
        return (
            <View style={styles.match}>
                <Text style={styles.date}>{this.props.match.time}</Text>
                <View style={styles.textrow}>
                    <Country team={this.props.match.team1} flag={this.props.match.flag1} direction='row' />
                    <Country team={this.props.match.team2} flag={this.props.match.flag2} direction='row-reverse' />
                </View>
            </View>
        );
    }
}

export default Match;

const styles = StyleSheet.create({
    match: {
        alignItems: 'center',
        backgroundColor: 'green',
        marginHorizontal: '6%',
        marginBottom: '4%',
        borderRadius: 10,
        flex: 1,
    },
    date: {
        marginTop: '2%',
        marginBottom: '4%',
        color: 'white'
    },
    textrow: {
        flexDirection: 'row',
        marginBottom: '4%'
    },
})