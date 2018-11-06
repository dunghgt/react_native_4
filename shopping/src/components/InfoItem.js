import React, { Component } from 'react';
import {
    Text, TextInput,
    View, StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import { commonStyles, primaryColorGreen, primaryColorBrown } from '../styles'
import firebase from 'react-native-firebase'


// var that

class InfoItem extends Component {
    // constructor(props) {
    //     super(props) 
    //     that = this
    // }

    state = {}

    componentDidMount() {
        this.loadData()
    }

    loadData() {
        firebase.database().ref('/users')
            .child(firebase.auth().currentUser.uid)
            .child(this.props.type)
            .once('value', res => this.setState({
                info: res._value
            }))
    }


    //onSubmit(event) ===> this == global TextInput
    onSubmit = (event) => {
        firebase.database().ref('/users')
            .child(firebase.auth().currentUser.uid)
            .child(this.props.type)
            .set(event.nativeEvent.text)
    }

    render() {
        return (
            <View style={styles.container}>
                <Icon name={this.props.iconName} size={25} color={primaryColorGreen} />
                <TextInput
                    placeholder={'Enter your info'}
                    style={styles.input}
                    returnKeyType={'done'}
                    onSubmitEditing={this.onSubmit.bind(this)}
                    underlineColorAndroid={'transparent'}
                    defaultValue={this.state.info}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        // marginVertical: 3,
        marginHorizontal: 7,
        alignItems: 'center'
    },
    input: {
        flex: 1,
        color: primaryColorBrown,
        marginLeft: 16
    }
})
export default InfoItem;