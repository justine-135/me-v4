import { Button, CloseButton, Drawer, Portal } from '@chakra-ui/react'
import { BiMenuAltLeft } from 'react-icons/bi'
import SidebarContent from './SidebarContent'
import { useState } from 'react'
import { SidebarDrawerContext } from '@/context/SidebarDrawerContext'

export const SidebarDrawer = () => {
  const [open, setOpen] = useState(false)

  return (
    <Drawer.Root placement="start" open={open} onOpenChange={(e) => setOpen(e.open)}>
      <Drawer.Trigger px={0} asChild>
        <Button variant="plain" px={0}>
          <BiMenuAltLeft />
        </Button>
      </Drawer.Trigger>
      <Portal>
        <Drawer.Backdrop />
        <Drawer.Positioner>
          <Drawer.Content>
            <Drawer.Body py={6}>
              <SidebarDrawerContext.Provider value={{ open, setOpen }}>
                <SidebarContent />
              </SidebarDrawerContext.Provider>
            </Drawer.Body>
            <Drawer.CloseTrigger asChild>
              <CloseButton size="sm" />
            </Drawer.CloseTrigger>
          </Drawer.Content>
        </Drawer.Positioner>
      </Portal>
    </Drawer.Root>
  )
}
