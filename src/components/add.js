import { IconButton } from 'react-native-paper';

export default function Add({ navigation, trackingList, setTrackingList }) {
return (
    <IconButton 
        onPress={ () => navigation.navigate( 'Search', { trackingList: trackingList, setTrackingList: setTrackingList} )}
        icon="plus"
        mode="contained"
        size= {50}
    />
)};