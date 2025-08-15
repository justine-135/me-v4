import { Typography } from '@/components/Typography'
import CardCustom from '@/components/CardCustom'

export default function IntroductionCard({ intro }: { intro?: string }) {
  return (
    <CardCustom cardTitle="My works" as="section">
      <Typography>{intro}</Typography>
    </CardCustom>
  )
}
