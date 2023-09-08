import { Heading, Flex, Card, CardBody, Stack, Image, Text, useBreakpointValue } from "@chakra-ui/react"
import indiaImg from '../images/India.png'
import travelTalkImg from '../images/travelTalk.png'
import beachImg from '../images/beach.png'
import { Carousel } from "react-responsive-carousel"

const cards = [
    {
        url: indiaImg,
        title: 'India',
    },
    {
        url: travelTalkImg,
        title: 'Travel Talk',
    },
    {
        url: beachImg,
        title: 'Beach',
    },
    {
        url: indiaImg,
        title: 'India',
    },
    {
        url: travelTalkImg,
        title: 'Travel Talk',
    },
    {
        url: beachImg,
        title: 'Beach',
    }

]

export const Community = () => {
    const slidePercentage = useBreakpointValue({ base: 100, md: 50, lg: 33.33, xl: 25 });
    const updatedCards = cards.map((card) => (
        <Card width='100%' key={card.title} color="#000">
            <CardBody>
                <Image
                    src={card.url}
                    borderRadius='lg'
                />
                <Stack mt='6' spacing='3'>
                    <Heading fontSize='24px' fontWeight='400' opacity='0.8'>{card.title}</Heading>
                    <Text opacity='0.5'>Travel community</Text>
                    <Text opacity='0.5'> 155,073 travelers </Text>
                </Stack>
            </CardBody>
        </Card>
    ))
    return (
        <Flex direction='column' marginY='50px'>
            <Heading fontSize={{ base: '24px', lg: '32px' }} fontFamily='Helvetica' marginBottom='20px' justifyContent='space-between'>Connect with other travelers in our community</Heading>
            <Carousel transitionTime={1000} interval={3000} centerMode showThumbs={false} infiniteLoop autoPlay centerSlidePercentage={slidePercentage} showStatus={false} showIndicators={false}>{updatedCards}</Carousel>
        </Flex>
    )
}