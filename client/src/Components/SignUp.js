import React, {useContext} from 'react'
import {useNavigate} from "react-router-dom"
import { userContext } from '../Context/UserContext';

function SignUp({username, setUsername, email, setEmail, password, setPassword, passwordConfirmation, setPasswordConfirmation, errors, setErrors}) {
    const navigate = useNavigate()
    const signup = useContext(userContext)

    function handleSubmit(event) {
      event.preventDefault();
      fetch("/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          password: password,
          password_confirmation: passwordConfirmation,
        }),
      })
        .then((res) => res.json())
        .then(user => {
          if (!user.errors) {
            signup(user)
          }
          else {
            setUsername("")
            setPassword("")
            setPasswordConfirmation("")
          }
        });
        navigate('/comedians')
    }

    function navigateToLoginPage() {
      navigate('/login')
    }
  
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <label>Username:</label>
          <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)}/>
          <br/>
          <label>Password:</label>
          <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
          <br/>
          <label>Confirm Password:</label>
          <input type="password" id="password_confirmation" value={passwordConfirmation} onChange={(e) => setPasswordConfirmation(e.target.value)}/>
          <br/>
          <button type="submit">Submit</button>
        </form>
        <h3>Already have an account?</h3>
        <button onClick={navigateToLoginPage}>Login Here</button>
      </div>
    );
}

export default SignUp