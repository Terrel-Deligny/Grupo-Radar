import React, {useState} from 'react';
import {View, ScrollView} from 'react-native';
import Radio from '../components/RadioSelector';
import TV from '../components/TvSelector';
import SocialMedia from '../components/SocialMedia';
import NavigationBar from '../components/NavBar';
import VideoPlayer from '../components/VideoPlayer';

export default function Streams() {
  const [media, setMedia] = useState(<Radio />);

  const handleClick = (mode: string) => {
    if (mode === 'radio') {
      setMedia(<Radio />);
    } else if (mode === 'tv') {
      setMedia(<TV />);
    }
  };

  if (media.type === TV) {
    return (
      <View style={{flex: 1, backgroundColor: '#2F3228'}}>
        <VideoPlayer />
        <NavigationBar handleClick={handleClick} />
        <ScrollView>{media}</ScrollView>
        <SocialMedia />
      </View>
    );
  }

  return (
    <View style={{flex: 1, backgroundColor: '#2F3228'}}>
      <NavigationBar handleClick={handleClick} />
      <ScrollView>{media}</ScrollView>
      <SocialMedia />
    </View>
  );
}
