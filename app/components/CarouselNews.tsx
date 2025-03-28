import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
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
interface Article {
  _id: string;
  title: string;
  _createdDate: Date;
  'link-news-title': string;
}

const CarouselNews = () => {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    const getNews = async () => {
      const data = await fetchNews();
      setArticles(data);
    };
    getNews();
  }, []);

  const fetchNews = async (): Promise<Article[]> => {
    try {
      const response = await wixClient.items
        .query('News')
        .limit(5) // Limit Number of Articles Fetched
        .descending('_createdDate')
        .find();
      //Output Fetched API Data in Terminal
      console.log('API Response News', response.items);

      return response.items as Article[];
    } catch (error) {
      console.error('Error fetching news:', error);
      return [];
    }
  };

  const handleArticlePress = (webpage: string) => {
    Linking.openURL('https://www.radarfm.mx' + webpage); //open article page
  };

  const renderItem = ({item}: {item: Article}) => {
    const titleLength = item.title.length;
    const dynamicWidth = Math.min(screenWidth * 0.8, 200 + titleLength * 8); //Adjust width based on title length
    const date: string = item._createdDate.toISOString().split('T')[0];

    return (
      <TouchableOpacity
        onPress={() => handleArticlePress(item['link-news-title'])}
        activeOpacity={0.8}
        style={[
          styles.item,
          {
            width: dynamicWidth,
            height: 150,
          },
        ]}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.date}>{date}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>News</Text>{' '}
      <Carousel
        loop={false}
        width={screenWidth * 0.8}
        height={160}
        data={articles}
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
  headingText: {
    fontSize: 34,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingTop: 30,
  },
  item: {
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    padding: 16,
    marginHorizontal: 8,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },
  date: {
    fontSize: 12,
    color: '#999',
  },
  icon: {
    marginTop: 8,
  },
});

export default CarouselNews;
