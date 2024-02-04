import { Badge } from '@chakra-ui/react'

interface Props{
  name: string;
}

const PortfolioBadge = ({name}:Props) => {
  return (
    <Badge bg='yellow.50'
    height='fit-content'
    width='fit-content'
    padding='5px 15px' 
    borderRadius={20}>
      {name}
    </Badge>
  )
}

export default PortfolioBadge