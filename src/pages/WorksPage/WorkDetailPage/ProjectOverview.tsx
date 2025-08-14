import CardCustom from '@/components/CardCustom'
import { DataList, HStack } from '@chakra-ui/react'

const DataCard = ({ label, value }: { label?: string; value?: string }) => {
  return (
    <DataList.Root size="md">
      <DataList.Item>
        <DataList.ItemLabel>{label}</DataList.ItemLabel>
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
  return (
    <CardCustom cardTitle="Project overview">
      <HStack>
        <DataCard label="Problem" value={problem} />
        <DataCard label="Solution" value={answer} />
      </HStack>
    </CardCustom>
  )
}
