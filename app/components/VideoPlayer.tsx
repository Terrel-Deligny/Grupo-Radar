import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {tvStream} from '../assets/data/tvStreams';
import {WebView} from 'react-native-webview';

const VideoPlayer = () => {
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
        <WebView
          source={{uri: selectedStation.videoUrl}}
          style={styles.container}
          mediaPlaybackRequiresUserAction={true}
          //startInLoadingState={true}
          //renderLoading={() => <ActivityIndicator />}
          //allowsFullscreenVideo={true}
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
    marginTop: 50,
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
    //alignItems: 'center',
    height: 250,
    width: '100%',
  },
  videoTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default VideoPlayer;
