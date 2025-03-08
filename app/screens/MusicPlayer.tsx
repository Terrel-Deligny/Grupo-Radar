import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';

import TrackPlayer, {
  Event,
  Track,
  useTrackPlayerEvents,
} from 'react-native-track-player';

import SongInfo from '../components/SongInfo';
import ControlCenter from '../components/ControlCenter';

const MusicPlayer = () => {
  const [track, setTrack] = useState<Track | null>();

  useTrackPlayerEvents([Event.PlaybackActiveTrackChanged], async event => {
    switch (event.type) {
      case Event.PlaybackActiveTrackChanged:
        //const playingTrack = await TrackPlayer.getTrack(event.nextTrack);
        const playingTrack = await TrackPlayer.getActiveTrack();
        console.log(playingTrack);
        setTrack(playingTrack);
        break;
    }
  });

  return (
    <View style={styles.container}>
      <SongInfo track={track} />
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
