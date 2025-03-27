import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import '../global.css';

import Streams from './screens/Streams';
import HomeScreen from './screens/HomeScreen';
import {RootStackParamList} from './components/NavigationFile';
import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
          name="Home"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Streams" component={Streams} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
