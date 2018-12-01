import React, { Component } from 'react';
import {
    Text, StyleSheet,
    View, SectionList,
} from 'react-native';
import CalendarStrip from 'react-native-calendar-strip';
import { calendarBackground, calendarHighlight, white } from '../styles';

import ItemDate from '../components/ItemDate';
import ItemTask from '../components/ItemTask';

import { connect } from 'react-redux'

import { data } from '../database.json';

const listReference = 'listReference'

class ScheduleScreen extends Component {
    state = {}

    renderItem = ({ item, section }) => <ItemTask task={item} dayId={section.id} />

    onDateSelected = (date) => {
        const dayId = Math.floor(date._d.getTime() / (24 * 60 * 60 * 1000))
        const index = this.props.tasks.map(item => item.id).indexOf(dayId)


        index !== -1 && this.refs.listReference.scrollToLocation({
            sectionIndex: index,
            itemIndex: 0,
            viewOffset: 40
        })
    }

    renderSectionHeader = ({ section: { date } }) => <ItemDate date={date} />

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
                <SectionList
                    renderItem={this.renderItem}
                    renderSectionHeader={this.renderSectionHeader}
                    sections={this.props.tasks}
                    keyExtractor={(item) => item.id}
                    ref={listReference}
                />
            </View>
        );
    }
}

const mapStateToProps = ({ tasks }) => ({ tasks })

export default connect(mapStateToProps)(ScheduleScreen);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: white,
    },
    calendar: {
        paddingTop: 10,
        height: 100
    },
});