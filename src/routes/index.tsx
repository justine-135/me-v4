import { Route, Routes } from 'react-router'
import WrapperLayout from '@/layout/WrapperLayout'
import { AppRoutesElements } from './AppRoutesElements'
import { AnimatePresence } from 'motion/react'
import { useLocation } from 'react-router'
import Sidebar from '@/components/Sidebar'
import Header from '@/components/Header'

export const AppRoutes = () => {
  const location = useLocation()

  return (
    <>
      <Header />
      <Sidebar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          {AppRoutesElements.map((appRoute) => {
            return (
              <Route
                path={appRoute.to}
                element={<WrapperLayout>{appRoute.element}</WrapperLayout>}
                key={appRoute.to}
              />
            )
          })}
        </Routes>
      </AnimatePresence>
    </>
  )
}
