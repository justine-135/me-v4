import { Typography } from '@/components/Typography'
import { Stack } from '@chakra-ui/react/stack'
import type React from 'react'
import GridBoxLayout from './GridBoxLayout'

interface IPageLayoutProps {
  title: string
  children: React.ReactNode
}

export default function PageLayout({ title, children }: IPageLayoutProps) {
  return (
    <Stack gap={4}>
      <Typography variant="heading">{title}</Typography>
      <GridBoxLayout>{children}</GridBoxLayout>
    </Stack>
  )
}
