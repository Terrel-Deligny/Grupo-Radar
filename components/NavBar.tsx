import React, { useState } from 'react'
import { HStack, Box, Text, Pressable } from '@gluestack-ui/themed'

export default function NavigationBar(props: { handleClick: (arg0: string) => void; }) {    
    
    const [activeBtn, setActiveBtn] = useState('radio');

    return (
        <HStack bgColor="gray" width="$full">
            <Pressable flex={1} alignItems='center' justifyContent='center' bgColor={activeBtn === 'radio' ? '#0077E6' : 'transparent'} onPressIn={() => props.handleClick('radio') } onPress={() => setActiveBtn('radio')}>
                <Box py="$8">
                    <Text>Radio</Text>
                </Box>
            </Pressable>

            <Pressable flex={1} alignItems='center' justifyContent='center' bgColor={activeBtn === 'tv' ? '#0077E6' : 'transparent'} onPressIn={() => props.handleClick('tv')} onPress={() => setActiveBtn('tv')} >
                <Box py="$8">
                    <Text>TV</Text>
                </Box>
            </Pressable>
        </HStack>
  )
}