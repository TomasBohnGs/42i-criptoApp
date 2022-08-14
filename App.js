import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './src/screens/home.js';
import Detail from './src/screens/detail.js';
import Search from './src/screens/search.js';

export default function App() {
  const demo = [
    {tag: 'BTC', value: '25000', currency: 'USD'},
    {tag: 'BTC', value: '25000', currency: 'USD'},
    {tag: 'BTC', value: '25000', currency: 'USD'},
    {tag: 'BTC', value: '25000', currency: 'USD'},
    {tag: 'BTC', value: '25000', currency: 'USD'},
    {tag: 'BTC', value: '25000', currency: 'USD'},
    {tag: 'BTC', value: '25000', currency: 'USD'},
  ]


const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Search" component={Search} />
        <Stack.Screen name="Detail" component={Detail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}