import {StyleSheet, View, Text} from 'react-native'
import { Card, IconButton } from 'react-native-paper';

export default function CriptoCard({ navigation, crypto, cryptoTag, trackingList, setTrackingList }) {

if( crypto ) {
    return (
    <View style={styles.container}>
        <Card>
            <View style={styles.card}>
                <Text style={styles.paragraph}>{crypto.tag}</Text>
                <Text>{`${crypto.currency} ${crypto.value}`}</Text>
                <Card.Actions>
                    <IconButton 
                        onPress={ () => setTrackingList(trackingList.filter( card => card.id !== crypto.id ))}
                        icon="trash-can-outline"
                        mode="contained"
                        size={20}
                    />
                </Card.Actions>
            </View>
        </Card>
    </View>
    )
}

else if( cryptoTag ){
    const handleAdd = () => {
        navigation.navigate( 'Detail', {cryptoTag: cryptoTag, trackingList: trackingList, setTrackingList: setTrackingList})
    }
    return (
    <View style={styles.container}>
        <Card>
            <View style={styles.card}>
                <Text style={styles.paragraph}>{cryptoTag}</Text>
                <Card.Actions>
                    <IconButton 
                        onPress={ () => handleAdd() }
                        icon="plus"
                        mode="contained"
                        size={20}
                    />
                </Card.Actions>
            </View>
        </Card>
    </View>
    )
}

};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 7,
        backgroundColor: '#ecf0f1',
    },
    card: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 10,
    },
    paragraph: {
        margin: 10,
        fontSize: 18,
        fontWeight: 'bold',
    }
});