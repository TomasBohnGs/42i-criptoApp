import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { TextInput } from 'react-native-paper';
import Navbar from '../components/navbar.js';
import Card from '../components/card.js';

export default function Search({ navigation }) {
  const demoSearch = [
    'BTC',
    'LTC',
    'BTH',
    'ETH',
    'DAI',
    'USDT',
    'CCAR',
  ]
  const [text, setText] = React.useState("")

  return (
    <View style={{flex: 1}}>
      <Navbar navigation={navigation} />
      <TextInput 
        mode='outlined'
        label="Cripto Tag"
        value={text}
        onChangeText={text => setText(text)}
        style={{margin: 15}}
        left={<TextInput.Icon icon="search-web" />}
      />
      <ScrollView>
      {
        demoSearch.map( el => <Card demoSearch={el} />)
      }
      </ScrollView>
    </View>
  );
}