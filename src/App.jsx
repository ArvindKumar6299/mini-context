import './App.css'
import Llogin from './components/Llogin'
import Profile from './components/Profile'
import UserContextProvider from './context/UserContextProvider'

function App() {
  

  return (
    <UserContextProvider>
      <Llogin/>
      <Profile/>
  </UserContextProvider>
  )
}

export default App
