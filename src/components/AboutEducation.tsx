import EducationCard from './EducationCard'
import profile from '../constants/profile'
import { SimpleGrid } from '@chakra-ui/react'

const AboutEducation = () => {
  return (
      <SimpleGrid columns={{base:1,md:2,lg:3,xl:4 }}
      rowGap={3} columnGap={3}>
      {profile.profileEducation.map(e =>
          <EducationCard key={e.title}
          title={e.title}
          location={e.location}
          term={e.term}
          icon={<e.icon size={20}/>}
           />)}
      </SimpleGrid>
  )
}

export default AboutEducation