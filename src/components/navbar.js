import { StyleSheet, Text, View, Button } from 'react-native';

export default function Navbar({ navigation }) {
return (
    <View style={styles.container}>
        <Button 
            onPress={ () => navigation.navigate( 'Search' )}
            title="Search"
        />
    </View>
);
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'aqua'
    },
});