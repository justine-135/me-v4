import { Typography } from '@/components/Typography'
import CardCustom from '@/components/CardCustom'

export default function IntroductionCard({ intro }: { intro?: string }) {
  return (
    <CardCustom cardTitle="My works">
      <Typography>{intro}</Typography>
    </CardCustom>
  )
}
