import { Text, Box, Flex, Image, useBreakpointValue } from "@chakra-ui/react"
import beachMobile from '../images/beachMobile.png'
import desertMobile from '../images/desertMobile.png'
import mountainMobile from '../images/mountainMobil.png'
import citiesMobile from '../images/citiesMobile.png'
import houseMobile from '../images/houseMobile.png'
import { Carousel } from "react-responsive-carousel"

export const TopCategoriesMobile = ({ showForm }) => {
    const slidePercentage = useBreakpointValue({ base: 25, md: 50, lg: 10, xl: 10 });

    return (
        <Box marginTop={!showForm ? '80px' : 0} display={{ base: 'block', lg: 'none' }}>
            <Text fontSize='24px' fontWeight='700' fontFamily='Helvetica' marginBottom='30px' color='#000'>Top categories</Text>
            <Carousel selectedItem={10} showArrows={false} transitionTime={1000} interval={3000} centerMode showThumbs={false} infiniteLoop centerSlidePercentage={slidePercentage} showStatus={false} showIndicators={false}>
                <Flex direction='column' alignItems='center'   >
                    <Image src={beachMobile} />
                    <Text>Beaches</Text>
                </Flex>
                <Flex direction='column' alignItems='center' >
                    <Image src={desertMobile} />
                    <Text>Deserts</Text>
                </Flex>
                <Flex direction='column' alignItems='center'  >
                    <Image src={mountainMobile} />
                    <Text>Mountains</Text>
                </Flex>
                <Flex direction='column' alignItems='center' >
                    <Image src={citiesMobile} />
                    <Text>Iconic Cities</Text>
                </Flex>
                <Flex direction='column' alignItems='center' >
                    <Image src={houseMobile} />
                    <Text>Houseboats</Text>
                </Flex>
                <Flex direction='column' alignItems='center'  >
                    <Image src={beachMobile} />
                    <Text>Countryside</Text>
                </Flex>
                <Flex direction='column' alignItems='center'  >
                    <Image src={desertMobile} />
                    <Text>Camping</Text>
                </Flex>
                <Flex direction='column' alignItems='center'  >
                    <Image src={mountainMobile} />
                    <Text>Castles</Text>
                </Flex>
                <Flex direction='column' alignItems='center'  >
                    <Image src={houseMobile} />
                    <Text>Skiing</Text>
                </Flex>
                <Flex direction='column' alignItems='center'  >
                    <Image src={beachMobile} />
                    <Text>Tropical</Text>
                </Flex>

            </Carousel>
            <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.4">
                    <path d="M10.59 3.27197C10.215 3.64703 10.0044 4.15565 10.0044 4.68597C10.0044 5.2163 10.215 5.72492 10.59 6.09997L20.49 16L10.59 25.9C10.2257 26.2772 10.0241 26.7824 10.0286 27.3068C10.0332 27.8312 10.2435 28.3328 10.6143 28.7036C10.9851 29.0744 11.4868 29.2848 12.0112 29.2893C12.5356 29.2939 13.0408 29.0923 13.418 28.728L24.732 17.414C25.1069 17.0389 25.3175 16.5303 25.3175 16C25.3175 15.4696 25.1069 14.961 24.732 14.586L13.418 3.27197C13.0429 2.89703 12.5343 2.6864 12.004 2.6864C11.4736 2.6864 10.965 2.89703 10.59 3.27197Z" fill="white" />
                </g>
            </svg>
        </Box>
    )
}