import Home from '@/pages/Home'
import About from '@/pages/About'
import { Route, Routes } from 'react-router'
import PageLayout from '@/layout/PageLayout'

const APP_ROUTES = [
  {
    to: '/',
    element: <Home />,
  },
  {
    to: '/about',
    element: <About />,
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
