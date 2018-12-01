import React, { Component } from 'react';
import {
    Text, StyleSheet, TouchableOpacity,
    View,
} from 'react-native';
import RoundCheckbox from 'rn-round-checkbox';
import { categoryShopping, white, gray, categoryTodo, categoryBirthday, categoryEvent, categoryPersonal, calendarHighlight } from '../styles';

import { connect } from 'react-redux';
import { toggleTask, delTask } from '../actions'

class ItemTask extends Component {
    state = {
        taskDone: this.props.task.isDone
    }

    chooseColorByVategory = () => {
        switch (this.props.task.category) {
            case 'To do': return categoryTodo
            case 'Shopping': return categoryShopping
            case 'Birthday': return categoryBirthday
            case 'Event': return categoryEvent
            case 'Personal': return categoryPersonal
        }
    }

    deleteTask = () => {
        this.props.delTask({
            dayId: this.props.dayId,
            taskId: this.props.task.id
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <RoundCheckbox
                    checked={this.state.taskDone}
                    onValueChange={(newValue) => {
                        this.setState({ taskDone: newValue })
                        this.props.toggleTask({
                            dayId: this.props.dayId,
                            taskId: this.props.task.id
                        })
                    }}
                    backgroundColor={calendarHighlight} />
                <Text style={styles.time}>{this.props.task.time}</Text>
                <TouchableOpacity
                    style={[
                        styles.task,
                        {
                            backgroundColor: this.props.task.isDone ? 'gray' : this.chooseColorByVategory()
                        }]}
                    onLongPress={this.deleteTask}
                >
                    <Text style={styles.content}>{this.props.task.content}</Text>
                    <Text style={styles.category}>{this.props.task.category}</Text>
                </TouchableOpacity>

            </View>
        );
    }
}

export default connect(null, { toggleTask, delTask })(ItemTask);

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginVertical: 10,
        marginHorizontal: 20,
        alignItems: 'center',
    },
    time: {
        color: gray,
        marginStart: 20,
        width: 40,
    },
    task: {
        width: 210,
        backgroundColor: categoryShopping,
        borderRadius: 10,
        padding: 20,
        // paddingRight: 100,
        marginHorizontal: 10,
    },
    content: {
        fontSize: 18,
        fontWeight: 'bold',
        color: white,
    },
    category: {
        fontSize: 12,
        color: white,
    }
})