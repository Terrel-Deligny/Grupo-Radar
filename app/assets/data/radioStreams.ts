import {Image} from 'react-native';
import {Track} from 'react-native-track-player';

// Use "Image.resolveAssetSource(require('./assets/album-art/radar107.5-albumart.png')).uri" to resolve artwork as it fails to resolve location if you simply pass the path.
// This way react-native handles the asset
export const playListData: Track[] = [
  {
    id: 5,
    artist: 'Radio Lobo Bajío 88.1 FM & 920 AM (Celaya)',
    artwork: Image.resolveAssetSource(
      require('../album-art/lobobajio88.1-920am-albumart.png'),
    ).uri,
    image: Image.resolveAssetSource(
      require('../buttons-art/lobobajio88.1-920am.png'),
    ).uri,
    url: 'https://radios.radiohd.com.mx/8188/stream',
    isLiveStream: true,
  },
  {
    id: 6,
    artist: 'Radio Lobo 88.3 FM (San José Iturbide)',
    artwork: Image.resolveAssetSource(
      require('../album-art/lobo88.3-albumart.png'),
    ).uri,
    image: Image.resolveAssetSource(require('../buttons-art/lobo88.3.png')).uri,
    url: 'https://radios.radiohd.com.mx/8270/stream',
    isLiveStream: true,
  },
  {
    id: 7,
    artist: 'Radar 88.9 FM (León)',
    artwork: Image.resolveAssetSource(
      require('../album-art/radar88.9-albumart.png'),
    ).uri,
    image: Image.resolveAssetSource(require('../buttons-art/radar88.9.png'))
      .uri,
    url: 'https://radios.radiohd.com.mx/8382/stream',
    isLiveStream: true,
  },
  {
    id: 4,
    artist: 'Stereo Cristal 96.7  (Celaya)',
    artwork: Image.resolveAssetSource(
      require('../album-art/cristal96.7-albumart.png'),
    ).uri,
    image: Image.resolveAssetSource(require('../buttons-art/cristal96.7.png'))
      .uri,
    url: 'https://radios.radiohd.com.mx/8264/stream',
    isLiveStream: true,
  },
  {
    id: 1,
    artist: 'Crystal 101.1',
    artwork: Image.resolveAssetSource(
      require('../album-art/cristal101.1-albumart.png'),
    ).uri,
    image: Image.resolveAssetSource(require('../buttons-art/cristal101.1.png'))
      .uri,
    url: 'https://radios.radiohd.com.mx/8274/stream',
    isLiveStream: true,
  },
  {
    id: 2,
    artist: 'El y Ella 103.7 FM (Celaya)',
    artwork: Image.resolveAssetSource(
      require('../album-art/elyella103.7-albumart.png'),
    ).uri,
    image: Image.resolveAssetSource(require('../buttons-art/elyella103.7.png'))
      .uri,
    url: 'https://radios.radiohd.com.mx/8272/stream',
    isLiveStream: true,
  },
  {
    id: 3,
    artist: 'Radar 107.5',
    artwork: Image.resolveAssetSource(
      require('../album-art/radar107.5-albumart.png'),
    ).uri,
    image: Image.resolveAssetSource(require('../buttons-art/radar107.5.png'))
      .uri,
    url: 'https://radios.radiohd.com.mx/8268/stream',
    isLiveStream: true,
  },
];
