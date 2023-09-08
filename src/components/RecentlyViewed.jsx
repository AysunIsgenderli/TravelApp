import { Flex, Card, Text, Heading, CardBody,Stack,Image,UnorderedList,ListItem,Button,Icon } from '@chakra-ui/react'
import { useState, useEffect } from 'react';
import { CardContent } from './CardContent';
import cardBg from '../images/image 26.png'
import { Carousel } from 'react-responsive-carousel';
import hotelIcon from '../images/hotelIcon.png'
import planeIcon from '../images/planeIcon.png'
import carIcon from '../images/carIcon.png'
import activitiesIcon from '../images/activitiesIcon.png'
import { AiFillStar } from "react-icons/ai";
import {  BsFillSuitHeartFill } from "react-icons/bs";
import { LiaHeart } from "react-icons/lia";


const recentlyViewedCards = [
    {
        img: "https://static.toiimg.com/thumb/103173671/Hallstatt.jpg?width=1200&height=900",
        loc: "Hallstat",
        star: '4.9'
    },
    {
        img: 'https://images.squarespace-cdn.com/content/v1/5c33451b710699b10e8e4576/1554883736697-M3X56ZDGH6C0FY11UA5F/IMG_1702.jpg?format=1000w',
        loc: "Innsbruck",
        star: '4.9'
    }
]

export const RecentlyViewed = () => {
    const [isLiked, setIsLiked] = useState(false)
    const handleClick = () => {
        setIsLiked(!isLiked)
    }
    // const cards = recentlyViewedCards.map(({ img, loc, star }) => <CardContent key={loc} location={loc} img={img} star={star} />)
    const cards = recentlyViewedCards.map((card) => (
        <Card width={{base:'100%', md:'50%', lg:'30%'}} _hover={{ transform: "scale(1.02)", transition: "transform 0.5s" }} borderRadius='16px' boxShadow="0px 4px 16px 0px rgba(158, 158, 158, 0.25)" >
            <CardBody>
                <Image objectFit='cover' width='100%' height='237px' position='relative'
                    src={card.img}
                    borderRadius='lg'
                />
                <Stack mt='6' spacing='3'>
                    <Flex justifyContent='space-between' fontSize='24px' >
                        <Text>{card.loc}</Text>
                        <Flex alignItems='center' >
                            <Icon as={AiFillStar} />
                            <Text marginLeft='8px'>{card.star}</Text>
                        </Flex>
                    </Flex>
                    <Text opacity='0.5'>3 Days 4 Nights</Text>
                    <Flex justifyContent='space-between' alignItems='center' marginTop='10px' opacity='0.5'>
                        <Flex direction='column' alignItems='center'>
                            <Image src={planeIcon} />
                            <Text fontSize='12px' marginTop='8px'>2 Flights</Text>
                        </Flex>
                        <Flex direction='column' alignItems='center'>
                            <Image src={hotelIcon} />
                            <Text fontSize='12px' marginTop='8px'>1 Hotel</Text>
                        </Flex>
                        <Flex direction='column' alignItems='center'>
                            <Image src={carIcon} />
                            <Text fontSize='12px' marginTop='8px'>2 Transfers</Text>
                        </Flex>
                        <Flex direction='column' alignItems='center'>
                            <Image src={activitiesIcon} />
                            <Text fontSize='12px' marginTop='8px'>2 Activities</Text>
                        </Flex>
                    </Flex>
                    <UnorderedList opacity='0.5'>
                        <ListItem>Tour combo with return airport transfer</ListItem>
                        <ListItem marginY='8px'>City Tour</ListItem>
                        <ListItem>Curious Corner</ListItem>
                    </UnorderedList>

                    <Flex gap='24px' alignItems='center'>
                        <Text textDecorationLine='line-through'>₹88,952</Text>
                        <Flex alignItems='end' gap='4px'>
                            <Text fontSize='24px' fontWeight='700' >₹88,952</Text>
                            <Text fontSize='12px' >Per person</Text>
                        </Flex>
                    </Flex>
                    <Button onClick={handleClick} position='absolute' top='30px' right='23px' fontSize='24px'>
                        <Icon as={isLiked ? BsFillSuitHeartFill : LiaHeart} style={{ color: isLiked ? "red" : "#fff" }} />
                    </Button>
                </Stack>
            </CardBody>
        </Card>
    ))
    return (
        <Flex direction='column' marginY='60px'>
            <Heading marginBottom='20px' fontSize={{ base: '24px', lg: '32px' }}>Recently Viewed</Heading>
            <Flex gap='24px' wrap='wrap'>
                {cards}
                <Card width={{ base: '100%', xl: '30%' }} paddingY='54px' backgroundImage={cardBg} backgroundPosition="center" backgroundSize='cover'
                    backgroundRepeat="no-repeat"  >
                    <Flex color='#fff' gap='24px' direction='column' maxWidth={{ base: '95%', xl: '84%' }} margin='0 auto'>
                        <Heading fontSize='24px'>Summer Bonanza!</Heading>
                        <Text>Enjoy confortable transfers in shared coaches</Text>
                        <Text>Choose from 5 flights per week</Text>
                        <Text>Get a free Rapid Antigen Test at selected hotels</Text>
                    </Flex>
                </Card>
            </Flex>
        </Flex>

    )
}