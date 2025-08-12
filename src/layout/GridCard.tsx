import CardCustom, { type ICardCustomProps } from '@/components/CardCustom'
import GridBoxItemLayout, { type IGrixBoxItemLayoutProps } from './GridBoxItemLayout'

interface IGridCardProps {
  gridBoxItemProps?: IGrixBoxItemLayoutProps
  cardCustomProps?: ICardCustomProps
  children: React.ReactNode
}

export default function GridCard({ gridBoxItemProps, cardCustomProps, children }: IGridCardProps) {
  return (
    <GridBoxItemLayout {...gridBoxItemProps}>
      <CardCustom {...cardCustomProps}>{children}</CardCustom>
    </GridBoxItemLayout>
  )
}
