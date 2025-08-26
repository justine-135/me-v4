import CardCustom from '@/components/CardCustom'
import TimelineCustom from '@/components/TimelineCustom'
import type { IEducationItem } from '@/types/Education'

interface IFormalEducationCard {
  education?: IEducationItem[]
}

export default function FormalEducationCard({ education }: IFormalEducationCard) {
  return (
    <CardCustom cardTitle="Formal education" variant={'none' as never} as="section">
      <TimelineCustom data={education || []} />
    </CardCustom>
  )
}
