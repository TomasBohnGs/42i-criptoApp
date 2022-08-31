import React, { useState } from 'react';
import { Text, View, ScrollView } from 'react-native';
import Navbar from '../components/navbar.js';
import Add from '../components/add.js';
import Card from '../components/card.js';

export default function Home({ navigation }) {
  const [trackingList, setTrackingList] = useState([])
  return (
    <View style={{flex: 1}}>
      <Navbar navigation={navigation} onHome={true}/>
      <ScrollView style={{flex: 1}}>
        { 
          trackingList.length > 0 && 
          trackingList.map( crypto => <Card key={crypto.id} crypto={crypto} trackingList={trackingList} setTrackingList={setTrackingList} />) 
        }
      </ScrollView>
      <View style={{position:'absolute', bottom:0, alignSelf:'flex-end'}}>
        <Add navigation={navigation} trackingList={trackingList} setTrackingList={setTrackingList} />
      </View>
    </View>
  );
}