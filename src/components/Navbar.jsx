import { Flex, Image, Heading, Spacer, Button, Box, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react"
import barsImg from '../images/bars.png'
import { DetailsPage } from '../pages'
import { Link } from 'react-router-dom';
// import { useNavigate } from "react-router-dom";


export const Navbar = () => {
    return (
        <Flex minWidth='max-content' alignItems='center' justifyContent='space-between' gap='2' fontFamily='Helvetica'>
            <Button w='30%' display={{ base: 'block', md: 'none' }}>
                <Image src={barsImg} />
            </Button>
            <Heading maxWidth='100%' fontSize={{ base: '24px', lg: '32px' }}>trvxl.</Heading>
            <Box w='30%' h='1px' />
            <Flex gap='16px' marginLeft='auto' display={{ base: 'none', md: 'flex' }}>
                <Link style={{borderBottom:'1px solid'}} to='/' padding='8px'>Home</Link>
                <Link to='/details' padding='8px'>Stays</Link>
                <Link padding='8px'>Flights</Link>
                <Link padding='8px'>Packages</Link>
                <Link padding='8px'>Sign Up</Link>
            </Flex>
        </Flex>
    )
}