import React from 'react';
import {View, StyleSheet, Pressable} from 'react-native';
import TrackPlayer, {State, usePlaybackState} from 'react-native-track-player';
import Icon from 'react-native-vector-icons/MaterialIcons';

const ControlCenter = () => {
  //const playBackState = TrackPlayer.;
  const playbackState = usePlaybackState().state;
  playbackState === State.Ready;
  //Next Button
  const skipToNext = async () => {
    await TrackPlayer.skipToNext();
  };
  //Previous Button
  const skipToPrevious = async () => {
    await TrackPlayer.skipToPrevious();
  };

  //Toggle Playback
  const togglePlayback = async (playback: State) => {
    const currentTrack = await TrackPlayer.getActiveTrack();

    if (currentTrack !== null) {
      if (playback === State.Paused || playback === State.Ready) {
        await TrackPlayer.play();
        console.log('The player is playing');
      } else {
        await TrackPlayer.pause();
        console.log('The player is paused');
      }
    }
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={skipToPrevious}>
        <Icon style={styles.icon} name="skip-previous" size={40} />
      </Pressable>
      <Pressable onPress={() => togglePlayback(playbackState!)}>
        <Icon
          style={styles.playButton}
          name={playbackState === State.Playing ? 'pause' : 'play-arrow'}
          size={75}
        />
      </Pressable>
      <Pressable onPress={skipToNext}>
        <Icon style={styles.icon} name="skip-next" size={40} />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 56,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    color: '#FFFFFF',
  },
  playButton: {
    color: '#FFFFFF',
    marginHorizontal: 24,
  },
});

export default ControlCenter;
