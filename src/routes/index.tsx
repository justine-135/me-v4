import HomePage from '@/pages/HomePage'
import AboutPage from '@/pages/AboutPage'
import { Route, Routes } from 'react-router'
import WrapperLayout from '@/layout/WrapperLayout'
import EducationPage from '@/pages/EducationPage'
import ContactPage from '@/pages/ContactPage'

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
  {
    to: '/contact',
    element: <ContactPage />,
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
