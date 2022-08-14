import { StyleSheet, Text, View, Button } from 'react-native';
import Navbar from '../components/navbar.js';
import Add from '../components/add.js';

export default function Home({ navigation }) {
  return (
    <View>
      <Navbar navigation={navigation}/>
      <Text>Home</Text>
      <View style={styles.add}>
        <Add navigation={navigation}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  add: {
    position: 'absolute',
    justifyContent: 'flex-end',
    alignSelf: 'flex-end'
  }
});