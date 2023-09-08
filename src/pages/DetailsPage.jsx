import { CardsSectionTwo, Footer, Header, MobileFooter, TravelApp } from "../components"
import { Box } from '@chakra-ui/react'
import headerbg from '../images/headerbg2.png'

export const DetailsPage = () => {
    return (
        <Box >
            <Header headerbg={headerbg} />
            <CardsSectionTwo />
            <TravelApp />
            <Footer footerStyle={{ marginTop: "-20px" }} />
            <MobileFooter />
        </Box>

    )
}