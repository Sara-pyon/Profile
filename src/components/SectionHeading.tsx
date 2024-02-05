import { Box, Heading } from "@chakra-ui/react"

interface Props{
    title: string
}

const SectionHeading = ({title}:Props) => {
  return (
    <Box width='fit-content' position='relative'>
        <Heading>{title}</Heading>
        <Box width='100%' height='5px' bg='yellow.300'
        position='absolute'
        bottom={0}/>
    </Box>
  )
}

export default SectionHeading