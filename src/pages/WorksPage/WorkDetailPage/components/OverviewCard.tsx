import CardCustom from '@/components/CardCustom'
import { Typography } from '@/components/Typography'

export default function OverviewCard({ description }: { description?: string }) {
  return (
    <CardCustom cardTitle="Project overview">
      <Typography>{description}</Typography>
    </CardCustom>
  )
}
