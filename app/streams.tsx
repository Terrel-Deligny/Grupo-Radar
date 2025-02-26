import React, { useState } from 'react'
import { View, ScrollView } from "react-native";
import NavigationBar from '../components/NavBar';
import SocialMedia from '../components/SocialMedia';
import Radio from '../components/RadioSelector';
import TV from '../components/TvSelector';

export default function Streams() {

  const [media, setMedia] = useState(<Radio/>);
  const [backgroundColor, setBackgroundColor] = useState('#2F3228');

  const handleClick = (mode: string) => {

    if (mode === 'radio') {
      setMedia(<Radio/>);
      setBackgroundColor('#2F3228');
    }
    else if (mode === 'tv') {
      setMedia(<TV/>);
      setBackgroundColor('#7D8F40');
    }
}

  return (
    <View style={{ flex: 1, backgroundColor }}>
      <NavigationBar handleClick={handleClick}/>
      <ScrollView>
        {media}
      </ScrollView>
      <SocialMedia />
    </View>
  )
}
