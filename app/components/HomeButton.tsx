// HomeButton.tsx
import {useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../components/NavigationFile';
import {StackNavigationProp} from '@react-navigation/stack';
import {Button} from 'react-native';
import React from 'react';

export default function HomeButton() {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  return <Button title="Home" onPress={() => navigation.navigate('Streams')} />;
}
