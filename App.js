import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Main from './screens/MainComponent';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { store } from './redux/store';
export default function App() {
  return (
    // wrapping entire main component in provider to enable it to access store
    <Provider store={store}>
      <NavigationContainer>
        <Main />
      </NavigationContainer>
    </Provider>
    
  );
}


