import { Card, Image, Stack, CardBody, Heading, Text, CardFooter, Button, Flex } from '@chakra-ui/react'
import planeImg from '../images/image 19.png'
import hotelImg from '../images/image 19 (1).png'

const cards = [
    {
        text: 'Domestic Flights',
        title: 'Huge savings on flight with trxvl.',
        url: planeImg,
        content: 'Book domestic flights starting @ just ₹1459'
    },
    {
        text: 'International Hotels',
        title: 'Enjoy upto 20% off on International Hotels',
        url: hotelImg,
        content: 'Make the most of  this deal on your first booking with trxvl.'
    }
]
export const Offers = () => {
    const updatedCards = cards.map((card) => (
        <Card
            key={card.title}
            direction={{ base: 'column', sm: 'row' }}
            overflow='hidden'
            width={{base:'100%', md:'48%'}}
            // height='210px'
            borderRadius='10px'

        >
            <Image
                objectFit='cover'
                // maxW={{ base: '100%', sm: '200px' }}
                width={{base:'100%', md:'45%'}}
                height='210px'
                src={card.url}
            />

            <Stack>
                <CardBody paddingLeft='23px' paddingY='8px'>
                    <Text opacity='0.5'>{card.text}</Text>
                    <Heading fontSize='24px' fontWeight='500'>{card.title}</Heading>

                    <Text py='2' opacity='0.5' color='#000'>{card.content}</Text>
                    <Button fontWeight='400' marginY='8px' padding='16px 32px' variant='solid' color="#fff" borderRadius='25px' backgroundColor='#2659C3'>
                        Book Now
                    </Button>
                </CardBody>
            </Stack>
        </Card>
    ))
    return (
        <Flex direction='column' marginY='50px'>
            <Heading marginBottom='30px' fontFamily='Helvetica' fontSize='32px'>Offers</Heading>
            <Flex justifyContent='space-between' gap='10px' flexWrap='wrap'>
                {updatedCards}
            </Flex>
        </Flex>

    )
}