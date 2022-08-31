import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Navbar from '../components/navbar.js';
import Add from '../components/add.js';
import Card from '../components/card.js';

export default function Home({ navigation }) {
  const [trackingList, setTrackingList] = useState([])

  return (
    <View style={{flex: 1}}>
      <Navbar navigation={navigation} onHome={true}/>
        { 
          trackingList.length > 0 ? 
          trackingList.map( crypto => (
            <ScrollView style={{flex: 1}}>
              <Card key={crypto.id} crypto={crypto} trackingList={trackingList} setTrackingList={setTrackingList} />
            </ScrollView>
            )):
            <View style={styles.parContainer}>
              <Text style={styles.paragraph}>
                Add your firt cripto to the tracking list by clicking on the + button below.
              </Text>
            </View>
        }
      <View style={{position:'absolute', bottom:0, alignSelf:'flex-end'}}>
        <Add navigation={navigation} trackingList={trackingList} setTrackingList={setTrackingList} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  parContainer:{
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  paragraph: {
    textAlign: 'center',
    margin: 20,
    fontSize: 20,
    letterSpacing: 1,
  }
});