import { Text } from '@chakra-ui/react/text'
import { List } from '@chakra-ui/react/list'
import styles from './Navlink.module.scss'
import { Link, useLocation } from 'react-router'
import { Flex } from '@chakra-ui/react/flex'
import { Box } from '@chakra-ui/react/box'

interface INavLinkProps {
  icon: string
  label: string
  id: string
}

export default function NavLink({ icon, label, id }: INavLinkProps) {
  const location = useLocation()
  const path = `/${id}`
  const isPath = path === location.pathname

  return (
    <List.Item>
      <Link to={path} className={styles.link} data-active={isPath}>
        <Flex spaceX="4" w="100%">
          <Box>{icon}</Box>
          <Text fontWeight="500">{label}</Text>
        </Flex>
      </Link>
    </List.Item>
  )
}
