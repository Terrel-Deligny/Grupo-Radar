import 'react-native-gesture-handler';
import '../global.css';
import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import IndexScreen from './screens/Streams';
import { config } from "@gluestack-ui/config";
import {NavigationContainer} from '@react-navigation/native';
import { GluestackUIProvider } from "@gluestack-ui/themed";

const Stack = createStackNavigator();

export default function RootLayout() {
  return (
    <GluestackUIProvider config={config}>
      <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="index" component={IndexScreen} />
          </Stack.Navigator>
      </NavigationContainer>
    </GluestackUIProvider>
  )
}