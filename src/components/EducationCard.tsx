import { Box, Card, Flex, Heading, Text } from '@chakra-ui/react'
import { ReactNode } from 'react';

interface Props{
    icon: ReactNode;
    title: string;
    location: string;
    term: string;
}

const EducationCard = ({title,location,term,icon}:Props) => {
  return (
    <Card bg='yellow.50' padding={4}>
        <Flex flexDirection='column'
        rowGap={2}>
            <Box width='30px' height='30px' bg='white'
            display='flex'
            justifyContent='center'
            alignItems='center'
            boxShadow='base'
            borderRadius={5}>
                {icon}
            </Box>
            <Heading fontSize='1.4rem'>
                {title}
            </Heading>
            <div>
                <Text opacity='0.8'>{location}</Text>
                <Text opacity='0.8'>{term}</Text>
            </div>
        </Flex>
    </Card>
  )
}

export default EducationCard