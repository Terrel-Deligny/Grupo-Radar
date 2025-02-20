import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');
//const ImageWidth =  341;
//const ImageHeight = 56;
//const ImageAspectRatio = ImageWidth / ImageHeight;

const StationName = ({imageSource}) =>{
    return(
        <TouchableOpacity style={styles.item}>
            <Image
                 source = {imageSource}
                 style ={styles.image} 
                 resizeMode = 'contain'
            />
                 
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({

    item:{
        borderRadius: 50,
        marginBottom: "7%", // position from figma
        width: width * 0.85,
        height: height * 0.07, // /ImageAspectRatio,
        alignSelf: 'center',
        
        
    },
    image:{
        width: '100%',
        height: '100%',
        

    },
});

export default StationName;