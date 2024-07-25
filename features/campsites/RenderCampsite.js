import { Text, View, StyleSheet } from 'react-native';
import { Card, Icon } from 'react-native-elements';
import { baseUrl } from '../../shared/baseUrl';

const RenderCampsite = (props) => {
    const { campsite } = props;
    //conditional rendering
    //if statement to check whether the campsite value is truthy
    if(campsite){
        //what to be rendered if its truthy
        return(
            // card containing more details about the campsites selected
            <Card containerStyle={styles.cardContainer}>
                <Card.Image source={{ uri: baseUrl + campsite.image }}>
                    <View style={{ justifyContent: 'center', flex: 1}}>
                        <Text 
                            style={{
                                color: 'white',
                                textAlign: 'center', 
                                fontSize: 20
                            }}
                        >
                            {campsite.name}
                        </Text>

                    </View>
                </Card.Image>

                <Text style={{ margin: 20 }}>{campsite.description}</Text>

                <Icon
                    name = { props.isFavorite ? 'heart' : 'heart-o'}
                    type='font-awesome'
                    color='#f50'
                    // a boolean prop and this gives the shadow effect
                    raised
                    //also boolean prop reverses the color scheme ... if its white in red out it will be vice versa
                    reverse

                    onPress = {() => 
                        //checks if its already placed as favorite
                        props.isFavorite
                        //if true
                            ? console.log('Already set as a favorite')
                            //if false
                            : props.markFavorite()
                    }
                />
            </Card>
        );
        //if falsy it returns..
        return <View />;
    }
}

const styles = StyleSheet.create({
    cardContainer: {
        padding: 0,
        margin: 0,
        marginBottom: 20
    }
})

export default RenderCampsite;