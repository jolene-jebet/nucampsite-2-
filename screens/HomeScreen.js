import { Text, View } from 'react-native';
import { ScrollView } from 'react-native';
import { Card } from 'react-native-elements';
import { useSelector } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';

const FeaturedItem = ({ item }) => {
    //this is for conditional rendering
    if(item){
        return(
            <Card containerStyle={{padding: 0}}>
                <Card.Image source={{uri: baseUrl + item.image}}>
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

    const campsites = useSelector((state) => state.campsites);
    const promotions = useSelector((state) => state.promotions);
    const partners = useSelector((state) => state.partners);   

    //a constant for the featured campsites object
    const featCampsite = campsites.campsitesArray.find((item) => item.featured);
    //constants for holding featured partner and featured promotion
    const featPromotion = promotions.promotionsArray.find((item)=> item.featured);
    const featPartner = partners.partnersArray.find((item)=> item.featured);

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