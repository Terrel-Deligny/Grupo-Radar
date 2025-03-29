import React, {PropsWithChildren} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {WebView} from 'react-native-webview';

interface selectedStation {
  id: number;
  name: string;
  image: string;
  videoUrl: string;
}

type selectedStationProps = PropsWithChildren<{
  selectedStation: selectedStation;
}>;

const VideoPlayer = ({selectedStation}: selectedStationProps) => {
  return (
    <View style={styles.container}>
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
    //padding: 20,
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
    height: 220,
    width: '100%',
  },
  videoTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default VideoPlayer;
