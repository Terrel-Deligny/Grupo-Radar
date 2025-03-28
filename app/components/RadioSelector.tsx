import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {playListData} from '../assets/data/radioStreams';
import TrackPlayer from 'react-native-track-player';

export default function Radio() {
  const {width, height} = Dimensions.get('window');

  const handlePlay = async (index: number) => {
    try {
      await TrackPlayer.skip(index);
      await TrackPlayer.play();
    } catch (error) {
      console.error('Error playing track:', error);
    }
  };

  return (
    <View style={styles.container}>
      {playListData.map((stream, index) => (
        <TouchableOpacity
          style={[styles.button, {width: width * 0.85, height: height * 0.07}]}
          key={stream.id}
          onPress={() => handlePlay(index)}>
          <Image
            source={{uri: stream.image}}
            style={styles.image}
            resizeMode="contain"
          />
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  button: {
    borderRadius: 50,
    marginTop: '3%',
    marginBottom: '4%',
    alignSelf: 'center',
  },

  image: {
    width: '100%',
    height: '100%',
  },
});
