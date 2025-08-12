import { Typography } from '@/components/Typography'
import GridCard from '@/layout/GridCard'

export default function IntroductionCard({ intro }: { intro: string }) {
  return (
    <GridCard cardCustomProps={{ cardTitle: 'My continuous education and learning' }}>
      <Typography>{intro}</Typography>
    </GridCard>
  )
}
