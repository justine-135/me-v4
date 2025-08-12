import HomePage from '@/pages/HomePage'
import AboutPage from '@/pages/AboutPage'
import { Route, Routes } from 'react-router'
import PageLayout from '@/layout/PageLayout'

const APP_ROUTES = [
  {
    to: '/',
    element: <HomePage />,
  },
  {
    to: '/about',
    element: <AboutPage />,
  },
]

export const AppRoutes = () => {
  return (
    <Routes>
      {APP_ROUTES.map((appRoute, idx) => {
        return (
          <Route
            path={appRoute.to}
            element={<PageLayout>{appRoute.element}</PageLayout>}
            key={idx}
          />
        )
      })}
    </Routes>
  )
}
