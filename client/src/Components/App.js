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
import AddComedianForm from './AddComedianForm';

function App() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [passwordConfirmation, setPasswordConfirmation] = useState("")
  const [errors, setErrors] = useState([])
  const [comedians, setComedians] = useState([])
  const [users, setUsers] = useState([])
  const [reviews, setReviews] = useState([])

  return (
    <div className="App">
      <UserProvider>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home reviews={reviews} setReviews={setReviews}/>}/>
          <Route exact path="/signup" element={<SignUp username={username} setUsername={setUsername} password={password} setPassword={setPassword} passwordConfirmation={passwordConfirmation} setPasswordConfirmation={setPasswordConfirmation} errors={errors} setErrors={setErrors}/>}/>
          <Route exact path="/login" element={<Login username={username} setUsername={setUsername} password={password} setPassword={setPassword} passwordConfirmation={passwordConfirmation} setPasswordConfirmation={setPasswordConfirmation} errors={errors} setErrors={setErrors}/>} />
          <Route exact path="/comedians" element={<ComediansContainer comedians={comedians} />}/>
          <Route path="/comedians/:id" element={<Comedian setComedians={setComedians} comedians={comedians} reviews={reviews} setReviews={setReviews}/>} />
          <Route path="reviews/:id/edit" element={<ReviewEditForm users={users} setUsers={setUsers} reviews={reviews} setReviews={setReviews}/>}/>
          <Route path="/comedians/:id/reviews" element={<ComedianReviews reviews={reviews} comedians={comedians} />}/>
          <Route exact path="/comedians/new" element={<AddComedianForm setComedians={setComedians} comedians={comedians}/>} />
        </Routes>
      </UserProvider>
    </div>
  );
}

export default App;
