import HomePage from '@/pages/HomePage'
import AboutPage from '@/pages/AboutPage'
import { Route, Routes } from 'react-router'
import WrapperLayout from '@/layout/WrapperLayout'
import EducationPage from '@/pages/EducationPage'

const APP_ROUTES = [
  {
    to: '/',
    element: <HomePage />,
  },
  {
    to: '/about',
    element: <AboutPage />,
  },
  {
    to: '/education',
    element: <EducationPage />,
  },
]

export const AppRoutes = () => {
  return (
    <Routes>
      {APP_ROUTES.map((appRoute, idx) => {
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
