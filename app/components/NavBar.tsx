import React, {useState} from 'react';
import {View, Text, Pressable, StyleSheet} from 'react-native';
import {Box} from '@gluestack-ui/themed';

export default function NavigationBar(props: {
  handleClick: (arg0: string) => void;
}) {
  const [activeBtn, setActiveBtn] = useState('radio');

  return (
    <View style={styles.container}>
      <Pressable
        style={activeBtn === 'radio' ? styles.buttonClicked : styles.button}
        onPressIn={() => props.handleClick('radio')}
        onPress={() => setActiveBtn('radio')}>
        <Box py="$3">
          <Text style={styles.text}> RADIO </Text>
        </Box>
      </Pressable>

      <Pressable
        style={activeBtn === 'tv' ? styles.buttonClicked : styles.button}
        onPressIn={() => props.handleClick('tv')}
        onPress={() => setActiveBtn('tv')}>
        <Box py="$3">
          <Text style={styles.text}> TV </Text>
        </Box>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#7D8F40',
    paddingVertical: 20,
  },
  buttonClicked: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2F3228',
    paddingVertical: 20,
  },
  text: {
    fontSize: 32,
    fontWeight: 'bold',
    fontFamily: 'League Spartan',
    color: 'white',
    letterSpacing: 2.5,
  },
});
