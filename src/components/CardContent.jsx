import { Card, CardBody, Image, Stack, Text, Flex, Button,Icon} from "@chakra-ui/react"
import { AiFillStar } from "react-icons/ai";
import {  BsFillSuitHeartFill } from "react-icons/bs";
import { LiaHeart } from "react-icons/lia";
import {
    ListItem,
    UnorderedList,
} from '@chakra-ui/react'
import { useState } from "react";
import hotelIcon from '../images/hotelIcon.png'
import planeIcon from '../images/planeIcon.png'
import carIcon from '../images/carIcon.png'
import activitiesIcon from '../images/activitiesIcon.png'




export const CardContent = ({ img, location, star, cardStyles }) => {
    const [isLiked, setIsLiked] = useState(false)
    const handleClick = () => {
        setIsLiked(!isLiked)
    }
    return (
        <Card width='100%' _hover={{ transform: "scale(1.02)", transition: "transform 0.5s" }} borderRadius='16px' boxShadow="0px 4px 16px 0px rgba(158, 158, 158, 0.25)" {...cardStyles}>
            <CardBody>
                <Image objectFit='cover' width='100%' height='237px' position='relative'
                    src={img}
                    borderRadius='lg'
                />
                <Stack mt='6' spacing='3'>
                    <Flex justifyContent='space-between' fontSize='24px' >
                        <Text>{location}</Text>
                        <Flex alignItems='center' >
                            <Icon as={AiFillStar} />
                            <Text marginLeft='8px'>{star}</Text>
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
    )
}