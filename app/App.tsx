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
//import TrackPlayer from 'react-native-track-player';

function App(): React.JSX.Element {
  const [isPlayerReady, setIsPlayerReady] = useState(false);

  async function setup() {
    let isSetup = await setupPlayer();
    console.log(isSetup);

    if (isSetup) {
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
      <View>
        <StatusBar className="flex-2" barStyle={'light-content'} />
        <MusicPlayer />
      </View>
    </View>
  );
}

export default App;
