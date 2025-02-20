import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, ScrollView } from 'react-native';
import StationName from '../components/StationName';
import Footer from '../components/Footer';


export default function App() {
  return (

    <ImageBackground
      source={require('../assets/images/background(radar).png')}
      style={styles.background}
      resizeMode='cover'>

      {/* Tabs Section */}
      <View style={styles.tabsContainer}>
        <TouchableOpacity style={styles.radioButton}>
          <Text style={styles.tabText}>Radio</Text>
        </TouchableOpacity>
        <View style={styles.seperator} />
        <TouchableOpacity style={styles.tvButton}>
          <Text style={styles.tabText}>TV</Text>
        </TouchableOpacity>
      </View>




      {/*Station List*/}
      <ScrollView style={styles.scrollContainer}>
        <StationName imageSource={require('../assets/images/radar.png')} />
        <StationName imageSource={require('../assets/images/cristal.png')} />
        <StationName imageSource={require('../assets/images/elyella.png')} />
        <StationName imageSource={require('../assets/images/bajio.png')} />
        <StationName imageSource={require('../assets/images/cristal967.png')} />
        <StationName imageSource={require('../assets/images/radar889.png')} />
        <StationName imageSource={require('../assets/images/lobo.png')} />
        
      </ScrollView>
      <Footer imageSource={require('../assets/images/footer.png')} />
    </ImageBackground>


  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },


  tabsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: "10%",
    borderBottomWidth: 1,
    borderBottomColor: '#00000000',
    position: 'absolute',  // Keeps tabs fixed at the top
    top: 0,  // Ensures tabs are at the top
    left: 0,
    right: 0,
  },

  scrollContainer: {
    flex: 1,
    marginTop: "25%",

  },


  footerContainer: {
    alignItems: 'center',
  },


  tvButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
    
    backgroundColor: '#BBDB4D',
  },

  radioButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
    backgroundColor: '#00000000',
  },

  seperator: {
    width: 1,
    backgroundColor: '#00000000',
    height: "100%",
  },


  tabText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#FFF',  // 
  },


});
