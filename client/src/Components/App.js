import React, {useEffect, useState} from 'react'
import {Routes, Route} from 'react-router-dom'
import { UserProvider } from '../Context/UserContext';
import SignUp from './SignUp';
import Login from './Login';
import ComediansContainer from './ComediansContainer'
import Comedian from './Comedian'
import ComedianReviews from './ComedianReviews';
import Home from './Home';
import NavBar from './NavBar';
import ReviewEditForm from './ReviewEditForm';

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
          <Route exact path="/" element={<Home reviews={reviews} setReviews={setReviews}/>}/>
          <Route exact path="/signup" element={<SignUp username={username} setUsername={setUsername} password={password} setPassword={setPassword} passwordConfirmation={passwordConfirmation} setPasswordConfirmation={setPasswordConfirmation} errors={errors} setErrors={setErrors}/>}/>
          <Route exact path="/login" element={<Login username={username} setUsername={setUsername} password={password} setPassword={setPassword} passwordConfirmation={passwordConfirmation} setPasswordConfirmation={setPasswordConfirmation} errors={errors} setErrors={setErrors}/>} />
          <Route exact path="/comedians" element={<ComediansContainer comedians={comedians} />}/>
          <Route path="/comedians/:id" element={<Comedian comedians={comedians} reviews={reviews} setReviews={setReviews}/>} />
          <Route path="reviews/:id/edit" element={<ReviewEditForm reviews={reviews} setReviews={setReviews}/>}/>
          <Route path="/comedians/:id/reviews" element={<ComedianReviews comedians={comedians} users={users}/>}/>
        </Routes>
      </UserProvider>
    </div>
  );
}

export default App;

//comedians list of all comedians as links with button to add comedian
//link takes you to comedian/1 for show page of bio etc with button to add a review
