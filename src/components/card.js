import {StyleSheet, View, Text} from 'react-native'
import { Card, IconButton } from 'react-native-paper';

export default function CriptoCard({ demo, demoSearch }) {

if(demo ) {
    return (
    <View style={styles.container}>
        <Card>
            <View style={styles.card}>
                <Text style={styles.paragraph}>{demo.tag}</Text>
                <Text>{`${demo.currency} ${demo.value}`}</Text>
                <Card.Actions>
                    <IconButton 
                        onPress={ () => console.log('Eliminado')}
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

else if( demoSearch ){
    return (
    <View style={styles.container}>
        <Card>
            <View style={styles.card}>
                <Text style={styles.paragraph}>{demoSearch}</Text>
                <Card.Actions>
                    <IconButton 
                        onPress={ () => console.log('Eliminado')}
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