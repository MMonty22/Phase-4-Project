import React, {useEffect, useState} from 'react'
import {Routes, Route} from 'react-router-dom'
import SignUp from './SignUp';
import Login from './Login';
import ComediansContainer from './ComediansContainer'
import ReviewForm from './ReviewForm';
import ComedianReviews from './ComedianReviews';
import Home from './Home';

function App() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [passwordConfirmation, setPasswordConfirmation] = useState("")
  const [errors, setErrors] = useState([])
  const [comedians, setComedians] = useState([])

  useEffect(() => {
    fetch('/comedians')
    .then(res => res.json())
    .then(data => setComedians(data))
  }, [])

  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route exact path="/signup" element={<SignUp username={username} setUsername={setUsername} password={password} setPassword={setPassword} passwordConfirmation={passwordConfirmation} setPasswordConfirmation={setPasswordConfirmation} errors={errors} setErrors={setErrors}/>}/>
        <Route exact path="/login" element={<Login username={username} setUsername={setUsername} password={password} setPassword={setPassword} passwordConfirmation={passwordConfirmation} setPasswordConfirmation={setPasswordConfirmation} errors={errors} setErrors={setErrors}/>} />
        <Route exact path="/comedians" element={<ComediansContainer comedians={comedians}/>}/>
        <Route exact path="/reviews/new" element={<ReviewForm comedians={comedians}/>}/>
        <Route exact path="/reviews" element={<ComedianReviews comedians={comedians}/>}/>
      </Routes>
    </div>
  );
}

export default App;
