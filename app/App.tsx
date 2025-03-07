/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import CarouselPoster from './components/carouselPoster';

function App() {
  return (
    <GestureHandlerRootView>
      <CarouselPoster />
    </GestureHandlerRootView>
  );
}

export default App;
