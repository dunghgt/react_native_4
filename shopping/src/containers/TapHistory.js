import React, { Component } from 'react';
import {
    Text, StyleSheet,
    View, FlatList,
} from 'react-native';
import { commonStyles, primaryColorGreen, primaryColorBrown, primaryColorRed } from '../styles'
import Accordion from 'react-native-collapsible/Accordion'
import Icon from 'react-native-vector-icons/FontAwesome';
import OrderItem from '../components/OrderItem';
import firebase from 'react-native-firebase'

class TapHistory extends Component {
    state = {
        activeSections: [],
        history: []
    }

    componentWillMount() {
        this.loadData()
    }

    loadData() {
        firebase.database().ref('/users')
            .child(firebase.auth().currentUser.uid)
            .child('history')
            .on('value', res => {
                this.setState({ history: res._value != null ? res._value : [] })
            })
    }

    renderHeader(section) {
        const totalPrice = section.orders
            .reduce((acc, curV) => acc + curV.amount * curV.unitPrice, 0)
        return (
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text style={{
                    flex: 1,
                    color: primaryColorBrown,
                    fontSize: 16,
                    margin: 7,
                }}>{section.date}</Text>
                <Text style={{
                    color: primaryColorRed,
                    fontSize: 16,
                    margin: 7,
                    fontWeight: 'bold'
                }}>{totalPrice}$</Text>
                <Icon
                    style={{ marginEnd: 7 }}
                    name={'angle-down'}
                    size={20}
                    color={primaryColorBrown} />
            </View>
        )
    }

    renderContent(section) {
        return (
            <FlatList
                style={{ flexGrow: 0 }}
                data={section.orders}
                renderItem={({ item }) => <OrderItem item={item} historyMode={true} />}
                keyExtractor={item => item.name}
            />
        )
    }


    renderOngoingList() {
        return (
            <View>
                <Text style={styles.title}>On-going</Text>
                <Accordion
                    underlayColor={'white'}
                    activeSections={this.state.activeSections}
                    sections={this.state.history.filter(orders => orders.isDone == false)}
                    renderHeader={this.renderHeader}
                    renderContent={this.renderContent}
                    onChange={(activeSections) => this.setState({ activeSections })}
                />
            </View>
        )
    }

    renderFinishedList() {
        return (
            <View>
                <Text style={styles.title}>Finished</Text>
                <Accordion
                    underlayColor={'white'}
                    activeSections={this.state.activeSections}
                    sections={this.state.history.filter(orders => orders.isDone == true)}
                    renderHeader={this.renderHeader}
                    renderContent={this.renderContent}
                    onChange={(activeSections) => this.setState({ activeSections })}
                />
            </View>
        )
    }

    render() {
        return (
            <View style={commonStyles.screenContainer}>
                <Text style={commonStyles.screenTitle}>History</Text>
                {this.renderOngoingList()}
                {this.renderFinishedList()}
            </View>
        );
    }
}


const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        color: primaryColorGreen,
        margin: 7,
        fontWeight: 'bold'

    }
})
export default TapHistory;