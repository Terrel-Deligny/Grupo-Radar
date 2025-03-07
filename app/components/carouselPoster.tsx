import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import Carousel from 'react-native-reanimated-carousel';

const {width} = Dimensions.get('window');

// Define the type for the carousel data
type CarouselItem = {
  title: string;
  color: string;
};

const data: CarouselItem[] = [
  {title: 'Slide 1', color: '#FF5733'},
  {title: 'Slide 2', color: '#33FF57'},
  {title: 'Slide 3', color: '#3357FF'},
  {title: 'Slide 4', color: '#FF33A1'},
];

const CarouselPoster = () => {
  // Explicitly define the type of `item` in the renderItem function
  const renderItem = ({item}: {item: CarouselItem}) => (
    <View style={[styles.slide, {backgroundColor: item.color}]}>
      <Text style={styles.title}>{item.title}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Carousel
        width={width}
        data={data}
        renderItem={renderItem}
        autoPlay={true}
        scrollAnimationDuration={1000}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slide: {
    width: '100%',
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  title: {
    fontSize: 24,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});

export default CarouselPoster;
