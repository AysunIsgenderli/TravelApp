import hotels from '../images/hotels.png'
import apartments from '../images/apartments.png'
import resorts from '../images/resorts.png'
import villas from '../images/villas.png'
import { Flex, Heading, Box, Image, Text, useBreakpointValue } from '@chakra-ui/react'
import { useState } from 'react'
import { Carousel } from 'react-responsive-carousel'

const cards = [
    {
        url: hotels,
        text: 'Hotels'
    },
    {
        url: apartments,
        text: 'Apartments'
    },
    {
        url: resorts,
        text: 'Resorts'
    },
    {
        url: villas,
        text: 'Villas'
    },
    {
        url: resorts,
        text: 'Resorts'
    },
    {
        url: villas,
        text: 'Villas'
    },
]

export const PropertyType = () => {
    const slidePercentage = useBreakpointValue({ base: 60, md: 50, lg: 33.33, xl: 25 });
    const updatedCards = cards.map((card) => (
        <Box key={card.text} position='relative' width='100%' height='200px' >
            <Box>
                <Image src={card.url} width='310px' height='200px' borderRadius='10px' />
                <Text color='#fff' fontSize='24px' fontWeight='500' position='absolute' bottom='10px' left='15%'>{card.text}</Text>
            </Box>
        </Box>
    ))
    return (
        <Flex direction='column' marginY='50px' >
            <Heading fontFamily="Helvetica" fontSize={{ base: '24px', lg: '32px' }} marginBottom='20px'>Browse by property type</Heading>
            <Carousel transitionTime={1000} interval={3000} showArrows={false} centerMode showThumbs={false} infiniteLoop centerSlidePercentage={slidePercentage} showStatus={false} showIndicators={false}>{updatedCards}</Carousel>
        </Flex>
    )


}