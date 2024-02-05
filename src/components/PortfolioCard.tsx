import { Box, Card, CardFooter, Flex, Heading, Image, Link } from "@chakra-ui/react"
import PortfolioBadge from "./PortfolioBadge"
import { Portfolio } from "../constants/portfolio"
import images from "../constants/images"

interface Props{
    portfolio: Portfolio;
}

const PortfolioCard = ({portfolio}:Props) => {
    if(!portfolio.image) return null
    
  return (
      <Box>
          <Card padding={2}
            background='yellow.200' width={{base:'280px',sm:'400px',md:'500px'}}
            _hover={{transform:'scale(1.02)'}}
            transition='transform .4s'
            cursor='pointer'>
                <Box padding={3}  bg='yellow.50' borderRadius={5}>
                    <Link href={portfolio.url} target='_blank'
                    _hover={{textDecoration:'none'}}>
                    <Image src={portfolio.image}
                    width='100%' objectFit='cover'/>
                    </Link>
                </Box>
                <CardFooter display='flex'
                flexDirection='column' rowGap={4}>
                    <Flex columnGap={5} alignItems='center'>
                        <Heading fontSize='2xl'>{portfolio.title}</Heading>
                        {portfolio.github?
                        <Link href={portfolio.github}
                        target="_blank">
                            <Image src={images.github}
                            width='30px' height='30px'
                            objectFit='cover' cursor='pointer'
                            _hover={{transform:'translateY(-5px)'}}
                            transition='transform .4s'
                             />
                        </Link> : null
                        }
                    </Flex>
                    <Flex columnGap={5}
                    rowGap={2}
                    flexWrap='wrap'>
                        {portfolio.skills.map(s =>
                        <PortfolioBadge key={s}
                        name={s} />
                        )}
                    </Flex>
                </CardFooter>
            </Card>
      </Box>
  )
}

export default PortfolioCard