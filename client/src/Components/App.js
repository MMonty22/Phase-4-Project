import React, {useEffect, useState} from 'react'
import {Routes, Route} from 'react-router-dom'
import SignUp from './SignUp';
import Login from './Login';
import Comedians from './Comedians'

function App() {
  const {login, setlogin} = useState("")
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [passwordConfirmation, setPasswordConfirmation] = useState("")
  const [comedians, setComedians] = useState([])

  useEffect(() => {
    fetch('/comedians')
    .then(res => res.json())
    .then(data => setComedians(data))
  }, [])

  return (
    <div className="App">
      <Routes>
        {/* <Route exact path="/" element={}/> */}
        <Route exact path="/signup" element={<SignUp username={username} setUsername={setUsername} email={email} setEmail={setEmail} password={password} setPassword={setPassword} passwordConfirmation={passwordConfirmation} setPasswordConfirmation={setPasswordConfirmation} login={login}/>}/>
        <Route exact path="/login/" element={<Login username={username} setUsername={setUsername} password={password} setPassword={setPassword} passwordConfirmation={passwordConfirmation} setPasswordConfirmation={setPasswordConfirmation} login={login}/>} />
        <Route exact path="/comedians" element={<Comedians comedians={comedians}/>}/>
      </Routes>
    </div>
  );
}

export default App;