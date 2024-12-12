import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'

import Homepage from './pages/Homepage.tsx'
import App from './App.tsx'
import MyProjects from './components/MyProjects.tsx'
import Contact from './components/Contact.tsx'

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
        element: <h1>About</h1>
      },
      {
        path: "/project",
        element: <MyProjects/>
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
