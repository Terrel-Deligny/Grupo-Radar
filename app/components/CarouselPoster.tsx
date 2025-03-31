import React, {useEffect, useState} from 'react';
import {
  View,
  Image,
  StyleSheet,
  Dimensions,
  Linking,
  TouchableOpacity,
  Text,
} from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import {createClient, OAuthStrategy} from '@wix/sdk';
import {items} from '@wix/data';
import {WIX_CLIENTID} from '@env';

const clientId = WIX_CLIENTID;
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
  const [activeIndex, setActiveIndex] = useState(0); // Track active carousel index

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
  // Render pagination dots
  const renderPagination = () => {
    return (
      <View style={styles.paginationContainer}>
        {posters.map((_, index) => (
          <View
            key={index}
            style={[
              styles.paginationDot,
              index === activeIndex ? styles.activeDot : styles.inactiveDot,
            ]}
          />
        ))}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>Promotions</Text>
      <Carousel
        loop={false}
        width={screenWidth * 0.9}
        height={250}
        data={posters}
        scrollAnimationDuration={1000}
        renderItem={renderItem}
        mode="parallax"
        modeConfig={{
          parallaxScrollingScale: 0.9,
          parallaxScrollingOffset: 50,
        }}
        onSnapToItem={index => setActiveIndex(index)} // Update active index
      />
      {renderPagination()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //height: 0,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 100,
  },
  headingText: {
    fontSize: 34,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 10,
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
  paginationContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    paddingBottom: 20,
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: '#000', // Color for the active dot
  },
  inactiveDot: {
    backgroundColor: '#ccc', // Color for inactive dots
  },
});

export default CarouselPoster;
