import { Box, Button, Flex, Heading, Image, Text, Input } from "@chakra-ui/react"
import IphoneImg from '../images/iPhone 13 Mockup.png'
import footerbg from '../images/footerbg.png'
import line from '../images/Line 1.png'
import googlePlay from '../images/googleplay.png'
import appStore from '../images/appstore.png'

export const TravelApp = () => {
    return (
        <Box
            background={`url(${footerbg}) no-repeat center center fixed`}
            backgroundSize="cover"
            // h="544px"
            display="flex"
            alignItems="center"
            justifyContent="center"
            color='#fff'
            fontFamily='Helvetica'
        >
            <Flex justifyContent='space-around' padding='20px 40px'>
                <Image src={IphoneImg} display={{ base: 'none', md: "block" }} />
                <Flex direction='column' width={{ base: '100%', md: '70%' }} gap='40px'>
                    <Flex direction='column' gap='24px'>
                        <Heading fontSize={{ base: '30px', lg: '48px' }}>Your all-in-one travel app.</Heading>
                        <Text fontSize={{ base: '18px', lg: '24px' }}>Book flights, hotels, trains & rental cars anywhere in the world in just seconds. Get real-time flight updates, travel info, exclusive deals, and 30% more Trip Coins only on the app!</Text>
                    </Flex>
                    <Flex width='100%' direction={{ base: 'column', lg: 'row' }} alignItems='center' justifyContent='space-between' gap='15px' >
                        <Flex direction='column' gap='24px' width={{ base: '100%', lg: '50%' }}  >
                            <Flex gap='8px' >
                                <Button position="relative" fontSize='20px' fontWeight='400'  >
                                    <Box
                                        position="absolute"
                                        top="0"
                                        left="0"
                                        width="100%"
                                        height="100%"
                                        bg="white"
                                        opacity="0.4"
                                        borderRadius='3xl'
                                        padding='8px 16px'
                                    />
                                    Mobile
                                </Button>
                                <Button fontSize='20px' fontWeight='400' padding='8px'>Email</Button>
                            </Flex>
                            <Text fontSize='14px'>Enter your phone number to receive a text with a link to download the app.</Text>
                            <Flex position="relative"
                                padding={{ base: '8px 12px', md: '12px 16px' }}
                                borderRadius='16px'
                                width="100%"
                                height="100%"
                                justifyContent='space-between'
                            >
                                <Box
                                    position="absolute"
                                    top="0"
                                    left="0"
                                    right="0"
                                    bottom="0"
                                    bg="gray"
                                    opacity="0.8"
                                    borderRadius='16px'
                                ></Box>
                                <Box
                                    position="absolute"
                                    top="0"
                                    left="0"
                                    right="0"
                                    bottom="0"
                                    borderRadius='16px'
                                    style={{ backdropFilter: 'blur(20px) brightness(1.2)' }}
                                ></Box>
                                <Flex wrap='nowrap' width='55%' alignItems='center' gap='10px'>
                                    <Text zIndex={9} color='#fff'>+91</Text>
                                    <Input variant='unstyled' placeholder='Mobile number' color="#fff" />
                                </Flex>
                                <Button width='40%' padding='12px 32px' borderRadius='32px' backgroundColor='#fff'>
                                    <Text opacity='0.7' color='#2659C3'>
                                        Search
                                    </Text>
                                </Button>
                            </Flex>
                        </Flex>
                        <Flex direction='column' justifyContent='space-between' alignItems='center' height='100%' display={{ base: 'none', lg: 'block' }}>
                            <Image height='40%' src={line} />
                            <Text>or</Text>
                            <Image height='40%' src={line} />
                        </Flex>
                        <Flex direction={{ base: 'row', lg: 'column' }} justifyContent='space-between' height='100%' marginTop='20px'>
                            <Button>
                                <Image src={googlePlay} />
                            </Button>
                            <Button>
                                <Image src={appStore} />
                            </Button>
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>
        </Box>
    )
}