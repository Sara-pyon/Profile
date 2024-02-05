import PortfolioCard from "./PortfolioCard"
import portfolio from "../constants/portfolio"

const Portfolio = () => {
  return (
    <div className="component section" >
        {portfolio.portfolioReact.map(p => 
         <PortfolioCard portfolio={p} />
        )}
    </div>
  )
}

export default Portfolio