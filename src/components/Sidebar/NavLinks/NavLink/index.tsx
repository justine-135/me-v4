import { List } from '@chakra-ui/react/list'
import { useLocation, useNavigate } from 'react-router'
import { Flex } from '@chakra-ui/react/flex'
import { Box } from '@chakra-ui/react/box'
import { Button } from '@chakra-ui/react/button'
import useThemeValues from '@/hooks/useThemeValues'
import { Typography } from '@/components/Typography'

interface INavLinkProps {
  icon: string
  label: string
  id: string
}

export default function NavLink({ icon, label, id }: INavLinkProps) {
  const location = useLocation()
  const navigate = useNavigate()
  const { backgroundAccent } = useThemeValues()

  const path = `/${id}`
  const isPath = path === location.pathname

  const handleNavigate = () => {
    navigate(path)
  }

  return (
    <List.Item>
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
          <Typography>{label}</Typography>
        </Flex>
      </Button>
    </List.Item>
  )
}
