import './App.css'
import NavBar from './components/NavBar'
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
