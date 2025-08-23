import { SidebarDrawerContext, type ISidebarContextValues } from '@/context/SidebarDrawerContext'
import { useContext } from 'react'

export const useSidebarDrawerContext = (): ISidebarContextValues => {
  const context = useContext(SidebarDrawerContext)
  if (context === undefined) {
    throw new Error('useSidebarDrawerContext must be used within a UserProvider')
  }
  return context
}
