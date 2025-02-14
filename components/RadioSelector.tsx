import React from 'react'
import { Box, Button, ButtonText } from '@gluestack-ui/themed'
import * as WebBrowser from 'expo-web-browser';

export default function Radio() {

    const streams = [
        {
            name: "cristal101.1",
            url: "https://radios.radiohd.com.mx/8274/stream"
        },
        {
            name: "elyella",
            url: "https://radios.radiohd.com.mx/8272/stream"
        },
        {
            name: "lobo san jose iturbide",
            url: "https://radios.radiohd.com.mx/8270/stream"
        },
        {
            name: "Radar 107.5",
            url: "https://radios.radiohd.com.mx/8268/stream"
        },
        {
            name: "cristal96.7",
            url: "https://radios.radiohd.com.mx/8264/stream"
        },
        {
            name: "lobo88.1",
            url: "https://radios.radiohd.com.mx/8188/stream"
        },
        {
            name: "Radar leon",
            url: "https://radios.radiohd.com.mx/8382/stream"
        }
    ]

    const handleClick = (urlLink: string) => {
        WebBrowser.openBrowserAsync(urlLink);
    }

    return (
        <Box alignItems='center' justifyContent='center'>
            {streams.map((stream) => 
                <Button w="70%" my="$3" size="md" height="$16" variant="solid" action="primary" key={stream.name} onPress={() => handleClick(stream.url)}>
                    <ButtonText>{ stream.name }</ButtonText>
                </Button>
            )}
        </Box>
    )
}