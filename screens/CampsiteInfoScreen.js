import { useState } from 'react';
import { FlatList, StyleSheet, Text, View} from 'react-native';
import { COMMENTS } from '../shared/comments';
import RenderCampsite from '../features/campsites/RenderCampsite';

const CampsiteInfoScreen = ({ route }) => {
    
    const { campsite } = route.params;

    const [comments, setComments] = useState(COMMENTS);
    const [ favorite, setFavorite ] = useState(false);

    //renders the comments 
    const renderCommentItem = ({ item }) => {
        return(
            <View style= {styles.commentItem}>
                <Text style={{fontSize: 14}}>{item.text}</Text>
                <Text style={{fontSize: 12}}>{item.rating} Stars </Text>
                <Text style={{fontSize: 12}}>{`-- ${item.author}, ${item.date}`} Stars </Text>
            </View>
        );
    }

    return (
        //flatlist has to be the top component so as to calculate scroll height accurately
        <FlatList
        // getting specific comments of campsite required
            data = {comments.filter((comment) => comment.campsiteId === campsite.id)}
            renderItem={renderCommentItem}
            //all comments have a unique id
            keyExtractor={(item) => item.id.toString()}
            //styling the container that will contain the comments
            contentContainerStyle = {{marginHorizontal: 20, paddingVertical: 20}}
            //
            ListHeaderComponent = {
                <>
                {/* rendering the campsite selected */}
                    <RenderCampsite 
                        campsite={campsite}
                        isFavorite={favorite}
                        markFavorite = {() => setFavorite(true)}
                    />
                    {/* rendering the title of the comments */}
                    <Text style={styles.commentsTitle}>Comments</Text>
                </>
            }
        />
    );
    
}

const styles = StyleSheet.create({
    commentsTitle:{
        textAlign: 'center',
        backgroundColor: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        color: '#43484D',
        padding: 10,
        paddingTop: 30
    },

    commentItem: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: '#fff'
    }
})

export default CampsiteInfoScreen;