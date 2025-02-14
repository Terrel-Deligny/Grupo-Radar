import React from 'react';
import { View } from '@gluestack-ui/themed'
import { useVideoPlayer, VideoView } from 'expo-video';

/*
interface VideoScreenProps {
  videoSource: string;
}
*/

export default function VideoScreen() {

    const vidSource = 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4';

    const player = useVideoPlayer(vidSource, player => {
      player.loop = true;
      player.play();
    });
    
    return (
      <View flex={1} width="$full">
        <VideoView player={player} allowsFullscreen allowsPictureInPicture style={{flex: 1, height: 320}} />
      </View>
    );
  }