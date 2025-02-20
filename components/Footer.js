import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, Image, Dimensions, Touchable } from 'react-native';

const { width, height } = Dimensions.get('window');


const Footer = ({ imageSource }) => {
    return (
        <View style={styles.item}>
            <ImageBackground
                source={imageSource}
                style={styles.image}
                resizeMode='cover'>


                {/*apps overlay*/}
                <View style={styles.appsContainer}>
                    <TouchableOpacity style={styles.button}>
                        <Image source={require('../assets/images/whatsapp.png')} style={styles.icon} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <Image source={require('../assets/images/facebook.png')} style={styles.icon} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <Image source={require('../assets/images/instagram.png')} style={styles.icon} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <Image source={require('../assets/images/tiktok.png')} style={styles.icon} />
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({

    item: {

        width: width,
        height: height * 0.16, //
        alignSelf: 'center',


    },
    image: {
        width: '100%',
        height: '100%',

    },

    appsContainer: {
        position: 'absolute',
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%',
        bottom: '40%',
        gap: "5%",
    },

    button: {
        backgroundColor: '#00000000', 
        borderRadius: 10,
    },

    icon: {
        width: 40,
        height: 40,
    },


});

export default Footer;