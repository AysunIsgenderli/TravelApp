import { Flex, Text, Link, Button, Icon } from "@chakra-ui/react"
import { BiLogoFacebookSquare, BiLogoInstagram, BiLogoTwitter, BiLogoYoutube } from "react-icons/bi";


export const Footer = ({ footerStyle }) => {
    return (
        <Flex display={{base:'none', md:'flex'}} direction={{md:'column', lg:"row"}} alignItems={{md:'center', lg:'flex-start'}}  justifyContent='space-between' padding={{base:'10px 20px', lg:'50px 100px'}} backgroundColor='#141414' color='#fff' {...footerStyle}>
            <Text width={{base:'100%', md:'25%'}} fontSize='32px' fontWeight='700' fontFamily='Helvetica' marginBottom={{base:'20px'}}>Trxvl.</Text>
            <Flex width={{base:'100%', md:'75%'}} justifyContent='space-between' direction={{base:'row', md:'column'}} alignItems={{base:'flex-end', md:'normal'}} gap='25px'>
                <Flex direction={{base:'column', md:'row'}} justifyContent='space-between'>
                    <Flex direction='column' gap='15px' fontSize='13px'>
                        <Link href='#'>
                            Seslendirme ve Alt Yazı
                        </Link>
                        <Link href='#'>
                            Medya Merkezi
                        </Link>
                        <Link href='#'>
                            Gizlilik
                        </Link>
                        <Link href='#'>
                            Bize Ulaşın
                        </Link>
                    </Flex>
                    <Flex direction='column' gap='15px' fontSize='13px'>
                        <Link href='#'>
                            Sesli Betimleme
                        </Link>
                        <Link href='#'>
                            Yatırımcı İlişkileri
                        </Link>
                        <Link href='#'>
                            Yasal Hükümler
                        </Link>

                    </Flex>
                    <Flex direction='column' gap='15px' fontSize='13px'>
                        <Link href='#'>
                            Yardım Merkezi
                        </Link>
                        <Link href='#'>
                            İş İmkanları
                        </Link>
                        <Link href='#'>
                            Çerez Tercihleri
                        </Link>

                    </Flex>
                    <Flex direction='column' gap='15px' fontSize='13px'>
                        <Link href='#'>
                            Hediyye Kartları
                        </Link>
                        <Link href='#'>
                            Kullanım Koşulları
                        </Link>
                        <Link href='#'>
                            Kurumsal Bilgiler
                        </Link>
                    </Flex>
                </Flex>
                <Flex  justifyContent='space-between' direction={{base:'column-reverse', md:'row'}} gap={{base:'30px'}} >
                    <Flex direction='column' alignItems='start'>
                        <Button fontSize='13px' border='1px solid #fff' _hover={{color:"#000", backgroundColor:'#fff', transition:'0.4s'}}>Hizmet Kodu</Button>
                        <Text fontSize='11px' marginTop='20px'>© 1997-2021 Netflix, Inc.</Text>
                    </Flex>
                    <Flex gap='10px' fontSize='24px' >
                        <Icon as={BiLogoFacebookSquare} _hover={{ color: '#1B4E7A' }} />
                        <Icon as={BiLogoInstagram} _hover={{ color: '#1B4E7A' }} />
                        <Icon as={BiLogoTwitter} _hover={{ color: '#1B4E7A' }} />
                        <Icon as={BiLogoYoutube} _hover={{ color: '#1B4E7A' }} />
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    )
}