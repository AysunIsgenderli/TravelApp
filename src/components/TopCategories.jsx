import { Text, Box, Flex, Image, useBreakpointValue, Button } from "@chakra-ui/react"
import beachIcon from '../images/beachIcon.png'
import desertIcon from '../images/desertIcon.png'
import mountainIcon from '../images/mountainIcon.png'
import citiesIcon from '../images/citiesIcon.png'
import houseIcon from '../images/houseIcon.png'
import countrysideIcon from '../images/countrysideIcon.png'
import campIcon from '../images/campIcon.png'
import castleIcon from '../images/castleIcon.png'
import skiingIcon from '../images/skiingIcon.png'
import tropicalIcon from '../images//tropicalIcon.png'
import { Carousel } from "react-responsive-carousel"
import { Global, css } from "@emotion/react"


export const TopCategories = ({ showForm }) => {
    const slidePercentage = useBreakpointValue({ base: 100, md: 50, lg: 10, xl: 20 });

    return (
        <Box marginTop={!showForm ? '80px' : 0} display={{ base: 'none', lg: 'block' }}>
            <Text fontSize='32px' fontWeight='700' fontFamily='Helvetica' marginBottom='30px' color={{ base: '#000', md: '#fff' }}>Top categories</Text>
            <Flex width='100%' flexWrap='wrap' gap='10px' justifyContent='space-between' alignItems='center'>
                {/* <Global styles={css`.carousel .slide{display:flex; align-items:center;}`}/> */}
                    <Carousel  transitionTime={1000} interval={3000} centerMode showThumbs={false} infiniteLoop centerSlidePercentage={slidePercentage} showStatus={false} showIndicators={false}>
                        <Flex direction='column' alignItems='center' gap='16px'  >
                            <Image src={beachIcon} />
                            <Text>Beaches</Text>
                        </Flex>
                        <Flex direction='column' alignItems='center' gap='16px'>
                            <Image src={desertIcon} />
                            <Text>Deserts</Text>
                        </Flex>
                        <Flex direction='column' alignItems='center' gap='16px' >
                            <Image src={mountainIcon} />
                            <Text>Mountains</Text>
                        </Flex>
                        <Flex direction='column' alignItems='center' gap='16px'>
                            <Image src={citiesIcon} />
                            <Text>Iconic Cities</Text>
                        </Flex>
                        <Flex direction='column' alignItems='center' gap='16px'>
                            <Image src={houseIcon} />
                            <Text>Houseboats</Text>
                        </Flex>
                        <Flex direction='column' alignItems='center' gap='16px' >
                            <Image src={countrysideIcon} />
                            <Text>Countryside</Text>
                        </Flex>
                        <Flex direction='column' alignItems='center' gap='16px' >
                            <Image src={campIcon} />
                            <Text>Camping</Text>
                        </Flex>
                        <Flex direction='column' alignItems='center' gap='16px' >
                            <Image src={castleIcon} />
                            <Text>Castles</Text>
                        </Flex>
                        <Flex direction='column' alignItems='center' gap='16px' >
                            <Image src={skiingIcon} />
                            <Text>Skiing</Text>
                        </Flex>
                        <Flex direction='column' alignItems='center' gap='16px' >
                            <Image src={tropicalIcon} />
                            <Text>Tropical</Text>
                        </Flex>


                    </Carousel>
               



            </Flex>
        </Box>
    )
}