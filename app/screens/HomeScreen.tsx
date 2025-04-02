import React, {useEffect, useState} from 'react';
import {WixProvider} from '@wix/sdk-react';
import CarouselNews from '../components/CarouselNews';
import CarouselPoster from '../components/CarouselPoster';
import {
  ActivityIndicator,
  Pressable,
  SafeAreaView,
  StyleSheet,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../@types/navigationfile';
import TrackPlayer from 'react-native-track-player';
import {addTrack} from '../services/AudioPlayerServices';
import {SetupService} from '../services/SetupService';
import MusicPlayer from './MusicPlayer';
import {useTrackStore} from '../assets/store/store'; // Adjust the import path
import LinearGradient from 'react-native-linear-gradient';
import {Image} from 'react-native';

export default function HomeScreen() {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const track = useTrackStore(state => state.track);
  const [currentBackground, setCurrentBackground] = useState<string[]>([
    '#091679',
    '#00d4ff',
  ]); // Default color

  // Effect to handle background changes when track changes
  useEffect(() => {
    switch (track?.id) {
      case 1: // Radio Lobo Bajío 88.1 FM & 920 AM (Celaya)
        setCurrentBackground(['#9BB961', '#D58523']);
        break;
      case 2: // Radio Lobo 88.3 FM (San José Iturbide)
        setCurrentBackground(['#EAD947', '#9BB961']);
        break;
      case 3: // Radar 88.9 FM (León)
        setCurrentBackground(['#A7C14D', '#5C7512']);
        break;
      case 4: // Stereo Cristal 96.7 (Celaya)
        setCurrentBackground(['#6F2E88', '#C28153']);
        break;
      case 5: // Crystal 101.1
        setCurrentBackground(['#6F2E88', '#C28153']);
        break;
      case 6: // El y Ella 103.7 FM (Celaya)
        setCurrentBackground(['#F9ED48', '#C02A27']);
        break;
      case 7: // Radar 107.5
        setCurrentBackground(['#A7C14D', '#5C7512']);
        break;
    }
  }, [track?.id]); // Only re-run when track.id changes

  return (
    <WixProvider>
      <LinearGradient style={styles.container} colors={currentBackground}>
        <CarouselPoster />
        <CarouselNews />
        <View style={styles.radioButton}>
          <Pressable onPress={() => navigation.navigate('Streams')}>
            <Image source={require('../assets/buttons-art/radio-button.png')} />
          </Pressable>
        </View>
      </LinearGradient>

      <Inner />
    </WixProvider>
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

const styles = StyleSheet.create({
  container: {
    flex: 2,
    justifyContent: 'space-between',
    position: 'relative',
  },
  screenContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1,
  },
  radioButton: {
    //flex: -1,
    alignItems: 'center',
    marginBottom: -10,
    // paddingVertical: 20,
    // paddingTop: 40,
    zIndex: 2,
    paddingTop: 10,
  },
});
