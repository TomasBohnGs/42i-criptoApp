import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';

export default function Add({ navigation }) {
return (
    <TouchableHighlight
        onPress={ () => navigation.navigate( 'Search' )}
    >
        <View style={styles.container}>
            <Text style={styles.add}>+</Text>
        </View>
    </TouchableHighlight>
)};

const styles = StyleSheet.create({
    container: {
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderRadius: 100,
        backgroundColor: 'aqua',
    }
});