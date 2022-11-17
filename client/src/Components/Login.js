import React, {useContext} from 'react'
import {useNavigate} from "react-router-dom"
import { userContext } from '../Context/UserContext';

function Login({username, setUsername, email, setEmail, password, setPassword, passwordConfirmation, setPasswordConfirmation, errors, setErrors}) {
    const navigate = useNavigate()
    const signUp = useContext(userContext)

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
              signUp(user)
            }
            else {
              setUsername("")
              setPassword("")
              setPasswordConfirmation("")
            }
          });
      }

    return (
        <div>
        <form onSubmit={handleSubmit}>
          <label>Username:</label>
          <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)}/>
          <label>Password:</label>
          <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
          <label>Confirm Password:</label>
          <input type="password" id="password_confirmation" value={passwordConfirmation} onChange={(e) => setPasswordConfirmation(e.target.value)}/>
          <button type="submit">Submit</button>
        </form>
        </div>
    )
}

export default Login