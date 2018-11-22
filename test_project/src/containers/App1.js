import React, { Component } from 'react';
import {
  Text, TextInput, Alert, FlatList,
  View, TouchableOpacity,
} from 'react-native';


class App1 extends Component {
  state = {
    data: []
  }

  generate = () => {
    let number = parseInt(this.state.text, 10)
    let result = [[1]]
    this.setState({ data: result })

    if (number < 1) {
      Alert.alert('You need to input a positive intenger')
    } else {
      for (i = 1; i <= number; i++) {
        let row = [1]
        for (j = 1; j < i; j++) {
          row[j] = result[i - 1][j] + result[i - 1][j - 1]
        }
        row.push(1)
        result.push(row)
      }
    }

  }

  renderItem = ({ item }) => {
    return <Text style={{ flex: 1, alignSelf: 'center', fontSize: 15, margin: 5 }}>{item}</Text>
  }


  render() {
    return (
      <View>
        <View style={{ flexDirection: 'row', margin: 20 }}>
          <TextInput
            style={{ width: 100, borderColor: 'gray', borderWidth: 1 }}
            keyboardType='numeric'
            onChangeText={(text) => this.setState({ text })}
            value={this.state.text}
            returnKeyType='done'
          />
          <TouchableOpacity
            style={{
              width: 80,
              backgroundColor: '#4286f4',
              marginStart: 10,
              borderRadius: 10,
              alignItems: 'center',
              justifyContent: 'center'
            }}
            onPress={() => this.generate()}
          >
            <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>Generate</Text>
          </TouchableOpacity>
        </View>
        <View>
          <FlatList
            data={this.state.data}
            renderItem={this.renderItem}
          />
        </View>
      </View>
    );
  }

}
export default App1; 