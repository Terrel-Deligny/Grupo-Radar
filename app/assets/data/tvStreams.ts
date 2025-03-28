import {Image} from 'react-native';

export const tvStream = [
  {
    id: 1,
    name: 'Radar Tv 71',
    image: Image.resolveAssetSource(require('../buttons-art/radartv71.png'))
      .uri,
    videoUrl: 'https://ontvmx.com/#/Extra-reprod/147',
  },
  {
    id: 2,
    name: 'Asisucede Celaya',
    image: Image.resolveAssetSource(
      require('../buttons-art/asisucede-celeya.png'),
    ).uri,
    videoUrl: 'https://ontvmx.com/#/Extra-reprod/34',
  },
];
