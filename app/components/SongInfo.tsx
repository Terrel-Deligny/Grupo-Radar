import React, {PropsWithChildren} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Track} from 'react-native-track-player';

type SongInfoProps = PropsWithChildren<{
  track: Track | null | undefined;
}>;

const SongInfo = ({track}: SongInfoProps) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.name}>{track?.title}</Text>
        <Text style={styles.artist}>{track?.artist}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '90%',
    marginTop: 18,

    flexDirection: 'row',
    alignItems: 'baseline',
    justifyContent: 'center',
    borderTopWidth: 0.7,
    borderTopColor: '#fff',
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
  artwork: {},
});

export default SongInfo;
