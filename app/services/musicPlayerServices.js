import TrackPlayer, {
  Capability,
  AppKilledPlaybackBehavior,
} from 'react-native-track-player';
//mport {Event} from 'react-native-track-player';

import {playListData} from '../assets/data/radioStreams';

export async function setupPlayer() {
  let isSetup = false;
  try {
    await TrackPlayer.getActiveTrackIndex();
    isSetup = true;
  } catch (error) {
    await TrackPlayer.setupPlayer();
    isSetup = true;
  } finally {
    return isSetup;
  }
}

export async function addTrack() {
  await TrackPlayer.add(playListData);
}

export async function playbackService() {
  TrackPlayer.addEventListener('remote-play', () => {
    TrackPlayer.pause();
  });
  TrackPlayer.addEventListener('remote-pause', () => {
    TrackPlayer.play();
  });
  TrackPlayer.addEventListener('remote-next', () => {
    TrackPlayer.skipToNext();
  });
  TrackPlayer.addEventListener('remote-previous', () => {
    TrackPlayer.skipToPrevious();
  });
  TrackPlayer.addEventListener('remote-stop', () => {
    TrackPlayer.stop();
  });

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
    //notificationCapabilities: [Capability.Play, Capability.Pause],
  });
}
