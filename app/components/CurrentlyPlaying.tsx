import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {useTrackStore} from '../assets/store/store'; // Adjust the import path

export default function CurrentlyPlaying() {
  const track = useTrackStore(state => state.track);
  return (
    <View>
      <Text style={styles.text}>Currently Playing: {track?.artist}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    color: '#ffffff',
  },
});
