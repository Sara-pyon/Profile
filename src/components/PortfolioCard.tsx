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
      <Card padding={5}
        background='yellow.200'
        width='600px'
        _hover={{transform:'scale(1.02)'}}
        transition='transform .4s'
        cursor='pointer'>
      <Link href={portfolio.url}
      target='_blank'>
            <Box width='100%' padding={5}
            bg='yellow.50'
            borderRadius={5}>
                <Image src={portfolio.image}
                width='100%'
                objectFit='cover'/>
            </Box>
            <CardFooter display='flex'
            flexDirection='column'
            rowGap={4}>
                <Flex columnGap={5}
                alignItems='center'>
                    <Heading>{portfolio.title}</Heading>
                    <Link href={portfolio.github}
                    target="_blank">
                        <Image src={images.github}
                        width='30px'
                        objectFit='cover'
                        height='30px'
                        _hover={{transform:'translateY(-5px)'}}
                        transition='transform .4s'
                        cursor='pointer' />
                    </Link>
                </Flex>
                <Flex columnGap={5}
                rowGap={2}
                flexWrap='wrap'>
                    {portfolio.skills.map(s =>
                    <PortfolioBadge name={s} />
                    )}
                </Flex>
            </CardFooter>
            </Link>
        </Card>
  )
}

export default PortfolioCard