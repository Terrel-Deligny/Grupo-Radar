import React from 'react'
import { Box, Image, Text, Link } from '@gluestack-ui/themed'
import VideoScreen from './VideoScreen'

export default function TV() {
    const streams = [
        {
            name: "Radar 107.5",
            url:  'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
            imgUri: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        },
        {
            name: "Asisucede Celaya",
            url:  'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
            imgUri: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        }
    ]

    const handleClick = (vidURL: string) => {
        console.log(vidURL);
    }
    
    return (
        <Box>
        <VideoScreen />
        <Box>
            {streams.map((stream) => 
                <Link my="$8" key={ stream.name } onPress={() => handleClick(stream.url)}>
                    <Box bgColor='white' flexDirection="row" alignItems='center' justifyContent='center'>
                        <Box alignItems='center' justifyContent='center' flex={1}>
                        <Image
                            size="xl"
                            source={{ uri: stream.imgUri }}
                            alt="image"
                        />
                        </Box>
                        <Text flex={1}>{ stream.name }</Text>
                    </Box>
                </Link>
            )}
        </Box>
        </Box>
    )
}
