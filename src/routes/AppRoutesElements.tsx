import AboutPage from '@/pages/AboutPage'
import ContactPage from '@/pages/ContactPage'
import EducationPage from '@/pages/EducationPage'
import HomePage from '@/pages/HomePage'
import WorksPage from '@/pages/WorksPage'
import WorkDetailPage from '@/pages/WorksPage/WorkDetailPage'

export const AppRoutesElements = [
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
    to: '/works',
    element: <WorksPage />,
  },
  {
    to: '/works/:id',
    element: <WorkDetailPage />,
  },
  {
    to: '/contact',
    element: <ContactPage />,
  },
]
