import { Text, Box, VStack, Heading } from "@chakra-ui/react"
import advisorBg from '../images/advisor-bg.png'

export const Advisors = () => {
    return (
        <Box
            background={`url(${advisorBg}) no-repeat center center fixed`}
            backgroundSize="cover"
            h="395px" 
            display="flex"
            alignItems="center"
            justifyContent="center"
            borderRadius='20px'
        >
            <VStack spacing={4} p={4} color='#fff'>
                {/* Add your content here */}
                <Heading fontSize={{base:'30px', lg:"56px"}} fontWeight="700" fontFamily='Helvetica'>
                    Plan your trip with travel expert
                </Heading>
                <Text fontSize={{base:'20px', lg:"32px"}} >
                    Our professional advisors can craft your perfect itinerary
                </Text>
            </VStack>
        </Box>
    )
}