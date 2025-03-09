import React, {useState, useEffect} from 'react';
import {ActivityIndicator, SafeAreaView, View} from 'react-native';

import {setupPlayer, addTrack} from './services/musicPlayerServices';
import MusicPlayer from './screens/MusicPlayer';
import '../global.css';
import TrackPlayer, {
  Capability,
  AppKilledPlaybackBehavior,
} from 'react-native-track-player';
//import TrackPlayer from 'react-native-track-player';

function App(): React.JSX.Element {
  const [isPlayerReady, setIsPlayerReady] = useState(false);

  async function setup() {
    let isSetup = await setupPlayer();
    console.log(isSetup);
    if (isSetup) {
      await TrackPlayer.updateOptions({
        android: {
          /**  This is the default behavior when stopping the app in the recents menu for android.
           * ContinuePlayback (default)
              This option will continue playing audio in the background when the app is removed from recents. The notification remains. This is the default.

            PausePlayback
              This option will pause playing audio in the background when the app is removed from recents. The notification remains and can be used to resume playback.

            StopPlaybackAndRemoveNotification
              This option will stop playing audio in the background when the app is removed from recents. The notification is removed and can't be used to resume playback. Users would need to open the app again to start playing audio.
           */
          appKilledPlaybackBehavior:
            AppKilledPlaybackBehavior.StopPlaybackAndRemoveNotification,
        },
        capabilities: [
          Capability.Play,
          Capability.Pause,
          Capability.SkipToNext,
          Capability.SkipToPrevious,
        ],

        // Capabilities that will show up when the notification is in the compact form on Android
        compactCapabilities: [Capability.Play, Capability.Pause],

        /*
        notificationCapabilities: [
          Capability.Play,
          Capability.Pause,
          Capability.SkipToNext,
          Capability.SkipToPrevious,
          Capability.Stop,
        ],
        */
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
      <View>
        <MusicPlayer />
      </View>
    </View>
  );
}

export default App;
