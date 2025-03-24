import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {ActivityIndicator, SafeAreaView, StyleSheet, View} from 'react-native';
//import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {addTrack} from './services/AudioPlayerServices';
import {SetupService} from './services/SetupService';
import MusicPlayer from './screens/MusicPlayer';
import '../global.css';
import TrackPlayer from 'react-native-track-player';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
//import CarouselPoster from './components/CarouselPoster';
//import CarouselNews from './components/CarouselNews';
//import {WixProvider} from '@wix/sdk-react';
import HomeScreen from './screens/HomeScreen';

//const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      {
        <GestureHandlerRootView className="flex-1">
          <HomeScreen />
          <Inner />
        </GestureHandlerRootView>
      }
    </NavigationContainer>
  );
}

const Inner: React.FC = () => {
  const isPlayerReady = useSetupPlayer();

  /*
  //Incase we use default app behavior on killed, where the app can be launched from the notification.
  useEffect(() => {
    function deepLinkHandler(data: {url: string}) {
      console.log('deepLinkHandler', data.url);
    }

    // This event will be fired when the app is already open and the notification is clicked
    const subscription = Linking.addEventListener('url', deepLinkHandler);

    // When you launch the closed app from the notification or any other link
    Linking.getInitialURL().then(url => console.log('getInitialURL', url));

    return () => {
      subscription.remove();
    };
  }, []);
  */

  if (!isPlayerReady) {
    return (
      <SafeAreaView style={styles.screenContainer}>
        <ActivityIndicator />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.screenContainer}>
      <View>
        <View>
          <MusicPlayer />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: '#86efac',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

function useSetupPlayer() {
  const [playerReady, setPlayerReady] = useState<boolean>(false);

  useEffect(() => {
    let unmounted = false;
    (async () => {
      await SetupService();
      if (unmounted) {
        return;
      }
      setPlayerReady(true);
      const queue = await TrackPlayer.getQueue();
      if (unmounted) {
        return;
      }
      if (queue.length <= 0) {
        await addTrack();
      }
    })();
    return () => {
      unmounted = true;
    };
  }, []);
  return playerReady;
}
