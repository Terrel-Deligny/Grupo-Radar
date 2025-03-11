import React, {PropsWithChildren} from 'react';
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import {Track} from 'react-native-track-player';

const {width} = Dimensions.get('window');

type SongInfoProps = PropsWithChildren<{
  track: Track | null | undefined;
}>;

const SongInfo = ({track}: SongInfoProps) => {
  return (
    <View>
      <View style={styles.containerArtwork}>
        <View style={styles.listArtWrapper}>
          <View style={styles.albumContainer}>
            <Image source={{uri: track?.artwork}} style={styles.albumArtImg} />
          </View>
        </View>
      </View>
      <View style={styles.containerControls}>
        <View>
          <Text style={styles.name}>{track?.title}</Text>
          <Text style={styles.artist}>{track?.artist}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerControls: {
    width: '100%',
    marginTop: 18,

    flexDirection: 'row',
    alignItems: 'baseline',
    justifyContent: 'center',
  },
  containerArtwork: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#001d23',
  },
  name: {
    marginBottom: 8,
    textAlign: 'center',

    color: '#fff',
    fontSize: 24,
    fontWeight: '800',
  },
  artist: {
    color: '#d9d9d9',
    textAlign: 'center',
  },
  albumArtImg: {
    height: '100%',
    borderRadius: 4,
  },
  albumContainer: {
    width: 300,
    height: 300,
  },
  listArtWrapper: {
    width: width,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SongInfo;
