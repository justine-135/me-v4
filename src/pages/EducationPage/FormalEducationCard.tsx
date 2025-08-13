import TimelineCustom from '@/components/TimelineCustom'
import GridCard from '@/layout/GridCard'
import type { IEducationItem } from '@/types/Education'

interface IFormalEducationCard {
  education?: IEducationItem[]
}

export default function FormalEducationCard({ education }: IFormalEducationCard) {
  return (
    <GridCard cardCustomProps={{ cardTitle: 'Formal education' }}>
      <TimelineCustom data={education || []} />
    </GridCard>
  )
}
