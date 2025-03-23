import React from 'react'
import { View, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';
import TrackPlayer from 'react-native-track-player';

export default function Radio() {

    const {width, height} = Dimensions.get('window');

    const streams = [
        {
            title: "cristal101.1",
            image: require('../assets/buttons-art/cristal.png')
        },
        {
            title: "elyella",
            image: require('../assets/buttons-art/elyella.png')
        },
        {
            title: "lobo san jose iturbide",
            image: require('../assets/buttons-art/bajio.png')
        },
        {
            title: "Radar 107.5",
            image: require('../assets/buttons-art/radar.png') 
        },
        {
            title: "cristal96.7",
            image: require('../assets/buttons-art/cristal967.png')
        },
        {
            title: "lobo88.1",
            image: require('../assets/buttons-art/lobo.png')
        },
        {
            title: "Radar leon",
            image: require('../assets/buttons-art/radar889.png')
        }
    ];

    const handlePlay = async (index: number) => {
        const id = index + 1;
        console.log("track id: " + id);
        
        try {
            await TrackPlayer.skip(id);
            await TrackPlayer.play();
          } catch (error) {
            console.error('Error playing track:', error);
        }
    }

    return (
        <View style={styles.container} >
            {streams.map((stream, index) => 
                <TouchableOpacity style={[styles.button, {width: width * 0.85, height: height * 0.07, }]} key={stream.title} onPress={() => handlePlay(index)}>
                    <Image source = {stream.image} style = {styles.image} resizeMode = "contain"/>
                </TouchableOpacity>
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },

    button:{

        borderRadius: 50,
        marginTop: "3%",
        marginBottom: "4%", 
        alignSelf: 'center',
    },

    image:{
        width: '100%',
        height: '100%',
        

    },


});