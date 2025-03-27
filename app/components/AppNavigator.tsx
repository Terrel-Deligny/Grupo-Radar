import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import React from 'react';
import Streams from '../screens/Streams';
//import MusicPlayer from '../screens/MusicPlayer';
import {RootStackParamList} from './NavigationFile';

const Stack = createStackNavigator<RootStackParamList>();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Radio" component={Streams} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
