import { ScrollView } from "react-native";
import { Card } from "react-native-elements";
import { Text } from "react-native";

const ContactScreen = () => {
    return(
        <ScrollView>
            <Card wrapperStyle={{margin: 20}}>
                {/* component works same as text tag where you can put plain text */}
                <Card.Title>Contact Information</Card.Title>
                <Card.Divider/>
                <Text >1 Nucamp Way</Text>
                <Text > Seattle, WA 98001</Text>
                <Text style={{marginBottom: 10}}> U.S.A.</Text>
                <Text > Phone: 1-206-555-1234</Text>
                <Text > Email: 1bC9T@example.com</Text>

            </Card>
        </ScrollView>
    );
}

export default ContactScreen;