import React from 'react'
import { Box, Button, ButtonText } from '@gluestack-ui/themed'
import { View, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';
import * as WebBrowser from 'expo-web-browser';

export default function Radio() {

    const {width, height} = Dimensions.get('window');

    const streams = [
        {
            name: "cristal101.1",
            url: "https://radios.radiohd.com.mx/8274/stream",
            image: require('../images/cristal.png')
        },
        {
            name: "elyella",
            url: "https://radios.radiohd.com.mx/8272/stream",
            image: require('../images/elyella.png')
        },
        {
            name: "lobo san jose iturbide",
            url: "https://radios.radiohd.com.mx/8270/stream",
            image: require('../images/bajio.png')
        },
        {
            name: "Radar 107.5",
            url: "https://radios.radiohd.com.mx/8268/stream",
            image: require('../images/radar.png') 
        },
        {
            name: "cristal96.7",
            url: "https://radios.radiohd.com.mx/8264/stream",
            image: require('../images/cristal967.png')
        },
        {
            name: "lobo88.1",
            url: "https://radios.radiohd.com.mx/8188/stream",
            image: require('../images/lobo.png')
        },
        {
            name: "Radar leon",
            url: "https://radios.radiohd.com.mx/8382/stream",
            image: require('../images/radar889.png')
        }
    ];

    const handleClick = (urlLink: string) => {
        WebBrowser.openBrowserAsync(urlLink);
    }

    return (
        <View style={styles.container} >
            {streams.map((stream) => 
                <TouchableOpacity style={[styles.button, {width: width * 0.85, height: height * 0.07, }]} key={stream.name} onPress={() => handleClick(stream.url)}>
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