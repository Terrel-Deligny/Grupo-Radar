import React, {useRef, useState} from 'react';
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
  const carouselRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0); // Track the active slide index

  // Explicitly define the type of `item` in the renderItem function
  const renderItem = ({item}: {item: CarouselItem}) => (
    <View style={[styles.slide, {backgroundColor: item.color}]}>
      <Text style={styles.title}>{item.title}</Text>
    </View>
  );

  // Handle scroll event to update the active index
  const onScroll = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <View style={styles.container}>
      <Carousel
        ref={carouselRef}
        width={width}
        data={data}
        renderItem={renderItem}
        autoPlay={false} // Auto-scroll turned off
        scrollAnimationDuration={1000}
        mode="parallax"
        modeConfig={{
          parallaxScrollingScale: 0.9,
          parallaxScrollingOffset: 50,
        }}
        onSnapToItem={onScroll} // Update the active index on scroll
      />
      {/* Pagination Dots */}
      <View style={styles.pagination}>
        {data.map((_, index) => (
          <View
            key={index}
            style={[
              styles.paginationDot,
              activeIndex === index && styles.paginationDotActive,
            ]}
          />
        ))}
      </View>
      {/* Navigation Buttons */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 400,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 50,
  },
  slide: {
    width: '100%',
    height: 350,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
  },
  title: {
    fontSize: 24,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  controls: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 10,
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -60,
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#ccc',
    marginHorizontal: 5,
  },
  paginationDotActive: {
    backgroundColor: '#333', // Active dot color
  },
});

export default CarouselPoster;
