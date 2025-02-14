import React from 'react';
import { createIcon } from '@gluestack-ui/themed';  
import { siFacebook, siX, siWhatsapp, siInstagram } from 'simple-icons';
import { Path } from 'react-native-svg';

export const FacebookIcon = createIcon({
  displayName: 'FacebookIcon',
  viewBox: "0 0 24 24",
  path: (
    <>
      <Path d={siFacebook.path} fill="white"/>
    </>
  ),
});

export const XIcon = createIcon({
  displayName: 'XIcon',
  viewBox: "0 0 24 24",
  path: (
    <>
      <Path d={siX.path} fill="white"/>
    </>
  ),
});

export const WhatsappIcon = createIcon({
  displayName: 'WhatsappIcon',
  viewBox: "0 0 24 24",
  path: (
    <>
      <Path d={siWhatsapp.path} fill="white"/>
    </>
  ),
});

export const InstagramIcon = createIcon({
  displayName: 'InstagramIcon',
  viewBox: "0 0 24 24",
  path: (
    <>
      <Path d={siInstagram.path} fill="white"/>
    </>
  ),
});