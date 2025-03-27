import React from 'react';
import {WixProvider} from '@wix/sdk-react';
import CarouselNews from '../components/CarouselNews';
import CarouselPoster from '../components/CarouselPoster';
import {Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../components/NavigationFile';

export default function HomeScreen() {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  return (
    <WixProvider>
      <Button title="Home" onPress={() => navigation.navigate('Streams')} />;
      <CarouselPoster />
      <CarouselNews />
    </WixProvider>
  );
}
