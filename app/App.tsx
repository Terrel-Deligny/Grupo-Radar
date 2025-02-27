import React, {useState, useEffect} from 'react';
import {
  ActivityIndicator,
  SafeAreaView,
  StatusBar,
  Text,
  View,
} from 'react-native';

import {setupPlayer, addTrack} from './services/musicPlayerServices';
import MusicPlayer from './screens/MusicPlayer';
import '../global.css';
import TrackPlayer, {Capability} from 'react-native-track-player';

function App(): React.JSX.Element {
  const [isPlayerReady, setIsPlayerReady] = useState(false);

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
  }

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
    <View className="flex-1 bg-green-300 justify-center items-center">
      <Text className="text-lg font-bold">Grupo Radar Radio</Text>
      <View>
        <StatusBar className="flex-2" barStyle={'light-content'} />
        <MusicPlayer />
      </View>
    </View>
  );
}

export default App;
