import React, { Component } from 'react';
import {
    Text, TouchableOpacity, FlatList,
    View, StyleSheet,
} from 'react-native';

import { connect } from 'react-redux'
import { pickCategory } from '../actions'

import {
    categoryShopping, white, gray, categoryTodo,
    categoryBirthday, categoryEvent, categoryPersonal, calendarHighlight
} from '../styles';

const categories = [
    'To do', 'Shopping', 'Birthday', 'Event', 'Personal'
]

class PickCategory extends Component {
    state = {}

    renderItem = ({ item }) => (
        <TouchableOpacity
            style={[styles.container, { backgroundColor: this.chooseColorByVategory(item) }]}
            onPress={() => this.props.pickCategory(item)}
        // onPress={() => this.props.onPickCategory(item, this.chooseColorByVategory(item))}
        >
            <Text style={styles.category}>{item}</Text>
        </TouchableOpacity >
    )

    chooseColorByVategory = (category) => {
        switch (category) {
            case 'To do': return categoryTodo
            case 'Shopping': return categoryShopping
            case 'Birthday': return categoryBirthday
            case 'Event': return categoryEvent
            case 'Personal': return categoryPersonal
        }
    }

    render() {
        return (
            <View>
                <FlatList
                    style={{ marginHorizontal: 20, marginVertical: 10 }}
                    data={categories}
                    keyExtractor={(index) => index.toString()}
                    renderItem={this.renderItem}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                />

            </View>
        );
    }
}

// connect: 1: state, 2: action
export default connect(null, { pickCategory })(PickCategory);

const styles = StyleSheet.create({
    container: {
        width: 80,
        height: 80,
        marginEnd: 5,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    category: {
        color: white,
        fontWeight: 'bold'
    },


})