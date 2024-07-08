import DirectoryScreen from './DirectoryScreen';
import { View } from 'react-native';
import CampsiteInfoScreen from './CampsiteInfoScreen';
import { Platform, View } from 'react-native';
import Constants from 'expo-constants';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './HomeScreen';

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

//navigator for the directory screen
const DirectoryNavigator = () => {
    const Stack = createStackNavigator();

    return(
        <Stack.Navigator 
            initialRouteName='Directory'
            screenOptions={screenOptions}
            
        >
            <Stack.Screen
                name='Directory'
                component={DirectoryScreen}
                options={{title: 'Campsite Directory'}}
            />

            <Stack.Screen
                name = 'Campsite Directory'
                component={CampsiteInfoScreen}
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