import React, { Component } from 'react';
import {
  Text, ActivityIndicator,
  View, StyleSheet, FlatList,
} from 'react-native';
import CardTouch from './CardTouch';

import axios from 'axios';


class CardList extends Component {
  state = {
    data: [],
    loading: true,
  }

  loadList(category) {
    this.setState({ loading: true })
    axios.get(`https://api.pokemontcg.io/v1/${category}`)
      .then(res =>
        this.setState({
          data: res.data.cards,
          loading: false
        }))
      .catch(err => console.log(err))
  }

  renderItem = (data) => {
    return <CardTouch
      card={data.item}
      navigation={this.props.navigation} />
  }

  componentDidMount() {
    this.loadList('cards')
  }

  render() {
    return (
      <View style={styles.container}>
        {this.state.loading
          ? <ActivityIndicator />
          : <FlatList
            data={this.state.data}
            renderItem={this.renderItem}
            keyExtractor={(item) => {
              return item.id
            }}
            numColumns={2} />}
      </View>
    );
  }
}

export default CardList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    height: 375, width: 250,
    justifyContent: 'flex-end',
    marginTop: '10%',
    marginHorizontal: '10%',

  }
})