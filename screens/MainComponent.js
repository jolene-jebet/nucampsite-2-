import DirectoryScreen from './DirectoryScreen';
import { View } from 'react-native';
import CampsiteInfoScreen from './CampsiteInfoScreen';
import { Platform } from 'react-native';
import Constants from 'expo-constants';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './HomeScreen';
import AboutScreen from './AboutScreen';
import ContactScreen from './ContactScreen';

const Drawer = createDrawerNavigator();

const screenOptions = {
    headerTintColor: '#fff',
    headerStyle: { backgroundColor: '#5637DD' }
}

//navigator for the home screen 
const HomeNavigator = () => {
    const Stack = createStackNavigator();

    return(
        <Stack.Navigator screenOptions={screenOptions}>
            <Stack.Screen
                name='Home'
                component={HomeScreen}
                options={{ title: 'Home' }}
            />
        </Stack.Navigator>
    );
}


//a functional component to return our stack navigator code for directory and campsite info screens
//navigator for the directory screen
const DirectoryNavigator = () => {
    //holds the object from the stacknavigator
    //returns the screen and navigator which are both react components
    const Stack = createStackNavigator();

    return(
        //returning our navigator code
        <Stack.Navigator 
            //default route when our navigation loads
            initialRouteName='Directory'
            //defines the look and feel of the nav header
            screenOptions={screenOptions}
            
        >
            <Stack.Screen
                //name of the screen
                name='Directory'
                //component in charge of displaying the directory screen
                component={DirectoryScreen}
                //title to be displayed in the navigation header 
                options={{title: 'Campsite Directory'}}
            />
            {/* screen for the campsite info */}
            <Stack.Screen
                name = 'CampsiteInfo'
                component={CampsiteInfoScreen}
                //sets the title of the campsite screen to the name of the specific campsite
                options={({ route }) => ({
                    title: route.params.campsite.name
                })}/>

        </Stack.Navigator>
    );
}

const Main = () => {

    return (
        <View 
            style = {{ 
                flex: 1,
                paddingTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight
            }}
         >
          
          <Drawer.Navigator
            initialRouteName = 'HomeNav'
            screenOptions={{ drawerStyle: { 
            backgroundColor: '#CEC8FF' }}}
          >

            <Drawer.Screen
                name='HomeNav'
                component={HomeNavigator}
                options={{ title: 'Home' }}
            />

            <Drawer.Screen
                name='DirectoryNav'
                component={DirectoryNavigator}
                options={{ title: 'Directory' }}
            />

          </Drawer.Navigator>

        </View>
        
    );
}

export default Main;