import { Typography } from '@/components/Typography'
import { aboutDetail } from '@/data/about'
import { Box } from '@chakra-ui/react/box'
import { IntroductionCard } from './IntroductionCard'
import { ExperienceCard } from './ExperienceCard'
import { SkillsCard } from './SkillsCard'
import { InterestsCard } from './InterestsCard'
import { Stack } from '@chakra-ui/react/stack'

export default function AboutPage() {
  const { name, job_title, intros, interests, experiences, skills } = aboutDetail

  return (
    <Stack gap={4}>
      <Typography variant="heading">About</Typography>
      <Box columnCount={{ base: 1, md: 2 }} columnGap={4}>
        <IntroductionCard name={name} jobTitle={job_title} intros={intros} />
        <ExperienceCard experiences={experiences} />
        <SkillsCard skills={skills} />
        <InterestsCard interests={interests} />
      </Box>
    </Stack>
  )
}
