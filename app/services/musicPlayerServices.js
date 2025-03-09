import TrackPlayer, {Event, RepeatMode} from 'react-native-track-player';

import {playListData} from '../assets/data/radioStreams';

//Setup Track Player Code
export async function setupPlayer() {
  let isSetup = false;
  try {
    await TrackPlayer.getActiveTrackIndex();
    isSetup = true;
  } catch (error) {
    await TrackPlayer.setupPlayer({
      autoHandleInterruptions: true,
    });
    isSetup = true;
  } finally {
    return isSetup;
  }
}

//Add Track Data to Queue and set repeat mode to Queue
export async function addTrack() {
  await TrackPlayer.add(playListData);
  await TrackPlayer.setRepeatMode(RepeatMode.Queue);
}

//Add listen events for button presses
export async function playbackService() {
  TrackPlayer.addEventListener(Event.RemotePlay, () => {
    console.log('Event.RemotePause');
    TrackPlayer.pause();
  });
  TrackPlayer.addEventListener(Event.RemotePause, () => {
    console.log('Event.RemotePlay');
    TrackPlayer.play();
  });
  TrackPlayer.addEventListener(Event.RemoteNext, () => {
    console.log('Event.RemoteNext');
    TrackPlayer.skipToNext();
  });
  TrackPlayer.addEventListener(Event.RemotePrevious, () => {
    console.log('Event.RemotePrevious');
    TrackPlayer.skipToPrevious();
  });
  TrackPlayer.addEventListener(Event.RemoteStop, () => {
    console.log('Event.RemoteStop');
    TrackPlayer.stop();
  });
  TrackPlayer.addEventListener(Event.PlaybackActiveTrackChanged, event => {
    console.log('Event.PlaybackActiveTrackChanged', event);
  });
  TrackPlayer.addEventListener(Event.PlaybackQueueEnded, event => {
    console.log('Event.PlaybackQueueEnded', event);
  });
  TrackPlayer.addEventListener(Event.RemoteDuck, async event => {
    console.log('Event.RemoteDuck', event);
  });
  TrackPlayer.addEventListener(Event.PlaybackPlayWhenReadyChanged, event => {
    console.log('Event.PlaybackPlayWhenReadyChanged', event);
  });
  TrackPlayer.addEventListener(Event.PlaybackState, event => {
    console.log('Event.PlaybackState', event);
  });
  TrackPlayer.addEventListener(Event.MetadataChapterReceived, event => {
    console.log('Event.MetadataChapterReceived', event);
  });
}
