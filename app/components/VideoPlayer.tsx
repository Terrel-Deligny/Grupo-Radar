import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import VideoPlayer from 'react-native-video-player';
import {tvStream} from '../assets/data/tvStreams';

const VideoPlayerComponent = () => {
  const [selectedStation, setSelectedStation] = React.useState(tvStream[0]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select a Station</Text>
      <View style={styles.stationList}>
        {tvStream.map(station => (
          <TouchableOpacity
            key={station.id}
            style={styles.stationButton}
            onPress={() => setSelectedStation(station)}>
            <Text style={styles.stationText}>{station.name}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.videoContainer}>
        <Text style={styles.videoTitle}>
          Now Playing: {selectedStation.name}
        </Text>
        <VideoPlayer
          source={{uri: selectedStation.videoUrl}}
          videoWidth={300}
          videoHeight={200}
          autoplay={true}
          defaultMuted={false}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  stationList: {
    marginBottom: 20,
  },
  stationButton: {
    padding: 10,
    backgroundColor: '#6200ee',
    borderRadius: 5,
    marginBottom: 10,
    alignItems: 'center',
  },
  stationText: {
    color: '#fff',
    fontSize: 16,
  },
  videoContainer: {
    alignItems: 'center',
  },
  videoTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default VideoPlayerComponent;
