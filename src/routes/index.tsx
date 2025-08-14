import { Route, Routes } from 'react-router'
import WrapperLayout from '@/layout/WrapperLayout'
import { AppRoutesElements } from './AppRoutesElements'

export const AppRoutes = () => {
  return (
    <Routes>
      {AppRoutesElements.map((appRoute, idx) => {
        return (
          <Route
            path={appRoute.to}
            element={<WrapperLayout>{appRoute.element}</WrapperLayout>}
            key={idx}
          />
        )
      })}
    </Routes>
  )
}
