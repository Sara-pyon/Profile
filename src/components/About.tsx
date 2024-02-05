import { Flex, Heading, Image, SimpleGrid} from "@chakra-ui/react"
import AboutEducation from "./AboutEducation"
import Introduce from "./Introduce"
import profile from "../constants/profile"


const About = () => {
  return (
    <div className="container section" id="about">
       <Flex flexDirection='column'
       rowGap='4rem'>
           <Introduce />
            <AboutEducation />
            <Flex
            flexDirection='column'
            rowGap={5}>
                <Heading fontSize='1.7rem'>My skills are</Heading>
                <SimpleGrid columns={{base:5,sm:7,md:10,lg:profile.skills.length}}
                rowGap={5}>
                    {profile.skills.map(s => 
                        <Image key={s.name}
                        src={s.icon} width='50px'
                        objectFit='cover'
                        _hover={{transform:'translateY(-5px)'}}
                        transition='transform .4s'/>)}
                </SimpleGrid>
            </Flex>
       </Flex>
    </div>
  )
}

export default About