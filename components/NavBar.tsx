import React, { useState } from 'react'
import { HStack, Box, Text, Pressable } from '@gluestack-ui/themed'

export default function NavigationBar(props: { handleClick: (arg0: string) => void; }) {    
    
    const [activeBtn, setActiveBtn] = useState('radio');

    return (
        <HStack width="$full">
            <Pressable flex={1} alignItems='center' justifyContent='center' bgColor= '#2F3228' onPressIn={() => props.handleClick('radio') } onPress={() => setActiveBtn('radio')}>
                <Box py="$8">
                    <Text style= {{ fontSize: 32, fontWeight: 'bold', fontFamily: "League Spartan", color: "white", letterSpacing: 2.5}}>RADIO</Text>
                </Box>
            </Pressable>

            <Pressable flex={1} alignItems='center' justifyContent='center' bgColor= '#7D8F40' onPressIn={() => props.handleClick('tv')} onPress={() => setActiveBtn('tv')} >
                <Box py="$8">
                    <Text style= {{ fontSize: 32, fontWeight: 'bold', fontFamily: "League Spartan", color: "white", letterSpacing: 2.5}}>TV</Text>
                </Box>
            </Pressable>
        </HStack>
  )
}