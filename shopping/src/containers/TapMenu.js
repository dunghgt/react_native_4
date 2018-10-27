import React, { Component } from 'react';
import {
    Text, StyleSheet, TouchableOpacity,
    View, FlatList, Platform
} from 'react-native';

import { backgroundColor, primaryColorGreen, primaryColorRed, commonStyles } from '../styles'
import firebase from 'react-native-firebase';
import MenuItem from '../components/MenuItem';

class TabMenu extends Component {
    state = {
        currentCategory: 'Hamburger',
        dishes: []
    }

    componentDidMount() {
        this.loadData()
    }

    loadData() {
        firebase.database().ref(`dishes/${this.state.currentCategory}`)
            .on('value', res => {
                this.setState({ dishes: res._value })
            })
    }

    renderItemCategories = ({ item }) => (
        <TouchableOpacity onPress={() => this.setState({ currentCategory: item }, () => this.loadData())}>
            <Text
                style={[
                    styles.categoryItem,
                    { color: this.state.currentCategory === item ? primaryColorRed : primaryColorGreen }
                ]}>
                {item}
            </Text>
        </TouchableOpacity>
    )

    renderCategories = () => (
        <FlatList
            style={{ flexGrow: 0 }}
            data={['Hamburger', 'Pizza', 'Spaghetti', 'Salad', 'Drink', 'Snack']}
            renderItem={this.renderItemCategories}
            horizontal={true}
            keyExtractor={(item) => item}
            showsHorizontalScrollIndicator={false}
        />
    )

    renderItemMenu = ({ item }) => <MenuItem item={item} />

    renderMenu = () => (
        <FlatList
            data={this.state.dishes}
            renderItem={this.renderItemMenu}
            keyExtractor={(item) => item.key}
            numColumns={2}
        />
    )

    render() {
        return (
            <View style={commonStyles.screenContainer}>
                {this.renderCategories()}
                {this.renderMenu()}
            </View>
        );
    }
}

const styles = StyleSheet.create({

    categoryItem: {
        fontSize: 20,
        fontWeight: 'bold',
        marginHorizontal: 7,
        marginVertical: 10,
    }
})

export default TabMenu;