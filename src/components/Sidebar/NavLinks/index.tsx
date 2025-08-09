import { List } from '@chakra-ui/react/list'
import NavLink from './NavLink'

const NAV_ROUTES = [
  { id: '', label: 'Home', icon: '🏠' },
  { id: 'about', label: 'About me', icon: '👋' },
  { id: 'works', label: 'My works', icon: '💼' },
  { id: 'education', label: 'Education', icon: '🎓' },
  { id: 'contact', label: 'Contact me', icon: '💬' },
]

export default function index() {
  return (
    <List.Root variant="plain" w="100%">
      {NAV_ROUTES.map((navRoute) => {
        const { id, label, icon } = navRoute
        return <NavLink icon={icon} id={id} label={label} key={id} />
      })}
    </List.Root>
  )
}
