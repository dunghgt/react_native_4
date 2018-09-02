import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import CustomMatch from './components/CustomMatch';

class App extends Component {
  state = {}
  render() {
    return (
      <View style={styles.textCenter}>
        <Text style={styles.textSchedule}>Schedule</Text>
        <Image
          style={{ width: 80, height: 120 }}
          source={{ uri: 'https://png.icons8.com/color/180/world-cup.png' }}
        />
        <Text style={styles.textFIFA}>FIFA WORLDCUP 2018</Text>
        <CustomMatch
          time='Jul 6 2018 - 21:00'
          team1='Uruguay'
          team2='France'
          flag1='http://flags.fmcdn.net/data/flags/w580/uy.png'
          flag2='http://flags.fmcdn.net/data/flags/w580/fr.png' />
        <CustomMatch
          time='Jul 7 2018 - 21:00'
          team1='Brazil'
          team2='Belgium'
          flag1='https://upload.wikimedia.org/wikipedia/en/thumb/0/05/Flag_of_Brazil.svg/1280px-Flag_of_Brazil.svg.png'
          flag2='http://nationalflagstore.com/wp-content/uploads/2014/07/belgium-flag1.jpg' />
        <CustomMatch
          time='Jul 8 2018 - 21:00'
          team1='Russia'
          team2='Croatia'
          flag1='https://images-na.ssl-images-amazon.com/images/I/81NfOcqiXtL._SX355_.jpg'
          flag2='https://i.ytimg.com/vi/Ud_MYN5rNqU/maxresdefault.jpg' />
      </View>
    );
  }
}

export default App;

const styles = StyleSheet.create({
  textCenter: {
    alignItems: 'center',
    flex: 1,
    paddingBottom: 50,
  },
  textSchedule: {
    fontSize: 35,
    fontWeight: '700',
    marginTop: 20,
    marginBottom: 30,
  },
  textFIFA: {
    fontSize: 20,
    marginTop: 10,
    marginBottom: 40,
  },

})