import portfolio from "../constants/portfolio"
import {Flex} from "@chakra-ui/react"
import SectionHeading from "./SectionHeading"
import Showcase from "./Showcase"

const Portfolio = () => {
  return (
    <div>
        <div className="container section" id='portfolio'>
            <Flex justifyContent='center' paddingBottom={{base:'3rem',md:'4rem'}}>
                <SectionHeading title="Portfolio" />
            </Flex>
        </div>
        <Flex flexDirection='column' rowGap='5rem' paddingInline={1}>
            <Showcase title="Portfolio using React" 
            portfolio={portfolio.portfolioReact}/>
            <Showcase title="Other Portfolio" 
            portfolio={portfolio.portfolios}/>
        </Flex>
    </div>
  )
}

export default Portfolio