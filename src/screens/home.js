import { Text, View, ScrollView } from 'react-native';
import Navbar from '../components/navbar.js';
import Add from '../components/add.js';
import Card from '../components/card.js';

export default function Home({ navigation }) {
  const demo = [
    {tag: 'BTC', value: '25000', currency: 'USD'},
    {tag: 'BTC', value: '25000', currency: 'USD'},
    {tag: 'BTC', value: '25000', currency: 'USD'},
    {tag: 'BTC', value: '25000', currency: 'USD'},
    {tag: 'BTC', value: '25000', currency: 'USD'},
    {tag: 'BTC', value: '25000', currency: 'USD'},
    {tag: 'BTC', value: '25000', currency: 'USD'},
  ]
  return (
    <View style={{flex: 1}}>
      <Navbar navigation={navigation} onHome={true}/>
      <ScrollView style={{flex: 1}}>
        { demo.map(el => <Card demo={el}/>) }
      </ScrollView>
      <View style={{position:'absolute', bottom:0, alignSelf:'flex-end'}}>
        <Add navigation={navigation}/>
      </View>
    </View>
  );
}