import './App.css'
import { NavApi } from './components/context/navApi'
import { Admin } from './pages/admin'
function App() {
 

  return (
    <>
     <NavApi>
      <Admin/>
    </NavApi>

    </>
  )
}

export default App
