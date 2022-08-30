import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { TextInput, Text, Button } from 'react-native-paper'
import Navbar from '../components/navbar.js';


export default function Detail({ navigation, route }) {
  console.log( route );
  const [amount, setAmount] = useState('')
  const onHandledSave = () => {
    console.log(amount)
  }
  return (
    <View>
      <Navbar navigation={navigation} />
      <View style={{alignItems: 'center', margin: 7, marginTop: 20}}>
        <Text 
          style={{alignText: 'center'}}
          variant="headlineLarge"
          >{route.params.demoSearch}</Text>
      </View>
      <View style={{margin: 7}}>
        <TextInput 
        mode='outlined'
        label={`Cantidad de ${route.params.demoSearch}`}
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