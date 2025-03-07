/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {Text, View} from 'react-native';
import '../global.css';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import CarouselPoster from './components/carouselPoster';

function App() {
  return (
    <GestureHandlerRootView>
      <View className="flex-1 bg-green-300 justify-center items-center">
        <Text className="text-lg font-bold">Grupo Radar Radio</Text>
      </View>
      <CarouselPoster />
    </GestureHandlerRootView>
  );
}

export default App;
