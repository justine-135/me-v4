import AvatarCustom from '@/components/AvatarCustom'
import CardCustom from '@/components/CardCustom'
import { Typography } from '@/components/Typography'
import { HStack, Stack } from '@chakra-ui/react'

const NameCard = ({ name }: { name: string }) => {
  return (
    <CardCustom rounded="lg" cardBodyProps={{ p: 2 }}>
      <HStack>
        <AvatarCustom fallback={name} size="sm" />
        <Typography>{name}</Typography>
      </HStack>
    </CardCustom>
  )
}

interface ITeamCardProps {
  people?: string[]
}

export default function TeamCard({ people }: ITeamCardProps) {
  return (
    <CardCustom cardTitle="🧑‍🤝‍🧑 Team & collaboration">
      <Typography>The talented people who made this project possible</Typography>
      <Stack mt={4} gap={4}>
        {people?.map((name, idx) => {
          return <NameCard name={name} key={idx} />
        })}
      </Stack>
    </CardCustom>
  )
}
