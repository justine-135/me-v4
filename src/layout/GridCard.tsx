import CardCustom, { type ICardCustomProps } from '@/components/CardCustom'
import GridBoxItemLayout, { type IGrixBoxItemLayoutProps } from './GridBoxItemLayout'
import { type CardBodyProps } from '@chakra-ui/react'

interface IGridCardProps {
  gridBoxItemProps?: IGrixBoxItemLayoutProps
  cardCustomProps?: ICardCustomProps
  cardCustomBodyProps?: CardBodyProps
  children: React.ReactNode
}

export default function GridCard({
  gridBoxItemProps,
  cardCustomProps,
  cardCustomBodyProps,
  children,
}: IGridCardProps) {
  return (
    <GridBoxItemLayout {...gridBoxItemProps}>
      <CardCustom {...cardCustomProps} cardBodyProps={cardCustomBodyProps}>
        {children}
      </CardCustom>
    </GridBoxItemLayout>
  )
}
