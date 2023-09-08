import { Box, Text, Container } from "@chakra-ui/react"
import { Navbar } from "./Navbar"
import { TopCategories } from "./TopCategories";
import { motion } from "framer-motion";
import { FormHeader } from "./FormHeader";



export const Header = ({ headerbg, showForm }) => {
    console.log(showForm);
    return (
        <motion.div initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }}>
            <Box padding='20px 0 110px 0' fontFamily='Helvetica' color='#fff' height={{base:'470px', lg:'860px'}} backgroundImage={`linear-gradient(to bottom, transparent 90%, white 98%), url(${headerbg})`} backgroundBlendMode='normal, overlay' backgroundPosition='center' backgroundRepeat='no-repeat' backgroundSize='cover'>
                <Container maxWidth={{base:'98%', xl:'90%'}} margin='0 auto'>
                    <Navbar />
                    <Box maxWidth={{base:'98%', xl:'90%'}} margin='0 auto'>
                        <Text fontFamily='Helvetica' marginY='20px'  fontSize={{base:'32px', xl:'72px'}} fontWeight='700' width={{base:'100%', xl:'50%'}}>The whole world awaits.</Text>
                            {showForm ? <FormHeader /> : null}
                        <TopCategories  />
                    </Box>
                </Container>
            </Box>
        </motion.div >
    )
}