import React from 'react'

export interface ISidebarContextValues {
  open?: boolean
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>
}

export const SidebarDrawerContext = React.createContext<ISidebarContextValues>({ open: false })
