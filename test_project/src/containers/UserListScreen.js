import React, { Component } from 'react';
import {
    Text, FlatList, Dimensions, TouchableOpacity,
    View, StyleSheet, TextInput, Alert,
} from 'react-native';
import { connect } from 'react-redux'

class UserListScreen extends Component {
    state = {
        data: this.props.users
    }

    filter = () => {
        return <View>
            <TouchableOpacity
                style={styles.buttonFilter}
                onPress={() => this.filterAll()}
            >
                <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>All</Text>
            </TouchableOpacity>
            <View style={{ flexDirection: 'row', margin: 20 }}>
                <TextInput
                    style={{ width: 100, borderColor: 'gray', borderWidth: 1 }}
                    onChangeText={(userName) => this.setState({ userName })}
                    value={this.state.userName}
                    returnKeyType='done'
                />
                <TouchableOpacity
                    style={styles.buttonFilter}
                    onPress={() => this.filterUserName()}
                >
                    <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>User name</Text>
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row', margin: 20 }}>
                <TextInput
                    style={{ width: 100, borderColor: 'gray', borderWidth: 1 }}
                    onChangeText={(fullName) => this.setState({ fullName })}
                    value={this.state.fullName}
                    returnKeyType='done'
                />
                <TouchableOpacity
                    style={styles.buttonFilter}
                    onPress={() => this.filterFullName()}
                >
                    <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>Full name</Text>
                </TouchableOpacity>
            </View>
        </View>
    }

    filterAll = () => {
        return this.setState({ data: this.props.users })
    }

    filterUserName = () => {
        let filterUserName = this.props.users.filter(item => item.userName == this.state.userName)
        if (filterUserName.length === 0) {
            return Alert.alert('User name not found')
        }
        return this.setState({ data: filterUserName })
    }

    filterFullName = () => {
        let filterFullName = this.props.users.filter(item => item.fullName == this.state.fullName)
        console.log(filterFullName)
        if (filterFullName.length === 0) {
            return Alert.alert('User name not found')
        }
        return this.setState({ data: filterFullName })
    }

    userList = () => {
        console.log(this.state.data)
        return <View>
            <View style={[styles.item, { backgroundColor: '#e6e6ff' }]}>
                <Text style={styles.itemInside} numberOfLines={1}>user name</Text>
                <Text style={styles.itemInside} numberOfLines={1}>full name</Text>
                <Text style={styles.itemInside} numberOfLines={1}>email</Text>
            </View>
            <FlatList
                data={this.state.data}
                renderItem={this.renderItem}
                keyExtractor={item => item.userName}
            />
        </View>
    }

    renderItem = ({ item }) => (
        <View style={styles.item}>
            <Text style={styles.itemInside} numberOfLines={1}>{item.userName}</Text>
            <Text style={styles.itemInside} numberOfLines={1}>{item.fullName}</Text>
            <Text style={styles.itemInside} numberOfLines={1}>{item.email}</Text>
        </View>
    )

    render() {
        return (
            <View style={styles.container}>
                {this.filter()}
                {this.userList()}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        margin: 15
    },
    buttonFilter: {
        width: 100,
        height: 35,
        padding: 5,
        backgroundColor: '#4286f4',
        marginStart: 10,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    item: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    itemInside: {
        width: Dimensions.get('window').width / 3 - 10,
        fontSize: 15,
        color: 'black',
        borderWidth: 1,
        padding: 5
    }
})
const mapStateToProps = ({ users }) => ({ users })
export default connect(mapStateToProps)(UserListScreen);