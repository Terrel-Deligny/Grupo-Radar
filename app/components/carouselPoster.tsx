import React, {useEffect, useState} from 'react';
import {
  View,
  Image,
  StyleSheet,
  Dimensions,
  Linking,
  TouchableOpacity,
} from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import {createClient, OAuthStrategy} from '@wix/sdk';
import {items} from '@wix/data';

const clientId = 'Wix Placeholder'; // Replace with your Client ID
const {width: screenWidth} = Dimensions.get('window');

const wixClient = createClient({
  auth: OAuthStrategy({clientId}),
  modules: {items},
});

interface Poster {
  _id: string;
  title: string;
  image: string;
  webpage: string;
}

const CarouselPoster = () => {
  const [posters, setPosters] = useState<Poster[]>([]);

  useEffect(() => {
    const getPoster = async () => {
      const data = await fetchPoster();
      setPosters(data);
    };
    getPoster();
  }, []);

  const fetchPoster = async (): Promise<Poster[]> => {
    try {
      const response = await wixClient.items
        .query('Promociones')
        .limit(5) // Limit Number of Articles Fetched
        .descending('_createdDate')
        .find();
      //Output Fetched API Data in Terminal
      console.log('API Response Posters', response.items);

      return response.items as Poster[];
    } catch (error) {
      console.error('Error fetching Posters:', error);
      return [];
    }
  };

  const handleArticlePress = (webpage: string) => {
    Linking.openURL(webpage); //open article page
  };

  const renderItem = ({item}: {item: Poster}) => {
    //Construct Image url becuase the fetched url does not contain the domain
    const posterUrl =
      'https://static.wixstatic.com/media/' + item.image.split('/')[3];

    return (
      <TouchableOpacity
        onPress={() => handleArticlePress(item.webpage)}
        activeOpacity={0.8}
        style={styles.posterContainer}>
        <Image
          style={styles.posterImage}
          source={{uri: posterUrl}}
          resizeMode="cover"
        />
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Carousel
        loop={false}
        width={screenWidth * 0.8}
        height={200}
        data={posters}
        scrollAnimationDuration={1000}
        renderItem={renderItem}
        mode="parallax"
        modeConfig={{
          parallaxScrollingScale: 0.9,
          parallaxScrollingOffset: 50,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  posterContainer: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
    overflow: 'hidden',
  },
  posterImage: {
    width: '100%',
    height: '100%',
  },
});

export default CarouselPoster;
