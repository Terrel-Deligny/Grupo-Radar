import React from 'react';
import {StyleSheet, View} from 'react-native';

import TrackPlayer, {
  Event,
  useTrackPlayerEvents,
} from 'react-native-track-player';
import {useTrackStore} from '../assets/store/store'; // Adjust the import path

import SongInfo from '../components/SongInfo';
import ControlCenter from '../components/ControlCenter';

const MusicPlayer = () => {
  const setTrack = useTrackStore(state => state.setTrack);

  useTrackPlayerEvents([Event.PlaybackActiveTrackChanged], async event => {
    switch (event.type) {
      case Event.PlaybackActiveTrackChanged:
        const playingTrack = await TrackPlayer.getActiveTrack();
        setTrack(playingTrack);
        break;
    }
  });

  return (
    <View style={styles.container}>
      <SongInfo />
      <ControlCenter />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#001d23',
  },
});

export default MusicPlayer;
