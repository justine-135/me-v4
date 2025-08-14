import CardCustom from '@/components/CardCustom'
import { Typography } from '@/components/Typography'

export default function IntroductionCard({ intro }: { intro?: string }) {
  return (
    <CardCustom cardTitle="My continuous education and learning">
      <Typography>{intro}</Typography>
    </CardCustom>
  )
}
