import { Flex, Image, Text } from "@chakra-ui/react"
import homeBtn from '../images/homeButton.png'
import staysBtn from '../images/staysButton.png'
import packagesBtn from '../images/packagesButton.png'
import flightsBtn from '../images/flightsButton.png'


export const MobileFooter = () => {
    return (
        <Flex paddingY='15px' display={{ base: 'flex', md: 'none' }} alignItems='center' justifyContent='space-between' maxWidth='78%' margin='0 auto' color='#000' >
            <Flex direction='column' alignItems='center' gap='7px'>
                <Image src={homeBtn} width='24px' height='24px' />
                <Text fontSize='12px' color='#2659C3'>Home</Text>
            </Flex>
            <Flex direction='column' alignItems='center' gap='7px' opacity='0.4'>
                <Image src={staysBtn} width='24px' height='24px' />
                <Text fontSize='12px'>Stays</Text>
            </Flex>
            <Flex direction='column' alignItems='center' gap='7px' opacity='0.4'>
                <Image src={packagesBtn} width='24px' height='24px' />
                <Text fontSize='12px'>Packages</Text>
            </Flex>
            <Flex direction='column' alignItems='center' gap='7px' opacity='0.4'>
                <Image src={flightsBtn} width='24px' height='24px' />
                <Text fontSize='12px'>Flights</Text>
            </Flex>
        </Flex>
    )
}