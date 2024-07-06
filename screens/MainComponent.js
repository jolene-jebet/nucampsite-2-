import { useState } from 'react';
import { CAMPSITES } from '../shared/campsites';
import DirectoryScreen from './DirectoryScreen';
import { View } from 'react-native';
import CampsiteInfoScreen from './CampsiteInfoScreen';

const Main = () => {
    //creating a state variable using destricturing syntax
    const[ campsites, setCampsites ] = useState(CAMPSITES);
    //empty parenthesis initializes the variable to undefined
    const [ selectedCampsiteId, setSelectedCampsiteId ] = useState();

    return (
        <View style = {{ flex: 1 }}>
            <DirectoryScreen 
                campsites = {campsites}
                onPress = {campsiteId => setSelectedCampsiteId(campsiteId)} />
            <CampsiteInfoScreen 
            // checks to ensure rendering of the campsite that is selected using id
                campsite = {
                    campsites.filter(campsite => campsite.id === selectedCampsiteId)
                    //since filter returns an new array containing the item selected, we put the zero thing so that it displays the fist item in the array
                    [0]
                }    
            />
        </View>
        
    );
}

export default Main;