import {Image} from 'react-native';
import {Track} from 'react-native-track-player';

// Use "Image.resolveAssetSource(require('./assets/album-art/radar107.5-albumart.png')).uri" to resolve artwork as it fails to resolve location if you simply pass the path.
// This way react-native handles the asset
export const playListData: Track[] = [
  {
    id: 1,
    title: 'Crystal 101.1',
    artist: 'Grupo Radar',
    artwork: Image.resolveAssetSource(
      require('../album-art/radar107.5-albumart.png'),
    ).uri,
    url: 'https://radios.radiohd.com.mx/8274/stream',
    isLiveStream: true,
  },
  {
    id: 2,
    title: 'El y Ella 103.7 FM (Celaya)',
    artist: 'Grupo Radar',
    artwork: Image.resolveAssetSource(
      require('../album-art/cristal101.1-albumart.png'),
    ).uri,
    url: 'https://radios.radiohd.com.mx/8272/stream',
    isLiveStream: true,
  },
  {
    id: 3,
    title: 'Radar 107.5',
    artist: 'Grupo Radar',
    artwork: Image.resolveAssetSource(
      require('../album-art/lobobajio88.1-920am-albumart.png'),
    ).uri,
    url: 'https://radios.radiohd.com.mx/8268/stream',
    isLiveStream: true,
  },
  {
    id: 4,
    title: 'Stereo Cristal 96.7  (Celaya)',
    artist: 'Grupo Radar',
    artwork: Image.resolveAssetSource(
      require('../album-art/radar88.9-albumart.png'),
    ).uri,
    url: 'https://radios.radiohd.com.mx/8264/stream',
    isLiveStream: true,
  },
  {
    id: 5,
    title: 'Radio Lobo Bajío 88.1 FM & 920 AM (Celaya)',
    artist: 'Grupo Radar',
    artwork: Image.resolveAssetSource(
      require('../album-art/elyella103.7-albumart.png'),
    ).uri,
    url: 'https://radios.radiohd.com.mx/8188/stream',
    isLiveStream: true,
  },
  {
    id: 6,
    title: 'Radio Lobo 88.3 FM (San José Iturbide)',
    artist: 'Grupo Radar',
    artwork: Image.resolveAssetSource(
      require('../album-art/cristal96.7-albumart.png'),
    ).uri,
    url: 'https://radios.radiohd.com.mx/8270/stream',
    isLiveStream: true,
  },
  {
    id: 7,
    title: 'Radar 88.9 FM (León)',
    artist: 'Grupo Radar',
    artwork: Image.resolveAssetSource(
      require('../album-art/lobo88.3-albumart.png'),
    ).uri,
    url: 'https://radios.radiohd.com.mx/8382/stream',
    isLiveStream: true,
  },
];
