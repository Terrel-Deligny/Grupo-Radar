import React from 'react'
import { Box, Text, Button, ButtonIcon } from '@gluestack-ui/themed'
import { FacebookIcon, XIcon, WhatsappIcon, InstagramIcon } from './Icons'

export default function SocialMedia() {
    const socialIcons = [FacebookIcon, XIcon, WhatsappIcon, InstagramIcon];
    
    return (
        <Box bg="white" width="$full">
            <Text mx="$3" my="$5">Text here</Text>
            <Box my="$2" flexDirection='row' alignItems='center' justifyContent='center'>
                    {socialIcons.map((icon, index) => 
                        <Button mx="$3" px="$3" size="xl" key={index}>
                            <ButtonIcon as={icon}></ButtonIcon>
                        </Button>
                    )}
            </Box>
        </Box>
    )
}
