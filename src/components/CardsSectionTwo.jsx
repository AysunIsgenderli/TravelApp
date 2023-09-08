import { Container } from "@chakra-ui/react"
import { TopDestination, Offers, PropertyType, Advisors, Community } from '../components'

export const CardsSectionTwo = () => {
    return (
        <Container maxWidth='90%' margin={{base:'0 auto', lg:'-230px 0 0 auto'}}>
            <TopDestination />
            <Offers />
            <PropertyType />
            <Advisors />
            <Community />
        </Container>

    )
}