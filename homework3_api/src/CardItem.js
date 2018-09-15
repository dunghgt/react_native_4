import React, { Component } from 'react';
import {
  Text, StyleSheet, Dimensions,
  View, Image,
} from 'react-native';

class CardItem extends Component {
  state = {}
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.card}
          source={{ uri: this.props.card.imageUrlHiRes }} />
      </View>
    );
  }
}

export default CardItem;

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width / 2,
    padding: 5,
    borderRadius: 50,
  },
  card: {
    height: 250,
    marginTop: '10%',
  }
})