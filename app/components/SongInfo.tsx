import React, {PropsWithChildren} from 'react';
import {Dimensions, Image, StyleSheet, View} from 'react-native';
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
    </View>
  );
};

const styles = StyleSheet.create({
  containerControls: {
    width: '100%',
    marginTop: 15,

    flexDirection: 'row',
    alignItems: 'baseline',
    justifyContent: 'center',
  },
  containerArtwork: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#001d23',
  },
  albumArtImg: {
    height: '100%',
    borderRadius: 4,
  },
  albumContainer: {
    width: 150,
    height: 150,
  },
  listArtWrapper: {
    width: width,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SongInfo;
