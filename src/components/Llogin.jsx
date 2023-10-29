import React , {useState , useContext} from 'react'
import UserContext from '../context/UserContext'

function Llogin() {

    const [username, Setusername] = useState('')
    const [password, SetPassword] = useState('')

    const {SetUser} = useContext(UserContext)

    const handleSubmit = (e) => {
       e.preventDefault()
       SetUser({username, password})
    }
  return (
    <div>
        <h2>Login</h2>
        <input type='text'
        value={username}
        onChange={(e)=>Setusername(e.target.value)}  //e=event
        placeholder='username' />
        {"  "}
        
        <input type='text'
        value={password}
        onChange={(e)=>SetPassword(e.target.value)}  //e=event
        placeholder='password' />
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Llogin