import React, { useState, useEffect } from "react"
import { View, ScrollView,  ActivityIndicator, SafeAreaView, } from "react-native";
import Radio from '../components/RadioSelector';
import TV from '../components/TvSelector';
import SocialMedia from "../components/SocialMedia";
import NavigationBar from "../components/NavBar";
import { setupPlayer, addTrack } from '../services/musicPlayerServices';
import TrackPlayer, { Capability } from 'react-native-track-player';

export default function Streams() {

  const [media, setMedia] = useState(<Radio/>);
  const [isPlayerReady, setIsPlayerReady] = useState(false);

  const handleClick = (mode: string) => {
    if (mode === 'radio') {
      setMedia(<Radio/>);
    }
    else if (mode === 'tv') {
      setMedia(<TV/>);
    }
  }

  async function setup() {
    let isSetup = await setupPlayer();
    console.log(isSetup);

    if (isSetup) {
      await TrackPlayer.updateOptions({
        capabilities: [
          Capability.Play,
          Capability.Pause,
          Capability.SkipToNext,
          Capability.SkipToPrevious,
        ],
        // Capabilities that will show up when the notification is in the compact form on Android
        compactCapabilities: [Capability.Play, Capability.Pause],
        //notificationCapabilities: [Capability.Play, Capability.Pause],
      });
      await addTrack();
    }

    setIsPlayerReady(isSetup);
  };

  useEffect(() => {
    setup();
  }, []);

  if (!isPlayerReady) {
    return (
      <SafeAreaView>
        <ActivityIndicator />
      </SafeAreaView>
    );
  }

  return (
    <View style={{ flex: 1, backgroundColor: '#2F3228' }}>
      <NavigationBar handleClick={handleClick} />
      <ScrollView>{ media }</ScrollView>
      <SocialMedia />
    </View>
  );
}