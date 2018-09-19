import React, { Component } from 'react';
import {
  Text, ActivityIndicator, TextInput,
  View, StyleSheet, TouchableOpacity
} from 'react-native';
import CurrentDay from './CurrentDay';
import CurrentImage from './CurrentImage';
import CurrentTemp from './CurrentTemp';
import DayList from './DayList';

import axios from 'axios';

class App extends Component {
  state = {
    data: [],
    listdata: [],
    loading: true,
    city: 'Hanoi',
    text: '',
  }

  loadcity(city) {
    axios.get(`http://api.openweathermap.org/data/2.5/forecast/daily?q=${city}&appid=927d09bc49dbee6aac7f5cb1df707542`)
      .then((res) => this.setState({ data: res.data, loading: false }))

      .catch((err) => console.log(err))
  }

  onclick = () => {
    this.setState({ city: this.state.text })
    console.log(this.state.city)
  }

  componentWillMount() {
    this.loadcity(this.state.city)
  }

  render() {
    console.log(this.state.data)
    return (
      <View style={{ backgroundColor: '#373448' }}>
        <View style={styles.container}>
          <TextInput
            style={styles.input}
            onChangeText={(text) => { this.setState({ text }) }}
          />
          <TouchableOpacity
            onPress={this.onclick}>
            <Text style={styles.text}>Search</Text>
          </TouchableOpacity>

        </View>
        {this.state.loading
          ? <ActivityIndicator />
          : <View>
            <CurrentDay day={this.state.data} />
            <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
              <CurrentImage day={this.state.data} />
              <CurrentTemp day={this.state.data} />
            </View>
            <DayList data={this.state.data.list} />
          </View>}
      </View>
    );
  }
}

export default App;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    margin: '5%',
  },
  input: {
    height: 40,
    width: 235,
    borderColor: 'gray',
    borderWidth: 1,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  text: {
    marginLeft: 10,
    fontSize: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 6,
  }
})