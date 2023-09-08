import { honeymoon } from "../data"
import { Flex, Heading, useBreakpointValue } from '@chakra-ui/react'
import { CardContent } from "./CardContent";
import { Carousel } from "react-responsive-carousel";

export const Honeymoon = () => {
    const slidePercentage = useBreakpointValue({ base: 100, md: 50, lg: 33.33, xl: 25 });

    const cards = honeymoon.map((card) => <CardContent key={card.loc} location={card.loc} img={card.img} star={card.star} />)
    return (
        <Flex direction='column' marginY='50px'>
            <Heading fontSize={{ base: '24px', lg: '32px' }} marginBottom='20px'>Honeymoon Freebies Special</Heading>
            <Carousel transitionTime={1000} interval={3000} centerMode showThumbs={false} infiniteLoop autoPlay centerSlidePercentage={slidePercentage} showStatus={false} showIndicators={false}>
                {cards}
            </Carousel>
        </Flex>

    )
}