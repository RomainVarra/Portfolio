import './App.css'
import NavBar from './components/NavBar/NavBar'
import { Outlet } from 'react-router-dom'
import LangProvider from './contexts/LangContext'
import Footer from './components/Footer/Footer'

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
<footer>
  <Footer/>
</footer>
    </LangProvider>
    </>
  )
  
}

export default App
