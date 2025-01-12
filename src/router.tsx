import { createBrowserRouter } from 'react-router-dom'

import Homepage from './pages/Homepage.tsx'
import App from './App.tsx'
import MyProjects from './components/MyProjects/MyProjects.tsx'
import Contact from './components/Contact.tsx'
import About from './components/About/About.tsx'
import MyProjectsID from './components/MyProjects/MyProjectsId.tsx'
import ErrorPage from './pages/ErrorPage.tsx'

const router = createBrowserRouter([
  {
    element: <App/>,
    children:[
      {
        path: "/",
        element: <Homepage/>
      },
      {
        path: "/about",
        element: <About/>
      },
      {
        path: "/project",
        element: <MyProjects/>
      },
      {
        path: "/projects/:id",
        element: <MyProjectsID/>
      },
      {
        path: "/contact",
        element: <Contact/>
      },
      {
        path: "*",
        element: <ErrorPage/>
      }
    ],
  }
])

export default router;