import React from 'react';
import {View, StyleSheet, Pressable} from 'react-native';
import TrackPlayer, {usePlaybackState} from 'react-native-track-player';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {PlayPauseButton} from './PlayPauseButton';
import {PlaybackError} from './PlaybackError';

//Next Button
const skipToNext = async () => {
  await TrackPlayer.skipToNext();
};
//Previous Button
const skipToPrevious = async () => {
  await TrackPlayer.skipToPrevious();
};

const ControlCenter = () => {
  const playbackState = usePlaybackState();

  return (
    <View style={styles.container}>
      <View style={styles.controls}>
        <Pressable onPress={skipToPrevious}>
          <Icon style={styles.icon} name="skip-previous" />
        </Pressable>
        <PlayPauseButton />
        <Pressable onPress={skipToNext}>
          <Icon style={styles.icon} name="skip-next" />
        </Pressable>
      </View>
      <PlaybackError
        error={
          'error' in playbackState ? playbackState.error.message : undefined
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  controls: {
    marginBottom: 56,
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    color: '#FFFFFF',
    fontSize: 40,
  },
});

export default ControlCenter;
