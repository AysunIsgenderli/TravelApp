import { Container } from "@chakra-ui/react"
import { PopularBeach, RecentlyViewed, InclusivePackage, Honeymoon, TopCategoriesMobile } from '../components'

export const CardsSection = () => {
    return (
        <Container maxWidth={{base:'95%', md:'90%'}} margin={{base:'0 auto', lg:'-230px 0 0 auto'}}>
            <TopCategoriesMobile/>
            <PopularBeach />
            <RecentlyViewed />
            <InclusivePackage />
            <Honeymoon />
        </Container>
    )
}