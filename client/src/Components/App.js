import React, {useEffect, useState} from 'react'
import {Routes, Route} from 'react-router-dom'
import SignUp from './SignUp';
import Login from './Login';
import ComediansContainer from './ComediansContainer'
import ReviewForm from './ReviewForm';
import ComedianReviews from './ComedianReviews';

function App() {
  const {login, setlogin} = useState(false)
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
        <Route exact path="/" element={<SignUp username={username} setUsername={setUsername} email={email} setEmail={setEmail} password={password} setPassword={setPassword} passwordConfirmation={passwordConfirmation} setPasswordConfirmation={setPasswordConfirmation} login={login} setlogin={setlogin}/>}/>
        <Route exact path="/login" element={<Login username={username} setUsername={setUsername} password={password} setPassword={setPassword} passwordConfirmation={passwordConfirmation} setPasswordConfirmation={setPasswordConfirmation} login={login} setlogin={setlogin}/>} />
        <Route path="/comedians" element={<ComediansContainer comedians={comedians}/>}/>
        <Route path="/reviews/new" element={<ReviewForm comedians={comedians}/>}/>
        <Route path="/reviews" element={<ComedianReviews comedians={comedians}/>}/>
      </Routes>
    </div>
  );
}

export default App;
