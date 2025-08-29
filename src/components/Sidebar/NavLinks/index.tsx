import { List } from '@chakra-ui/react/list'
import NavLink from './NavLink'
import { motion } from 'motion/react'

const NAV_ROUTES = [
  { id: '', label: 'Home', icon: '🏠' },
  { id: 'about', label: 'About me', icon: '👋' },
  { id: 'works', label: 'My works', icon: '💼' },
  { id: 'education', label: 'Education', icon: '🎓' },
  { id: 'contact', label: 'Contact me', icon: '💬' },
]

const MotionListRoot = motion.create(List.Root)

export default function index() {
  return (
    <MotionListRoot variant="plain" w="100%" as="nav">
      {NAV_ROUTES.map((navRoute, idx) => {
        const { id, label, icon } = navRoute
        return <NavLink icon={icon} id={id} label={label} key={id} index={idx} />
      })}
    </MotionListRoot>
  )
}
