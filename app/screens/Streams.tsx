import React, {useState} from 'react';
import {View, ScrollView} from 'react-native';
import Radio from '../components/RadioSelector';
import TV from '../components/TvSelector';
import SocialMedia from '../components/SocialMedia';
import NavigationBar from '../components/NavBar';

export default function Streams() {
  const [media, setMedia] = useState(<Radio />);

  const handleClick = (mode: string) => {
    if (mode === 'radio') {
      setMedia(<Radio />);
    } else if (mode === 'tv') {
      setMedia(<TV />);
    }
  };

  return (
    <View style={{flex: 1, backgroundColor: '#2F3228'}}>
      <NavigationBar handleClick={handleClick} />
      <ScrollView>{media}</ScrollView>
      <SocialMedia />
    </View>
  );
}
