import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'

import Homepage from './pages/Homepage.tsx'
import App from './App.tsx'
import MyProjects from './components/MyProjects/MyProjects.tsx'
import Contact from './components/Contact.tsx'
import About from './components/About/About.tsx'
import MyProjectsID from './components/MyProjects/MyProjectsId.tsx'

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
        element: <h1>Error 404</h1>
      }
    ],
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router = {router}/>
  </StrictMode>,
)
