import React from 'react';
import {Box} from '@gluestack-ui/themed';
import {FacebookIcon, TiktokIcon, WhatsappIcon, InstagramIcon} from './Icons';
import {Dimensions, TouchableOpacity} from 'react-native';
import CurrentlyPlaying from './CurrentlyPlaying';

export default function SocialMedia() {
  const {width} = Dimensions.get('window');
  const iconSize = width * 0.085;
  const socialIcons = [FacebookIcon, TiktokIcon, WhatsappIcon, InstagramIcon];

  return (
    <Box backgroundColor="#161C00">
      <CurrentlyPlaying />
      <Box
        marginTop={8}
        marginBottom={8}
        flexDirection="row"
        alignItems="center"
        justifyContent="center">
        {socialIcons.map((IconComponent, index) => (
          <TouchableOpacity
            key={index}
            style={{
              backgroundColor: '#AFC652',
              marginHorizontal: 5,
              paddingVertical: '3%',
              paddingHorizontal: '3%',
              borderRadius: '20%',
            }}>
            <IconComponent style={{width: iconSize, height: iconSize}} />
          </TouchableOpacity>
        ))}
      </Box>
    </Box>
  );
}
