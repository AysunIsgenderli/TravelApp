import { Flex, Heading, useBreakpointValue } from '@chakra-ui/react';
import { cards } from '../data'
import { CardContent } from "./CardContent";
import { Carousel } from 'react-responsive-carousel';

export const PopularBeach = () => {
    const slidePercentage = useBreakpointValue({ base: 100, md: 50, lg: 33.33, xl: 25 });
    const updatedCard = cards.map(({ img, location, star }) => <CardContent cardStyles={{ marginRight: '25px' }}
        key={location}
        img={img}
        location={location}
        star={star}
    />)

    return (
        <Flex direction='column'>
            <Heading fontSize={{ base: '24px', lg: '32px' }} color={{ base: '#000', lg: "#fff" }} marginBottom='20px' marginY='60px'>Popular Beach Destinations</Heading>
            <Carousel transitionTime={1000} interval={3000} centerMode showThumbs={false} infiniteLoop autoPlay centerSlidePercentage={slidePercentage} showStatus={false} showIndicators={false}>
                {updatedCard}
            </Carousel>
        </Flex>
    )
}