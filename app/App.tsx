import React, {useState, useEffect} from 'react';
import {ActivityIndicator, SafeAreaView, StyleSheet, View} from 'react-native';

import {addTrack} from './services/audioPlayerServices';
import {SetupService} from './services/SetupService';
import MusicPlayer from './screens/MusicPlayer';
import '../global.css';
import TrackPlayer from 'react-native-track-player';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

export default function App() {
  return (
    <GestureHandlerRootView className="flex-1">
      <Inner />
    </GestureHandlerRootView>
  );
}

const Inner: React.FC = () => {
  const isPlayerReady = useSetupPlayer();

  if (!isPlayerReady) {
    return (
      <SafeAreaView style={styles.screenContainer}>
        <ActivityIndicator />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.screenContainer}>
      <View>
        <View>
          <MusicPlayer />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: '#86efac',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

function useSetupPlayer() {
  const [playerReady, setPlayerReady] = useState<boolean>(false);

  useEffect(() => {
    let unmounted = false;
    (async () => {
      await SetupService();
      if (unmounted) {
        return;
      }
      setPlayerReady(true);
      const queue = await TrackPlayer.getQueue();
      if (unmounted) {
        return;
      }
      if (queue.length <= 0) {
        await addTrack();
      }
    })();
    return () => {
      unmounted = true;
    };
  }, []);
  return playerReady;
}
