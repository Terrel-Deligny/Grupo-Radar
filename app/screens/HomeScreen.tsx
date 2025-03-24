import React from 'react';

import {WixProvider} from '@wix/sdk-react';
import CarouselNews from '../components/CarouselNews';
import CarouselPoster from '../components/CarouselPoster';

export default function HomeScreen() {
  return (
    <WixProvider>
      <CarouselPoster />
      <CarouselNews />
    </WixProvider>
  );
}
