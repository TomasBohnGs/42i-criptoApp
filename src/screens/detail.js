import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { TextInput, HelperText, Text, Button } from 'react-native-paper'
import Navbar from '../components/navbar.js';
import Select from '../components/select.js';
import axios from 'axios';


export default function Detail({ navigation, route }) {
  const {trackingList, setTrackingList, cryptoTag} = route.params;
  const cryptoName = cryptoTag.toLowerCase();
  const [amount, setAmount] = useState('')
  const [selection, setSelection] = useState({ currency: '', error: ''})
  const [disable, setDisable] = useState(true)

  const handleSelect = (prop) => {
    setSelection({...selection, currency: prop.value, error: prop.error})
  }
  
  const handleChange = (event) =>{
    setAmount(event)
  }

  useEffect(() => {
    if(selection.currency !== '' && selection.error === '') setDisable(false)
    if(!isNaN(amount) && amount.trim().length > 0 && parseFloat(amount) >= 1) setDisable(false)
    else setDisable(true)
  }, [selection, amount])



  const onHandledSave = async () => {
    const info = await axios.get(`https://api.cryptapi.io/${cryptoName}/info/`)
    setTrackingList([
      ...trackingList,
      {id: trackingList.length+1 , tag: cryptoTag, value: parseInt(info.data.prices[selection.currency])* parseInt(amount), currency: selection.currency}
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
        <View style={{margin: 15}}>
          <Select handleSelect={handleSelect} />
          <TextInput 
          mode='outlined'
          label={`Cantidad de ${route.params.cryptoTag}`}
          value={amount}
          onChangeText={handleChange}
          />
          <HelperText type="error" padding={'none'} visible={disable}>
            Introcuzca un valor numerico valido
          </HelperText>
        </View>
        <Button
          disabled={disable}
          onPress={onHandledSave}
          mode="contained"
        >
          Guardar
        </Button>
      </View>
    </View>
  );
}