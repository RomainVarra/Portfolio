import './App.css'
import NavBar from './components/NavBar/NavBar'
import { Outlet } from 'react-router-dom'
import LangProvider from './contexts/LangContext'

function App() {
  return(
    <>
    <LangProvider>
    <header>
    <NavBar/>
    </header>
<main>
  <Outlet/>
</main>
    </LangProvider>
    </>
  )
  
}

export default App
