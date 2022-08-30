import { IconButton } from 'react-native-paper';

export default function Add({ navigation }) {
return (
    <IconButton 
        onPress={ () => navigation.navigate( 'Search' )}
        icon="plus"
        mode="contained"
        size= {30}
    />
)};