import { Link, Text } from "@chakra-ui/react"

const Logo = () => {
  return (
    <Link _hover={{textDecoration: 'none'}}
    href="#contact">
      <Text fontFamily='Lobster' fontSize='2xl'
            color='yellow.500'>
          Sara
      </Text>
    </Link>
  )
}

export default Logo