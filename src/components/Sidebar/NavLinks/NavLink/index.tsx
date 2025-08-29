import { List } from '@chakra-ui/react/list'
import { useLocation, useNavigate } from 'react-router'
import { Flex } from '@chakra-ui/react/flex'
import { Box } from '@chakra-ui/react/box'
import { Button } from '@chakra-ui/react/button'
import useThemeValues from '@/hooks/useThemeValues'
import { Text } from '@chakra-ui/react'
import { useSidebarDrawerContext } from '@/hooks/useSidebarDrawerContext'
import { motion } from 'motion/react'

const MotionListItem = motion.create(List.Item)

interface INavLinkProps {
  icon: string
  label: string
  id: string
  index: number
}

export default function NavLink({ icon, label, id, index }: INavLinkProps) {
  const location = useLocation()
  const navigate = useNavigate()
  const { backgroundAccent } = useThemeValues()
  const { setOpen, open } = useSidebarDrawerContext()

  const path = `/${id}`
  const isPath = path === location.pathname

  const handleNavigate = () => {
    navigate(path)
    setOpen?.(!open)
  }

  return (
    <MotionListItem
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.2,
        delay: index * 0.05,
      }}
    >
      <Button
        onClick={handleNavigate}
        variant="plain"
        background={isPath ? backgroundAccent : ''}
        w="full"
        borderRadius="0.75rem"
        _hover={{ bg: backgroundAccent }}
      >
        <Flex spaceX="4" w="100%">
          <Box>{icon}</Box>
          <Text fontWeight={400}>{label}</Text>
        </Flex>
      </Button>
    </MotionListItem>
  )
}
