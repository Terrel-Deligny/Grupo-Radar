/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import CarouselPoster from './components/carouselPoster';
import NewsSection from './components/newsSection';

function App() {
  return (
    <GestureHandlerRootView>
      <CarouselPoster />
      <NewsSection />
    </GestureHandlerRootView>
  );
}

export default App;
