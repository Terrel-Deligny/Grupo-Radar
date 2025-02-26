import React from 'react'
import { Box, Text, Button, ButtonIcon } from '@gluestack-ui/themed'
import { FacebookIcon, TiktokIcon, WhatsappIcon, InstagramIcon } from './Icons'
import {Dimensions} from 'react-native';

export default function SocialMedia() {

    const { width} = Dimensions.get('window');
    const iconSize = width * 0.085
    const socialIcons = [FacebookIcon, TiktokIcon, WhatsappIcon, InstagramIcon];
    
    return (
        <Box bg="#161C00" width="$full">
            <Text style = {{color: "white"}} mx="$3" my="$5">Currently Playing:</Text>
            <Box my="$2" flexDirection='row' alignItems='center' justifyContent='center'>
                    {socialIcons.map((icon, index) => 
                        <Button mx="$3" px="$3" size="xl" key={index} style={{ backgroundColor: '#AFC652', paddingVertical: "5%", paddingHorizontal: "5%", width: "5%",  height: "5%", borderRadius: "20%",}}>
                            <ButtonIcon as={icon} style = {{width: iconSize, height: iconSize}}></ButtonIcon>
                        </Button>
                    )}
            </Box>
        </Box>
    )
}
