import { useState } from 'react';
import { Text, View } from 'react-native';
import { ScrollView } from 'react-native';
import { Card } from 'react-native-elements';
import { CAMPSITES } from '../shared/campsites';
import { PROMORIONS } from '../shared/promotions';
import { PARTNERS } from '../shared/partners';

const FeaturedItem = ({ item }) => {
    //this is for conditional rendering
    if(item){
        return(
            <Card containerStyle={{padding: 0}}>
                <Card.Image source={item.image}>
                    <View 
                        style={{
                            justifyContent: 'center',
                            flex: 1
                         }}
                    >
                        <Text
                            style={{
                                color: 'white',
                                textAlign: 'center',
                                fontSize: 20
                            }}
                        >
                            {item.name}
                        </Text>

                    </View>
                </Card.Image>

                <Text style={{ margin: 20}}>
                    {item.description}
                </Text>
            </Card>
        );
    }
    return<View/>
}

const HomeScreen = () => {

    const[ campsites, setCampsited ] = useState(CAMPSITES);
    const [promotions, setPromotions] = useState(PROMOTIONS);
    const [partners, setPartners] = useState(PARTNERS);

    //a constant for the featured campsites object
    const featCampsite = campsites.find((item) => item.featured);
    //constants for holding featured partner and featured promotion
    const featPromotion = promotions.find((item)=> item.featured);
    const featPartner = partners.find((item)=> item.featured);

    return (
        //scrollview will be used to render our featured item cards 
        <ScrollView>

            <FeaturedItem item={featCampsite} />
            <FeaturedItem item={featPromotion} />
            <FeaturedItem item={featPartner} />
            
        </ScrollView>
    );
}

export default HomeScreen;