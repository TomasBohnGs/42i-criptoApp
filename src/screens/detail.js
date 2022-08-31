import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { TextInput, Text, Button } from 'react-native-paper'
import Navbar from '../components/navbar.js';
import  axios  from 'axios';


export default function Detail({ navigation, route }) {
  const {trackingList, setTrackingList, cryptoTag} = route.params;
  const cryptoName = cryptoTag.toLowerCase();
  const [amount, setAmount] = useState('')
  const onHandledSave = async () => {
    const info = await axios.get(`https://api.cryptapi.io/${cryptoName}/info/`)
    setTrackingList([
      ...trackingList,
      {id: trackingList.length , tag: cryptoTag, value: parseInt(info.data.prices.USD)* parseInt(amount), currency: 'USD'}
    ])
    navigation.navigate( 'Home' )
  }

  return (
    <View>
      <Navbar navigation={navigation} />
      <View style={{alignItems: 'center', margin: 7, marginTop: 20}}>
        <Text 
          style={{alignText: 'center'}}
          variant="headlineLarge"
          >{route.params.cryptoTag}</Text>
      </View>
      <View style={{margin: 7}}>
        <TextInput 
        mode='outlined'
        label={`Cantidad de ${route.params.cryptoTag}`}
        value={amount}
        onChangeText={text => setAmount(text)}
        style={{margin: 15}}
        />
        <Button
          onPress={onHandledSave}
          mode="contained"
          >
          Guardar
        </Button>
      </View>
    </View>
  );
}