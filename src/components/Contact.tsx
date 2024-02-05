import { Box, Flex, Image, Link, List, ListIcon, ListItem} from "@chakra-ui/react"
import p from "../constants/profile";
import { BsTelephone } from "react-icons/bs";
import { IoMailOutline } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";
import images from "../constants/images";
import SectionHeading from "./SectionHeading";

const profile = p.profile;

const Contact = () => {
  return (
    <div className="section" id='contact'>
        <Box bg='yellow.50' paddingTop='2rem'>
            <div className="container">
                <Flex justifyContent='center' paddingBottom='3rem'>
                    <SectionHeading title="Contact Me"/>
                </Flex>
                <Flex  justifyContent='center' alignItems='center'>
                    <List display='flex' flexDirection={{base:'column',md:'row'}}
                    columnGap={5} rowGap={3}>
                        <ListItem display='flex'>
                            <ListIcon as={BsTelephone} color='yellow.500'
                            fontSize={25} />
                            {profile.tel}
                        </ListItem>
                        <ListItem display='flex'>
                            <ListIcon as={IoMailOutline} color='yellow.500'
                            fontSize={25} />
                            {profile.mail}
                        </ListItem>
                        <ListItem display='flex'>
                            <ListIcon as={IoLocationOutline} color='yellow.500'
                            fontSize={25} />
                            {profile.adress}
                        </ListItem>
                    </List>
                </Flex>
                <Flex justifyContent='center'
                paddingBlock='5rem'>
                    <Link href={profile.github}>
                        <Image src={images.github}
                        width='40px' height='40px'
                        _hover={{transform:'translateY(-5px)'}}
                        transition='transform .4s' />
                    </Link>
                </Flex>
            </div>
        </Box>
    </div>
  )
}

export default Contact