import React, { Component } from 'react';
import {
    Text, StyleSheet, TouchableOpacity,
    View, TextInput, Button
} from 'react-native';

import CalendarStrip from 'react-native-calendar-strip';
import TimePicker from 'react-native-modal-datetime-picker';

import { calendarBackground, calendarHighlight, white, gray, categoryTodo, categoryShopping, categoryBirthday, categoryEvent, categoryPersonal } from '../styles';
import ItemDate from '../components/ItemDate';
import PickCategory from '../components/PickCategory';

import { connect } from 'react-redux'
import { addTask } from '../actions';

const dayName = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
const monthName = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

class AddTaskScreen extends Component {
    state = {
        selectedDate: this.getDateStringFromDateOpj(new Date()),
        selectedTime: new Date().toTimeString().substring(0, 5),
        // isDateTimePickerVisible: false
        currentCategory: 'To do',
        //number of day from 1/1/1970
        dayId: Math.floor(new Date().getTime() / (24 * 60 * 60 * 1000)),
        //number of milis from 1/1/1970
        taskId: new Date().getTime(),
        content: ''
    }

    getDateStringFromDateOpj(date) {
        return (`${dayName[date.getDay()]} ${date.getDate()} ${monthName[date.getMonth()]} ${date.getFullYear()}`)
    }

    onDateSelected = (date) => {
        this.setState({
            selectedDate: this.getDateStringFromDateOpj(date._d),
            dayId: Math.floor(date._d.getTime() / (24 * 60 * 60 * 1000))
        })
    }

    chooseColorByVategory = (category) => {
        switch (category) {
            case 'To do': return categoryTodo
            case 'Shopping': return categoryShopping
            case 'Birthday': return categoryBirthday
            case 'Event': return categoryEvent
            case 'Personal': return categoryPersonal
        }
    }

    componentDidMount() {
        this.props.navigation.setParams({ add: this._addTask });
    }

    _addTask = () => {
        this.props.addTask({
            id: this.state.dayId,
            date: this.state.selectedDate,
            task: {
                id: this.state.taskId,
                category: this.props.currentCategory,
                content: this.state.content,
                time: this.state.selectedTime,
                // isDone: false
            }
        }),
            this.props.navigation.navigate('Schedule')
    }

    render() {
        return (
            <View style={styles.container}>
                <CalendarStrip
                    style={styles.calendar}
                    calendarColor={calendarBackground}
                    highlightDateNumberStyle={{ color: calendarHighlight }}
                    highlightDateNameStyle={{ color: calendarHighlight }}
                    onDateSelected={this.onDateSelected}
                />
                <ItemDate date={this.state.selectedDate} />
                <Text style={styles.title}>Content</Text>
                <TextInput
                    style={styles.input}
                    underlineColorAndroid='transparent'
                    onChangeText={(content) => this.setState({ content })}
                />
                <Text style={styles.title}>Time</Text>
                <TouchableOpacity
                    onPress={() => this.setState({ isDateTimePickerVisible: true })}>
                    <Text style={styles.time}>{this.state.selectedTime}</Text>
                </TouchableOpacity>
                <TimePicker
                    mode='time'
                    isVisible={this.state.isDateTimePickerVisible}
                    onConfirm={(time) => {
                        this.setState({
                            isDateTimePickerVisible: false,
                            selectedTime: time.toTimeString().substring(0, 5),
                            taskId: time.getTime()
                        })
                    }}
                    onCancel={() => this.setState({ isDateTimePickerVisible: false })}
                />
                <Text style={styles.title}>Category</Text>
                {/* <PickCategory onPickCategory={(currentCategory, currentCategoryColor) => this.setState({
                    currentCategory,
                    currentCategoryColor
                })} /> */}
                <PickCategory />
                <Text style={[styles.texttask, { color: this.chooseColorByVategory(this.props.currentCategory) }]}>
                    {`This task belong to ${this.props.currentCategory} category`}
                </Text>
            </View>
        );
    }
}

const mapStateToProps = ({ currentCategory }) => ({ currentCategory })

export default connect(mapStateToProps, { addTask })(AddTaskScreen);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: white,
    },
    calendar: {
        paddingTop: 10,
        height: 100
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: gray,
        marginStart: 20,
        marginVertical: 10,
    },
    input: {
        fontSize: 18,
        marginHorizontal: 20,
        marginBottom: 10,
        borderRadius: 10,
        padding: 15,
        // for ios
        shadowOpacity: 0.5,
        shadowRadius: 10,
        shadowColor: gray,
        backgroundColor: white,
        //for android
        elevation: 5,
    },
    time: {
        marginStart: 20,
        // marginVertical: 10,
        color: calendarHighlight,
        fontWeight: 'bold',
        fontSize: 20,
    },
    texttask: {
        fontSize: 18,
        fontWeight: 'bold',
        marginStart: 20,
        marginHorizontal: 20
    }

});