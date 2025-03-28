import React from 'react';
import {createIcon} from '@gluestack-ui/themed';
import {siFacebook, siTiktok, siWhatsapp, siInstagram} from 'simple-icons';
import {Path} from 'react-native-svg';

export const FacebookIcon = createIcon({
  displayName: 'FacebookIcon',
  viewBox: '0 0 24 24',
  path: (
    <>
      <Path d={siFacebook.path} fill="#161c00" stroke="none" />
    </>
  ),
});

export const TiktokIcon = createIcon({
  displayName: 'TiktokIcon',
  viewBox: '0 0 24 24',
  path: (
    <>
      <Path d={siTiktok.path} fill="#161c00" stroke="none" />
    </>
  ),
});

export const WhatsappIcon = createIcon({
  displayName: 'WhatsappIcon',
  viewBox: '0 0 24 24',
  path: (
    <>
      <Path d={siWhatsapp.path} fill="#161c00" stroke="none" />
    </>
  ),
});

export const InstagramIcon = createIcon({
  displayName: 'InstagramIcon',
  viewBox: '0 0 24 24',
  path: (
    <>
      <Path d={siInstagram.path} fill="#161c00" stroke="none" />
    </>
  ),
});
