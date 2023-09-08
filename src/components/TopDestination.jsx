import { Box, Text, Flex, Image, Heading, Card, useBreakpointValue } from "@chakra-ui/react"
import { Carousel } from "react-responsive-carousel"



const cards = [
    {
        title: "Bali, Indonesia",
        url: "https://www.affordableluxurytravel.co.uk/blog/wp-content/uploads/2021/11/AdobeStock_103587221-scaled.jpeg"
    },
    {
        title: 'Kerry, Ireland',
        url: 'https://i.guim.co.uk/img/media/a351bf1a2a99f218f4db3bc47d8e2158af04b138/0_336_5134_3081/master/5134.jpg?width=700&quality=85&auto=format&fit=max&s=3b0eca09a8ffb544843fa67fba7da8b8'
    },
    {
        title: "Sydney, Australia",
        url: 'https://media.cnn.com/api/v1/images/stellar/prod/191011110307-02-australia-beautiful-places.jpg?q=w_2187,h_1230,x_0,y_0,c_fill/h_618'
    },
    {
        title: 'Paris, France',
        url: 'https://imageio.forbes.com/specials-images/imageserve/6468ea7be5b5bee9d12e9948/eiffel-tour-and-Paris-cityscape/0x0.jpg?format=jpg&height=1835&width=2767'
    },
    {
        title: "Sydney, Australia",
        url: 'https://media.cnn.com/api/v1/images/stellar/prod/191011110307-02-australia-beautiful-places.jpg?q=w_2187,h_1230,x_0,y_0,c_fill/h_618'
    },
    {
        title: 'Paris, France',
        url: 'https://imageio.forbes.com/specials-images/imageserve/6468ea7be5b5bee9d12e9948/eiffel-tour-and-Paris-cityscape/0x0.jpg?format=jpg&height=1835&width=2767'
    }

]

export const TopDestination = () => {
    const slidePercentage = useBreakpointValue({ base: 100, sm:50, lg: 33.33, xl: 25 });

    const updatedCards = cards.map((card) => (
        <Card key={card.title} position='relative' width='100%'  borderRadius='10px'   >
            <Box borderRadius='10px' width='100%'>
                <Image src={card.url} width='100% !important'  height='200px' borderRadius='10px'  />
                <Text color='#fff' fontSize={{ base: '18px', md: '24px' }} fontWeight='500' position='absolute' bottom='10px' left='15%'>{card.title}</Text>
            </Box>
        </Card>
    ))
    return (
        <Flex direction='column'>
            <Heading fontFamily="Helvetica" fontSize={{ base: '24px', lg: '32px' }} color='#fff' marginBottom='20px' marginY='60px'>Top Vacation Destination</Heading>
            <Carousel transitionTime={1000} interval={3000} centerMode showThumbs={false} infiniteLoop autoPlay centerSlidePercentage={slidePercentage} showStatus={false} showIndicators={false}>
                {updatedCards}
            </Carousel>
        </Flex>


    )
}