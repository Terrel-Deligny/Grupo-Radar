import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

export default function CurrentlyPlaying() {
  return (
    <View>
      <Text style={styles.text}>Currently Playing: </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    color: '#ffffff',
  },
});
