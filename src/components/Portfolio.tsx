import PortfolioCard from "./PortfolioCard"
import portfolio from "../constants/portfolio"
import { Box, Flex, Heading} from "@chakra-ui/react"
import styles from './ScrollCards.module.css'

const Portfolio = () => {
  return (
    <div>
        <div className="container section" id='portfolio'>
            <Flex justifyContent='center' paddingBottom='2rem'>
                <Box width='fit-content' position='relative'>
                    <Heading>Portfolio</Heading>
                    <Box width='100%' height='5px' bg='yellow.300'
                    position='absolute'
                    bottom={0}/>
                </Box>
            </Flex>
        </div>
        <Flex flexDirection='column' rowGap='3rem' paddingInline={1}>
            <div>
                <Heading className={styles.scrollHeading}
                fontSize='2rem'>
                    Portfolio using React</Heading>
                <Flex columnGap={5} className={styles.scroll}
                height='100%' padding={2}>
                    {portfolio.portfolioReact.map(p =>
                        <PortfolioCard key={p.title}
                        portfolio={p} />
                    )}
                </Flex>
            </div>
            <div>
                <Heading className={styles.scrollHeading}
                fontSize='2rem'>
                    Other Portfolio </Heading>
                <Flex columnGap={5} className={styles.scroll}
                height='100%' padding={2}>
                    {portfolio.portfolios.map(p =>
                        <PortfolioCard key={p.title}
                        portfolio={p} />
                    )}
                </Flex>
            </div>
        </Flex>
    </div>
  )
}

export default Portfolio