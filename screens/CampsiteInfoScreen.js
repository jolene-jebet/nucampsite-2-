import { useState } from 'react';
import { FlatList, StyleSheet, Text, View} from 'react-native';
import { COMMENTS } from '../shared/comments';
import RenderCampsite from '../features/campsites/RenderCampsite';

const CampsiteInfoScreen = ({ route }) => {
    const { campsite } = route.params;

    const [comments, setComments] = useState(COMMENTS);

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
        <FlatList
            data = {comments.filter((Comment) => comments.campsiteId === campsite.id)}
            renderItem={renderCommentItem}
            keyExtractor={(item) => item.id.toString()}
            contentContainerStyle = {{marginHorizintal: 20, paddingVertical: 20}}
            ListHeaderComponent = {
                <>
                    <RenderCampsite campsite={campsite} />
                    <Text style={styles.commentsTitleText}>Comments</Text>
                    {comments.length > 0 ? renderComments() : <Text>No Comments</Text>}
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
        padding: 10,
        paddingTop: 30
    },

    commentItem: {
        paddingVertical: 10,
        paddingHorizontal: 10,
        backgroundColor: '#fff'
    }
})

export default CampsiteInfoScreen;