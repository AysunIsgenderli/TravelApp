import { Box } from "@chakra-ui/react"
import { Header, Footer, CardsSection, MobileFooter } from "../components"
import headerbg from '../images/image2.png'


export const HomePage = () => {
    return (
        <Box>
            <Header headerbg={headerbg} showForm />
            <CardsSection />
            <Footer />
            <MobileFooter />
        </Box>
    )
}