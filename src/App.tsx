import './App.css'
import NavBar from './components/NavBar/NavBar'
import { Outlet } from 'react-router-dom'

function App() {
  return(
    <>
    <header>
    <NavBar/>
    </header>
<main>
  <Outlet/>
</main>
    </>
  )
  
}

export default App
