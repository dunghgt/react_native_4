import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    Image
} from 'react-native';

class Logo extends Component {
    state = {}
    render() {
        return (
            <View style={styles.textCenter}>
                <Text style={styles.textSchedule}>Schedule</Text>
                <Image
                    style={{ width: 80, height: 120 }}
                    source={{ uri: 'https://png.icons8.com/color/180/world-cup.png' }}
                />
                <Text style={styles.textFIFA}>FIFA WORLDCUP 2018</Text>
            </View>
        );
    }
}

export default Logo;

const styles = StyleSheet.create({
    textCenter: {
        alignItems: 'center',
    },
    textSchedule: {
        color: '#4d4d4d',
        fontSize: 35,
        fontWeight: '700',
        marginTop: 20,
        marginBottom: 30,
    },
    textFIFA: {
        color: '#4d4d4d',
        fontSize: 20,
        marginTop: 10,
        marginBottom: 40,
    }
})