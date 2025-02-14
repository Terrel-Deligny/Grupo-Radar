import React, { useState } from 'react'
import { View, ScrollView } from "react-native";
import NavigationBar from '../components/NavBar';
import SocialMedia from '../components/SocialMedia';
import Radio from '../components/RadioSelector';
import TV from '../components/TvSelector';

export default function Streams() {

  const [media, setMedia] = useState(<Radio/>);

  const handleClick = (mode: string) => {

    if (mode === 'radio') {
      setMedia(<Radio/>);
    }
    else if (mode === 'tv') {
      setMedia(<TV/>);
    }
}

  return (
    <View style={{ flex: 1 }}>
      <NavigationBar handleClick={handleClick}/>
      <ScrollView>
        {media}
      </ScrollView>
      <SocialMedia />
    </View>
  )
}
