import { useLocation } from 'react-router'
import LinkButton from './LinkButton'

interface IReadMoreButtonProps {
  path: string
  children: React.ReactNode
}

export const ReadMoreButton = ({ path, children }: IReadMoreButtonProps) => {
  const location = useLocation()

  return <LinkButton to={`${location.pathname}${path}`}>{children}</LinkButton>
}
