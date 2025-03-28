import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {ActivityIndicator, SafeAreaView, StyleSheet, View} from 'react-native';
//import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {addTrack} from './services/AudioPlayerServices';
import {SetupService} from './services/SetupService';
import MusicPlayer from './screens/MusicPlayer';
import '../global.css';
import TrackPlayer from 'react-native-track-player';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
//import CarouselPoster from './components/CarouselPoster';
//import CarouselNews from './components/CarouselNews';
//import {WixProvider} from '@wix/sdk-react';
import HomeScreen from './screens/HomeScreen';

//const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      {
        <GestureHandlerRootView className="flex-1">
          <HomeScreen />
          <Inner />
        </GestureHandlerRootView>
      }
    </NavigationContainer>
  );
}
