import React, { Component } from 'react';
import {
    Text,
    View,
    FlatList,
} from 'react-native';
import DayItems from './DayItems';

class DayList extends Component {
    state = {
        firstItem: [],
    }

    renderItem = (data) => {
        return <DayItems day={data.item} />
    }

    componentWillMount() {
        this.setState({ firstItem: this.props.data.splice(0, 1) })
    }

    render() {
        return (
            <View style={{ marginTop: "10%" }}>
                <FlatList
                    data={this.props.data}
                    renderItem={this.renderItem}
                    keyExtractor={(item) => {
                        return item.dt.toString()
                    }}
                />
            </View>

        );
    }
}

export default DayList;