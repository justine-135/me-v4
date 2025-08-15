import CardCustom from '@/components/CardCustom'
import { Typography } from '@/components/Typography'
import { ColorSwatch, DataList, Flex } from '@chakra-ui/react'

interface IDataCardProps {
  label: string
  value?: string
  color: string
}

const DataCard = ({ label, value, color }: IDataCardProps) => {
  return (
    <DataList.Root size="md" flex={1}>
      <DataList.Item gap={2}>
        <DataList.ItemLabel gap={2}>
          <ColorSwatch value={color} rounded="full" size="xs" /> <Typography>{label}</Typography>
        </DataList.ItemLabel>
        <DataList.ItemValue>{value}</DataList.ItemValue>
      </DataList.Item>
    </DataList.Root>
  )
}

interface IProjectOverview {
  problem?: string
  answer?: string
}

export default function ProjectOverview({ problem, answer }: IProjectOverview) {
  if (!problem || !answer) return null

  return (
    <CardCustom cardTitle="Project overview">
      <Flex gap={5}>
        <DataCard label="Problem" value={problem} color="red" />
        <DataCard label="Solution" value={answer} color="blue" />
      </Flex>
    </CardCustom>
  )
}
