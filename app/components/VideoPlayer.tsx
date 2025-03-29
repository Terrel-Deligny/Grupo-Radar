import React, {PropsWithChildren} from 'react';
import {View, StyleSheet, Text, ActivityIndicator} from 'react-native';
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
  const [isLoading, setIsLoading] = React.useState(true);

  return (
    <View style={styles.container}>
      <View style={styles.videoContainer}>
        {isLoading && (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color="#0000ff" />
          </View>
        )}
        <WebView
          key={selectedStation.id} // Force re-render with new key
          source={{uri: selectedStation.videoUrl}}
          style={[styles.container, isLoading && styles.loading]}
          allowsAirPlayForMediaPlayback={true}
          allowsInlineMediaPlayback={true}
          allowsFullscreenVideo={true}
          allowsPictureInPictureMediaPlayback={true}
          mediaPlaybackRequiresUserAction={true}
          onLoadStart={() => setIsLoading(true)}
          onLoadEnd={() => setIsLoading(false)}
          cacheEnabled={true}
          domStorageEnabled={true}
          javaScriptEnabled={true}
          onError={syntheticEvent => {
            const {nativeEvent} = syntheticEvent;
            console.warn('WebView error: ', nativeEvent);
          }}
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
  loadingContainer: {
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
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
  loading: {
    height: 0,
  },
});

export default VideoPlayer;
