import React, {useEffect, useState} from 'react'
import {Routes, Route} from 'react-router-dom'
import { UserProvider } from '../Context/UserContext';
import SignUp from './SignUp';
import Login from './Login';
import ComediansContainer from './ComediansContainer'
import ReviewForm from './ReviewForm';
import ComedianReviews from './ComedianReviews';
import Home from './Home';
import NavBar from './NavBar';

function App() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [passwordConfirmation, setPasswordConfirmation] = useState("")
  const [errors, setErrors] = useState([])
  const [comedians, setComedians] = useState([])
  const [users, setUsers] = useState([])
  const [reviews, setReviews] = useState([])

  useEffect(() => {
    fetch('/comedians')
    .then(res => res.json())
    .then(data => setComedians(data)) 
    fetch('/users')
    .then(res => res.json())
    .then(data => setUsers(data))
    fetch('/reviews')
    .then(res => res.json())
    .then(data => setReviews(data))
  },[])

  return (
    <div className="App">
      <UserProvider>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home users={users} reviews={reviews}/>}/>
          <Route exact path="/signup" element={<SignUp username={username} setUsername={setUsername} password={password} setPassword={setPassword} passwordConfirmation={passwordConfirmation} setPasswordConfirmation={setPasswordConfirmation} errors={errors} setErrors={setErrors}/>}/>
          <Route exact path="/login" element={<Login username={username} setUsername={setUsername} password={password} setPassword={setPassword} passwordConfirmation={passwordConfirmation} setPasswordConfirmation={setPasswordConfirmation} errors={errors} setErrors={setErrors}/>} />
          <Route exact path="/comedians" element={<ComediansContainer comedians={comedians} />}/>
          <Route exact path="/reviews/new" element={<ReviewForm comedians={comedians} users={users}/>}/>
          <Route path="/comedians/:id/reviews" element={<ComedianReviews comedians={comedians} users={users}/>}/>
        </Routes>
      </UserProvider>
    </div>
  );
}

export default App;
