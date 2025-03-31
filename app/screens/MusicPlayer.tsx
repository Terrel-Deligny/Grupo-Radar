import React from 'react';
import {ImageBackground, StyleSheet, View} from 'react-native';

import TrackPlayer, {
  Event,
  useTrackPlayerEvents,
} from 'react-native-track-player';
import {useTrackStore} from '../assets/store/store'; // Adjust the import path

import SongInfo from '../components/SongInfo';
import ControlCenter from '../components/ControlCenter';

const MusicPlayer = () => {
  const track = useTrackStore(state => state.track);
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
      <ImageBackground
        source={{uri: track?.backgroundArt}}
        style={styles.container}
        resizeMode="cover">
        <SongInfo />
        <ControlCenter />
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default MusicPlayer;
