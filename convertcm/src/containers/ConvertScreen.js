import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';
import Input from '../components/Input';
import Type from '../components/Type';

class ConvertScreen extends Component {
  state = {}
  render() {
    return (
      <View>
        <View style={styles.container}>
          <Input />
          <Input />
        </View>
        <View style={styles.container}>
          <Type check='1' />
          <Type check='2' />
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row'
  }
})
export default ConvertScreen;