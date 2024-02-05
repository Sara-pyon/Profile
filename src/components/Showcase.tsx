import { Flex, Heading } from '@chakra-ui/react'
import styles from './ScrollCards.module.css'
import PortfolioCard from './PortfolioCard'
import { Portfolio } from '../constants/portfolio'

interface Props{
    title: string;
    portfolio: Portfolio[];
}

const Showcase = ({portfolio,title}:Props) => {
  return (
    <div>
        <Heading className={styles.scrollHeading}
        fontSize='1.7rem'>
           {title} </Heading>
        <Flex columnGap={5} className={styles.scroll}
        height='100%' padding={2}>
            {portfolio.map(p =>
                <PortfolioCard key={p.title}
                portfolio={p} />
            )}
        </Flex>
    </div>
  )
}

export default Showcase