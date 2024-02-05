import PortfolioCard from "./PortfolioCard"
import portfolio from "../constants/portfolio"
import {Flex, Heading} from "@chakra-ui/react"
import styles from './ScrollCards.module.css'
import SectionHeading from "./SectionHeading"

const Portfolio = () => {
  return (
    <div>
        <div className="container section" id='portfolio'>
            <Flex justifyContent='center' paddingBottom='3rem'>
                <SectionHeading title="Portfolio" />
            </Flex>
        </div>
        <Flex flexDirection='column' rowGap='5rem' paddingInline={1}>
            <div>
                <Heading className={styles.scrollHeading}
                fontSize='1.8rem'>
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
                fontSize='1.8rem'>
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