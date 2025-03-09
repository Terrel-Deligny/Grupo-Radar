import React from 'react';
import {ActivityIndicator, Pressable, StyleSheet, View} from 'react-native';
import TrackPlayer, {useIsPlaying} from 'react-native-track-player';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';

export const PlayPauseButton: React.FC = () => {
  const {playing, bufferingDuringPlay} = useIsPlaying();

  return (
    <View style={styles.container}>
      {bufferingDuringPlay ? (
        <ActivityIndicator />
      ) : (
        <Pressable onPress={playing ? TrackPlayer.pause : TrackPlayer.play}>
          <FontAwesome6
            name={playing ? 'pause' : 'play'}
            size={48}
            color={'white'}
          />
        </Pressable>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 50,
    width: 120,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
