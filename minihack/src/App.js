import React, { Component } from 'react';
import {
  Text,
  View,
} from 'react-native';
import CurrentDay from './CurrentDay';
import CurrentImage from './CurrentImage';
import Temprature from './Temprature';
import DayList from './DayList';
import Search from './Search';

import axios from 'axios';

class App extends Component {
  state = {
    data: [],
  }

  componentDidMount() {
    axios.get('http://api.openweathermap.org/data/2.5/forecast/daily?q=hanoi&appid=927d09bc49dbee6aac7f5cb1df707542')
      .then((res) => this.setState({ data: res.data.list }))
      //.then((res) => console.log(res.data.list))
      .catch((err) => console.log(err))

    // this.setState({ data: this.state.data.splice(0, 1) })
  }

  render() {
    return (
      <View style={{ backgroundColor: 'black' }}>
        <Search />
        <CurrentDay day={this.state.data[1]} />
        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          <CurrentImage />
          <Temprature />
        </View>
        <DayList />
      </View>
    );
  }
}

export default App; <View>
</View>