import AboutPage from '@/pages/AboutPage'
import ContactPage from '@/pages/ContactPage'
import EducationPage from '@/pages/EducationPage'
import HomePage from '@/pages/HomePage'
import WorksPage from '@/pages/WorksPage'
import FeaturedProjectsPage from '@/pages/WorksPage/WorkDetailPage/FeaturedProjectsPage'
import SideProjectsPage from '@/pages/WorksPage/WorkDetailPage/SideProjectsPage'

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
    to: '/works/featured/:id',
    element: <FeaturedProjectsPage />,
  },
  {
    to: '/works/side/:id',
    element: <SideProjectsPage />,
  },
  {
    to: '/contact',
    element: <ContactPage />,
  },
]
