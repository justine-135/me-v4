import Home from '@/pages/Home'
import About from '@/pages/About'
import { Route, Routes } from 'react-router'

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
        return <Route path={appRoute.to} element={appRoute.element} key={idx} />
      })}
    </Routes>
  )
}
