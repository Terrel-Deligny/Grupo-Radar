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
import {RootStackParamList} from '../components/NavigationFile';
import TrackPlayer from 'react-native-track-player';
import {addTrack} from '../services/AudioPlayerServices';
import {SetupService} from '../services/SetupService';
import MusicPlayer from './MusicPlayer';
import FontAwesome6Icon from 'react-native-vector-icons/FontAwesome6';

export default function HomeScreen() {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  return (
    <WixProvider>
      <CarouselPoster />
      <CarouselNews />
      <View style={styles.radioButton}>
        <Pressable onPress={() => navigation.navigate('Streams')}>
          <FontAwesome6Icon size={35} name="radio" />
        </Pressable>
      </View>

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

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: '#86efac',
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioButton: {
    flex: -1,
    alignItems: 'center',
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
