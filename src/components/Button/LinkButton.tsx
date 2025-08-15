import { Button, type ButtonProps } from '@chakra-ui/react/button'
import { Link, type LinkProps } from 'react-router'

interface ILinkButton extends LinkProps {
  children: React.ReactNode
  buttonProps?: ButtonProps
}

export default function LinkButton({ children, buttonProps, ...rest }: ILinkButton) {
  return (
    <Link {...rest}>
      <Button size="sm" {...buttonProps}>
        {children}
      </Button>
    </Link>
  )
}
