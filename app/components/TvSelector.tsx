import React from 'react';
import {tvStream} from '../assets/data/tvStreams';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import VideoPlayer from './VideoPlayer';

export default function TV() {
  const [selectedStation, setSelectedStation] = React.useState(tvStream[0]);

  const handleClick = (
    stream: React.SetStateAction<{
      id: number;
      name: string;
      image: string;
      videoUrl: string;
    }>,
  ) => {
    setSelectedStation(stream);
  };

  return (
    <View style={styles.container}>
      <VideoPlayer selectedStation={selectedStation} />
      {tvStream.map(stream => (
        <TouchableOpacity
          style={[styles.button]}
          key={stream.id}
          onPress={() => handleClick(stream)}>
          <Image
            source={{uri: stream.image}}
            style={styles.image}
            resizeMode="contain"
          />
          <Text style={styles.text}>{stream.name}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  button: {
    marginTop: '8%',
    marginBottom: '8%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },

  image: {
    width: '50%',
    height: '300%',
  },
  text: {
    color: '#F0F8FF',
    fontSize: 20,
  },
});
