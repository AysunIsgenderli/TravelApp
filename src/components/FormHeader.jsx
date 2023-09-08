import { Input, Flex, Button, Text, Image } from "@chakra-ui/react"
import searchIcon from '../images/searchIcon.png'
import calendarIcon from '../images/calendarIcon.png'
import personIcon from '../images/personIcon.png'
import line from '../images/formline.png'

export const FormHeader = () => (
    <Flex backgroundColor={{ base: 'transparent', lg: 'gray' }} direction={{ base: 'column', lg: 'row' }} gap='20px' borderRadius='20px' marginY={{ base: '20px', lg: '50px' }} padding={{ base: '0', lg: '10px' }} alignItems='center' justifyContent='space-around' width='100%'  >
        <Flex alignItems='center' justifyContent='center' gap='10px' width={{ base: '100%', lg: '30%' }} height='100%' background='gray' borderRadius='3xl' padding='10px' >
            <Image src={searchIcon} />
            <Input maxWidth={{ base: '70%', sm: '45%', md: '30%', lg: '100%' }} cursor='pointer' placeholder='Search destinations, hotels' border='none' variant='unstyled' />
        </Flex>
        <Flex borderRadius='3xl' padding='10px' height='100%' justifyContent='space-between' width={{ base: '100%', lg: '30%' }} backgroundColor='gray'>
            <Flex justifyContent='center' alignItems='center' gap='10px' width='50%'>
                <Image src={calendarIcon} />
                <Input maxWidth={{ base: '50%', sm: '40%', md: '23%', lg: '100%' }} cursor='pointer' placeholder="Check in" border='none' variant='unstyled' />
            </Flex>
            <Image src={line} display={{ base: 'block', md: 'none' }} />
            <Flex justifyContent='center' alignItems='center' gap='10px' width='50%'>
                <Image src={calendarIcon} />
                <Input maxWidth={{ base: '50%', sm: '40%', md: '23%', lg: '100%' }} cursor='pointer' placeholder="Check out" border='none' variant='unstyled' />
            </Flex>
        </Flex>
        <Flex justifyContent='center' borderRadius='3xl' padding='10px' alignItems='center' gap='10px' width={{ base: '100%', lg: '20%' }} height='100%' backgroundColor='gray'>
            <Image src={personIcon} />
            <Input maxWidth={{ base: '41%', sm: '28%', md:'20%', lg: '100%' }} cursor='pointer' placeholder="1 room, 2 adults" border='none' variant='unstyled' />
        </Flex>

        <Button _hover={{ backgroundColor: "#1B4E7A", color: "#fff", transition: '0.5s' }} width={{ base: '100%', lg: '15%' }} borderRadius='28px' backgroundColor={{ base: '#2659C3', lg: '#fff' }} >
            <Text color={{ base: '#fff', lg: '#1B4E7A' }}>Search</Text>
        </Button>
    </Flex>
)