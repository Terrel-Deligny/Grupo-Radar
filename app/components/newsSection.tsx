import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  Dimensions,
} from 'react-native';

const {width} = Dimensions.get('window');

// Define the type for the news data
type NewsItem = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
};

// Sample news data
const newsData: NewsItem[] = [
  {
    id: '1',
    title: 'Breaking News 1',
    description: 'This is the first news item. Grupo Radar News 1.',
    imageUrl: 'https://via.placeholder.com/300', //Empty place holder
  },
  {
    id: '2',
    title: 'Breaking News 2',
    description: 'This is the second news item. Grupo Radar News 2.',
    imageUrl: 'https://via.placeholder.com/300', //Empty place holder
  },
  {
    id: '3',
    title: 'Breaking News 3',
    description: 'This is the third news item. Grupo Radar News 3.',
    imageUrl: 'https://via.placeholder.com/300', //Empty place holder
  },
];

export default function NewsSection() {
  // Render each news item
  const renderItem = ({item}: {item: NewsItem}) => (
    <View style={styles.newsItem}>
      <Image source={{uri: item.imageUrl}} style={styles.newsImage} />
      <Text style={styles.newsTitle}>{item.title}</Text>
      <Text style={styles.newsDescription}>{item.description}</Text>
    </View>
  );

  return (
    <View style={styles.rootContainer}>
      {/* News Header */}
      <Text style={styles.NewsHeader}>NewsFeed</Text>

      {/* Horizontal Lines */}
      <View style={styles.container}>
        <View style={styles.horizontalLine} />
        <View style={styles.horizontalLineRight} />
      </View>

      {/* Horizontal FlatList for News Items */}
      <FlatList
        data={newsData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        horizontal // Make the list horizontal
        showsHorizontalScrollIndicator={false} // Hide the scroll bar
        contentContainerStyle={styles.flatListContent}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    //flex: 1, //removed to create better layout space
    justifyContent: 'flex-start',
    paddingTop: 50,
  },
  NewsHeader: {
    fontSize: 34,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: 'yellow', // For Debugging: Add a background color to see where it is
  },
  container: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: '#f0f0f0',
  },
  horizontalLine: {
    width: '25%',
    height: 2,
    backgroundColor: 'black',
    marginRight: 'auto',
  },
  horizontalLineRight: {
    width: '25%',
    height: 2,
    backgroundColor: 'black',
    marginLeft: 'auto',
  },
  flatListContent: {
    paddingHorizontal: 16,
    marginTop: 20, // Add spacing between the lines and the FlatList
  },
  newsItem: {
    width: width * 0.5, // Each news item takes up 80% of the screen
    height: 100,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  newsImage: {
    width: '100%',
    height: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  newsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  newsDescription: {
    fontSize: 14,
    color: '#666',
  },
});
