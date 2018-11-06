import React, { Component } from 'react';
import {
    Text,
    View,
} from 'react-native';
import { commonStyles } from '../styles'
import InfoItem from '../components/InfoItem';

class TabInfo extends Component {
    state = {}
    render() {
        return (
            <View style={commonStyles.screenContainer}>
                <Text style={commonStyles.screenTitle}>Infomation</Text>
                <InfoItem type='address' iconName='location-arrow' />
                <InfoItem type='usetname' iconName='user' />
                <InfoItem type='phone' iconName='phone' />
            </View>
        );
    }
}


export default TabInfo;