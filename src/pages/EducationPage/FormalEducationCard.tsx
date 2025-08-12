import TimelineCustom from '@/components/TimelineCustom'
import GridCard from '@/layout/GridCard'

interface IFormalEducationCard {
  education: {
    subtitle: string
    title: string
    date: string
    details: string[]
    badges: string[]
  }[]
}

export default function FormalEducationCard({ education }: IFormalEducationCard) {
  return (
    <GridCard cardCustomProps={{ cardTitle: 'Formal education' }}>
      <TimelineCustom data={education} />
    </GridCard>
  )
}
