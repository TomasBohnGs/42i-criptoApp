import React, { useState, useEffect } from 'react';
import { View, ScrollView } from 'react-native';
import { TextInput } from 'react-native-paper';
import Navbar from '../components/navbar.js';
import Card from '../components/card.js';
import { Crypto } from '../resources/crypto.js';


export default function Search({ navigation, route }) {
  const { trackingList, setTrackingList } = route.params;
  const [text, setText] = React.useState("")

  const [data, setData] = useState([...Crypto])

  useEffect(() => {
    setData(Crypto.filter( crypto => crypto.toLowerCase().includes(text.toLocaleLowerCase())))
  }, [text])

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
        data.map( (crypto, idx) => <Card navigation={navigation} key={idx} value={crypto} cryptoTag={crypto} trackingList={trackingList} setTrackingList={setTrackingList} />)
      }
      </ScrollView>
    </View>
  );
}