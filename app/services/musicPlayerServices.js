import TrackPlayer, {Capability} from 'react-native-track-player';
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
    stoppingAppPausesPlayback: true,
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
