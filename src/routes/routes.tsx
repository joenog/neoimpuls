import { createBrowserRouter } from 'react-router-dom'
import Layout from '../components/layout'
import Home from '../pages/home'
import DesignWeb from '../pages/design'
import Domains from '../pages/design/domains'
import Portfolio from '../pages/design/portfolio'
import Blog from '../pages/blog'
import Contact from '../pages/contact/Index'

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      //designWeb
      {
        path: 'designweb',
        element: <DesignWeb />,
      },
      {
        path: '//domains',
        element: <Domains />,
      },
      {
        path: '//portfolio',
        element: <Portfolio />,
      },
      {
        path: '/blog',
        element: <Blog />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
    ],
  },
])

export default router
