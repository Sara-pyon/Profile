import { Box, Flex, Heading, Image} from '@chakra-ui/react'
import images from '../constants/images'
const Home = () => {
  return (
    <Box bg={{base:'yellow.50', md:'none'}}
    paddingBottom={{base:'2rem', md:'none'}}>
      <div className='container'>
          <div id='home'>
            <Flex justifyContent='right'
            position='relative'
            rowGap={5}
            flexDirection={{base:'column', md:'row'}}
            alignItems='center'
            marginTop={{base:8, md:20}}>
                <Heading fontSize={{base:'3xl', sm:'5xl', lg:'6xl'}}
                bg={{base:'none', md:'yellow.300'}}
                width='100%'
                zIndex={{base:'0', md:'-1'}}
                padding={{base:'1rem', md:'8rem 2rem'}}
                position={{base:'initial', md: 'absolute'}}
                left='0'
                top='0.5rem'>
                    Hi,<br/>I'm Sara Komatsu
                </Heading>
                <Box
                    maxW='330px'>
                    <Image
                    src={images.profile2}
                    justifySelf='end'
                    width='100%'/>
                </Box>
            </Flex>
          </div>
      </div>
    </Box>
  )
}

export default Home