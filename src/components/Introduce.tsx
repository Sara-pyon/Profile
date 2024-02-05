import { SimpleGrid, Show, Flex, Heading, Image, Text } from '@chakra-ui/react'
import images from '../constants/images'
import SectionHeading from './SectionHeading'

const Introduce = () => {
  return (
    <SimpleGrid columns={{base:1, md:2}}
    alignItems='center'
    justifyItems='center'
    templateColumns={{md:'400px 1fr'}}>
        <Show above="md">
            <Image src={images.profile1} borderRadius='100%' 
            width='300px'
            height='300px'
            objectFit='cover'/>
        </Show>
        <Flex flexDirection='column'
        rowGap={3}>
            <SectionHeading title='About Me' />
            <Text maxW='35em'>
            During my university years, I engaged in data analysis using Java and Python and conducted research in the field of Internet science. After graduating from a four-year university in Japan with a degree in Information and Mathematical Science, I developed an interest in web development. Through self-study, I've created several websites as practical exercises and I really enjoy it.
            </Text>
        </Flex>
    </SimpleGrid>
  )
}

export default Introduce